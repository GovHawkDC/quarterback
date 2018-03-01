import React, { Component } from 'react'

class QuarterBackActionDelete extends Component {
  render () {
    // TODO: option to omit deletions?
    const { handleDeletion, index } = this.props

    if (index < 0) {
      return null
    }

    // TODO: On click...
    return <button onClick={() => handleDeletion(index)}>Delete</button>
  }
}

export default QuarterBackActionDelete
