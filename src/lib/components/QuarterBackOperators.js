// @flow
import * as React from 'react'
import type { Rule } from '../utils/Rule'
import { getFieldById } from '../utils/fields'
import { getDefaultOperatorsByField } from '../utils/operators'
import QuarterBackOperator from './QuarterBackOperator'

type Props = {
  index: number,
  rule: Rule,
  handleUpdate: (data: Rule, index: number) => void
}

class QuarterBackOperators extends React.Component<Props> {
  handleChange = event => {
    // TODO: value...
    const fragment = { operator: event.target.value }
    const rule = { ...this.props.rule, ...fragment }
    this.props.handleUpdate(rule, this.props.index)
  }

  render () {
    if (this.props.rule.operator === null) {
      return null
    }

    const field = getFieldById(this.props.rule.id)
    const operators = getDefaultOperatorsByField(field)

    if (operators.length < 1) {
      return null
    }

    if (operators.length === 1) {
      return (
        <div className='QuarterBackOperators'>
          <span className='QuarterBackOperator'>
            {this.props.rule.operator}
          </span>
        </div>
      )
    }

    return (
      <div className='QuarterBackOperators'>
        <select onChange={this.handleChange} value={this.props.rule.operator}>
          {operators.map((operator, index) => {
            return (
              <QuarterBackOperator
                key={index}
                label={operator.id.replace(/_/g, ' ')}
                value={operator.id}
              />
            )
          })}
        </select>
      </div>
    )
  }
}

export default QuarterBackOperators
