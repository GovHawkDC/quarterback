// @flow
import type { Field } from './Field'
import type { Operator } from './Operator'
import { OPERATORS } from './constants'

function getAllOperatorsByField (field: Field): Array<Operator> {
  return OPERATORS.filter(operator => {
    return operator.meta.fieldTypes.includes(field.type)
  })
}

function getDefaultOperatorsByField (field: Field): Array<?Operator> {
  // TODO: override operators
  // const { operators } = field
  //
  // if (operators !== null || operators !== undefined) {
  //   return operators.map(getOperatorById).filter(operator => operator != null)
  // }

  return getAllOperatorsByField(field)
}

function getDefaultOperatorByField (field: Field): ?Operator {
  if (field.defaultOperator != null) {
    return field.defaultOperator
  }

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
