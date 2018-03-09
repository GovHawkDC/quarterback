// @flow
import * as React from 'react'
import type { StyleClassMap } from '../../utils/StyleClassMap'
import type { NonEmptyValue } from '../../utils/Value'

type Props = {
  checked: string | Array<string>,
  index: number,
  label: string,
  styleClassMap: StyleClassMap,
  value: string,
  handleUpdate: (value: NonEmptyValue, index: number) => void
}

class Checkbox extends React.Component<Props> {
  static defaultProps = {
    index: -1,
    styleClassMap: {}
  }

  getSingleValue (checked: boolean): string {
    return checked ? this.props.value : ''
  }

  getMultiValue (checked: boolean): Array<string> {
    const valuePresent = this.props.checked.includes(this.props.value)

    if (checked) {
      return valuePresent
        ? this.props.checked
        : [...this.props.checked, this.props.value]
    }

    return valuePresent
      ? this.props.checked.filter(value => value !== this.props.value)
      : this.props.checked
  }

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const value = typeof this.props.checked === 'string'
      ? this.getSingleValue(event.target.checked)
      : this.getMultiValue(event.target.checked)
    this.props.handleUpdate(value, this.props.index)
  }

  render () {
    const {
      checked,
      label,
      styleClassMap,
      value
    } = this.props

    const isChecked = typeof checked === 'string'
      ? value === checked
      : checked.includes(value)

    const addInputClass = styleClassMap.QuarterBackInput != null
      ? styleClassMap.QuarterBackInput
      : ''

    const addClass = styleClassMap.QuarterBackCheckbox != null
      ? styleClassMap.QuarterBackCheckbox
      : ''

    return (
      <label>
        <input
          checked={isChecked}
          className={`QuarterBackCheckbox ${addInputClass} ${addClass}`}
          type='checkbox'
          onChange={this.handleChange}
        />{' '}
        {label}
      </label>
    )
  }
}

export default Checkbox
