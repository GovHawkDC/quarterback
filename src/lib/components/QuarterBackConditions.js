// @flow
import * as React from 'react'
import type { Condition } from '../utils/Condition'
import type { GroupCondition } from '../utils/Data'
import QuarterBackCondition from './QuarterBackCondition'

type Props = {
  conditions: Array<Condition>,
  value: string,
  handleUpdate: (fragment: GroupCondition) => void,
}

class QuarterBackConditions extends React.Component<Props> {
  render () {
    if (this.props.conditions.length < 1) {
      return null
    }

    return (
      <div className='QuarterBackConditions'>
        {conditions.map((condition, index) => {
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
