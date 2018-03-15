function getInputPlaceholder (
  placeholder?: string | Array<string>,
  placeholderMap?: { [key: string]: string | Array<string> },
  operator?: string,
  index: number
): string {
  const actualPlaceholder = (placeholderMap && operator)
    ? (placeholderMap[operator] || placeholder)
    : placeholder

  if (!actualPlaceholder) {
    return ''
  }

  if (typeof actualPlaceholder === 'string') {
    return actualPlaceholder
  }

  return actualPlaceholder[index] || ''
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

function getInputValue (value) {
  if (value === null) {
    return ''
  }
  return value
}

function isInteger (str) {
  const n = Math.floor(Number(str))
  return isFinite(n) && String(n) === str
}

function parseInputValue (value, type) {
  switch (type) {
    case 'boolean':
      return Boolean(value)
    case 'integer':
      return isInteger(value) ? parseInt(value, 10) : value
    default:
      return value
  }
}

export {
  getInputPlaceholder,
  getInputType,
  getInputValue,
  parseInputValue
}
