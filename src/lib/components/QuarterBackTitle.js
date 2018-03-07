// @flow
import * as React from 'react'
import type { StyleClassMap } from './StyleClassMap'

type Props = {
  styleClassMap: StyleClassMap,
  title?: string
}

class QuarterBackTitle extends React.Component<Props> {
  render () {
    const {
      styleClassMap,
      title
    } = this.props

    if (!title) {
      return null
    }

    const addClass = styleClassMap.QuarterBackTitle != null
      ? styleClassMap.QuarterBackTitle
      : ''

    return (
      <div className={`QuarterBackTitle ${addClass}`}>{title}</div>
    )
  }
}

export default QuarterBackTitle
