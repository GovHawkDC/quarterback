import React, { Component } from 'react'

class QuarterBackActions extends Component {
  render () {
    const { actions, types } = this.props
    const actionItems = types.length > 0 ? types : actions

    return (
      <div className='QuarterBackActions'>
        {actionItems.map((actionItem, index) => {
          const { action, componentId } = actionItem
          return (
            <button key={index} onClick={() => console.log(componentId)}>
              {action}
            </button>
          )
        })}
      </div>
    )
  }
}

export default QuarterBackActions
