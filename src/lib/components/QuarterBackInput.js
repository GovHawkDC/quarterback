import React, { Component } from 'react'
import Checkbox from './inputs/Checkbox'
import Text from './inputs/Text'

class QuarterBackInput extends Component {
  render () {
    const { field, meta, operator, value } = this.props
    const { input } = field

    // TODO: field ===  ||
    if (operator === '') {
      return null
    }

    const { numberOfInputs } = meta

    if (numberOfInputs < 1) {
      return null
    }

    switch (input) {
      case 'checkbox':
        return <Checkbox field={field} meta={meta} value={value} />
      case 'number':
        return <Text field={field} meta={meta} input={input} value={value} />
      // case 'radio':
      // case 'select':
      case 'text':
        return <Text field={field} meta={meta} input={input} value={value} />
      // case 'textarea':
    }
  }
}

export default QuarterBackInput
