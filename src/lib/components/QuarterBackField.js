import React, { Component } from 'react'

class QuarterBackField extends Component {
  state = {
    fieldId: null
  }

  handleFieldChange = event => {
    this.props.handleFieldChange(this.props.index)
  }

  handleDeleteClick = event => {
    this.props.handleFieldDeletion(this.props.index)
  }

  render () {
    console.log('ere');
    return (
      <div className='QuarterBackField'>

        <div onChange={this.handleFieldChange}>
          <select>
            {this.props.fields.map((field, index) => {
              return (
                <option key={index} value={field.id}>{field.label}</option>
              )
            })}
          </select>
        </div>

        <button onClick={this.handleDeleteClick}>Delete</button>

      </div>
    )
  }
}

export default QuarterBackField
