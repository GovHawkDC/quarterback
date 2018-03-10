// @flow
import * as React from 'react'
import type { Field } from '../utils/Field'
import type { Rule } from '../utils/Rule'
import type { StyleClassMap } from '../utils/StyleClassMap'
import type { SingleValue } from '../utils/Value'
import { getFieldById } from '../utils/fields'
import { getDefaultOperatorByField } from '../utils/operators'
import { getDefaultValue } from '../utils/values'
import Select from './inputs/Select'

type Props = {
  fields: Array<Field>,
  index: number,
  rule: Rule,
  selectPlaceholder: string,
  styleClassMap: StyleClassMap,
  handleUpdate: (data: Rule, index: number) => void
}

class QuarterBackFields extends React.Component<Props> {
  handleUpdate = (fieldId: SingleValue) => {
    const {
      fields,
      index,
      rule,
      handleUpdate
    } = this.props

    const field = getFieldById(fields, fieldId)
    const operator = getDefaultOperatorByField(field)
    const value = getDefaultValue(field, operator)

    const data = {
      ...rule,
      field: field ? field.id : '',
      id: field ? field.id : '',
      input: field ? field.input : '',
      operator: operator ? operator.id : null,
      type: field ? field.type : '',
      value
    }

    handleUpdate(data, index)
  }

  render () {
    const {
      fields,
      rule,
      selectPlaceholder,
      styleClassMap
    } = this.props

    const defaultValue = { label: selectPlaceholder, id: '' }
    const values = [ defaultValue, ...fields ]

    const addClass = styleClassMap.QuarterBackFields || ''

    return (
      <div className={`QuarterBackFields ${addClass}`}>
        <Select
          styleClassMap={styleClassMap}
          value={rule.id}
          values={values.map(value => {
            return {
              label: value.label,
              value: value.id
            }
          })}
          handleUpdate={this.handleUpdate}
        />
      </div>
    )
  }
}

export default QuarterBackFields
