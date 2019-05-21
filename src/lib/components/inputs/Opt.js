// @flow
import * as React from 'react'
import Optgroup from './Optgroup'
import Option from './Option'

type Props = {
  fields?: Array,
  label: string,
  value?: string
}

/**
 * Switch between optgroup and option based on certain
 * prop presence
 */
class Opt extends React.Component<Props> {
  render () {
    const {
      fields,
      label,
      value
    } = this.props

    if (fields) {
      return <Optgroup fields={fields} label={label} />
    }

    return <Option label={label} value={value} />
  }
}

export default Opt
