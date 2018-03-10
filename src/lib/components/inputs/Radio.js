// @flow
import * as React from 'react'
import type { StyleClassMap } from '../../utils/StyleClassMap'
import type { SingleValue } from '../../utils/Value'

type Props = {
  checked: string | Array<string>,
  index: number,
  label: string,
  styleClassMap: StyleClassMap,
  value: string,
  handleUpdate: (value: SingleValue, index: number) => void
}

class Radio extends React.Component<Props> {
  static defaultProps = {
    index: -1,
    styleClassMap: {}
  }

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const {
      index,
      value,
      handleUpdate
    } = this.props

    const { target: { checked } } = event

    if (!checked) {
      return
    }

    handleUpdate(value, index)
  }

  render () {
    const {
      checked,
      label,
      styleClassMap,
      value
    } = this.props

    const isChecked = checked === value

    const addInputClass = styleClassMap.QuarterBackInput != null
      ? styleClassMap.QuarterBackInput
      : ''

    const addClass = styleClassMap.QuarterBackRadio != null
      ? styleClassMap.QuarterBackRadio
      : ''

    return (
      <label>
        <input
          checked={isChecked}
          className={`QuarterBackRadio ${addInputClass} ${addClass}`}
          type='radio'
          onChange={this.handleChange}
        />{' '}
        {label}
      </label>
    )
  }
}

export default Radio
