export function parseValue (value, field, meta) {
  const { numberOfInputs } = meta

  if (numberOfInputs < 1) {
    return ''
  }

  const valueIsString = typeof value === 'string'

  if (numberOfInputs === 1) {
    if (valueIsString) {
      return value
    }

    return ''
  }

  const { value_separator = ',' } = field

  const values = valueIsString ? value.split(value_separator) : value

  if (values.length === numberOfInputs) {
    return values
  }

  return [...Array(numberOfInputs)].map(_ => '')
}
