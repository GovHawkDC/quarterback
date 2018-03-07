// @flow
import * as React from 'react'
import type { StyleClassMap } from './StyleClassMap'
import type { NonEmptyValue } from '../../utils/Value'

type Props = {
  index: number,
  value: string,
  styleClassMap: StyleClassMap,
  type: string,
  handleUpdate: (value: NonEmptyValue, index: number) => void
}

class Text extends React.Component<Props> {
  static defaultProps = {
    index: -1,
    styleClassMap: {},
    type: 'text'
  }

  handleChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    const {
      index,
      handleUpdate
    } = this.props

    const { target: { value } } = event

    handleUpdate(value, index)
  }

  render () {
    const {
      styleClassMap,
      type,
      value
    } = this.props

    const addInputClass = styleClassMap.QuarterBackInput != null
      ? styleClassMap.QuarterBackInput
      : ''

    const addClass = styleClassMap.QuarterBackText != null
      ? styleClassMap.QuarterBackText
      : ''

    return (
      <input
        className={`QuarterBackText ${addInputClass} ${addClass}`}
        type={type}
        value={value}
        onChange={this.handleChange}
      />
    )
  }
}

export default Text
