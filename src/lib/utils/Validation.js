// @flow
type Format = {
  pattern: string | RegExp | Array<string | RegExp>,
  message?: string
}

type LimitValue = {
  value: number | string,
  message?: string
}

export type Validation = {
  allowEmptyValue?: boolean,
  format?: Format,
  formatMap?: { [key: string]: Format },
  max: LimitValue,
  min: LimitValue,
  skipValidation?: boolean,
  validator?: () => boolean | string
}
