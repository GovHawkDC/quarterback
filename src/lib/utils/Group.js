// @flow
import type { Data } from './Data'

type GroupQB = {
  QB?: string
}

export type GroupCondition = {
  condition: string
}

export type GroupRules = {
  rules: Array<Data>
}

export type GroupFragment =
  | GroupCondition
  | GroupRules

export type Group =
  & GroupQB
  & GroupCondition
  & GroupRules
