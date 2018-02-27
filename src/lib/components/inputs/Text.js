import React, { Component } from 'react'

class Text extends Component {
  render () {
    const { field, meta, input, value } = this.props
    const { numberOfInputs } = meta
    console.log(numberOfInputs)

    if (numberOfInputs > 1) {
      return (
        <div>
          {[...Array(numberOfInputs)].map((_, index) => {
            return (
              <input key={index} type={input} defaultValue={value[index]} />
            )
          })}
        </div>
      )
    }

    return (
      <div>
        <input type={input} defaultValue={value} />
      </div>
    )
  }
}

export default Text
