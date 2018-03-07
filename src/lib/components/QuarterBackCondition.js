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
  handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const { condition } = this.props

    this.props.handleUpdate({ condition: condition.value })
  }

  render () {
    const {
      condition,
      styleClassMap,
      value
    } = this.props

    const isActive = condition.value === value

    const className = isActive
      ? 'QuarterBackCondition QuarterBackConditionActive'
      : 'QuarterBackCondition'

    const addClass = styleClassMap.QuarterBackCondition != null
      ? styleClassMap.QuarterBackCondition
      : ''

    const addClassActive = (
      isActive && styleClassMap.QuarterBackConditionActive != null
    )
      ? styleClassMap.QuarterBackConditionActive
      : ''

    return (
      <button
        className={`${className} ${addClass} ${addClassActive}`}
        onClick={this.handleClick}
      >
        {condition.display}
      </button>
    )
  }
}

export default QuarterBackCondition
