// @flow
import * as React from 'react'
import type { FieldValue } from '../../utils/Field'
import type { StyleClassMap } from '../../utils/StyleClassMap'
import type { NonEmptyValue } from '../../utils/Value'
import Checkbox from './Checkbox'

type Props = {
  index: number,
  styleClassMap: StyleClassMap,
  values?: Array<FieldValue>,
  value: NonEmptyValue,
  handleUpdate: (value: NonEmptyValue, index: number) => void
}

class Checkboxes extends React.Component<Props> {
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

    const addClass = styleClassMap.QuarterBackCheckboxes != null
      ? styleClassMap.QuarterBackCheckboxes
      : ''

    return (
      <div className={`QuarterBackCheckboxes ${addClass}`}>
        {values.map((checkbox, checkboxIndex) => {
          return (
            <Checkbox
              key={checkboxIndex}
              checked={value}
              index={index}
              styleClassMap={styleClassMap}
              {...checkbox}
              handleUpdate={handleUpdate}
            />
          )
        })}
      </div>
    )
  }
}

export default Checkboxes
