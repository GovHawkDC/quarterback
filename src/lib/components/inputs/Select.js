// @flow
import * as React from 'react'
import type { SelectValue } from '../utils/SelectValue'
import Option from './Option'

type Props = {
  className?: string,
  index?: number,
  values: Array<SelectValue>,
  value: string,
  handleUpdate: (value: string, index?: number) => void
}

class Select extends React.Component<Props> {
  handleChange = (event) => {
    this.props.handleUpdate(event.target.value, this.props.index)
  }

  render () {
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
