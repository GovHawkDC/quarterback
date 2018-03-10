// @flow
import * as React from 'react'
import type { ActionIconMap } from '../utils/ActionIconMap'
import type { Condition } from '../utils/Condition'
import type { Data } from '../utils/Data'
import type { Field } from '../utils/Field'
import type { Group, GroupFragment, GroupRulesFragment } from '../utils/Group'
import type { StyleClassMap } from '../utils/StyleClassMap'
import type { Type } from '../utils/Type'
import { andCondition, orCondition } from '../utils/conditions'
import { QB_GROUP } from '../utils/constants'
import QuarterBackHeader from './QuarterBackHeader'
import QuarterBackRules from './QuarterBackRules'
import QuarterBackTitle from './QuarterBackTitle'

type Props = {
  QB: string,
  QBComponent?: React.ComponentType<>, // TODO: Props (from Type)
  actionIconMap: ActionIconMap,
  conditions: Array<Condition>,
  fields: Array<Field>,
  group: Group,
  index: number,
  selectPlaceholder: string,
  styleClassMap: StyleClassMap,
  title?: string,
  types: Array<Type>,
  handleUpdate: (group: Group) => void,
  handleDelete: (index: number) => void
}

class QuarterBackGroup extends React.Component<Props> {
  static defaultProps = {
    QB: QB_GROUP,
    conditions: [andCondition, orCondition],
    fields: [],
    index: -1,
    types: [],
    handleDelete: (index: number) => {}
  }

  /**
   * Takes a new group or rule and appends it to a copy of the current
   * group's rules prop. Passes the modified rules copy to update
   * method
   */
  handleCreate = (data: Data) => {
    const { group: { rules } } = this.props

    const groupRulesFragment: GroupRulesFragment = {
      rules: [...rules, data]
    }

    this.handleUpdate(groupRulesFragment)
  }

  /**
   * Takes a group fragment and merges it with a copy of the current
   * group prop. Passes the modified group copy to parent
   */
  handleUpdate = (fragment: GroupFragment) => {
    const {
      QB,
      group,
      index,
      handleUpdate
    } = this.props

    const updatedGroup = {
      QB,
      ...group,
      ...fragment
    }

    handleUpdate(updatedGroup, index)
  }

  render () {
    const {
      QBComponent,
      actionIconMap,
      conditions,
      fields,
      group,
      index,
      selectPlaceholder,
      styleClassMap,
      title,
      types,
      handleDelete
    } = this.props

    const RulesComponent = QBComponent != null
      ? QBComponent
      : QuarterBackRules

    const addClass = styleClassMap.QuarterBackGroup != null
      ? styleClassMap.QuarterBackGroup
      : ''

    return (
      <div className={`QuarterBackGroup ${addClass}`}>
        <QuarterBackTitle
          styleClassMap={styleClassMap}
          title={title}
        />
        <QuarterBackHeader
          actionIconMap={actionIconMap}
          condition={group.condition}
          conditions={conditions}
          fields={fields}
          index={index}
          styleClassMap={styleClassMap}
          types={types}
          handleCreate={this.handleCreate}
          handleUpdate={this.handleUpdate}
          handleDelete={handleDelete}
        />
        <RulesComponent
          actionIconMap={actionIconMap}
          conditions={conditions}
          fields={fields}
          rules={group.rules}
          selectPlaceholder={selectPlaceholder}
          styleClassMap={styleClassMap}
          types={types}
          handleUpdate={this.handleUpdate}
        />
      </div>
    )
  }
}

export default QuarterBackGroup
