// @flow
type Meta = {
  fieldTypes: Array<string>,
  multipleValuesAllowed: boolean,
  numberOfInputs: number
}

export type Operator = {
  id: string,
  meta: Meta
}
