import { OPERATORS } from './constants'
import { normalizeType } from './fields'

export function getDefaultOperators (field) {
  return OPERATORS.filter(data => {
    const { meta: { applyTo } } = data
    const type = normalizeType(field)

    return applyTo.includes(type)
  }).map(data => {
    const { operator } = data

    return operator
  })
}

export function getDefaultOperator (field) {
  const operators = getDefaultOperators(field)
  return operators.length > 0 ? operators[0] : ''
}

export function getOperatorMeta (operator) {
  const data = OPERATORS.find(data => {
    return data.operator === operator
  })

  if (data === undefined) {
    return {
      numberOfInputs: -1,
      multipleValuesAllowed: false,
      applyTo: []
    }
  }

  const { meta } = data

  return meta
}

export function getOperators (field) {
  const { operators = getDefaultOperators(field) } = field

  return operators
}
