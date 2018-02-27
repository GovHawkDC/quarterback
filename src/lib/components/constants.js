export const DEFAULT_OPERATORS = {
  equal: {
    type: 'equal',
    nb_inputs: 1,
    multiple: false,
    apply_to: ['string', 'number', 'datetime', 'boolean']
  },
  not_equal: {
    type: 'not_equal',
    nb_inputs: 1,
    multiple: false,
    apply_to: ['string', 'number', 'datetime', 'boolean']
  },
  in: {
    type: 'in',
    nb_inputs: 1,
    multiple: true,
    apply_to: ['string', 'number', 'datetime']
  },
  not_in: {
    type: 'not_in',
    nb_inputs: 1,
    multiple: true,
    apply_to: ['string', 'number', 'datetime']
  },
  less: {
    type: 'less',
    nb_inputs: 1,
    multiple: false,
    apply_to: ['number', 'datetime']
  },
  less_or_equal: {
    type: 'less_or_equal',
    nb_inputs: 1,
    multiple: false,
    apply_to: ['number', 'datetime']
  },
  greater: {
    type: 'greater',
    nb_inputs: 1,
    multiple: false,
    apply_to: ['number', 'datetime']
  },
  greater_or_equal: {
    type: 'greater_or_equal',
    nb_inputs: 1,
    multiple: false,
    apply_to: ['number', 'datetime']
  },
  between: {
    type: 'between',
    nb_inputs: 2,
    multiple: false,
    apply_to: ['number', 'datetime']
  },
  not_between: {
    type: 'not_between',
    nb_inputs: 2,
    multiple: false,
    apply_to: ['number', 'datetime']
  },
  begins_with: {
    type: 'begins_with',
    nb_inputs: 1,
    multiple: false,
    apply_to: ['string']
  },
  not_begins_with: {
    type: 'not_begins_with',
    nb_inputs: 1,
    multiple: false,
    apply_to: ['string']
  },
  contains: {
    type: 'contains',
    nb_inputs: 1,
    multiple: false,
    apply_to: ['string']
  },
  not_contains: {
    type: 'not_contains',
    nb_inputs: 1,
    multiple: false,
    apply_to: ['string']
  },
  ends_with: {
    type: 'ends_with',
    nb_inputs: 1,
    multiple: false,
    apply_to: ['string']
  },
  not_ends_with: {
    type: 'not_ends_with',
    nb_inputs: 1,
    multiple: false,
    apply_to: ['string']
  },
  is_empty: {
    type: 'is_empty',
    nb_inputs: 0,
    multiple: false,
    apply_to: ['string']
  },
  is_not_empty: {
    type: 'is_not_empty',
    nb_inputs: 0,
    multiple: false,
    apply_to: ['string']
  },
  is_null: {
    type: 'is_null',
    nb_inputs: 0,
    multiple: false,
    apply_to: ['string', 'number', 'datetime', 'boolean']
  },
  is_not_null: {
    type: 'is_not_null',
    nb_inputs: 0,
    multiple: false,
    apply_to: ['string', 'number', 'datetime', 'boolean']
  }
}
