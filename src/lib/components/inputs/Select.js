// @flow
import * as React from 'react'
import type { FieldValue } from '../../utils/Field'
import Option from './Option'

type Props = {
  className?: string,
  index: number,
  values?: Array<FieldValue>,
  value: string,
  handleUpdate: (value: string, index: number) => void
}

class Select extends React.Component<Props> {
  static defaultProps = {
    index: -1
  }

  handleChange = (event: SyntheticInputEvent<HTMLSelectElement>) => {
    this.props.handleUpdate(event.target.value, this.props.index)
  }

  render () {
    if (!this.props.values) {
      return null
    }

    return (
      <select className={this.props.className} onChange={this.handleChange} value={this.props.value}>
        {this.props.values.map((option, index) => {
          return <Option key={index} {...option} />
        })}
      </select>
    )
  }
}

export default Select
