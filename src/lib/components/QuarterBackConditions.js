// @flow
import * as React from 'react'
import type { Condition } from '../utils/Condition'
import type { GroupConditionFragment } from '../utils/Group'
import QuarterBackCondition from './QuarterBackCondition'

type Props = {
  conditions: Array<Condition>,
  value: string,
  handleUpdate: (fragment: GroupConditionFragment) => void,
}

class QuarterBackConditions extends React.Component<Props> {
  static defaultProps = {
    conditions: []
  }

  render () {
    if (this.props.conditions.length < 1) {
      return null
    }

    return (
      <div className='QuarterBackConditions'>
        {this.props.conditions.map((condition, index) => {
          return (
            <QuarterBackCondition
              key={index}
              condition={condition}
              value={this.props.value}
              handleUpdate={this.props.handleUpdate}
            />
          )
        })}
      </div>
    )
  }
}

export default QuarterBackConditions
