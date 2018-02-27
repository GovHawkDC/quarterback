export const OPERATORS = {
  equal: {
    numberOfInputs: 1,
    multipleValuesAllowed: false,
    applyTo: ['string', 'number', 'datetime', 'boolean']
  },
  not_equal: {
    numberOfInputs: 1,
    multipleValuesAllowed: false,
    applyTo: ['string', 'number', 'datetime', 'boolean']
  },
  in: {
    numberOfInputs: 1,
    multipleValuesAllowed: true,
    applyTo: ['string', 'number', 'datetime']
  },
  not_in: {
    numberOfInputs: 1,
    multipleValuesAllowed: true,
    applyTo: ['string', 'number', 'datetime']
  },
  less: {
    numberOfInputs: 1,
    multipleValuesAllowed: false,
    applyTo: ['number', 'datetime']
  },
  less_or_equal: {
    numberOfInputs: 1,
    multipleValuesAllowed: false,
    applyTo: ['number', 'datetime']
  },
  greater: {
    numberOfInputs: 1,
    multipleValuesAllowed: false,
    applyTo: ['number', 'datetime']
  },
  greater_or_equal: {
    numberOfInputs: 1,
    multipleValuesAllowed: false,
    applyTo: ['number', 'datetime']
  },
  between: {
    numberOfInputs: 2,
    multipleValuesAllowed: false,
    applyTo: ['number', 'datetime']
  },
  not_between: {
    numberOfInputs: 2,
    multipleValuesAllowed: false,
    applyTo: ['number', 'datetime']
  },
  begins_with: {
    numberOfInputs: 1,
    multipleValuesAllowed: false,
    applyTo: ['string']
  },
  not_begins_with: {
    numberOfInputs: 1,
    multipleValuesAllowed: false,
    applyTo: ['string']
  },
  contains: {
    numberOfInputs: 1,
    multipleValuesAllowed: false,
    applyTo: ['string']
  },
  not_contains: {
    numberOfInputs: 1,
    multipleValuesAllowed: false,
    applyTo: ['string']
  },
  ends_with: {
    numberOfInputs: 1,
    multipleValuesAllowed: false,
    applyTo: ['string']
  },
  not_ends_with: {
    numberOfInputs: 1,
    multipleValuesAllowed: false,
    applyTo: ['string']
  },
  is_empty: {
    numberOfInputs: 0,
    multipleValuesAllowed: false,
    applyTo: ['string']
  },
  is_not_empty: {
    numberOfInputs: 0,
    multipleValuesAllowed: false,
    applyTo: ['string']
  },
  is_null: {
    numberOfInputs: 0,
    multipleValuesAllowed: false,
    applyTo: ['string', 'number', 'datetime', 'boolean']
  },
  is_not_null: {
    numberOfInputs: 0,
    multipleValuesAllowed: false,
    applyTo: ['string', 'number', 'datetime', 'boolean']
  }
}

export function normalizeType (type) {
  switch (type) {
    case 'integer':
    case 'double':
      return 'number'
    case 'date':
    case 'time':
      return 'datetime'
    default:
      return type
  }
}

export function getDefaultOperators (type) {
  return Object.keys(OPERATORS).filter(operator => {
    const { applyTo } = OPERATORS[operator]
    return applyTo.includes(normalizeType(type))
  })
}

export function getOperatorMeta (operator) {
  const meta = OPERATORS[operator]

  return meta || null
}
