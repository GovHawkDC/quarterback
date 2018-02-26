import React, { Component } from 'react'

class QuarterBackFields extends Component {
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

  handleChange = event => {
    const { target } = event
    const { value = null } = target

    const field = this.getFieldByFieldId(value)

    const { handleFieldChange } = this.props
    handleFieldChange(field)
  }

  render () {
    const { fields } = this.props

    return (
      <div className='QuarterBackFields'>
        <select onChange={this.handleChange}>
          <option value=''>------</option>
          {fields.map((field, index) => {
            return (
              <option key={index} value={field.id}>
                {field.label}
              </option>
            )
          })}
        </select>
      </div>
    )
  }
}

export default QuarterBackFields
