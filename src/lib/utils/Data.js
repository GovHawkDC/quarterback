// @flow
// TODO: See what data looks like for jq plugin re: operator, value
type Value = string | Array<string>

// TODO: Others, e.g., http://querybuilder.js.org/index.html#method-setRules
type Rule = {
  QB?: string,
  field?: string,
  id: string,
  input?: string,
  operator: string,
  type?: string,
  value: Value
}

type GroupQB = {
  QB?: string
}

export type GroupCondition = {
  condition: string
}

type GroupRules = {
  rules: Array<Data>
}

export type GroupFragment =
  | GroupCondition
  | GroupRules

export type Group =
  & GroupQB
  & GroupCondition
  & GroupRules

export type Data = Group | Rule
