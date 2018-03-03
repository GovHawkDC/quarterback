// @flow
import * as React from 'react'
import type { Data, GroupFragment } from '../utils/Data'
import { QB_RULE, QB_GROUP } from '../utils/constants'
import QuarterBackRule from './QuarterBackRule'
import QuarterBackGroup from './QuarterBackGroup'

type Props = {
  rules: Array<Data>,
  types: Array<mixed>, // TODO: spec out this type
  handleUpdate: (fragment: GroupFragment) => void
}

class QuarterBackRules extends React.Component<Props> {
  /**
   * Takes a modified group or rule and index and overwrites a copy of
   * the current rules prop at the specified index. Passes the modified
   * rules copy to parent
   */
  handleUpdate (data: Data, index: number) {
    const rules = Object.assign([], [...this.props.rules], { [index]: data })
    this.props.handleUpdate({ rules })
  }

  /**
   * Takes an index and removes the rule or group in a copy of the current
   * rules prop at the specified index. Passes the modified rules copy to
   * parent
   */
  handleDelete (index: number) {
    const rules = this.props.rules.filter((...args) => args[1] !== index)
    this.props.handleUpdate({ rules })
  }

  render () {
    const { rules } = this.props

    if (rules.length < 1) {
      return null
    }

    return (
      <div className='QuarterBackRules'>
        {rules.map((data, index) => {
          const { QB, condition } = data

          // "Old" rule data from jQuery plugin will not have "condition"
          // key
          if (QB === QB_RULE || condition === undefined) {
            return (
              <QuarterBackRule
                key={index}
                QB={QB}
                index={index}
                rule={data}
                handleUpdate={this.handleUpdate}
                handleDelete={this.handleDelete}
              />
            )
          }

          // "Old" group data from jQuery plugin _will_ have a "condition" key
          if (QB === QB_GROUP || (QB === undefined && condition !== undefined)) {
            return (
              <QuarterBackGroup
                key={index}
                QB={QB}
                group={data}
                index={index}
                handleUpdate={this.handleUpdate}
                handleDelete={this.handleDelete}
              />
            )
          }

          // TODO: Temporary!
          throw new Error('Could not find type...')

          // TODO: Custom types, needs extra type probably for sharing...
        })}
      </div>
    )
  }
}

export default QuarterBackRules
