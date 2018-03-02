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

type Group = {
  QB?: string,
  condition: string,
  rules: Array<Data>
}

export type Data = Group | Rule
