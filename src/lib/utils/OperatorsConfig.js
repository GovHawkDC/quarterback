// @flow
import type { Operator } from './Operator'

export type OperatorsConfig = {
  add?: Array<Operator>,
  excluded?: Array<string>,
  included?: Array<string>
}
