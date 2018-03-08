// @flow
import * as React from 'react'
import type { Action } from '../utils/Action'
import type { ActionIconMap } from './ActionIconMap'
import type { Data } from '../utils/Data'
import type { Field } from '../utils/Field'
import type { StyleClassMap } from './StyleClassMap'
import type { Type } from '../utils/Type'
import { QB_RULE, QB_GROUP } from '../utils/constants'
import { getTypeByQB } from '../utils/types'

type Props = {
  action: Action,
  actionIconMap: ActionIconMap,
  fields: Array<Field>,
  styleClassMap: StyleClassMap,
  types: Array<Type>,
  handleCreate: (data: Data) => void
}

class QuarterBackActionCreate extends React.Component<Props> {
  getActionData (): Data {
    const {
      action,
      fields,
      types
    } = this.props

    switch (action.QB) {
      case QB_RULE:
        return action.getDefaultData()
      case QB_GROUP:
        return action.getDefaultData(fields)
      default:
        const type = getTypeByQB(types, action.QB)
        return action.getDefaultData(type.fields)
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
      handleCreate
    } = this.props

    handleCreate(this.getActionData())
  }

  render () {
    const {
      action,
      styleClassMap
    } = this.props

    const addClassAction = styleClassMap.QuarterBackAction != null
      ? styleClassMap.QuarterBackAction
      : ''

    const addClassCreate = styleClassMap.QuarterBackActionCreate != null
      ? styleClassMap.QuarterBackActionCreate
      : ''

    const addClass = this.getActionAddClass()

    return (
      <button
        className={`QuarterBackActionCreate ${addClassAction} ${addClassCreate} ${addClass}`}
        onClick={this.handleClick}
      >
        {action.display}
      </button>
    )
  }
}

export default QuarterBackActionCreate
