import React, { Component } from 'react'
import QuarterBackRoot from './QuarterBackRoot'

class QuarterBack extends Component {
  constructor (props) {
    super(props)

    const { QB, preloadedState } = props
    const { condition = '', rules = [] } = preloadedState

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
    console.log('from QB!!')
    console.log(this.state)
    const props = { ...this.props, handleChange: this.handleChange }

    return <QuarterBackRoot {...props} />
  }
}

export default QuarterBack
