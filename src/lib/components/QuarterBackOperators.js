// @flow
import * as React from 'react'
import type { Field } from '../utils/Field'
import type { Operator } from '../utils/Operator'
import type { Rule } from '../utils/Rule'
import type { StyleClassMap } from '../utils/StyleClassMap'
import { getOperatorById, getDefaultOperatorsByField } from '../utils/operators'
import { getValue } from '../utils/values'
import Select from './inputs/Select'

type Props = {
  field: Field,
  index: number,
  lang: Object,
  operators: Array<Operator>,
  rule: Rule,
  styleClassMap: StyleClassMap,
  handleUpdate: (data: Rule, index: number) => void
}

class QuarterBackOperators extends React.Component<Props> {
  handleUpdate = (operatorId: string) => {
    const {
      field,
      index,
      operators,
      rule
    } = this.props

    const operator = getOperatorById(operatorId, operators)

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
      lang,
      operators,
      rule,
      styleClassMap
    } = this.props

    if (rule.operator === null) {
      return null
    }

    const fieldOperators = getDefaultOperatorsByField(field, operators)

    if (fieldOperators.length < 1) {
      return null
    }

    const operatorDisplayOverrides = lang.operators || {}

    const addOperatorsClass = styleClassMap.QuarterBackOperators || ''
    const addOperatorClass = styleClassMap.QuarterBackOperator || ''

    if (fieldOperators.length === 1) {
      return (
        <div className={`QuarterBackOperators ${addOperatorsClass}`}>
          <span className={`QuarterBackOperator ${addOperatorClass}`}>
            {operatorDisplayOverrides[rule.operator] ||
             rule.operator.replace(/_/g, ' ')}
          </span>
        </div>
      )
    }

    return (
      <div className={`QuarterBackOperators ${addOperatorsClass}`}>
        <Select
          styleClassMap={styleClassMap}
          value={rule.operator}
          values={fieldOperators.map(operator => {
            return {
              label: (
                operatorDisplayOverrides[operator.id] ||
                operator.id.replace(/_/g, ' ')
              ),
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
