import React, { Component } from 'react'
import QuarterBackActionDelete from './QuarterBackActionDelete'

class QuarterBackActions extends Component {
  render () {
    const { actions, handleDeletion, index, types } = this.props
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
        <QuarterBackActionDelete
          handleDeletion={handleDeletion}
          index={index}
        />
      </div>
    )
  }
}

export default QuarterBackActions
