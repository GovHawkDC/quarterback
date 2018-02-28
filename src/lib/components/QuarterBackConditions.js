import React, { Component } from 'react'

class QuarterBackConditions extends Component {
  render () {
    const { conditions } = this.props

    return (
      <div className='QuarterBackConditions'>
        {conditions.map((cond, index) => {
          const { condition, display } = cond
          return (
            <button key={index} onClick={() => console.log(condition)}>
              {display}
            </button>
          )
        })}
      </div>
    )
  }
}

export default QuarterBackConditions
