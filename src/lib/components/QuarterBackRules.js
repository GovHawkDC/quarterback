// @flow
import * as React from 'react'
import type { Data } from '../utils/Data'
import type { GroupRulesFragment } from '../utils/Group'
import type { RulesProps } from '../utils/Rules'
import { insertAt, removeAt } from '../utils/arrays'
import { QB_RULE, QB_GROUP } from '../utils/constants'
import { getTypeByQB } from '../utils/types'
import QuarterBackRule from './QuarterBackRule'
import QuarterBackGroup from './QuarterBackGroup'

class QuarterBackRules extends React.Component<RulesProps> {
  /**
   * Takes a modified group or rule and index and overwrites a copy of
   * the current rules prop at the specified index. Passes the modified
   * rules copy to parent
   */
  handleUpdate = (data: Data, index: number) => {
    const {
      rules,
      handleUpdate
    } = this.props

    const groupRulesFragment: GroupRulesFragment = {
      rules: insertAt(rules, index, data)
    }

    handleUpdate(groupRulesFragment)
  }

  /**
   * Takes an index and removes the rule or group in a copy of the current
   * rules prop at the specified index. Passes the modified rules copy to
   * parent
   */
  handleDelete = (index: number) => {
    const {
      rules,
      handleUpdate
    } = this.props

    const groupRulesFragment: GroupRulesFragment = {
      rules: removeAt(rules, index)
    }

    handleUpdate(groupRulesFragment)
  }

  render () {
    const {
      actionIconMap,
      conditions,
      fields,
      filterTypes,
      inputsSeparator,
      lang,
      operatorsConfig,
      rules,
      selectPlaceholder,
      styleClassMap,
      types
    } = this.props

    if (rules.length < 1) {
      return null
    }

    const addClass = styleClassMap.QuarterBackRules != null
      ? styleClassMap.QuarterBackRules
      : ''

    return (
      <div className={`QuarterBackRules ${addClass}`}>
        {rules.map((data, index) => {
          const { QB, condition } = data

          // "Old" rule data from jQuery plugin will not have "condition"
          // key
          if (QB === QB_RULE || condition === undefined) {
            return (
              <QuarterBackRule
                key={index}
                QB={QB_RULE}
                actionIconMap={actionIconMap}
                fields={fields}
                index={index}
                inputsSeparator={inputsSeparator}
                lang={lang}
                operatorsConfig={operatorsConfig}
                rule={data}
                selectPlaceholder={selectPlaceholder}
                styleClassMap={styleClassMap}
                handleUpdate={this.handleUpdate}
                handleDelete={this.handleDelete}
              />
            )
          }

          // "Old" group data from jQuery plugin _will_ have a "condition" key
          if (
            (QB === QB_GROUP) ||
            (QB === undefined && condition !== undefined)
          ) {
            return (
              <QuarterBackGroup
                key={index}
                QB={QB_GROUP}
                actionIconMap={actionIconMap}
                conditions={conditions}
                defaultCondition={this.props.defaultCondition}
                fields={fields}
                filterTypes={filterTypes}
                group={data}
                index={index}
                inputsSeparator={inputsSeparator}
                lang={lang}
                operatorsConfig={operatorsConfig}
                selectPlaceholder={selectPlaceholder}
                styleClassMap={styleClassMap}
                types={types}
                handleUpdate={this.handleUpdate}
                handleDelete={this.handleDelete}
              />
            )
          }

          const type = getTypeByQB(types, QB)

          if (!type) {
            throw new Error('Unable to find type')
          }

          const {
            action,
            actionAddClass,
            actionIcon,
            defaultCondition = this.props.defaultCondition,
            ...typeProps
          } = type

          return (
            <QuarterBackGroup
              {...typeProps}
              key={index}
              actionIconMap={actionIconMap}
              defaultCondition={defaultCondition}
              filterTypes={filterTypes}
              group={data}
              index={index}
              inputsSeparator={inputsSeparator}
              lang={lang}
              operatorsConfig={operatorsConfig}
              selectPlaceholder={selectPlaceholder}
              styleClassMap={styleClassMap}
              handleUpdate={this.handleUpdate}
              handleDelete={this.handleDelete}
            />
          )
        })}
      </div>
    )
  }
}

export default QuarterBackRules
