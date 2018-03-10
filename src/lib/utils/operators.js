// @flow
import type { Field } from './Field'
import type { Operator } from './Operator'
import { OPERATORS } from './constants'

/**
 * Takes a field and return applicable operators based on the type
 * of the field
 */
function getAllOperatorsByField (field: Field): Array<Operator> {
  return OPERATORS.filter(operator => {
    return operator.meta.fieldTypes.includes(field.type)
  })
}

/**
 * Takes a field and returns all available operators applicable to the
 * field, or a user specified subset
 */
function getDefaultOperatorsByField (field: Field): Array<Operator> {
  if (field.operators != null) {
    return field.operators.map(getOperatorById).filter(Boolean)
  }
  return getAllOperatorsByField(field)
}

/**
 * Takes a field and returns the user specified default operator or
 * first operator of list of all applicable operators
 */
function getDefaultOperatorByField (field: ?Field): ?Operator {
  if (!field) {
    return null
  }

  if (field.defaultOperator != null) {
    return getOperatorById(field.defaultOperator)
  }
  return getDefaultOperatorsByField(field)[0]
}

/**
 * Takes an operator id and finds and operator
 */
function getOperatorById (id: string): ?Operator {
  return OPERATORS.find(operator => operator.id === id)
}

export {
  getAllOperatorsByField,
  getDefaultOperatorsByField,
  getDefaultOperatorByField,
  getOperatorById
}
