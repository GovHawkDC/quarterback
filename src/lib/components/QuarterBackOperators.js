// @flow
import * as React from 'react'
import type { Field } from '../utils/Field'
import type { Rule } from '../utils/Rule'
import type { StyleClassMap } from '../utils/StyleClassMap'
import type { Value } from '../utils/Value'
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
  getValue (operatorId: string): Value {
    const {
      field,
      rule
    } = this.props

    const operator = getOperatorById(operatorId)

    if (operator == null) {
      return null
    }

    const defaultValue = getDefaultValue(field, operator)

    // Some operators do not require user input (e.g., 'is_empty'), so we
    // want to force the value to be `null` (so no ui is rendered)
    if (defaultValue === null) {
      return null
    }

    // (a) If the existing rule value is null (e.g., the operator _was_
    // 'is_empty') then always change to the default value
    // (b) If the operator change results in a type change (e.g., string to
    // array in the case of 'equal' -> 'between') use the default value
    if (rule.value === null || typeof defaultValue !== typeof rule.value) {
      return defaultValue
    }

    return rule.value
  }

  handleUpdate = (operatorId: string) => {
    const {
      index,
      rule
    } = this.props

    const data = {
      ...rule,
      operator: operatorId,
      value: this.getValue(operatorId)
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
