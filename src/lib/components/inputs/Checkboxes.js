// @flow
import * as React from 'react'
import type { FieldValue } from '../../utils/Field'
import type { NonEmptyValue } from '../../utils/Value'
import Checkbox from './Checkbox'

type Props = {
  className?: string,
  index: number,
  values?: Array<FieldValue>,
  value: NonEmptyValue,
  handleUpdate: (value: NonEmptyValue, index: number) => void
}

class Checkboxes extends React.Component<Props> {
  static defaultProps = {
    index: -1
  }

  render () {
    if (!this.props.values) {
      return null
    }

    return (
      <div className={this.props.className}>
        {this.props.values.map((checkbox, index) => {
          return (
            <Checkbox
              key={index}
              checked={this.props.value}
              index={this.props.index}
              {...checkbox}
              handleUpdate={this.props.handleUpdate}
            />
          )
        })}
      </div>
    )
  }
}

export default Checkboxes
