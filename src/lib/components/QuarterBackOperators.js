// @flow
import * as React from 'react'
import type { Field } from '../utils/Field'
import type { Rule } from '../utils/Rule'
import { getOperatorById, getDefaultOperatorsByField } from '../utils/operators'
import { getDefaultValueByOperator } from '../utils/values'
import QuarterBackOperator from './QuarterBackOperator'

type Props = {
  field: Field,
  index: number,
  rule: Rule,
  handleUpdate: (data: Rule, index: number) => void
}

class QuarterBackOperators extends React.Component<Props> {
  handleChange = event => {
    const operator = getOperatorById(event.target.value)
    const value = getDefaultValueByOperator(operator)

    const data = {
      ...this.props.rule,
      operator: operator.id,
      value: value === null || typeof value !== typeof this.props.rule.value
        ? value
        : this.props.rule.value
    }

    this.props.handleUpdate(data, this.props.index)
  }

  render () {
    if (this.props.rule.operator === null) {
      return null
    }

    const operators = getDefaultOperatorsByField(this.props.field)

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
