// @flow
import * as React from 'react'
import type { Field } from './Field'

function getFieldById (fields: Array<Field>, id: string): ?Field {
  let f
  for (f of fields) {
    if (f.fields) {
      let match = getFieldById(f.fields, id)

      if (match) {
        return match
      }
    } else if (f.id === id) {
      return f
    }
  }
}

function getFieldComponent (field: Field, DefaultComponent: React.Component): React.Component {
  return field.QBComponent != null ? field.QBComponent : DefaultComponent
}

export {
  getFieldById,
  getFieldComponent
}
