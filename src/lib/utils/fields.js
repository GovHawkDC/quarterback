// @flow
import * as React from 'react'
import type { Field } from './Field'

function getFieldById (fields: Array<Field>, id: string): ?Field {
  return fields.find(field => field.id === id)
}

function getFieldComponent (field: Field, DefaultComponent: React.Component): React.Component {
  return field.QBComponent != null ? field.QBComponent : DefaultComponent
}

export {
  getFieldById,
  getFieldComponent
}
