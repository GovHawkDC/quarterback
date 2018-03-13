// @flow
import * as React from 'react'
import type { Field } from '../utils/Field'
import type { Rule } from '../utils/Rule'
import type { StyleClassMap } from '../utils/StyleClassMap'
import type { MultiValue, NestedMultiValue } from '../utils/Value'
import {
  FIELD_INPUT_TEXT,
  FIELD_INPUT_NUMBER,
  FIELD_INPUT_TEXTAREA,
  FIELD_INPUT_RADIO,
  FIELD_INPUT_CHECKBOX,
  FIELD_INPUT_SELECT
} from '../utils/constants'
import { getFieldComponent } from '../utils/fields'
import Checkboxes from './inputs/Checkboxes'
import Radios from './inputs/Radios'
import Select from './inputs/Select'
import Separator from './inputs/Separator'
import Text from './inputs/Text'
import Textarea from './inputs/Textarea'

type Props = {
  field: Field,
  inputsSeparator: string,
  styleClassMap: StyleClassMap,
  values: MultiValue | NestedMultiValue,
  handleUpdate: (data: Rule, index: number) => void
}

class QuarterBackInputs extends React.Component<Props> {
  render () {
    const {
      field,
      inputsSeparator,
      styleClassMap,
      values,
      handleUpdate
    } = this.props

    const numValues = values.length

    switch (field.input) {
      case FIELD_INPUT_CHECKBOX:
        const CheckboxesComponent = getFieldComponent(field, Checkboxes)

        return values.map((value, index) => {
          return [
            <CheckboxesComponent
              key={index}
              index={index}
              styleClassMap={styleClassMap}
              value={value}
              values={field.values}
              handleUpdate={handleUpdate}
            />,
            <Separator
              key={-index}
              index={index}
              inputsSeparator={inputsSeparator}
              numValues={numValues}
              styleClassMap={styleClassMap}
            />
          ]
        })
      case FIELD_INPUT_NUMBER:
      case FIELD_INPUT_TEXT:
        const TextComponent = getFieldComponent(field, Text)

        return values.map((value, index) => {
          return [
            <TextComponent
              key={index}
              index={index}
              value={value}
              styleClassMap={styleClassMap}
              type={field.type}
              handleUpdate={handleUpdate}
            />,
            <Separator
              key={-index}
              index={index}
              inputsSeparator={inputsSeparator}
              numValues={numValues}
              styleClassMap={styleClassMap}
            />
          ]
        })
      case FIELD_INPUT_RADIO:
        const RadiosComponent = getFieldComponent(field, Radios)

        return values.map((value, index) => {
          return [
            <RadiosComponent
              key={index}
              index={index}
              styleClassMap={styleClassMap}
              value={value}
              values={field.values}
              handleUpdate={handleUpdate}
            />,
            <Separator
              key={-index}
              index={index}
              inputsSeparator={inputsSeparator}
              numValues={numValues}
              styleClassMap={styleClassMap}
            />
          ]
        })
      case FIELD_INPUT_SELECT:
        const SelectComponent = getFieldComponent(field, Select)

        return values.map((value, index) => {
          return [
            <SelectComponent
              key={index}
              index={index}
              inputsSeparator={inputsSeparator}
              styleClassMap={styleClassMap}
              value={value}
              values={field.values}
              handleUpdate={handleUpdate}
            />,
            <Separator
              key={-index}
              index={index}
              inputsSeparator={inputsSeparator}
              numValues={numValues}
              styleClassMap={styleClassMap}
            />
          ]
        })
      case FIELD_INPUT_TEXTAREA:
        const TextareaComponent = getFieldComponent(field, Textarea)

        return values.map((value, index) => {
          return [
            <TextareaComponent
              key={index}
              index={index}
              value={value}
              styleClassMap={styleClassMap}
              type={field.input}
              handleUpdate={handleUpdate}
            />,
            <Separator
              key={-index}
              index={index}
              inputsSeparator={inputsSeparator}
              numValues={numValues}
              styleClassMap={styleClassMap}
            />
          ]
        })
      default:
        const CustomComponent = field.QBComponent

        if (CustomComponent == null) {
          throw new Error('Unable to find input')
        }

        return values.map((value, index) => {
          return [
            <CustomComponent
              key={index}
              index={index}
              value={value}
              styleClassMap={styleClassMap}
              type={field.input}
              values={field.values}
              handleUpdate={handleUpdate}
            />,
            <Separator
              key={-index}
              index={index}
              inputsSeparator={inputsSeparator}
              numValues={numValues}
              styleClassMap={styleClassMap}
            />
          ]
        })
    }
  }
}

export default QuarterBackInputs
