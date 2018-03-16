// @flow
import * as React from 'react'
import type { Condition } from '../utils/Condition'
import type { GroupConditionFragment } from '../utils/Group'
import type { StyleClassMap } from '../utils/StyleClassMap'

type Props = {
  condition: Condition,
  styleClassMap: StyleClassMap,
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

    const isActive = condition.value.toUpperCase() === value.toUpperCase()

    const className = isActive ? 'QuarterBackConditionActive' : ''
    const addClass = styleClassMap.QuarterBackCondition || ''
    const addClassActive = (
      isActive && styleClassMap.QuarterBackConditionActive != null
    )
      ? styleClassMap.QuarterBackConditionActive
      : ''

    return (
      <button
        className={`QuarterBackCondition ${className} ${addClass} ${addClassActive}`}
        onClick={this.handleClick}
      >
        {condition.display}
      </button>
    )
  }
}

export default QuarterBackCondition
