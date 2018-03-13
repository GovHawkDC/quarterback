import type { ActionIconMap } from './ActionIconMap'
import type { Condition } from './Condition'
import type { Data } from './Data'
import type { Field } from './Field'
import type { GroupFragment } from './Group'
import type { StyleClassMap } from './StyleClassMap'
import type { Type } from './Type'

export type RulesProps = {
  actionIconMap: ActionIconMap,
  conditions: Array<Condition>,
  fields: Array<Field>,
  inputsSeparator: string,
  lang: Object,
  rules: Array<Data>,
  selectPlaceholder: string,
  styleClassMap: StyleClassMap,
  types: Array<Type>,
  handleUpdate: (fragment: GroupFragment) => void
}
