// @flow
import * as React from 'react'
import type { Action } from '../utils/Action'
import type { Data } from '../utils/Data'
import type { Field } from '../utils/Field'

type Props = {
  action: Action,
  fields: Array<Field>,
  handleCreate: (data: Data) => void
}

class QuarterBackActionCreate extends React.Component<Props> {
  handleClick = event => {
    event.preventDefault()
    this.props.handleCreate(this.props.action.getDefaultData(this.props.fields))
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
