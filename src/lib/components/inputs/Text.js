import React, { Component } from 'react'

class Text extends Component {
  handleChange = (event, index) => {
    this.props.handleChange(event.target.value, index)
  }

  render () {
    return (
      <div>
        {this.props.values.map((value, index) => {
          return (
            <input
              key={index}
              type={this.props.type}
              value={value}
              onChange={event => this.handleChange(event, index)}
            />
          )
        })}
      </div>
    )
  }
}

export default Text
