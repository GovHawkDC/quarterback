// @flow
import * as React from 'react'

type Props = {
  index?: number,
  value: string,
  type: string,
  handleUpdate: (value: string, index: number) => void
}

class Text extends React.Component<Props> {
  handleChange = (event) => {
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
