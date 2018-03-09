// @flow
import * as React from 'react'
import type { Condition } from '../utils/Condition'
import type { GroupConditionFragment } from '../utils/Group'
import type { StyleClassMap } from '../utils/StyleClassMap'
import QuarterBackCondition from './QuarterBackCondition'

type Props = {
  conditions: Array<Condition>,
  styleClassMap: StyleClassMap,
  value: string,
  handleUpdate: (fragment: GroupConditionFragment) => void,
}

class QuarterBackConditions extends React.Component<Props> {
  static defaultProps = {
    conditions: []
  }

  render () {
    const {
      conditions,
      styleClassMap,
      value,
      handleUpdate
    } = this.props

    if (conditions.length < 1) {
      return null
    }

    const addClass = styleClassMap.QuarterBackConditions != null
      ? styleClassMap.QuarterBackConditions
      : ''

    return (
      <div className={`QuarterBackConditions ${addClass}`}>
        {conditions.map((condition, index) => {
          return (
            <QuarterBackCondition
              key={index}
              condition={condition}
              styleClassMap={styleClassMap}
              value={value}
              handleUpdate={handleUpdate}
            />
          )
        })}
      </div>
    )
  }
}

export default QuarterBackConditions
