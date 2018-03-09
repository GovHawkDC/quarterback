// @flow
import * as React from 'react'
import type { Field } from '../utils/Field'
import type { Rule } from '../utils/Rule'
import type { StyleClassMap } from '../utils/StyleClassMap'
import type { NonEmptyValue } from '../../utils/Value'
import { getFieldComponent } from '../utils/fields'
import Checkboxes from './inputs/Checkboxes'
import Radios from './inputs/Radios'
import Select from './inputs/Select'
import Text from './inputs/Text'
import Textarea from './inputs/Textarea'

type Props = {
  field: Field,
  styleClassMap: StyleClassMap,
  values: Array<NonEmptyValue>,
  handleUpdate: (data: Rule, index: number) => void
}

class QuarterBackInputs extends React.Component<Props> {
  render () {
    const {
      field,
      styleClassMap,
      values,
      handleUpdate
    } = this.props

    switch (field.input) {
      case 'checkbox':
        const CheckboxesComponent = getFieldComponent(field, Checkboxes)

        return values.map((value, index) => {
          return (
            <CheckboxesComponent
              key={index}
              index={index}
              styleClassMap={styleClassMap}
              value={value}
              values={field.values}
              handleUpdate={handleUpdate}
            />
          )
        })
      case 'number':
      case 'text':
        const TextComponent = getFieldComponent(field, Text)

        return values.map((value, index) => {
          return (
            <TextComponent
              key={index}
              index={index}
              value={value}
              styleClassMap={styleClassMap}
              handleUpdate={handleUpdate}
            />
          )
        })
      case 'radio':
        const RadiosComponent = getFieldComponent(field, Radios)

        return values.map((value, index) => {
          return (
            <RadiosComponent
              key={index}
              index={index}
              styleClassMap={styleClassMap}
              value={value}
              values={field.values}
              handleUpdate={handleUpdate}
            />
          )
        })
      case 'select':
        const SelectComponent = getFieldComponent(field, Select)

        return values.map((value, index) => {
          return (
            <SelectComponent
              key={index}
              index={index}
              styleClassMap={styleClassMap}
              value={value}
              values={field.values}
              handleUpdate={handleUpdate}
            />
          )
        })
      case 'textarea':
        const TextareaComponent = getFieldComponent(field, Textarea)

        return values.map((value, index) => {
          return (
            <TextareaComponent
              key={index}
              index={index}
              value={value}
              styleClassMap={styleClassMap}
              type={field.input}
              handleUpdate={handleUpdate}
            />
          )
        })
      default:
        const CustomComponent = field.QBComponent

        if (CustomComponent == null) {
          throw new Error('Unable to find input')
        }

        return values.map((value, index) => {
          return (
            <CustomComponent
              key={index}
              index={index}
              value={value}
              styleClassMap={styleClassMap}
              type={field.input}
              values={field.values}
              handleUpdate={handleUpdate}
            />
          )
        })
    }
  }
}

export default QuarterBackInputs