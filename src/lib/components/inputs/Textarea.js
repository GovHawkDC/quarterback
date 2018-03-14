// @flow
import * as React from 'react'
import type { StyleClassMap } from '../../utils/StyleClassMap'
import type { SingleValue } from '../../utils/Value'
import { getInputPlaceholder } from '../../utils/inputs'

type Props = {
  index: number,
  operator?: string,
  placeholder?: string,
  placeholderMap?: { [key: string]: string | Array<string> },
  styleClassMap: StyleClassMap,
  value: string,
  handleUpdate: (value: SingleValue, index: number) => void
}

class Textarea extends React.Component<Props> {
  static defaultProps = {
    index: -1,
    styleClassMap: {}
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
      index,
      operator,
      placeholder,
      placeholderMap,
      styleClassMap,
      value
    } = this.props

    const addInputClass = styleClassMap.QuarterBackInput != null
      ? styleClassMap.QuarterBackInput
      : ''

    const addClass = styleClassMap.QuarterBackTextarea != null
      ? styleClassMap.QuarterBackTextarea
      : ''

    return (
      <textarea
        className={`QuarterBackText ${addInputClass} ${addClass}`}
        placeholder={getInputPlaceholder(
          placeholder,
          placeholderMap,
          operator,
          index
        )}
        value={value}
        onChange={this.handleChange}
      />
    )
  }
}

export default Textarea
