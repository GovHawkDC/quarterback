import * as React from 'react'
import type { Condition } from './Condition'
import type { Field } from './Field'
import type { Group } from './Group'
import type { StyleClassMap } from './StyleClassMap'
import type { Type } from './Type'
import { groupAction } from '../utils/actions'
import QuarterBackGroup from './QuarterBackGroup'

type Props = {
  conditions?: Array<Condition>,
  fields?: Array<Field>,
  rules?: Group,
  styleClassMap: StyleClassMap,
  types?: Array<Type>,
  handleUpdate: (data: Group) => void
}

class QuarterBack extends React.Component<Props> {
  static defaultProps = {
    styleClassMap: {},
    handleUpdate: (data: Group) => {}
  }

  constructor (props: Props) {
    super(props)

    const {
      fields,
      rules
    } = props

    const defaultGroupData = groupAction.getDefaultData()
    const group = fields && fields.length > 0
      ? defaultGroupData
      : { ...defaultGroupData, rules: [] }

    this.state = {
      ...group,
      ...rules
    }
  }

  handleUpdate = (data: Group) => {
    this.setState(prevState => {
      return {
        ...prevState,
        ...data
      }
    }, () => this.props.handleUpdate(this.state))
  }

  render () {
    const {
      conditions,
      fields,
      styleClassMap,
      types
    } = this.props

    const addClass = styleClassMap.QuarterBack != null
      ? styleClassMap.QuarterBack
      : ''

    return (
      <div className={`QuarterBack ${addClass}`}>
        <QuarterBackGroup
          conditions={conditions}
          fields={fields}
          group={this.state}
          styleClassMap={styleClassMap}
          types={types}
          handleUpdate={this.handleUpdate}
        />
      </div>
    )
  }
}

export default QuarterBack
