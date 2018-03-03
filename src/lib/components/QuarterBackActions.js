// @flow
import * as React from 'react'
import type { Action } from '../utils/Action'
import type { Data } from '../utils/Data'
import { ruleAction, groupAction } from '../utils/actions'
import QuarterBackActionCreate from './QuarterBackActionCreate'
import QuarterBackActionDelete from './QuarterBackActionDelete'

type Props = {
  // fields
  index: number,
  // types
  handleCreate: (data: Data) => void,
  handleDelete: (index: number) => void
}

class QuarterBackActions extends React.Component<Props> {
  render () {
    // TODO: Just for testing out...
    const actions: Array<Action> = [ruleAction, groupAction]
    return (
      <div className='QuarterBackActions'>
        {/* TODO: Iter type actions if available... */}
        {actions.map((action, index) => {
          return (
            <QuarterBackActionCreate
              key={index}
              action={action}
              handleCreate={this.props.handleCreate}
            />
          )
        })}
        <QuarterBackActionDelete
          index={index}
          handleDelete={this.props.handleDelete}
        />
      </div>
    )
  }
}

export default QuarterBackActions
