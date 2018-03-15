// @flow
import * as React from 'react'
import type { StyleClassMap } from '../../utils/StyleClassMap'
import type { SingleValue } from '../../utils/Value'
import {
  getInputPlaceholder,
  getInputType,
  getInputValue,
  parseInputValue
} from '../../utils/inputs'

type Props = {
  index: number,
  operator?: string,
  placeholder?: string,
  placeholderMap?: { [key: string]: string | Array<string> },
  styleClassMap: StyleClassMap,
  type: string,
  value: string,
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
      handleUpdate,
      type
    } = this.props

    const { target: { value } } = event

    handleUpdate(parseInputValue(value, type), index)
  }

  render () {
    const {
      index,
      operator,
      placeholder,
      placeholderMap,
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
        placeholder={getInputPlaceholder(
          placeholder,
          placeholderMap,
          operator,
          index
        )}
        type={getInputType(type)}
        value={getInputValue(value)}
        onChange={this.handleChange}
      />
    )
  }
}

export default Text
