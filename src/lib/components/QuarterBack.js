import * as React from 'react'
import type { ActionIconMap } from '../utils/ActionIconMap'
import type { Condition } from '../utils/Condition'
import type { Field } from '../utils/Field'
import type { Group } from '../utils/Group'
import type { OperatorsConfig } from '../utils/OperatorsConfig'
import type { StyleClassMap } from '../utils/StyleClassMap'
import type { Type } from '../utils/Type'
import { groupAction } from '../utils/actions'
import QuarterBackGroup from './QuarterBackGroup'

type Props = {
  actionIconMap: ActionIconMap,
  conditions?: Array<Condition>,
  defaultCondition: string,
  fields?: Array<Field>,
  filterTypes: Array<string>,
  inputsSeparator: string,
  lang: Object,
  operatorsConfig: OperatorsConfig,
  rules?: Group,
  selectPlaceholder: string,
  styleClassMap: StyleClassMap,
  types?: Array<Type>,
  handleUpdate: (data: Group) => void
}

class QuarterBack extends React.Component<Props> {
  static defaultProps = {
    actionIconMap: {},
    defaultCondition: 'AND',
    filterTypes: [],
    inputsSeparator: ',',
    lang: {},
    operatorsConfig: {},
    selectPlaceholder: '------',
    styleClassMap: {},
    handleUpdate: (data: Group, index: number) => {}
  }

  constructor (props: Props) {
    super(props)

    const {
      defaultCondition,
      fields,
      rules
    } = props

    const group = groupAction.getDefaultData(
      fields,
      defaultCondition
    )

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
      defaultCondition,
      fields,
      inputsSeparator,
      lang,
      operatorsConfig,
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
          defaultCondition={defaultCondition}
          fields={fields}
          group={this.state}
          inputsSeparator={inputsSeparator}
          lang={lang}
          operatorsConfig={operatorsConfig}
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
