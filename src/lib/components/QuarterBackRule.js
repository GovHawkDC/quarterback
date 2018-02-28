import React, { Component } from 'react'
import { getFieldByFieldId } from './helpers/fields'
import {
  getDefaultOperator,
  getOperators,
  getOperatorMeta
} from './helpers/operators'
import { parseValue } from './helpers/values'
import QuarterBackFields from './QuarterBackFields'
import QuarterBackInput from './QuarterBackInput'
import QuarterBackOperators from './QuarterBackOperators'

class QuarterBackRule extends Component {
  handleFieldChange = fieldId => {
    const { handleFieldChange, index } = this.props
    handleFieldChange(index, fieldId)
  }

  handleOperatorChange = operator => {
    const { handleOperatorChange, index } = this.props
    handleOperatorChange(index, operator)
  }

  handleValueChange = value => {
    const { handleValueChange, index } = this.props
    handleValueChange(index, value)
  }

  render () {
    // TODO: Probably overkill... revisit
    const { fields = [], rule = {} } = this.props
    const { id = '', operator = '', value = '' } = rule

    const field = getFieldByFieldId(id, fields)
    const operators = getOperators(field)
    const meta = getOperatorMeta(operator)
    const parsedValue = parseValue(value, field, meta)

    return (
      <div className='QuarterBackRule'>
        <QuarterBackFields
          fieldId={id}
          fields={fields}
          handleFieldChange={this.handleFieldChange}
        />
        <QuarterBackOperators
          operator={operator}
          operators={operators}
          field={field}
          handleOperatorChange={this.handleOperatorChange}
        />
        <QuarterBackInput
          field={field}
          fields={fields}
          handleValueChange={this.handleValueChange}
          meta={meta}
          operator={operator}
          value={parsedValue}
        />
      </div>
    )
  }
}

export default QuarterBackRule
