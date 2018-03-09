// @flow
import * as React from 'react'
import type { ActionIconMap } from '../utils/ActionIconMap'
import type { Data } from '../utils/Data'
import type { Field } from '../utils/Field'
import type { Rule } from '../utils/Rule'
import type { StyleClassMap } from '../utils/StyleClassMap'
import { getFieldById } from '../utils/fields'
import QuarterBackFields from './QuarterBackFields'
import QuarterBackOperators from './QuarterBackOperators'
import QuarterBackValues from './QuarterBackValues'
import QuarterBackActionDelete from './QuarterBackActionDelete'

type Props = {
  actionIconMap: ActionIconMap,
  fields: Array<Field>,
  index: number,
  rule: Rule,
  styleClassMap: StyleClassMap,
  handleUpdate: (data: Data, index: number) => void,
  handleDelete: (index: number) => void
}

class QuarterBackRule extends React.Component<Props> {
  render () {
    const {
      actionIconMap,
      index,
      fields,
      rule,
      styleClassMap,
      handleUpdate,
      handleDelete
    } = this.props

    const field = getFieldById(fields, rule.id)

    const addRuleClass = styleClassMap.QuarterBackRule != null
      ? styleClassMap.QuarterBackRule
      : ''

    const addRuleEditClass = styleClassMap.QuarterBackRuleEdit != null
      ? styleClassMap.QuarterBackRuleEdit
      : ''

    const addRuleActionsClass = styleClassMap.QuarterBackRuleActions != null
      ? styleClassMap.QuarterBackRuleActions
      : ''

    return (
      <div className={`QuarterBackRule ${addRuleClass}`}>
        <div className={`QuarterBackRuleEdit ${addRuleEditClass}`}>
          <QuarterBackFields
            fields={fields}
            index={index}
            rule={rule}
            styleClassMap={styleClassMap}
            handleUpdate={handleUpdate}
          />
          <QuarterBackOperators
            field={field}
            index={index}
            rule={rule}
            styleClassMap={styleClassMap}
            handleUpdate={handleUpdate}
          />
          <QuarterBackValues
            field={field}
            index={index}
            rule={rule}
            styleClassMap={styleClassMap}
            handleUpdate={handleUpdate}
          />
        </div>
        <div className={`QuarterBackRuleActions ${addRuleActionsClass}`}>
          <QuarterBackActionDelete
            actionIconMap={actionIconMap}
            index={index}
            styleClassMap={styleClassMap}
            handleDelete={handleDelete}
          />
        </div>
      </div>
    )
  }
}

export default QuarterBackRule
