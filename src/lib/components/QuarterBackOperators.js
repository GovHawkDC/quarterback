import React, { Component } from 'react'

class QuarterBackOperators extends Component {
  handleChange = event => {
    const { target } = event
    const { value } = target

    const { handleOperatorChange } = this.props
    handleOperatorChange(value)
  }

  getDefaultOperatorValue () {
    const { operators } = this.props

    return operators === null ? null : operators[0]
  }

  handleDefaultOperator () {
    const value = this.getDefaultOperatorValue()

    if (value === null) {
      return
    }

    const { handleOperatorChange } = this.props
    handleOperatorChange(value)
  }

  componentDidMount () {
    this.handleDefaultOperator()
  }

  render () {
    const { operators } = this.props

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
