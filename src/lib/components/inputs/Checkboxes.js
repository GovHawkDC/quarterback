// @flow
import * as React from 'react'
import type { FieldValue } from '../../utils/Field'
import Checkbox from './Checkbox'

type Props = {
  className?: string,
  index: number,
  values?: Array<FieldValue>,
  value: string,
  handleUpdate: (value: string, index: number) => void
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
