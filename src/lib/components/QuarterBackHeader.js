// @flow
import * as React from 'react'
import type { ActionIconMap } from '../utils/ActionIconMap'
import type { Condition } from '../utils/Condition'
import type { Data } from '../utils/Data'
import type { Field } from '../utils/Field'
import type { GroupConditionFragment } from '../utils/Group'
import type { StyleClassMap } from '../utils/StyleClassMap'
import type { Type } from '../utils/Type'
import QuarterBackConditions from './QuarterBackConditions'
import QuarterBackActions from './QuarterBackActions'

type Props = {
  actionIconMap: ActionIconMap,
  condition: string,
  conditions: Array<Condition>,
  defaultCondition: string,
  fields: Array<Field>,
  filterTypes: Array<string>,
  index: number,
  softFilterTypes: Array<string>,
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
      defaultCondition,
      fields,
      filterTypes,
      index,
      softFilterTypes,
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
          conditions={conditions}
          styleClassMap={styleClassMap}
          value={condition}
          handleUpdate={handleUpdate}
        />
        <QuarterBackActions
          actionIconMap={actionIconMap}
          defaultCondition={defaultCondition}
          fields={fields}
          filterTypes={filterTypes}
          index={index}
          softFilterTypes={softFilterTypes}
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
