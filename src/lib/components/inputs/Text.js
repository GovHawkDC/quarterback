// @flow
import * as React from 'react'
import type { StyleClassMap } from '../../utils/StyleClassMap'
import type { SingleValue } from '../../utils/Value'
import { getInputType } from '../../utils/inputs'

type Props = {
  index: number,
  value: string,
  styleClassMap: StyleClassMap,
  type: string,
  handleUpdate: (value: SingleValue, index: number) => void
}

class Text extends React.Component<Props> {
  static defaultProps = {
    index: -1,
    styleClassMap: {},
    type: 'string'
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
        type={getInputType(type)}
        value={value}
        onChange={this.handleChange}
      />
    )
  }
}

export default Text
