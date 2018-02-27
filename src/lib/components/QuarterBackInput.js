import React, { Component } from 'react'
import { getOperatorMeta, parseValue } from './utils'
import Checkbox from './inputs/Checkbox'
import Text from './inputs/Text'

class QuarterBackInput extends Component {
  render () {
    const { field, operator, value } = this.props

    if (field === null || operator === null) {
      return null
    }

    const meta = getOperatorMeta(operator)
    const { numberOfInputs } = meta

    if (numberOfInputs < 1) {
      return null
    }

    const { input } = field
    const parsedValue = parseValue(value, field, meta)

    switch (input) {
      case 'checkbox':
        return <Checkbox field={field} meta={meta} value={parsedValue} />
      case 'number':
        return (
          <Text field={field} meta={meta} input={input} value={parsedValue} />
        )
      // case 'radio':
      // case 'select':
      case 'text':
        return (
          <Text field={field} meta={meta} input={input} value={parsedValue} />
        )
      // case 'textarea':
    }
  }
}

export default QuarterBackInput
