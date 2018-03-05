// @flow
import * as React from 'react'

type Props = {
  label: string,
  value: string
}

class Option extends React.Component<Props> {
  render () {
    return (
      <option value={this.props.value}>{this.props.label}</option>
    )
  }
}

export default Option
