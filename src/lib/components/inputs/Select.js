// @flow
import * as React from 'react'
import Option from './Option'

type Props = {
  className?: string,
  options: Array<{label: string, value: string}>,
  value: string,
  handleChange: (event: React.SyntheticEvent<React.HTMLSelectElement>) => void
}

class Select extends React.Component<Props> {
  render () {
    return (
      <select className={this.props.className} onChange={this.props.handleChange} value={this.props.value}>
        {this.props.options.map((option, index) => {
          return <Option key={index} {...option} />
        })}
      </select>
    )
  }
}

export default Select
