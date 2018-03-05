// @flow
import type { Operator } from './Operator'

const FIELD_TYPE_STRING = 'string'
const FIELD_TYPE_INTEGER = 'integer'
const FIELD_TYPE_DOUBLE = 'double'
const FIELD_TYPE_DATE = 'date'
const FIELD_TYPE_TIME = 'time'
const FIELD_TYPE_DATETIME = 'datetime'
const FIELD_TYPE_BOOLEAN = 'boolean'

const QB_RULE = 'QBRule'
const QB_GROUP = 'QBGroup'

const OPERATORS: Array<Operator> = [
  {
    id: 'equal',
    meta: {
      fieldTypes: [
        FIELD_TYPE_STRING,
        FIELD_TYPE_INTEGER,
        FIELD_TYPE_DOUBLE,
        FIELD_TYPE_DATE,
        FIELD_TYPE_TIME,
        FIELD_TYPE_DATETIME,
        FIELD_TYPE_BOOLEAN
      ],
      multipleValuesAllowed: false,
      numberOfInputs: 1
    }
  },
  {
    id: 'not_equal',
    meta: {
      fieldTypes: [
        FIELD_TYPE_STRING,
        FIELD_TYPE_INTEGER,
        FIELD_TYPE_DOUBLE,
        FIELD_TYPE_DATE,
        FIELD_TYPE_TIME,
        FIELD_TYPE_DATETIME,
        FIELD_TYPE_BOOLEAN
      ],
      multipleValuesAllowed: false,
      numberOfInputs: 1
    }
  },
  {
    id: 'in',
    meta: {
      fieldTypes: [
        FIELD_TYPE_STRING,
        FIELD_TYPE_INTEGER,
        FIELD_TYPE_DOUBLE,
        FIELD_TYPE_DATE,
        FIELD_TYPE_TIME,
        FIELD_TYPE_DATETIME
      ],
      multipleValuesAllowed: true,
      numberOfInputs: 1
    }
  },
  {
    id: 'not_in',
    meta: {
      fieldTypes: [
        FIELD_TYPE_STRING,
        FIELD_TYPE_INTEGER,
        FIELD_TYPE_DOUBLE,
        FIELD_TYPE_DATE,
        FIELD_TYPE_TIME,
        FIELD_TYPE_DATETIME
      ],
      multipleValuesAllowed: true,
      numberOfInputs: 1
    }
  },
  {
    id: 'less',
    meta: {
      numberOfInputs: 1,
      multipleValuesAllowed: false,
      fieldTypes: [
        FIELD_TYPE_INTEGER,
        FIELD_TYPE_DOUBLE,
        FIELD_TYPE_DATE,
        FIELD_TYPE_TIME,
        FIELD_TYPE_DATETIME
      ],
    }
  },
  {
    id: 'less_or_equal',
    meta: {
      fieldTypes: [
        FIELD_TYPE_INTEGER,
        FIELD_TYPE_DOUBLE,
        FIELD_TYPE_DATE,
        FIELD_TYPE_TIME,
        FIELD_TYPE_DATETIME
      ],
      multipleValuesAllowed: false,
      numberOfInputs: 1
    }
  },
  {
    id: 'greater',
    meta: {
      fieldTypes: [
        FIELD_TYPE_INTEGER,
        FIELD_TYPE_DOUBLE,
        FIELD_TYPE_DATE,
        FIELD_TYPE_TIME,
        FIELD_TYPE_DATETIME
      ],
      multipleValuesAllowed: false,
      numberOfInputs: 1
    }
  },
  {
    id: 'greater_or_equal',
    meta: {
      fieldTypes: [
        FIELD_TYPE_INTEGER,
        FIELD_TYPE_DOUBLE,
        FIELD_TYPE_DATE,
        FIELD_TYPE_TIME,
        FIELD_TYPE_DATETIME
      ],
      multipleValuesAllowed: false,
      numberOfInputs: 1
    }
  },
  {
    id: 'between',
    meta: {
      fieldTypes: [
        FIELD_TYPE_INTEGER,
        FIELD_TYPE_DOUBLE,
        FIELD_TYPE_DATE,
        FIELD_TYPE_TIME,
        FIELD_TYPE_DATETIME
      ],
      multipleValuesAllowed: false,
      numberOfInputs: 2
    }
  },
  {
    id: 'not_between',
    meta: {
      fieldTypes: [
        FIELD_TYPE_INTEGER,
        FIELD_TYPE_DOUBLE,
        FIELD_TYPE_DATE,
        FIELD_TYPE_TIME,
        FIELD_TYPE_DATETIME
      ],
      multipleValuesAllowed: false,
      numberOfInputs: 2
    }
  },
  {
    id: 'begins_with',
    meta: {
      fieldTypes: [FIELD_TYPE_STRING],
      multipleValuesAllowed: false,
      numberOfInputs: 1
    }
  },
  {
    id: 'not_begins_with',
    meta: {
      fieldTypes: [FIELD_TYPE_STRING],
      multipleValuesAllowed: false,
      numberOfInputs: 1
    }
  },
  {
    id: 'contains',
    meta: {
      fieldTypes: [FIELD_TYPE_STRING],
      multipleValuesAllowed: false,
      numberOfInputs: 1
    }
  },
  {
    id: 'not_contains',
    meta: {
      fieldTypes: [FIELD_TYPE_STRING],
      multipleValuesAllowed: false,
      numberOfInputs: 1
    }
  },
  {
    id: 'ends_with',
    meta: {
      fieldTypes: [FIELD_TYPE_STRING],
      multipleValuesAllowed: false,
      numberOfInputs: 1
    }
  },
  {
    id: 'not_ends_with',
    meta: {
      fieldTypes: [FIELD_TYPE_STRING],
      multipleValuesAllowed: false,
      numberOfInputs: 1
    }
  },
  {
    id: 'is_empty',
    meta: {
      fieldTypes: [FIELD_TYPE_STRING],
      multipleValuesAllowed: false,
      numberOfInputs: 0
    }
  },
  {
    id: 'is_not_empty',
    meta: {
      fieldTypes: [FIELD_TYPE_STRING],
      multipleValuesAllowed: false,
      numberOfInputs: 0
    }
  },
  {
    id: 'is_null',
    meta: {
      fieldTypes: [
        FIELD_TYPE_STRING,
        FIELD_TYPE_INTEGER,
        FIELD_TYPE_DOUBLE,
        FIELD_TYPE_DATE,
        FIELD_TYPE_TIME,
        FIELD_TYPE_DATETIME,
        FIELD_TYPE_BOOLEAN
      ],
      multipleValuesAllowed: false,
      numberOfInputs: 0
    }
  },
  {
    id: 'is_not_null',
    meta: {
      fieldTypes: [
        FIELD_TYPE_STRING,
        FIELD_TYPE_INTEGER,
        FIELD_TYPE_DOUBLE,
        FIELD_TYPE_DATE,
        FIELD_TYPE_TIME,
        FIELD_TYPE_DATETIME,
        FIELD_TYPE_BOOLEAN
      ],
      multipleValuesAllowed: false,
      numberOfInputs: 0
    }
  }
]

export {
  FIELD_TYPE_STRING,
  FIELD_TYPE_INTEGER,
  FIELD_TYPE_DOUBLE,
  FIELD_TYPE_DATE,
  FIELD_TYPE_TIME,
  FIELD_TYPE_DATETIME,
  FIELD_TYPE_BOOLEAN,
  QB_RULE,
  QB_GROUP,
  OPERATORS
}
