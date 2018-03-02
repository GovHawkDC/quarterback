// @flow
import type { Operator } from './Operator'
import { OPERATORS } from './constants'

function getAllOperatorsByFieldType (fieldType: string): Array<Operator> {
  return OPERATORS.filter(operator => {
    return operator.meta.fieldTypes.includes(fieldType)
  })
}

function getDefaultOperatorByFieldType (fieldType: string): ?Operator {
  return getAllOperatorsByFieldType(fieldType)[0]
}

function getOperatorById (id: string): ?Operator {
  return OPERATORS.find(operator => operator.id === id)
}

export {
  getAllOperatorsByFieldType,
  getDefaultOperatorByFieldType,
  getOperatorById
}
