// @flow
import * as React from 'react'
import type { Field } from '../utils/Field'
import type { Rule } from '../utils/Rule'
import type { StyleClassMap } from './StyleClassMap'
import type { NonEmptyValue } from '../../utils/Value'
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
  getNormalizedValue () {
    const {
      rule
    } = this.props

    if (rule.value === null) {
      return null
    }

    return typeof rule.value === 'string' ? [rule.value] : rule.value
  }

  getValues () {
    const {
      field,
      rule
    } = this.props

    const operator = getOperatorById(rule.operator)

    if (!operator) {
      return null
    }

    const { meta: { numberOfInputs } } = operator
    const normalizedValue = this.getNormalizedValue()

    if (normalizedValue === null) {
      return null
    }

    if (field.input === 'checkbox' && numberOfInputs === 1) {
      return [normalizedValue]
    }
    return normalizedValue
  }

  handleUpdate = (value: NonEmptyValue, index: number) => {
    const values = insertAt(this.getValues(), index, value)
    const data = {
      ...this.props.rule,
      value: values.length === 1 ? values[0] : values
    }
    this.props.handleUpdate(data, this.props.index)
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
