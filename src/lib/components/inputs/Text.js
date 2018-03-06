// @flow
import * as React from 'react'
import type { NonEmptyValue } from '../../utils/Value'

type Props = {
  index: number,
  value: string,
  type: string,
  handleUpdate: (value: NonEmptyValue, index: number) => void
}

class Text extends React.Component<Props> {
  static defaultProps = {
    index: -1,
    type: 'text'
  }

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.props.handleUpdate(event.target.value, this.props.index)
  }

  render () {
    return (
      <input
        type={this.props.type}
        value={this.props.value}
        onChange={this.handleChange}
      />
    )
  }
}

export default Text
