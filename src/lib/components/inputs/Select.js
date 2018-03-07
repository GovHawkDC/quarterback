// @flow
import * as React from 'react'
import type { FieldValue } from '../../utils/Field'
import type { StyleClassMap } from './StyleClassMap'
import type { NonEmptyValue } from '../../utils/Value'
import Option from './Option'

type Props = {
  index: number,
  styleClassMap: StyleClassMap,
  values?: Array<FieldValue>,
  value: string,
  handleUpdate: (value: NonEmptyValue, index: number) => void
}

class Select extends React.Component<Props> {
  static defaultProps = {
    index: -1,
    styleClassMap: {}
  }

  handleChange = (event: SyntheticInputEvent<HTMLSelectElement>) => {
    this.props.handleUpdate(event.target.value, this.props.index)
  }

  render () {
    const {
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
        onChange={this.handleChange}
        value={value}>
        {values.map((option, index) => {
          return <Option key={index} {...option} />
        })}
      </select>
    )
  }
}

export default Select
