// @flow
import * as React from 'react'
import type { Data, GroupFragment } from '../utils/Data'
import { QB_RULE, QB_GROUP } from '../utils/constants'

type Props = {
  handleUpdate: (fragment: GroupFragment) => void,
  rules: Array<Data>,
  types: Array<mixed> // TODO: spec out this type
}

class QuarterBackRules extends React.Component<Props> {
  /**
   * Takes a new group or rule and appends it to a copy of the current
   * rules prop. Passes the modified rules copy to parent
   */
  handleCreate (data: Data): void {
    this.props.handleUpdate({ rules: [...this.props.rules, data] })
  }

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
    const { rules /*, types*/ } = this.props

    if (rules.length < 1) {
      return null
    }

    return (
      <div className='QuarterBackRules'>
        {rules.map((rule, index) => {
          const { QB } = rule

          // TODO: Legacy, test condition (undefined)
          if (QB === QB_RULE) {
            // TODO: Rule
            return (
              null
            )
          }

          // TODO: Legacy, test condition (!undefined, but QB is)
          if (QB === QB_GROUP) {
            // TODO: Group, existing data
            return (
              null
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
