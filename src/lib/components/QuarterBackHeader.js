import * as React from 'react'
import type { Condition } from '../utils/Condition'
import type { Data, GroupCondition } from '../utils/Data'
import QuarterBackConditions from './QuarterBackConditions'

type Props = {
  condition: string,
  conditions: Array<Condition>,
  index: number,
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
    </div>
  }
}

export default QuarterBackHeader
