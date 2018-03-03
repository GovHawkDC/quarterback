// @flow
import type { Value } from './Value'

export type Rule = {
  QB?: string,
  field?: string,
  id: string,
  input?: string,
  operator: string,
  type?: string,
  value: Value
}
