import type { ActionIconMap } from './ActionIconMap'
import type { Condition } from './Condition'
import type { Data } from './Data'
import type { Field } from './Field'
import type { GroupFragment } from './Group'
import type { OperatorsConfig } from '../utils/OperatorsConfig'
import type { StyleClassMap } from './StyleClassMap'
import type { Type } from './Type'

export type RulesProps = {
  actionIconMap: ActionIconMap,
  conditions: Array<Condition>,
  defaultCondition: string,
  fields: Array<Field>,
  filterTypes: Array<string>,
  inputsSeparator: string,
  lang: Object,
  operatorsConfig: OperatorsConfig,
  rules: Array<Data>,
  selectPlaceholder: string,
  styleClassMap: StyleClassMap,
  types: Array<Type>,
  handleUpdate: (fragment: GroupFragment) => void
}
