// @flow
import * as React from 'react'
import type { Field } from '../utils/Field'
import type { Rule } from '../utils/Rule'
import Text from './inputs/Text'

type Props = {
  field: Field,
  index: number,
  rule: Rule,
  handleUpdate: (data: Rule, index: number) => void
}

class QuarterBackValues extends React.Component<Props> {
  handleChange = (value, index) => {
    const values = typeof this.props.rule.value === 'string'
      ? [this.props.rule.value]
      : this.props.rule.value
    const v = Object.assign([], [...values], { [index]: value })
    const data = {
      ...this.props.rule,
      value: v.length === 1 ? v.join('') : v
    }
    this.props.handleUpdate(data, this.props.index)
  }

  render () {
    if (this.props.rule.value === null) {
      return null
    }

    const values = typeof this.props.rule.value === 'string'
      ? [this.props.rule.value]
      : this.props.rule.value

    switch (this.props.field.input) {
      case 'number':
      case 'text':
        return (
          <Text
            type={this.props.field.input}
            values={values}
            handleChange={this.handleChange}
          />
        )
      default:
        return null // TODO:
    }
  }
}

export default QuarterBackValues
