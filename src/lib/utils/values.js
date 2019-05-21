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
import { getOperatorById } from './operators'

function getDefaultValueByField (
  field: Field
): EmptyValue | SingleValue | MultiValue {
  // allow user to provide value (it could be invalid, however)
  if (field.defaultValue !== undefined) {
    return field.defaultValue
  }

  const fieldValuesIsArray = Array.isArray(field.values)
  const fieldValuesLength = fieldValuesIsArray ? field.values.length : -1

  // for checkboxes with values array length > 1, we want to return an array
  // since multiple values are allowed
  if (field.input === FIELD_INPUT_CHECKBOX && fieldValuesLength > 1) {
    return []
  }

  if (field.input === FIELD_INPUT_SELECT) {
    // Similar to checkboxes; allow for multiple values
    if (field.multiple === true) {
      return []
    }
    // Default to the first defined value option in select values
    if (fieldValuesLength > 0) {
      return field.values[0]
    }
  }

  return null
}

function getDefaultValue (field: ?Field, operator: ?Operator): Value {
  if (!field || !operator) {
    return null
  }

  const defaultValue = getDefaultValueByField(field)

  if (operator.meta.numberOfInputs < 2) {
    return defaultValue
  }

  return Array.from(
    { length: operator.meta.numberOfInputs },
    () => defaultValue
  )
}

function getValue (field: ?Field, operator: ?Operator, operators, rule: Rule): Value {
  if (!field || !operator) {
    return null
  }

  const prevOperator = getOperatorById(rule.operator, operators)

  if (
    prevOperator &&
    prevOperator.meta.numberOfInputs !== operator.meta.numberOfInputs
  ) {
    return getDefaultValue(field, operator)
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
  if (!field || !operator || operator.meta.numberOfInputs < 1) {
    return null
  }

  if (operator.meta.numberOfInputs < 2) {
    return [rule.value]
  }

  return rule.value
}

function prepSelectValues (values) {
  return values.map(({fields, id, label}) => {
    if (fields) {
      return {
        fields: prepSelectValues(fields),
        label
      }
    }

    return {
      label,
      value: id
    }
  })
}

export {
  getDefaultValue,
  getValue,
  getInputValues,
  prepSelectValues
}
