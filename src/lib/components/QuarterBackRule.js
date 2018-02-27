import React, { Component } from 'react'
import { getFieldByFieldId, getOperators } from './utils'
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

  render () {
    const { fields, rule } = this.props
    const { id = '', operator = '', value } = rule

    const field = getFieldByFieldId(id, fields)
    const operators = getOperators(field)
    // TODO: Parsed value here?

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
          operator={operator}
          value={value}
        />
      </div>
    )
  }
}

export default QuarterBackRule
