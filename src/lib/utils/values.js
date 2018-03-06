// @flow
import type { Field } from './Field'
import type { Operator } from './Operator'
import type { Value } from './Value'

function getDefaultValueByField (field: Field): string {
  if (field.defaultValue != null) {
    return field.defaultValue
  }

  switch (field.input) {
    case 'select':
      const [value] = field.values || []
      return value ? value.value : ''
    default:
      return ''
  }
}

function getDefaultValue (field: Field, operator: Operator): Value {
  switch (operator.meta.numberOfInputs) {
    case 1:
      return getDefaultValueByField(field)
    case 2:
      return [getDefaultValueByField(field), getDefaultValueByField(field)]
    default:
      return null
  }
}

export {
  getDefaultValue
}
