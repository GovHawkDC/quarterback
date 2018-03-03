// @flow
import * as React from 'react'
import type { Data, Rule } from '../utils/Data'
import QuarterBackFields from './QuarterBackFields'
import QuarterBackInput from './QuarterBackInput'
import QuarterBackOperators from './QuarterBackOperators'
import QuarterBackActionDelete from './QuarterBackActionDelete'

type Props = {
  // fields
  index: number,
  rule: Rule,
  handleUpdate: (data: Data, index: number) => void,
  handleDelete: (index: number) => void
}

class QuarterBackRule extends React.Component<Props> {
  render () {
    return (
      <div className='QuarterBackRuleWrapper'>
        <div className='QuarterBackRule'>
          <QuarterBackFields
            index={this.props.index}
            rule={this.props.rule}
            handleUpdate={this.props.handleUpdate}
          />
          <QuarterBackOperators
            // field
            index={this.props.index}
            rule={this.props.rule}
            handleUpdate={this.props.handleUpdate}
          />
          <QuarterBackInput
            index={this.props.index}
            rule={this.props.rule}
            handleUpdate={this.props.handleUpdate}
          />
        </div>
        <div className='QuarterBackActions'>
          <QuarterBackActionDelete
            index={index}
            handleDelete={this.props.handleDelete}
          />
        </div>
      </div>
    )
  }
}

export default QuarterBackRule
