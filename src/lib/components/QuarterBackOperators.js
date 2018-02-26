import React, { Component } from 'react'

const ALL_OPERATORS = []

class QuarterBackOperators extends Component {
  render () {
    const { operators } = this.props

    return (
      <select>
        {operators.map(operator => {
          return <option value={operator}>{operator.replace(/_/g, '')}</option>
        })}
      </select>
    )
  }
}

export default QuarterBackOperators
