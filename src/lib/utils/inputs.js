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
  getInputType
}
