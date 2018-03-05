// @flow
import * as React from 'react'
import type { Condition } from '../utils/Condition'
import type { GroupConditionFragment } from '../utils/Group'

type Props = {
  condition: Condition,
  value: string,
  handleUpdate: (fragment: GroupConditionFragment) => void
}

class QuarterBackCondition extends React.Component<Props> {
  handleClick = event => {
    event.preventDefault()
    this.props.handleUpdate({ condition: this.props.condition.value })
  }

  render () {
    const className = this.props.condition.value === this.props.value
      ? 'QuarterBackCondition QuarterBackConditionActive'
      : 'QuarterBackCondition'

    return (
      <button className={className} onClick={this.handleClick}>
        {this.props.condition.display}
      </button>
    )
  }
}

export default QuarterBackCondition
