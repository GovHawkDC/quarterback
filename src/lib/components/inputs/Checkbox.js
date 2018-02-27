import React, { Component } from 'react'

class Checkbox extends Component {
  render () {
    const { field } = this.props
    const { values } = field

    if (!values) {
      return null
    }

    return (
      <div>
        {values.map((val, index) => {
          const [value, display] = val
          return (
            <div key={index}>
              <input type='checkbox' value={value} />
              <label htmlFor=''>{display || value}</label>
            </div>
          )
        })}
      </div>
    )
  }
}

export default Checkbox
