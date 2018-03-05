// @flow
import * as React from 'react'
import type { Data } from '../utils/Data'
import type { Field } from '../utils/Field'
import type { Rule } from '../utils/Rule'
import { getFieldById } from '../utils/fields'
import QuarterBackFields from './QuarterBackFields'
import QuarterBackOperators from './QuarterBackOperators'
import QuarterBackValues from './QuarterBackValues'
import QuarterBackActionDelete from './QuarterBackActionDelete'

type Props = {
  fields: Array<Field>,
  index: number,
  rule: Rule,
  handleUpdate: (data: Data, index: number) => void,
  handleDelete: (index: number) => void
}

class QuarterBackRule extends React.Component<Props> {
  render () {
    const field = getFieldById(this.props.fields, this.props.rule.id)

    return (
      <div className='QuarterBackRuleWrapper'>
        <div className='QuarterBackRule'>
          <QuarterBackFields
            fields={this.props.fields}
            index={this.props.index}
            rule={this.props.rule}
            handleUpdate={this.props.handleUpdate}
          />
          <QuarterBackOperators
            field={field}
            index={this.props.index}
            rule={this.props.rule}
            handleUpdate={this.props.handleUpdate}
          />
          <QuarterBackValues
            field={field}
            index={this.props.index}
            rule={this.props.rule}
            handleUpdate={this.props.handleUpdate}
          />
        </div>
        <div className='QuarterBackActions'>
          <QuarterBackActionDelete
            index={this.props.index}
            handleDelete={this.props.handleDelete}
          />
        </div>
      </div>
    )
  }
}

export default QuarterBackRule
