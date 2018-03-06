// @flow
import * as React from 'react'
import type { Condition } from '../utils/Condition'
import type { Data } from '../utils/Data'
import type { Field } from '../utils/Field'
import type { Group, GroupFragment } from '../utils/Group'
import type { Type } from '../utils/Type'
import { andCondition, orCondition } from '../utils/conditions'
import { QB_GROUP } from '../utils/constants'
import QuarterBackHeader from './QuarterBackHeader'
import QuarterBackRules from './QuarterBackRules'
import QuarterBackTitle from './QuarterBackTitle'

type Props = {
  QB: string,
  QBComponent?: React.ComponentType<>, // TODO: Props (from Type)
  conditions: Array<Condition>,
  fields: Array<Field>,
  group: Group,
  index: number,
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
    this.handleUpdate({ rules: [...this.props.group.rules, data] })
  }

  /**
   * Takes a group fragment and merges it with a copy of the current
   * group prop. Passes the modified group copy to parent
   */
  handleUpdate = (fragment: GroupFragment) => {
    const group = { QB: this.props.QB, ...this.props.group, ...fragment }
    this.props.handleUpdate(group, this.props.index)
  }

  render () {
    const RulesComponent = this.props.QBComponent
      ? this.props.QBComponent
      : QuarterBackRules

    return (
      <div className='QuarterBackGroup'>
        <QuarterBackTitle title={this.props.title} />
        <QuarterBackHeader
          condition={this.props.group.condition}
          conditions={this.props.conditions}
          fields={this.props.fields}
          index={this.props.index}
          types={this.props.types}
          handleCreate={this.handleCreate}
          handleUpdate={this.handleUpdate}
          handleDelete={this.props.handleDelete}
        />
        <RulesComponent
          conditions={this.props.conditions}
          fields={this.props.fields}
          rules={this.props.group.rules}
          types={this.props.types}
          handleUpdate={this.handleUpdate}
        />
      </div>
    )
  }
}

export default QuarterBackGroup
