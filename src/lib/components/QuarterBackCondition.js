// @flow
import * as React from 'react'
import type { Condition } from '../utils/Condition'
import type { GroupCondition } from '../utils/Data'

type Props = {
  condition: Condition,
  value: string,
  handleUpdate: (fragment: GroupCondition) => void
}

class QuarterBackCondition extends React.Component<Props> {
  handleClick = event => {
    event.preventDefault()
    this.props.handleUpdate({ condition: this.props.condition.value })
  }

  render () {
    return (
      <button className='QuarterBackCondition' onClick={this.handleClick}>
        {this.props.condition.display}
      </button>
    )
  }
}

export default QuarterBackCondition
