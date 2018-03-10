// @flow
import type { Field } from './Field'
import type { Operator } from './Operator'
import type { Rule } from './Rule'
import type { SingleValue, MultiValue, NestedMultiValue, Value } from './Value'
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

export {
  getDefaultValue,
  getValue
}
