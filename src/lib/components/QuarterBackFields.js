import React, { Component } from 'react'

class QuarterBackFields extends Component {
  handleChange = event => {
    const { target } = event
    const { value = null } = target

    const { handleFieldChange } = this.props
    handleFieldChange(value)
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
