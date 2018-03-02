// @flow
import type { Field } from './Field'

function getFieldById (fields: Array<Field>, id: string): ?Field {
  return fields.find(field => field.id === id)
}

export {
  getFieldById
}
