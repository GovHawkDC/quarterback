// @flow
import * as React from 'react'
import type { Data } from '../utils/Data'
import type { Field } from '../utils/Field'
import type { Rule } from '../utils/Rule'

type Props = {
  field: Field,
  index: number,
  rule: Rule,
  handleUpdate: (data: Data, index: number) => void
}

class QuarterBackOperators extends React.Component<Props> {
  handleChange = event => {
    // TODO: value...
    const fragment = { operator: event.target.value }
    const rule = { ...this.props.rule, ...fragment }
    this.props.handleUpdate(rule, this.props.index)
  }

  render () {
    const { operator, operators } = this.props

    if (operator === '' || operators.length < 1) {
      return null
    }

    return (
      <div className='QuarterBackOperators'>
        <select onChange={this.handleChange} value={operator}>
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
