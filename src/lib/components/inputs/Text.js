import React, { Component } from 'react'

class Checkbox extends Component {
  render () {
    const { field, meta, input } = this.props
    const { numberOfInputs } = meta
    console.log(numberOfInputs)

    if (numberOfInputs > 1) {
      return (
        <div>
          {[...Array(numberOfInputs)].map((_, index) => {
            return <input key={index} type={input} />
          })}
        </div>
      )
    }

    return (
      <div>
        <input type={input} />
      </div>
    )
  }
}

export default Checkbox
