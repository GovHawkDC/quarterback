// @flow
import * as React from 'react'
import type { StyleClassMap } from '../../utils/StyleClassMap'
import type { SingleValue } from '../../utils/Value'

type Props = {
  index: number,
  value: string,
  styleClassMap: StyleClassMap,
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
        value={value}
        onChange={this.handleChange}
      />
    )
  }
}

export default Textarea
