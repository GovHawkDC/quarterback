// @flow
import * as React from 'react'
import type { FieldValue } from '../../utils/Field'
import type { StyleClassMap } from '../../utils/StyleClassMap'
import type { SingleValue } from '../../utils/Value'
import Option from './Option'
import { getInputValue, parseInputValue } from '../../utils/inputs'

type Props = {
  index: number,
  multiple: boolean,
  styleClassMap: StyleClassMap,
  values?: Array<FieldValue>,
  value: null | string,
  handleUpdate: (value: SingleValue, index: number) => void
}

class Select extends React.Component<Props> {
  static defaultProps = {
    index: -1,
    multiple: false,
    styleClassMap: {}
  }

  getValue (event) {
    const {
      multiple,
      type
    } = this.props

    const { target: { options, value } } = event

    if (!multiple) {
      return parseInputValue(value, type)
    }

    return [...options]
      .filter(option => option.selected)
      .map(option => parseInputValue(option.value, type))
  }

  handleChange = (event: SyntheticInputEvent<HTMLSelectElement>) => {
    const {
      index,
      handleUpdate
    } = this.props

    handleUpdate(this.getValue(event), index)
  }

  render () {
    const {
      multiple,
      styleClassMap,
      value,
      values
    } = this.props

    if (!values) {
      return null
    }

    const addInputClass = styleClassMap.QuarterBackInput != null
      ? styleClassMap.QuarterBackInput
      : ''

    const addClass = styleClassMap.QuarterBackSelect != null
      ? styleClassMap.QuarterBackSelect
      : ''

    return (
      <select
        className={`QuarterBackSelect ${addInputClass} ${addClass}`}
        multiple={multiple}
        value={getInputValue(value)}
        onChange={this.handleChange}
      >
        {values.map((option, index) => {
          return <Option key={index} {...option} />
        })}
      </select>
    )
  }
}

export default Select
