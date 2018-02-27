import React, { Component } from 'react'
import { getOperatorMeta } from './utils'
import Checkbox from './inputs/Checkbox'
import Text from './inputs/Text'

class QuarterBackInput extends Component {
  render () {
    const { field, operator } = this.props

    if (field === null || operator === null) {
      return null
    }

    const meta = getOperatorMeta(operator)
    const { numberOfInputs } = meta

    if (numberOfInputs < 1) {
      return null
    }

    const { input } = field

    switch (input) {
      case 'checkbox':
        return <Checkbox field={field} meta={meta} />
      case 'number':
        return <Text field={field} meta={meta} input={input} />
      // case 'radio':
      // case 'select':
      case 'text':
        return <Text field={field} meta={meta} input={input} />
      // case 'textarea':
    }
  }
}

export default QuarterBackInput
