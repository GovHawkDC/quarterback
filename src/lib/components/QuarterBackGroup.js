// @flow
import * as React from 'react'
import type { Data, GroupFragment } from '../utils/Data'
import QuarterBackRules from './QuarterBackRules'

type Props = {
  handleCreate: (data: Data) => void,
  handleUpdate: (fragment: GroupFragment) => void,
  handleDelete: (index: number) => void,
  rules: Array<Data>
}

class QuarterBackGroup extends React.Component<Props> {
  /**
   * Takes a group fragment and merges it with a copy of the current
   * group prop. Passes the modified group copy to parent
   */
  handleUpdate (fragment: GroupFragment) {
    const { QB, group, handleUpdate, index } = this.props
    handleUpdate({ QB, ...group, ...fragment }, index)
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
