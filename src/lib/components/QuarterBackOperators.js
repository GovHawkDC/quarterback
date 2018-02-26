import React, { Component } from 'react'

const ALL_OPERATORS = [
  'equal',
  'not_equal',
  'in',
  'not_in',
  'less',
  'less_or_equal',
  'greater',
  'greater_or_equal',
  'between',
  'not_between',
  'begins_with',
  'not_begins_with',
  'contains',
  'not_contains',
  'ends_with',
  'not_ends_with',
  'is_empty',
  'is_not_empty',
  'is_null',
  'is_not_null'
]

class QuarterBackOperators extends Component {
  getDefaultOperatorValue () {
    const { field } = this.props

    if (field === null) {
      return null
    }

    const { operators = ALL_OPERATORS } = field

    return operators[0]
  }

  handleDefaultOperator () {
    const value = this.getDefaultOperatorValue()

    if (value === null) {
      return
    }

    const { handleOperatorChange } = this.props
    handleOperatorChange(value)
  }

  handleChange = event => {
    const { target } = event
    const { value } = target

    const { handleOperatorChange } = this.props
    handleOperatorChange(value)
  }

  componentDidMount () {
    this.handleDefaultOperator()
  }

  componentDidUpdate () {
    this.handleDefaultOperator()
  }

  render () {
    const { field } = this.props

    if (field === null) {
      return null
    }

    const { operators = ALL_OPERATORS } = field

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
