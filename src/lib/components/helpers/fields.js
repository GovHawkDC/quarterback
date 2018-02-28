export function getFieldByFieldId (fieldId, fields) {
  if (fieldId === '' || fields.length < 1) {
    return {
      // TODO: ...
      type: ''
    }
  }

  const field = fields.find(field => {
    return field.id === fieldId
  })

  if (field === undefined) {
    return {
      // TODO: ...
      type: ''
    }
  }

  return field
}

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
