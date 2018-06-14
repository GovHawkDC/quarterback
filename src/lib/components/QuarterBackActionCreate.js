// @flow
import * as React from 'react'
import type { Action } from '../utils/Action'
import type { ActionIconMap } from '../utils/ActionIconMap'
import type { Data } from '../utils/Data'
import type { Field } from '../utils/Field'
import type { EmptyProps } from '../utils/Props'
import type { StyleClassMap } from '../utils/StyleClassMap'
import type { Type } from '../utils/Type'
import { QB_RULE, QB_GROUP } from '../utils/constants'
import { getTypeByQB } from '../utils/types'

type Props = {
  action: Action,
  actionIconMap: ActionIconMap,
  defaultCondition: string,
  fields: Array<Field>,
  filterTypes: Array<string>,
  softFilterTypes: Array<string>,
  styleClassMap: StyleClassMap,
  types: Array<Type>,
  handleCreate: (data: Data) => void
}

class QuarterBackActionCreate extends React.Component<Props> {
  getRuleActionIcon (): React.ComponentType<EmptyProps> {
    const {
      actionIconMap
    } = this.props

    if (actionIconMap.QuarterBackActionRule != null) {
      return actionIconMap.QuarterBackActionRule
    }

    if (actionIconMap.QuarterBackActionCreate != null) {
      return actionIconMap.QuarterBackActionCreate
    }

    if (actionIconMap.QuarterBackAction != null) {
      return actionIconMap.QuarterBackAction
    }

    return () => null
  }

  getGroupActionIcon (): React.ComponentType<EmptyProps> {
    const {
      actionIconMap
    } = this.props

    if (actionIconMap.QuarterBackActionGroup != null) {
      return actionIconMap.QuarterBackActionGroup
    }

    if (actionIconMap.QuarterBackActionCreate != null) {
      return actionIconMap.QuarterBackActionCreate
    }

    if (actionIconMap.QuarterBackAction != null) {
      return actionIconMap.QuarterBackAction
    }

    return () => null
  }

  getOtherActionIcon (type: Type): React.ComponentType<EmptyProps> {
    const {
      actionIconMap
    } = this.props

    if (type.actionIcon != null) {
      return type.actionIcon
    }

    if (actionIconMap.QuarterBackActionCreate != null) {
      return actionIconMap.QuarterBackActionCreate
    }

    if (actionIconMap.QuarterBackAction != null) {
      return actionIconMap.QuarterBackAction
    }

    return () => null
  }

  getActionIcon (): React.ComponentType<EmptyProps> {
    const {
      action,
      types
    } = this.props

    switch (action.QB) {
      case QB_RULE:
        return this.getRuleActionIcon()
      case QB_GROUP:
        return this.getGroupActionIcon()
      default:
        const type = getTypeByQB(types, action.QB)
        return this.getOtherActionIcon(type)
    }
  }

  getActionData (): Data {
    const {
      action,
      defaultCondition,
      fields,
      types
    } = this.props

    switch (action.QB) {
      case QB_RULE:
        return action.getDefaultData()
      case QB_GROUP:
        return action.getDefaultData(fields, defaultCondition)
      default:
        const type = getTypeByQB(types, action.QB)
        return action.getDefaultData(
          type.fields,
          type.defaultCondition || defaultCondition
        )
    }
  }

  getActionAddClass (): string {
    const {
      action,
      styleClassMap,
      types
    } = this.props

    switch (action.QB) {
      case QB_RULE:
        return styleClassMap.QuarterBackActionRule != null
          ? styleClassMap.QuarterBackActionRule
          : ''
      case QB_GROUP:
        return styleClassMap.QuarterBackActionGroup != null
          ? styleClassMap.QuarterBackActionGroup
          : ''
      default:
        const type = getTypeByQB(types, action.QB)
        return type.actionAddClass != null
          ? type.actionAddClass
          : ''
    }
  }

  handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const {
      action,
      softFilterTypes,
      handleCreate
    } = this.props

    if (softFilterTypes.includes(action.QB)) {
      return
    }

    handleCreate(this.getActionData())
  }

  render () {
    const {
      action,
      filterTypes,
      styleClassMap
    } = this.props

    if (filterTypes.includes(action.QB)) {
      return null
    }

    const addClassAction = styleClassMap.QuarterBackAction != null
      ? styleClassMap.QuarterBackAction
      : ''

    const addClassCreate = styleClassMap.QuarterBackActionCreate != null
      ? styleClassMap.QuarterBackActionCreate
      : ''

    const addClass = this.getActionAddClass()

    const ActionIcon = this.getActionIcon()

    return (
      <button
        className={`QuarterBackActionCreate ${addClassAction} ${addClassCreate} ${addClass}`}
        onClick={this.handleClick}
      >
        <ActionIcon /> {action.display}
      </button>
    )
  }
}

export default QuarterBackActionCreate
