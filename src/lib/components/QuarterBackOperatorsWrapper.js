import React, { Component } from 'react'
import { getDefaultOperators } from './utils'
import QuarterBackOperators from './QuarterBackOperators'

class QuarterBackOperatorsWrapper extends Component {
  getOperators () {
    const { field } = this.props

    if (field === null) {
      return null
    }

    const { type } = field
    const { operators = getDefaultOperators(type) } = field

    return operators.length > 0 ? operators : null
  }

  render () {
    const operators = this.getOperators()

    if (operators === null) {
      return null
    }

    const { field, handleOperatorChange } = this.props

    return (
      <QuarterBackOperators
        operators={operators}
        field={field}
        handleOperatorChange={handleOperatorChange}
      />
    )
  }
}

export default QuarterBackOperatorsWrapper
