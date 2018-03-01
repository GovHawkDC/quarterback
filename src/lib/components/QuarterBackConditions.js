import React, { Component } from 'react'

class QuarterBackConditions extends Component {
  handleChange = condition => {
    const { handleChange } = this.props
    handleChange({ condition })
  }

  render () {
    const { condition, conditions } = this.props

    return (
      <div className='QuarterBackConditions'>
        {conditions.map((cond, index) => {
          const activeClassName =
            cond.condition === condition ? 'QuarterBackConditionActive' : ''

          return (
            <button
              className={`QuarterBackCondition ${activeClassName}`}
              key={index}
              onClick={() => this.handleChange(cond.condition)}
            >
              {cond.display}
            </button>
          )
        })}
      </div>
    )
  }
}

export default QuarterBackConditions
