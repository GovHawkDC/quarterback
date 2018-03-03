// @flow
import * as React from 'react'
import type { Data } from '../utils/Data'
import QuarterBackRules from './QuarterBackRules'

type Props = {
  handleCreate: (data: Data) => void,
  handleUpdate: (partial: mixed) => void, // TODO:
  handleDelete: (index: number) => void,
  rules: Array<Data>
}

class QuarterBackGroup extends React.Component<Props> {
  handleCreate (data: Data) {
    this.props.handleCreate(data)
  }

  handleUpdate (groupPartial) { // TODO: ... type
    const { QB, group, index } = this.props
    this.props.handleUpdate({ QB, ...group, ...groupPartial }, index)
  }

  handleDelete (index: number) {
    this.props.handleDelete(index)
  }

  render () {
    const { rules /*, types*/ } = this.props

    return(
      <div className='QuarterBackGroup'>
        {/* TODO: HEADER */}
        <QuarterBackRules
          handleUpdate={this.handleUpdate}
          rules={rules}
        />
      </div>
    )
  }
}

export default QuarterBackGroup
