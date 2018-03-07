// @flow
import * as React from 'react'
import type { Field } from '../utils/Field'
import type { Rule } from '../utils/Rule'
import type { StyleClassMap } from './StyleClassMap'
import { getOperatorById, getDefaultOperatorsByField } from '../utils/operators'
import { getDefaultValue } from '../utils/values'
import Select from './inputs/Select'

type Props = {
  field: Field,
  index: number,
  rule: Rule,
  styleClassMap: StyleClassMap,
  handleUpdate: (data: Rule, index: number) => void
}

class QuarterBackOperators extends React.Component<Props> {
  // TODO: Cleanup...
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
    const {
      field,
      rule,
      styleClassMap
    } = this.props

    if (rule.operator === null) {
      return null
    }

    const operators = getDefaultOperatorsByField(field)

    if (operators.length < 1) {
      return null
    }

    const addOperatorsClass = styleClassMap.QuarterBackOperators != null
      ? styleClassMap.QuarterBackOperators
      : ''

    const addOperatorClass = styleClassMap.QuarterBackOperator != null
      ? styleClassMap.QuarterBackOperator
      : ''

    if (operators.length === 1) {
      return (
        <div className={`QuarterBackOperators ${addOperatorsClass}`}>
          <span className={`QuarterBackOperator ${addOperatorClass}`}>
            {rule.operator}
          </span>
        </div>
      )
    }

    return (
      <div className={`QuarterBackOperators ${addOperatorsClass}`}>
        <Select
          value={this.props.rule.operator}
          values={operators.map(operator => {
            return {
              label: operator.id.replace(/_/g, ' '),
              value: operator.id
            }
          })}
          handleUpdate={this.handleUpdate}
        />
      </div>
    )
  }
}

export default QuarterBackOperators
