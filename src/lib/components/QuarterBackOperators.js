// @flow
import * as React from 'react'
import type { Field } from '../utils/Field'
import type { Rule } from '../utils/Rule'
import type { StyleClassMap } from '../utils/StyleClassMap'
import { getOperatorById, getDefaultOperatorsByField } from '../utils/operators'
import { getValue } from '../utils/values'
import Select from './inputs/Select'

type Props = {
  field: Field,
  index: number,
  rule: Rule,
  styleClassMap: StyleClassMap,
  handleUpdate: (data: Rule, index: number) => void
}

class QuarterBackOperators extends React.Component<Props> {
  handleUpdate = (operatorId: string) => {
    const {
      field,
      index,
      rule
    } = this.props

    const operator = getOperatorById(operatorId)

    const data = {
      ...rule,
      operator: operatorId,
      value: getValue(field, operator, rule)
    }

    this.props.handleUpdate(data, index)
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

    const addOperatorsClass = styleClassMap.QuarterBackOperators || ''
    const addOperatorClass = styleClassMap.QuarterBackOperator || ''

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
          styleClassMap={styleClassMap}
          value={rule.operator}
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
