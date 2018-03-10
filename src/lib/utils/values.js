// @flow
import type { Field } from './Field'
import type { Operator } from './Operator'
import type { Rule } from './Rule'
import type {
  EmptyValue,
  SingleValue,
  MultiValue,
  NestedMultiValue,
  Value
} from './Value'
import { FIELD_INPUT_CHECKBOX, FIELD_INPUT_SELECT } from './constants'

function getDefaultValueByField (field: Field): SingleValue | MultiValue {
  const {
    defaultValue,
    input,
    values
  } = field

  if (defaultValue != null) {
    return defaultValue
  }

  switch (input) {
    case FIELD_INPUT_CHECKBOX:
      return values != null && values.length > 1 ? [] : ''
    case FIELD_INPUT_SELECT:
      const [firstFieldValue] = values || []
      return firstFieldValue ? firstFieldValue.value : ''
    default:
      return ''
  }
}

function getDefaultValue (field: ?Field, operator: ?Operator): Value {
  if (!field || !operator) {
    return null
  }

  const { meta: { numberOfInputs } } = operator
  const defaultValue = getDefaultValueByField(field)

  switch (numberOfInputs) {
    case 1:
      return defaultValue
    case 2:
      if (typeof defaultValue === 'string') {
        const singleValues: MultiValue = [defaultValue, defaultValue]
        return singleValues
      }
      const multiValues: NestedMultiValue = [defaultValue, defaultValue]
      return multiValues
    default:
      return null
  }
}

function getValue (field: ?Field, operator: ?Operator, rule: Rule): Value {
  if (!field || !operator) {
    return null
  }

  const defaultValue = getDefaultValue(field, operator)

  // Some operators do not require user input (e.g., 'is_empty'), so we
  // want to force the value to be `null` (so no ui is rendered)
  if (defaultValue === null) {
    return null
  }

  // (a) If the existing rule value is null (e.g., the operator _was_
  // 'is_empty') then always change to the default value
  // (b) If the operator change results in a type change (e.g., string to
  // array in the case of 'equal' -> 'between') use the default value
  if (rule.value === null || typeof defaultValue !== typeof rule.value) {
    return defaultValue
  }

  return rule.value
}

/**
 * Helper func that abstracts away the difference between initial value(s)
 * for single and multi-input (e.g., 'between' operator will result in
 * two inputs). For example, a single value for a text field will still
 * return an array of length=1 (e.g., `[ '' ]`), while a 'between' operator
 * field for a 'number' would return an array with length=2 (e.g.,
 * `[ '1', '2' ]`)
 */
function getInputValues (
  field: ?Field,
  operator: ?Operator,
  rule: Rule
): EmptyValue | MultiValue | NestedMultiValue {
  if (!field || !operator || rule.value === null) {
    return null
  }

  const { meta: { numberOfInputs } } = operator

  // A single checkbox is already an array by default, so we nest
  // it within another array as if it were a string (the typical default
  // for an input)
  // e.g., `[ [ 'book' ] ]`
  if (typeof rule.value === 'string') {
    const singleValues: MultiValue = [rule.value]
    return singleValues
  }

  if (
    field.input === 'checkbox' &&
    numberOfInputs === 1 &&
    Array.isArray(rule.value)
  ) {
    const valueArray: MultiValue = rule.value
    const singleNestedMultiValue: NestedMultiValue = [valueArray]
    return singleNestedMultiValue
  }

  const nestedMultiValue: MultiValue | NestedMultiValue = rule.value
  return nestedMultiValue
}

export {
  getDefaultValue,
  getValue,
  getInputValues
}
