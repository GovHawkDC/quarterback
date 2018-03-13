// @flow
import * as React from 'react'

type Props = {
  inputsSeparator: string,
  index: number,
  numValues: number
}

class Separator extends React.Component<Props> {
  render () {
    const {
      inputsSeparator,
      index,
      numValues,
      styleClassMap
    } = this.props

    if (!inputsSeparator || (index + 1) >= numValues) {
      return null
    }

    const addClass = styleClassMap.QuarterBackInputSeparator || ''

    return (
      <span className={`QuarterBackInputSeparator ${addClass}`}>
        {inputsSeparator}
      </span>
    )
  }
}

export default Separator
