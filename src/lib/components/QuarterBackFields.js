// @flow
import * as React from 'react'
import type { Field } from '../utils/Field'
import type { Rule } from '../utils/Rule'
import { getFieldById } from '../utils/fields'
import { getDefaultOperatorByField } from '../utils/operators'
import { getDefaultValueByOperator } from '../utils/values'
import QuarterBackField from './QuarterBackField'

type Props = {
  fields: Array<Field>,
  index: number,
  rule: Rule,
  handleUpdate: (data: Rule, index: number) => void
}

class QuarterBackFields extends React.Component<Props> {
  handleChange = event => {
    const field = getFieldById(this.props.fields, event.target.value)
    const operator = field ? getDefaultOperatorByField(field) : null
    const value = operator ? getDefaultValueByOperator(operator) : null

    const data = {
      ...this.props.rule,
      field: field ? field.id : '',
      id: field ? field.id : '',
      operator: operator ? operator.id : null,
      value
    }

    this.props.handleUpdate(data, this.props.index)
  }

  render () {
    return (
      <div className='QuarterBackFields'>
        <select onChange={this.handleChange} value={this.props.rule.id}>
          <QuarterBackField label='------' value='' />
          {this.props.fields.map((field, index) => {
            return (
              <QuarterBackField
                key={index}
                label={field.label}
                value={field.id}
              />
            )
          })}
        </select>
      </div>
    )
  }
}

export default QuarterBackFields
