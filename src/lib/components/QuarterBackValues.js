// @flow
import * as React from 'react'
import type { Field } from '../utils/Field'
import type { Rule } from '../utils/Rule'
import type { StyleClassMap } from '../utils/StyleClassMap'
import type { NonEmptyValue, Value } from '../../utils/Value'
import { insertAt } from '../utils/arrays'
import { getOperatorById } from '../utils/operators'
import QuarterBackInputs from './QuarterBackInputs'

type Props = {
  field: Field,
  index: number,
  rule: Rule,
  styleClassMap: StyleClassMap,
  handleUpdate: (data: Rule, index: number) => void
}

class QuarterBackValues extends React.Component<Props> {
  /**
   * Helper func that abstracts away the difference between initial value(s)
   * for single and multi-input (e.g., 'between' operator will result in
   * two inputs). For example, a single value for a text field will still
   * return an array of length=1 (e.g., `[ '' ]`), while a 'between' operator
   * field for a 'number' would return an array with length=2 (e.g.,
   * `[ '1', '2' ]`)
   */
  getValues (): null | Array<NonEmptyValue> {
    const {
      field,
      rule
    } = this.props

    if (rule.value === null) {
      return null
    }

    const operator = getOperatorById(rule.operator)

    if (!operator) {
      return null
    }

    const { meta: { numberOfInputs } } = operator

    // A single checkbox is already an array by default, so we nest
    // it within another array as if it were a string (the typical default
    // for an input)
    // e.g., `[ [ 'book' ] ]`
    if (
      typeof rule.value === 'string' ||
      (field.input === 'checkbox' && numberOfInputs === 1)
    ) {
      return [rule.value]
    }

    return rule.value
  }

  /**
   * Almost the reverse of the `getValues` helper; this method returns
   * updated value in the original format for storing in the rules. E.g.,
   * if a single input value was transformed into `[ 'book' ]` and the user
   * changed the value to `'movie'`, this method would return just `'movie'`
   */
  getUpdatedValues (value: NonEmptyValue, valueIndex: number): Value {
    const values = this.getValues()

    if (values === null) {
      return null
    }

    const updatedValues = insertAt(values, valueIndex, value)

    return updatedValues.length === 1
      ? updatedValues[0]
      : updatedValues
  }

  handleUpdate = (value: NonEmptyValue, valueIndex: number) => {
    const {
      index,
      rule,
      handleUpdate
    } = this.props

    const data = {
      ...rule,
      value: this.getUpdatedValues(value, valueIndex)
    }

    handleUpdate(data, index)
  }

  render () {
    const {
      field,
      styleClassMap
    } = this.props

    const values = this.getValues()

    if (values === null) {
      return null
    }

    const addClass = styleClassMap.QuarterBackValues || ''

    return (
      <div className={`QuarterBackValues ${addClass}`}>
        <QuarterBackInputs
          field={field}
          styleClassMap={styleClassMap}
          values={values}
          handleUpdate={this.handleUpdate}
        />
      </div>
    )
  }
}

export default QuarterBackValues
