// @flow
import * as React from 'react'

type Props = {
  checked: string | Array<string>,
  index: number,
  label: string,
  value: string,
  handleUpdate: (value: string, index: number) => void
}

class Checkbox extends React.Component<Props> {
  static defaultProps = {
    index: -1
  }

  getSingleValue (checked: boolean): string {
    return checked ? this.props.value : ''
  }

  getMultiValue (checked: boolean): Array<string> {
    const valuePresent = this.props.values.includes(this.props.value)

    if (checked) {
      return valuePresent
        ? this.props.values
        : [...this.props.values, this.props.value]
    }

    return valuePresent
      ? this.props.values.filter(value => value !== this.props.value)
      : this.props.values
  }

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const value = typeof this.props.checked === 'string'
      ? this.getSingleValue(event.target.checked)
      : this.getMultiValue(event.target.checked)
    this.props.handleUpdate(value, this.props.index)
  }

  render () {
    const checked = typeof this.props.checked === 'string'
      ? this.props.value === this.props.checked
      : this.props.checked.includes(this.props.value)

    return (
      <label>
        <input checked={checked} type='checkbox' />
        {this.props.label}
      </label>
    )
  }
}

export default Checkbox
