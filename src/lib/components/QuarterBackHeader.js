// @flow
import * as React from 'react'
import type { Condition } from '../utils/Condition'
import type { Data, GroupCondition } from '../utils/Data'
import QuarterBackConditions from './QuarterBackConditions'
import QuarterBackActions from './QuarterBackActions'

type Props = {
  condition: string,
  conditions: Array<Condition>,
  // fields
  index: number,
  // types
  handleCreate: (data: Data) => void,
  handleUpdate: (fragment: GroupCondition) => void,
  handleDelete: (index: number) => void
}

class QuarterBackHeader extends React.Component<Props> {
  render () {
    <div className='QuarterBackHeader'>
      <QuarterBackConditions
        value={this.props.condition}
        conditions={this.props.conditions}
        handleUpdate={this.props.handleUpdate}
      />
      <QuarterBackActions
        index={this.props.index}
        handleCreate={this.props.handleCreate}
        handleDelete={this.props.handleDelete}
      />
    </div>
  }
}

export default QuarterBackHeader
