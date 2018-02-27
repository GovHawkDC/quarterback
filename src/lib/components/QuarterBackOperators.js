import React, { Component } from 'react'

class QuarterBackOperators extends Component {
  handleChange = event => {
    const { target } = event
    const { value } = target

    const { handleOperatorChange } = this.props
    handleOperatorChange(value)
  }

  render () {
    const { operators } = this.props

    if (operators === null) {
      return null
    }

    // TODO: Allow for display values?
    return (
      <div className='QuarterBackOperators'>
        <select onChange={this.handleChange}>
          {operators.map((operator, index) => {
            return (
              <option key={index} value={operator}>
                {operator.replace(/_/g, ' ')}
              </option>
            )
          })}
        </select>
      </div>
    )
  }
}

export default QuarterBackOperators
