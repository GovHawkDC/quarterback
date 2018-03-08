// @flow
import * as React from 'react'
import type { FieldValue } from '../../utils/Field'
import type { StyleClassMap } from '../../utils/StyleClassMap'
import type { NonEmptyValue } from '../../utils/Value'
import Radio from './Radio'

type Props = {
  index: number,
  styleClassMap: StyleClassMap,
  values?: Array<FieldValue>,
  value: NonEmptyValue,
  handleUpdate: (value: NonEmptyValue, index: number) => void
}

class Radios extends React.Component<Props> {
  static defaultProps = {
    index: -1,
    styleClassMap: {}
  }

  render () {
    const {
      index,
      styleClassMap,
      value,
      values,
      handleUpdate
    } = this.props

    if (!values) {
      return null
    }

    const addClass = styleClassMap.QuarterBackRadios != null
      ? styleClassMap.QuarterBackRadios
      : ''

    return (
      <div className={`QuarterBackRadios ${addClass}`}>
        {values.map((radio, radioIndex) => {
          return (
            <Radio
              key={radioIndex}
              checked={value}
              index={index}
              styleClassMap={styleClassMap}
              {...radio}
              handleUpdate={handleUpdate}
            />
          )
        })}
      </div>
    )
  }
}

export default Radios
