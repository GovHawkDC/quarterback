import React, { Component } from 'react'
import QuarterBackActionDelete from './QuarterBackActionDelete'

class QuarterBackActions extends Component {
  render () {
    const { actions, handleAdd, handleDeletion, index, types } = this.props
    const actionItems = types.length > 0 ? types : actions

    return (
      <div className='QuarterBackActions'>
        {actionItems.map((actionItem, index) => {
          const { QB, action } = actionItem
          return (
            <button key={index} onClick={() => handleAdd(QB)}>
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
