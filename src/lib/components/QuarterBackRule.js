import React, { Component } from 'react'
import { getOperators } from './utils'
import QuarterBackFields from './QuarterBackFields'
import QuarterBackInput from './QuarterBackInput'
import QuarterBackOperators from './QuarterBackOperators'

class QuarterBackRule extends Component {
  state = {
    field: null,
    operator: null,
    operators: null,
    value: null
  }

  handleFieldChange = field => {
    const { handleFieldChange, index } = this.props
    handleFieldChange(index)

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
    const { fields, index, rule } = this.props
    const { field, operator, operators } = this.state

    return (
      <div className='QuarterBackRule'>
        <QuarterBackFields
          fields={fields}
          handleFieldChange={this.handleFieldChange}
        />
        <QuarterBackOperators
          operators={operators}
          field={field}
          handleOperatorChange={this.handleOperatorChange}
        />
        <QuarterBackInput field={field} fields={fields} operator={operator} />
      </div>
    )
  }
}

export default QuarterBackRule
