// @flow
import * as React from 'react'
import type { Condition } from '../utils/Condition'
import type { Data, Group, GroupFragment } from '../utils/Data'
import QuarterBackHeader from './QuarterBackHeader'
import QuarterBackRules from './QuarterBackRules'

type Props = {
  QB: string,
  conditions: Array<Condition>,
  group: Group,
  index: number,
  handleUpdate: (group: Group) => void,
  handleDelete: (index: number) => void
}

class QuarterBackGroup extends React.Component<Props> {
  /**
   * Takes a new group or rule and appends it to a copy of the current
   * group's rules prop. Passes the modified rules copy to update
   * method
   */
  handleCreate (data: Data) {
    this.handleUpdate({ rules: [...this.props.group.rules, data] })
  }

  /**
   * Takes a group fragment and merges it with a copy of the current
   * group prop. Passes the modified group copy to parent
   */
  handleUpdate (fragment: GroupFragment) {
    const group = { QB: this.props.QB, ...this.props.group, ...fragment }
    this.props.handleUpdate(group, this.props.index)
  }

  render () {
    return(
      <div className='QuarterBackGroup'>
        {/* TODO: HEADER{this.handleCreate, this.props.handleDelete} */}
        <QuarterBackHeader
          condition={this.props.group.condition}
          conditions={this.props.conditions}
          index={this.props.index}
          handleCreate={this.handleCreate}
          handleUpdate={this.handleUpdate}
          handleDelete={this.props.handleDelete}
        />
        <QuarterBackRules
          handleUpdate={this.handleUpdate}
          rules={this.props.group.rules}
        />
      </div>
    )
  }
}

export default QuarterBackGroup
