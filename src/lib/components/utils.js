export const OPERATORS = [
  {
    operator: 'equal',
    meta: {
      numberOfInputs: 1,
      multipleValuesAllowed: false,
      applyTo: ['string', 'number', 'datetime', 'boolean']
    }
  },
  {
    operator: 'not_equal',
    meta: {
      numberOfInputs: 1,
      multipleValuesAllowed: false,
      applyTo: ['string', 'number', 'datetime', 'boolean']
    }
  },
  {
    operator: 'in',
    meta: {
      numberOfInputs: 1,
      multipleValuesAllowed: true,
      applyTo: ['string', 'number', 'datetime']
    }
  },
  {
    operator: 'not_in',
    meta: {
      numberOfInputs: 1,
      multipleValuesAllowed: true,
      applyTo: ['string', 'number', 'datetime']
    }
  },
  {
    operator: 'less',
    meta: {
      numberOfInputs: 1,
      multipleValuesAllowed: false,
      applyTo: ['number', 'datetime']
    }
  },
  {
    operator: 'less_or_equal',
    meta: {
      numberOfInputs: 1,
      multipleValuesAllowed: false,
      applyTo: ['number', 'datetime']
    }
  },
  {
    operator: 'greater',
    meta: {
      numberOfInputs: 1,
      multipleValuesAllowed: false,
      applyTo: ['number', 'datetime']
    }
  },
  {
    operator: 'greater_or_equal',
    meta: {
      numberOfInputs: 1,
      multipleValuesAllowed: false,
      applyTo: ['number', 'datetime']
    }
  },
  {
    operator: 'between',
    meta: {
      numberOfInputs: 2,
      multipleValuesAllowed: false,
      applyTo: ['number', 'datetime']
    }
  },
  {
    operator: 'not_between',
    meta: {
      numberOfInputs: 2,
      multipleValuesAllowed: false,
      applyTo: ['number', 'datetime']
    }
  },
  {
    operator: 'begins_with',
    meta: {
      numberOfInputs: 1,
      multipleValuesAllowed: false,
      applyTo: ['string']
    }
  },
  {
    operator: 'not_begins_with',
    meta: {
      numberOfInputs: 1,
      multipleValuesAllowed: false,
      applyTo: ['string']
    }
  },
  {
    operator: 'contains',
    meta: {
      numberOfInputs: 1,
      multipleValuesAllowed: false,
      applyTo: ['string']
    }
  },
  {
    operator: 'not_contains',
    meta: {
      numberOfInputs: 1,
      multipleValuesAllowed: false,
      applyTo: ['string']
    }
  },
  {
    operator: 'ends_with',
    meta: {
      numberOfInputs: 1,
      multipleValuesAllowed: false,
      applyTo: ['string']
    }
  },
  {
    operator: 'not_ends_with',
    meta: {
      numberOfInputs: 1,
      multipleValuesAllowed: false,
      applyTo: ['string']
    }
  },
  {
    operator: 'is_empty',
    meta: {
      numberOfInputs: 0,
      multipleValuesAllowed: false,
      applyTo: ['string']
    }
  },
  {
    operator: 'is_not_empty',
    meta: {
      numberOfInputs: 0,
      multipleValuesAllowed: false,
      applyTo: ['string']
    }
  },
  {
    operator: 'is_null',
    meta: {
      numberOfInputs: 0,
      multipleValuesAllowed: false,
      applyTo: ['string', 'number', 'datetime', 'boolean']
    }
  },
  {
    operator: 'is_not_null',
    meta: {
      numberOfInputs: 0,
      multipleValuesAllowed: false,
      applyTo: ['string', 'number', 'datetime', 'boolean']
    }
  }
]

export function normalizeType (field) {
  const { type } = field

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

export function getDefaultOperators (field) {
  return OPERATORS.filter(op => {
    const { meta: { applyTo } } = op
    return applyTo.includes(normalizeType(field))
  }).map(op => {
    return op.operator
  })
}

export function getOperatorMeta (operator) {
  const data = OPERATORS.find(op => {
    return op.operator === operator
  })

  return data ? data.meta : null
}

export function getOperators (field) {
  if (field === null) {
    return null
  }

  const { operators = getDefaultOperators(field) } = field

  return operators
}
