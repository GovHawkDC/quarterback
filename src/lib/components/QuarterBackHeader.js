// @flow
import * as React from 'react'
import type { ActionIconMap } from './ActionIconMap'
import type { Condition } from '../utils/Condition'
import type { Data } from '../utils/Data'
import type { Field } from '../utils/Field'
import type { GroupConditionFragment } from '../utils/Group'
import type { StyleClassMap } from './StyleClassMap'
import type { Type } from '../utils/Type'
import QuarterBackConditions from './QuarterBackConditions'
import QuarterBackActions from './QuarterBackActions'

type Props = {
  actionIconMap: ActionIconMap,
  condition: string,
  conditions: Array<Condition>,
  fields: Array<Field>,
  index: number,
  styleClassMap: StyleClassMap,
  types: Array<Type>,
  handleCreate: (data: Data) => void,
  handleUpdate: (fragment: GroupConditionFragment) => void,
  handleDelete: (index: number) => void
}

class QuarterBackHeader extends React.Component<Props> {
  render () {
    const {
      actionIconMap,
      condition,
      conditions,
      fields,
      index,
      styleClassMap,
      types,
      handleCreate,
      handleUpdate,
      handleDelete
    } = this.props

    const addClass = styleClassMap.QuarterBackHeader != null
      ? styleClassMap.QuarterBackHeader
      : ''

    return (
      <div className={`QuarterBackHeader ${addClass}`}>
        <QuarterBackConditions
          value={condition}
          conditions={conditions}
          styleClassMap={styleClassMap}
          handleUpdate={handleUpdate}
        />
        <QuarterBackActions
          actionIconMap={actionIconMap}
          fields={fields}
          index={index}
          styleClassMap={styleClassMap}
          types={types}
          handleCreate={handleCreate}
          handleDelete={handleDelete}
        />
      </div>
    )
  }
}

export default QuarterBackHeader
