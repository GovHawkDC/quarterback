// @flow
import * as React from 'react'
import type { Rule } from '../utils/Rule'

type Props = {
  index: number,
  rule: Rule,
  handleUpdate: (data: Rule, index: number) => void
}

class QuarterBackValues extends React.Component<Props> {
  render () {
    if (this.props.rule.value === null) {
      return null
    }

    const values = typeof this.props.rule.value === 'string'
      ? [this.props.rule.value]
      : this.props.rule.value

    return (
      <pre>{JSON.stringify(values, null, 2)}</pre>
    )
  }
}

export default QuarterBackValues
