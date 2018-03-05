// @flow
import * as React from 'react'
import type { Field } from '../utils/Field'
import type { Rule } from '../utils/Rule'
import Select from './inputs/Select'
import Text from './inputs/Text'

type Props = {
  field: Field,
  index: number,
  rule: Rule,
  handleUpdate: (data: Rule, index: number) => void
}

class QuarterBackValues extends React.Component<Props> {
  getValues () {
    if (this.props.rule.value === null) {
      return null
    }

    if (typeof this.props.rule.value === 'string') {
      return [this.props.rule.value]
    }

    return this.props.rule.value
  }

  handleUpdate = (value: string, index: number) => {
    const values = Object.assign([], [...this.getValues()], { [index]: value })
    const data = {
      ...this.props.rule,
      value: values.length === 1 ? values[0] : values
    }
    this.props.handleUpdate(data, this.props.index)
  }

  render () {
    const values = this.getValues()

    if (values === null) {
      return null
    }

    // TODO: Maybe check for QBComponent here, earlier...

    switch (this.props.field.input) {
      case 'number':
      case 'text':
        return (
          <div>
            {values.map((value, index) => {
              return (
                <Text
                  key={index}
                  index={index}
                  value={value}
                  type={this.props.field.input}
                  handleUpdate={this.handleUpdate}
                />
              )
            })}
          </div>
        )
      case 'select':
        let QBComponent = this.props.field.QBComponent
          ? this.props.field.QBComponent
          : Select
        return (
          <div>
            {values.map((value, index) => {
              return (
                <QBComponent
                  key={index}
                  index={index}
                  options={this.props.field.options}
                  value={value}
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
