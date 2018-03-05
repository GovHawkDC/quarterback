// @flow
import * as React from 'react'
import type { Action } from '../utils/Action'
import type { Data } from '../utils/Data'
import type { Field } from '../utils/Field'
import type { Type } from '../utils/Type'
import { ruleAction, groupAction } from '../utils/actions'
import QuarterBackActionCreate from './QuarterBackActionCreate'
import QuarterBackActionDelete from './QuarterBackActionDelete'

type Props = {
  fields: Array<Field>,
  index: number,
  types: Array<Type>,
  handleCreate: (data: Data) => void,
  handleDelete: (index: number) => void
}

class QuarterBackActions extends React.Component<Props> {
  getActions (): Array<Action> {
    if (this.props.fields.length > 0) {
      return [ruleAction, groupAction]
    }

    const actions = this.props.types.map(type => type.action)

    if (actions.length < 1) {
      return []
    }

    return [...actions, groupAction]
  }

  render () {
    return (
      <div className='QuarterBackActions'>
        {this.getActions().map((action, index) => {
          return (
            <QuarterBackActionCreate
              key={index}
              action={action}
              fields={this.props.fields}
              handleCreate={this.props.handleCreate}
            />
          )
        })}
        <QuarterBackActionDelete
          index={this.props.index}
          handleDelete={this.props.handleDelete}
        />
      </div>
    )
  }
}

export default QuarterBackActions
