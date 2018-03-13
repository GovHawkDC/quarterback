function getInputPlaceholder (
  placeholder: null | string | Array<string>,
  index: number
): string {
  if (!placeholder) {
    return ''
  }

  if (typeof placeholder === 'string') {
    return placeholder
  }

  return placeholder[index] || ''
}

function getInputType (type: string): string {
  switch (type) {
    case 'integer':
    case 'double':
      return 'number'
    case 'date':
    case 'time':
      return type
    case 'datetime':
      return 'datetime-local'
    default:
      return 'text'
  }
}

export {
  getInputPlaceholder,
  getInputType
}
