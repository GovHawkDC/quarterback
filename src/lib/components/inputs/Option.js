// @flow
import * as React from 'react'

type Props = {
  label: string,
  value: string
}

class Option extends React.Component<Props> {
  render () {
    const {
      label,
      value
    } = this.props

    return <option value={value}>{label}</option>
  }
}

export default Option
