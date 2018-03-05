// @flow
import * as React from 'react'
import type { Field } from '../utils/Field'
import type { Rule } from '../utils/Rule'
import { getOperatorById, getDefaultOperatorsByField } from '../utils/operators'
import { getDefaultValue } from '../utils/values'
import Select from './inputs/Select'

type Props = {
  field: Field,
  index: number,
  rule: Rule,
  handleUpdate: (data: Rule, index: number) => void
}

class QuarterBackOperators extends React.Component<Props> {
  getValue (defaultValue) {
    if (
      defaultValue === null ||
      this.props.rule.value === null ||
      typeof defaultValue !== typeof this.props.rule.value
    ) {
      return defaultValue
    }
    return this.props.rule.value
  }

  handleUpdate = (val) => {
    const operator = getOperatorById(val)
    const value = getDefaultValue(this.props.field, operator)

    const data = {
      ...this.props.rule,
      operator: operator.id,
      value: this.getValue(value)
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
        <Select
          options={operators.map(operator => {
            return {
              label: operator.id.replace(/_/g, ' '),
              value: operator.id
            }
          })}
          value={this.props.rule.operator}
          handleUpdate={this.handleUpdate}
        />
      </div>
    )
  }
}

export default QuarterBackOperators
