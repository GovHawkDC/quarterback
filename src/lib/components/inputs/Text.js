import React, { Component } from 'react'

class Text extends Component {
  handleValueChange = (index, event) => {
    const { target } = event
    const { value } = target

    const { handleValueChange } = this.props

    if (index < 0) {
      handleValueChange(value)
    } else {
      handleValueChange(
        Object.assign([], [...this.props.value], {
          [index]: value
        })
      )
    }
  }

  render () {
    const { meta, input, value } = this.props
    const { numberOfInputs } = meta

    // TODO: Is onChange running too many times?
    if (numberOfInputs > 1) {
      return (
        <div>
          {[...Array(numberOfInputs)].map((_, index) => {
            return (
              <input
                key={index}
                type={input}
                defaultValue={value[index]}
                onChange={event => this.handleValueChange(index, event)}
              />
            )
          })}
        </div>
      )
    }

    return (
      <div>
        <input
          type={input}
          defaultValue={value}
          onChange={event => this.handleValueChange(-1, event)}
        />
      </div>
    )
  }
}

export default Text
