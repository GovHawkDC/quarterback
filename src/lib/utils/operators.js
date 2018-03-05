// @flow
import type { Field } from './Field'
import type { Operator } from './Operator'
import { OPERATORS } from './constants'

function getAllOperatorsByField (field: Field): Array<Operator> {
  return OPERATORS.filter(operator => {
    return operator.meta.fieldTypes.includes(field.type)
  })
}

function getDefaultOperatorsByField (field: Field): Array<Operator> {
  const { operators = getAllOperatorsByField(field) } = field
  return operators
}

function getDefaultOperatorByField (field: Field): ?Operator {
  return getDefaultOperatorsByField(field)[0]
}

function getOperatorById (id: string): ?Operator {
  return OPERATORS.find(operator => operator.id === id)
}

export {
  getAllOperatorsByField,
  getDefaultOperatorsByField,
  getDefaultOperatorByField,
  getOperatorById
}
