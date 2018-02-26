import React, { Component } from 'react'
import QuarterBackFields from './QuarterBackFields'

class QuarterBackRule extends Component {
  state = {
    field: null
  }

  getFieldByFieldId (fieldId) {
    if (!fieldId) {
      return null
    }

    const { fields } = this.props

    const field = fields.find(field => {
      return field.id === fieldId
    })

    return field || null
  }

  handleFieldChange = event => {
    const { target } = event
    const { value = null } = target

    const field = this.getFieldByFieldId(value)
    console.log(field)

    // TODO: send to parent
    const { handleFieldChange, index } = this.props
    handleFieldChange(index)

    this.setState(prevState => {
      return {
        ...prevState,
        field
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
        {/* OPERATORS */}
        {/* FIELD */}
      </div>
    )
  }
}

export default QuarterBackRule
