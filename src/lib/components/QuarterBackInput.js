import React, { Component } from 'react'
import Checkbox from './inputs/Checkbox'
import Text from './inputs/Text'

class QuarterBackInput extends Component {
  render () {
    const { field, meta, operator } = this.props
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
        return <Checkbox {...this.props} />
      case 'number':
        return <Text {...this.props} />
      // case 'radio':
      // case 'select':
      case 'text':
        return <Text {...this.props} />
      // case 'textarea':
    }
  }
}

export default QuarterBackInput
