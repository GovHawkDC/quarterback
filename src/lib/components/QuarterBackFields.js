// @flow
import * as React from 'react'
import type { Field } from '../utils/Field'
import type { Rule } from '../utils/Rule'
import { getFieldById } from '../utils/fields'
import { getDefaultOperatorByField } from '../utils/operators'
import { getDefaultValue } from '../utils/values'
import Select from './inputs/Select'

type Props = {
  fields: Array<Field>,
  index: number,
  rule: Rule,
  handleUpdate: (data: Rule, index: number) => void
}

class QuarterBackFields extends React.Component<Props> {
  handleUpdate = (val) => {
    const field = getFieldById(this.props.fields, val)
    const operator = field ? getDefaultOperatorByField(field) : null
    const value = operator ? getDefaultValue(field, operator) : null

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
    const fields = [ { label: '------', value: '' }, ...this.props.fields ]

    return (
      <div className='QuarterBackFields'>
        <Select
          options={fields.map(field => {
            return {
              label: field.label,
              value: field.id
            }
          })}
          value={this.props.rule.id}
          handleUpdate={this.handleUpdate}
        />
      </div>
    )
  }
}

export default QuarterBackFields
