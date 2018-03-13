import * as React from 'react'
import type { ActionIconMap } from '../utils/ActionIconMap'
import type { Condition } from '../utils/Condition'
import type { Field } from '../utils/Field'
import type { Group } from '../utils/Group'
import type { StyleClassMap } from '../utils/StyleClassMap'
import type { Type } from '../utils/Type'
import { groupAction } from '../utils/actions'
import QuarterBackGroup from './QuarterBackGroup'

type Props = {
  actionIconMap: ActionIconMap,
  conditions?: Array<Condition>,
  fields?: Array<Field>,
  inputsSeparator: string,
  lang: Object,
  rules?: Group,
  selectPlaceholder: string,
  styleClassMap: StyleClassMap,
  types?: Array<Type>,
  handleUpdate: (data: Group) => void
}

class QuarterBack extends React.Component<Props> {
  static defaultProps = {
    actionIconMap: {},
    inputsSeparator: ',',
    lang: {},
    selectPlaceholder: '------',
    styleClassMap: {},
    handleUpdate: (data: Group, index: number) => {}
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
      actionIconMap,
      conditions,
      fields,
      inputsSeparator,
      lang,
      selectPlaceholder,
      styleClassMap,
      types
    } = this.props

    const addClass = styleClassMap.QuarterBack != null
      ? styleClassMap.QuarterBack
      : ''

    return (
      <div className={`QuarterBack ${addClass}`}>
        <QuarterBackGroup
          actionIconMap={actionIconMap}
          conditions={conditions}
          fields={fields}
          group={this.state}
          inputsSeparator={inputsSeparator}
          lang={lang}
          selectPlaceholder={selectPlaceholder}
          styleClassMap={styleClassMap}
          types={types}
          handleUpdate={this.handleUpdate}
        />
      </div>
    )
  }
}

export default QuarterBack
