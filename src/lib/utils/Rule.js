// @flow
import type { Value } from './Value'

export type Rule = {
  QB?: string,
  field?: string,
  id: string,
  input?: string,
  operator: null | string,
  touched?: boolean,
  type?: string,
  value: Value
}
