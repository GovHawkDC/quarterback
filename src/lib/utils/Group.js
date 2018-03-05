// @flow
import type { Data } from './Data'

type GroupQBFragment = {
  QB?: string
}

export type GroupConditionFragment = {
  condition: string
}

export type GroupRulesFragment = {
  rules: Array<Data>
}

export type GroupFragment =
  | GroupConditionFragment
  | GroupRulesFragment

export type Group =
  & GroupQBFragment
  & GroupConditionFragment
  & GroupRulesFragment
