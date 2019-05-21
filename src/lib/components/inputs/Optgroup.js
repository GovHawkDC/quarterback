// @flow
import * as React from 'react'
import Opt from './Opt'

type Props = {
  fields: Array,
  label: string,
}

class Optgroup extends React.Component<Props> {
  render () {
    const {
      fields,
      label
    } = this.props

    return (
      <optgroup label={label}>
        {fields.map((field, index) =>
          <Opt key={label + index} {...field} />
        )}
      </optgroup>
    )
  }
}

export default Optgroup
