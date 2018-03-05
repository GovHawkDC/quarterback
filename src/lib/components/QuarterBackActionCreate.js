// @flow
import * as React from 'react'
import type { Action } from '../utils/Action'
import type { Data } from '../utils/Data'
import type { Field } from '../utils/Field'
import type { Type } from '../utils/Type'
import { QB_RULE, QB_GROUP } from '../utils/constants'
import { getTypeByQB } from '../utils/types'

type Props = {
  action: Action,
  fields: Array<Field>,
  types: Array<Type>,
  handleCreate: (data: Data) => void
}

class QuarterBackActionCreate extends React.Component<Props> {
  getActionData () {
    const { QB } = this.props.action

    switch (QB) {
      case QB_RULE:
        return this.props.action.getDefaultData()
      case QB_GROUP:
        return this.props.action.getDefaultData(this.props.fields)
      default:
        const type = getTypeByQB(this.props.types, QB)
        return this.props.action.getDefaultData(type.fields)
    }
  }

  handleClick = event => {
    event.preventDefault()
    this.props.handleCreate(this.getActionData())
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
