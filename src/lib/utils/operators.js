// @flow
import type { Field } from './Field'
import type { Operator } from './Operator'
import type { OperatorsConfig } from './OperatorsConfig'
import { OPERATORS } from './constants'

function filterOperatorsByExclude (
  operators: Array<Operator>,
  exclude?: Array<string>
): Array<Operator> {
  if (!exclude || exclude.length < 1) {
    return operators
  }

  return operators.filter(({ id }) => !exclude.includes(id))
}

function filterOperatorsByInclude (
  operators: Array<Operator>,
  include?: Array<string>
): Array<Operator> {
  if (!include) {
    return operators
  }

  if (include.length < 1) {
    return []
  }

  return operators.filter(({ id }) => include.includes(id))
}

function getAllOperators (operatorsConfig: OperatorsConfig): Array<Operator> {
  const {
    add = [],
    exclude,
    include
  } = operatorsConfig

  const filteredOperators =
    filterOperatorsByExclude(
      filterOperatorsByInclude(OPERATORS, include),
      exclude
    )

  return [...filteredOperators, ...add]
}

/**
 * Takes a field and return applicable operators based on the type
 * of the field
 */
function getAllOperatorsByField (
  field: Field,
  operators: Array<Operator>
): Array<Operator> {
  return operators.filter(({ meta: { fieldTypes } }) => {
    return fieldTypes.includes(field.type)
  })
}

/**
 * Takes a field and returns all available operators applicable to the
 * field, or a user specified subset
 */
function getDefaultOperatorsByField (
  field: Field,
  operators: Array<Operator>
): Array<Operator> {
  if (field.operators != null) {
    return field.operators
      .map(id => getOperatorById(id, operators))
      .filter(Boolean)
  }
  return getAllOperatorsByField(field, operators)
}

/**
 * Takes a field and returns the user specified default operator or
 * first operator of list of all applicable operators
 */
function getDefaultOperatorByField (
  field: ?Field,
  operators: Array<Operator>
): ?Operator {
  if (!field) {
    return null
  }

  if (field.defaultOperator) {
    return getOperatorById(field.defaultOperator, operators)
  }

  return getDefaultOperatorsByField(field, operators)[0]
}

/**
 * Takes an operator id and finds and operator
 */
function getOperatorById (
  id: string,
  operators: Array<Operator>
): ?Operator {
  return operators.find(operator => operator.id === id)
}

export {
  getAllOperators,
  getAllOperatorsByField,
  getDefaultOperatorsByField,
  getDefaultOperatorByField,
  getOperatorById
}
