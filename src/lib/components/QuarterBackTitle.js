// @flow
import * as React from 'react'

type Props = {
  title?: string
}

class QuarterBackTitle extends React.Component<Props> {
  render () {
    if (!this.props.title) {
      return null
    }

    return (
      <div className='QuarterBackTitle'>{this.props.title}</div>
    )
  }
}

export default QuarterBackTitle
