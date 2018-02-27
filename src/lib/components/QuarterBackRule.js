import React, { Component } from 'react'
import QuarterBackFields from './QuarterBackFields'
import QuarterBackOperatorsWrapper from './QuarterBackOperatorsWrapper'
import QuarterBackField from './QuarterBackField'

class QuarterBackRule extends Component {
  state = {
    field: null,
    operator: null,
    value: null
  }

  handleFieldChange = field => {
    const { handleFieldChange, index } = this.props
    handleFieldChange(index)

    this.setState(prevState => {
      return {
        ...prevState,
        field,
        operator: null
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
    const { field, operator } = this.state

    return (
      <div className='QuarterBackRule'>
        <QuarterBackFields
          fields={fields}
          handleFieldChange={this.handleFieldChange}
        />
        <QuarterBackOperatorsWrapper
          field={field}
          handleOperatorChange={this.handleOperatorChange}
        />
        <QuarterBackField field={field} fields={fields} operator={operator} />
      </div>
    )
  }
}

export default QuarterBackRule
