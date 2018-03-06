// @flow
import * as React from 'react'
import type { Condition } from '../utils/Condition'
import type { Data } from '../utils/Data'
import type { Field } from '../utils/Field'
import type { GroupFragment } from '../utils/Group'
import type { Type } from '../utils/Type'
import { QB_RULE, QB_GROUP } from '../utils/constants'
import { getTypeByQB } from '../utils/types'
import QuarterBackRule from './QuarterBackRule'
import QuarterBackGroup from './QuarterBackGroup'

type Props = {
  conditions: Array<Condition>,
  fields: Array<Field>,
  rules: Array<Data>,
  types: Array<Type>,
  handleUpdate: (fragment: GroupFragment) => void
}

class QuarterBackRules extends React.Component<Props> {
  /**
   * Takes a modified group or rule and index and overwrites a copy of
   * the current rules prop at the specified index. Passes the modified
   * rules copy to parent
   */
  handleUpdate = (data: Data, index: number) => {
    const rules = Object.assign([], [...this.props.rules], { [index]: data })
    this.props.handleUpdate({ rules })
  }

  /**
   * Takes an index and removes the rule or group in a copy of the current
   * rules prop at the specified index. Passes the modified rules copy to
   * parent
   */
  handleDelete = (index: number) => {
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
                QB={QB_RULE}
                fields={this.props.fields}
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
                QB={QB_GROUP}
                conditions={this.props.conditions}
                fields={this.props.fields}
                group={data}
                index={index}
                types={this.props.types}
                handleUpdate={this.handleUpdate}
                handleDelete={this.handleDelete}
              />
            )
          }

          const type = getTypeByQB(this.props.types, QB)

          if (!type) {
            throw new Error('Unable to find type')
          }

          const { action, ...typeProps } = type

          return (
            <QuarterBackGroup
              {...typeProps}
              key={index}
              group={data}
              index={index}
              handleUpdate={this.handleUpdate}
              handleDelete={this.handleDelete}
            />
          )
        })}
      </div>
    )
  }
}

export default QuarterBackRules
