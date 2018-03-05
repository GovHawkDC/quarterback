// @flow
import * as React from 'react'
import type { Action } from '../utils/Action'
import type { Data } from '../utils/Data'

type Props = {
  action: Action,
  handleCreate: (data: Data) => void
}

class QuarterBackActionCreate extends React.Component<Props> {
  handleClick = event => {
    event.preventDefault()
    this.props.handleCreate(this.props.action.getDefaultData())
  }

  render () {
    return (
      <button className='QuarterBackActionCreate' onClick={this.handleClick}>
        {this.props.action.display}
      </button>
    )
  }
}

export default QuarterBackActionCreate