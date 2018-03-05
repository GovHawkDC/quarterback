import * as React from 'react'
import type { Condition } from './Condition'
import type { Field } from './Field'
import type { Group } from './Group'
import type { Type } from './Type'
import { groupAction } from '../utils/actions'
import QuarterBackGroup from './QuarterBackGroup'

type Props = {
  conditions?: Array<Condition>,
  fields?: Array<Field>,
  rules?: Group,
  types?: Array<Type>
}

class QuarterBack extends React.Component<Props> {
  constructor (props: Props) {
    super(props)

    this.state = {
      ...groupAction.getDefaultData(),
      ...props.rules
    }
  }

  handleUpdate (data: Group) {
    this.setState(prevState => {
      return {
        ...prevState,
        ...data
      }
    })
  }

  render () {
    return (
      <QuarterBackGroup
        conditions={this.props.conditions}
        fields={this.props.fields}
        group={this.state}
        types={this.props.types}
        handleUpdate={this.handleUpdate}
      />
    )
  }
}

export default QuarterBack
