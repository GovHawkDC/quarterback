import React, { Component } from 'react'
import QuarterBackFields from './QuarterBackFields'
import QuarterBackOperators from './QuarterBackOperators'

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
    this.setState(prevState => {
      return {
        ...prevState,
        operator
      }
    })
  }

  render () {
    const { fields, index, rule } = this.props
    const { field } = this.state

    return (
      <div className='QuarterBackRule'>
        <QuarterBackFields
          fields={fields}
          handleFieldChange={this.handleFieldChange}
        />
        <QuarterBackOperators
          field={field}
          handleOperatorChange={this.handleOperatorChange}
        />
        {/* FIELD */}
      </div>
    )
  }
}

export default QuarterBackRule
