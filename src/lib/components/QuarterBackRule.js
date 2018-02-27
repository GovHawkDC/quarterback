import React, { Component } from 'react'
import { getOperators, getFieldByFieldId } from './utils'
import QuarterBackFields from './QuarterBackFields'
import QuarterBackInput from './QuarterBackInput'
import QuarterBackOperators from './QuarterBackOperators'

class QuarterBackRule extends Component {
  constructor (props) {
    super(props)

    const { fields, rule = {} } = props
    const { id = null, operator = null, value = null } = rule
    const field = getFieldByFieldId(id, fields)
    const operators = getOperators(field)

    this.state = {
      field,
      operator,
      operators,
      value
    }
  }

  handleFieldChange = fieldId => {
    const { fields, handleFieldChange, index } = this.props
    handleFieldChange(index)

    const field = getFieldByFieldId(fieldId, fields)
    const operators = getOperators(field)
    const operator = operators ? operators[0] : null

    this.setState(prevState => {
      return {
        ...prevState,
        field,
        operator,
        operators
      }
    })
  }

  handleOperatorChange = operator => {
    const { handleOperatorChange, index } = this.props
    handleOperatorChange(index, operator)

    this.setState(prevState => {
      return {
        ...prevState,
        operator
      }
    })
  }

  render () {
    const { fields } = this.props
    const { field, operator, operators, value } = this.state

    return (
      <div className='QuarterBackRule'>
        <QuarterBackFields
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
