import React, { Component } from 'react'
import { ROOT_COMPONENT_ID } from './helpers/constants'
import QuarterBackRoot from './QuarterBackRoot'

// const defaultProps = {
//   QB: ROOT_COMPONENT_ID,
//   action: '',
//   actions: [
//     { QB: RULE_ID, action: 'Add rule' },
//     { QB: GROUP_ID, action: 'Add group' }
//   ],
//   conditions: [
//     { condition: 'and', display: 'AND' },
//     { condition: 'or', display: 'OR' }
//   ],
//   fields: [],
//   title: '',
//   types: []
// }

class QuarterBack extends Component {
  constructor (props) {
    super(props)

    const { preloadedState } = props
    const {
      QB = ROOT_COMPONENT_ID,
      condition = '',
      rules = []
    } = preloadedState

    this.state = {
      QB,
      condition,
      rules
    }
  }

  handleChange = (_index, changes) => {
    this.setState(prevState => {
      return {
        ...prevState,
        ...changes
      }
    })
  }

  render () {
    const props = {
      ...this.props,
      handleChange: this.handleChange,
      preloadedState: this.state
    }

    return <QuarterBackRoot {...props} />
  }
}

export default QuarterBack
