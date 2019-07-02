// @flow
import * as React from 'react'
import type { ActionIconMap } from '../utils/ActionIconMap'
import type { Data } from '../utils/Data'
import type { Field } from '../utils/Field'
import type { Rule } from '../utils/Rule'
import type { OperatorsConfig } from '../utils/OperatorsConfig'
import type { StyleClassMap } from '../utils/StyleClassMap'
import { getFieldById } from '../utils/fields'
import { getAllOperators } from '../utils/operators'
import QuarterBackFields from './QuarterBackFields'
import QuarterBackOperators from './QuarterBackOperators'
import QuarterBackValues from './QuarterBackValues'
import QuarterBackActionDelete from './QuarterBackActionDelete'

type Props = {
  actionIconMap: ActionIconMap,
  fields: Array<Field>,
  index: number,
  inputsSeparator: string,
  lang: Object,
  operatorsConfig: OperatorsConfig,
  rule: Rule,
  selectPlaceholder: string,
  styleClassMap: StyleClassMap,
  handleUpdate: (data: Data, index: number) => void,
  handleDelete: (index: number) => void
}

class QuarterBackRule extends React.Component<Props> {
  render () {
    const {
      actionIconMap,
      fields,
      index,
      inputsSeparator,
      lang,
      operatorsConfig,
      rule,
      selectPlaceholder,
      styleClassMap,
      handleUpdate,
      handleDelete
    } = this.props

    const field = getFieldById(fields, rule.id)
    const operators = getAllOperators(operatorsConfig)

    const addRuleClass = styleClassMap.QuarterBackRule != null
      ? styleClassMap.QuarterBackRule
      : ''

    const addRuleEditClass = styleClassMap.QuarterBackRuleEdit != null
      ? styleClassMap.QuarterBackRuleEdit
      : ''

    const addRuleDeletedClass = styleClassMap.QuarterBackRuleDeleted != null
      ? styleClassMap.QuarterBackRuleDeleted
      : ''

    const addRuleActionsClass = styleClassMap.QuarterBackRuleActions != null
      ? styleClassMap.QuarterBackRuleActions
      : ''

    return (
      <div className={`QuarterBackRule ${addRuleClass}`}>
        {field && field.deleted
          ? <div className={`QuarterBackRuleEdit QuarterBackRuleDeleted ${addRuleEditClass} ${addRuleDeletedClass}`}>
            <span>{field.deletedText || `"${field.label}" field was deleted`}</span>
          </div>
          : <div className={`QuarterBackRuleEdit ${addRuleEditClass}`}>
            <QuarterBackFields
              fields={fields}
              index={index}
              operators={operators}
              rule={rule}
              selectPlaceholder={selectPlaceholder}
              styleClassMap={styleClassMap}
              handleUpdate={handleUpdate}
            />
            <QuarterBackOperators
              field={field}
              index={index}
              lang={lang}
              operators={operators}
              rule={rule}
              styleClassMap={styleClassMap}
              handleUpdate={handleUpdate}
            />
            <QuarterBackValues
              field={field}
              index={index}
              inputsSeparator={inputsSeparator}
              operators={operators}
              rule={rule}
              styleClassMap={styleClassMap}
              handleUpdate={handleUpdate}
            />
          </div>}
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
