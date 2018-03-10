// @flow
import type { Field } from './Field'
import type { Operator } from './Operator'
import type { SingleValue, MultiValue, NestedMultiValue, Value } from './Value'

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
    case 'checkbox':
      return values != null && values.length > 1 ? [] : ''
    case 'select':
      const [firstFieldValue] = values || []
      return firstFieldValue ? firstFieldValue.value : ''
    default:
      return ''
  }
}

function getDefaultValue (field: Field, operator: Operator): Value {
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

export {
  getDefaultValue
}
