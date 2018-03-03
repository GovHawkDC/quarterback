// @flow
import * as React from 'react'
import type { Condition } from '../utils/Condition'
import type { Data, GroupCondition } from '../utils/Data'
import type { Field } from '../utils/Field'
import type { Type } from '../utils/Type'
import QuarterBackConditions from './QuarterBackConditions'
import QuarterBackActions from './QuarterBackActions'

type Props = {
  condition: string,
  conditions: Array<Condition>,
  fields: Array<Field>,
  index: number,
  types: Array<Type>,
  handleCreate: (data: Data) => void,
  handleUpdate: (fragment: GroupCondition) => void,
  handleDelete: (index: number) => void
}

class QuarterBackHeader extends React.Component<Props> {
  render () {
    <div className='QuarterBackHeader'>
      <QuarterBackConditions
        value={this.props.condition}
        conditions={this.props.conditions}
        handleUpdate={this.props.handleUpdate}
      />
      <QuarterBackActions
        fields={this.props.fields}
        index={this.props.index}
        types={this.props.types}
        handleCreate={this.props.handleCreate}
        handleDelete={this.props.handleDelete}
      />
    </div>
  }
}

export default QuarterBackHeader
