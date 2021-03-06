// @flow
import * as React from 'react'
import type { Field } from '../utils/Field'
import type { Operator } from '../utils/Operator'
import type { Rule } from '../utils/Rule'
import type { StyleClassMap } from '../utils/StyleClassMap'
import type { NonEmptyValue } from '../../utils/Value'
import { insertAt } from '../utils/arrays'
import { getOperatorById } from '../utils/operators'
import { getInputValues } from '../utils/values'
import QuarterBackInputs from './QuarterBackInputs'

type Props = {
  field: Field,
  index: number,
  inputsSeparator: string,
  operators: Array<Operator>,
  rule: Rule,
  styleClassMap: StyleClassMap,
  handleUpdate: (data: Rule, index: number) => void
}

class QuarterBackValues extends React.Component<Props> {
  handleUpdate = (value: NonEmptyValue, valueIndex: number) => {
    const {
      field,
      index,
      operators,
      rule,
      handleUpdate
    } = this.props

    const operator = getOperatorById(rule.operator, operators)
    const values = getInputValues(field, operator, rule)
    const updatedValues = insertAt(values, valueIndex, value)

    const data = {
      ...rule,
      value: updatedValues.length === 1 ? updatedValues[0] : updatedValues
    }

    handleUpdate(data, index)
  }

  render () {
    const {
      field,
      inputsSeparator,
      operators,
      rule,
      styleClassMap
    } = this.props

    const operator = getOperatorById(rule.operator, operators)
    const values = getInputValues(field, operator, rule)

    if (values === null) {
      return null
    }

    const addClass = styleClassMap.QuarterBackValues || ''

    return (
      <div className={`QuarterBackValues ${addClass}`}>
        <QuarterBackInputs
          field={field}
          inputsSeparator={inputsSeparator}
          operator={operator.id}
          styleClassMap={styleClassMap}
          values={values}
          handleUpdate={this.handleUpdate}
        />
      </div>
    )
  }
}

export default QuarterBackValues
