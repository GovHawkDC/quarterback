import React, { Component } from 'react'

class QuarterBackFields extends Component {
  render () {
    const { fields, handleFieldChange } = this.props

    return (
      <div className='QuarterBackFields'>
        <select onChange={handleFieldChange}>
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
