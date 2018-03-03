// @flow
import * as React from 'react'
import type { Data } from '../utils/Data'
import { QB_RULE, QB_GROUP } from '../utils/constants'

type Props = {
  handleUpdate: (groupPartial) => void, // TODO: type for partial group update
  rules: Array<Data>,
  types: Array<mixed> // TODO: spec out this type
}

class QuarterBackRules extends React.Component<Props> {
  handleCreate (data: Data) {
    const rules = [...this.props.rules, data]
    this.props.handleUpdate({ rules })
  }

  handleUpdate (data: Data, index: number) {
    const rules = Object.assign([], [...this.props.rules], {
      [index]: data
    })
    this.props.handleUpdate({ rules })
  }

  handleDelete (index: number) {
    const rules = this.props.rules.filter((_, ruleIndex) => ruleIndex !== index)
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
