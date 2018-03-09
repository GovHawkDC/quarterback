// @flow
import * as React from 'react'
import type { Field } from '../utils/Field'
import type { Rule } from '../utils/Rule'
import type { StyleClassMap } from './StyleClassMap'
import type { NonEmptyValue, Value } from '../../utils/Value'
import { insertAt } from '../utils/arrays'
import { getOperatorById } from '../utils/operators'
import Checkboxes from './inputs/Checkboxes'
import Radios from './inputs/Radios'
import Select from './inputs/Select'
import Text from './inputs/Text'
import Textarea from './inputs/Textarea'

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
    const values = typeof rule.value === 'string'
      ? [rule.value]
      : rule.value

    // A single checkbox is already an array by default, so we nest
    // it within another array as if it were a string (the typical default
    // for an input)
    // e.g., `[ [ 'book' ] ]`
    if (field.input === 'checkbox' && numberOfInputs === 1) {
      return [values]
    }

    return values
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

    const addClass = styleClassMap.QuarterBackValues != null
      ? styleClassMap.QuarterBackValues
      : ''
    const className = `QuarterBackValues ${addClass}`

    switch (field.input) {
      case 'checkbox':
        const CheckboxesComponent = field.QBComponent != null
          ? field.QBComponent
          : Checkboxes

        return (
          <div className={className}>
            {values.map((value, index) => {
              return (
                <CheckboxesComponent
                  key={index}
                  index={index}
                  styleClassMap={styleClassMap}
                  value={value}
                  values={field.values}
                  handleUpdate={this.handleUpdate}
                />
              )
            })}
          </div>
        )
      case 'number':
      case 'text':
        const TextComponent = field.QBComponent
          ? field.QBComponent
          : Text

        return (
          <div className={className}>
            {values.map((value, index) => {
              return (
                <TextComponent
                  key={index}
                  index={index}
                  value={value}
                  styleClassMap={styleClassMap}
                  handleUpdate={this.handleUpdate}
                />
              )
            })}
          </div>
        )
      case 'radio':
        const RadiosComponent = field.QBComponent
          ? field.QBComponent
          : Radios

        return (
          <div className={className}>
            {values.map((value, index) => {
              return (
                <RadiosComponent
                  key={index}
                  index={index}
                  styleClassMap={styleClassMap}
                  value={value}
                  values={field.values}
                  handleUpdate={this.handleUpdate}
                />
              )
            })}
          </div>
        )
      case 'select':
        const SelectComponent = field.QBComponent
          ? field.QBComponent
          : Select

        return (
          <div className={className}>
            {values.map((value, index) => {
              return (
                <SelectComponent
                  key={index}
                  index={index}
                  styleClassMap={styleClassMap}
                  value={value}
                  values={field.values}
                  handleUpdate={this.handleUpdate}
                />
              )
            })}
          </div>
        )
      case 'textarea':
        const TextareaComponent = field.QBComponent
          ? field.QBComponent
          : Textarea

        return (
          <div className={className}>
            {values.map((value, index) => {
              return (
                <TextareaComponent
                  key={index}
                  index={index}
                  value={value}
                  styleClassMap={styleClassMap}
                  type={field.input}
                  handleUpdate={this.handleUpdate}
                />
              )
            })}
          </div>
        )
      default:
        return null // TODO:
    }
  }
}

export default QuarterBackValues
