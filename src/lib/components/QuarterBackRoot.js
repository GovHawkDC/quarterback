import React, { Component } from 'react'
import { GROUP_ID, ROOT_COMPONENT_ID, RULE_ID } from './helpers/constants'
import { getFieldByFieldId } from './helpers/fields'
import {
  getDefaultOperator,
  getOperators,
  getOperatorMeta
} from './helpers/operators'
import QuarterBackActions from './QuarterBackActions'
import QuarterBackConditions from './QuarterBackConditions'
import QuarterBackRule from './QuarterBackRule'

class QuarterBackRoot extends Component {
  static defaultProps = {
    QB: ROOT_COMPONENT_ID,
    action: '',
    actions: [
      { QB: RULE_ID, action: 'Add rule' },
      { QB: GROUP_ID, action: 'Add group' }
    ],
    conditions: [
      { condition: 'and', display: 'AND' },
      { condition: 'or', display: 'OR' }
    ],
    fields: [],
    handleChange: () => {},
    index: 0,
    preloadedState: {},
    title: '',
    types: []
  }

  handleChange = changes => {
    // TODO: Change var name for 'preloadedState'
    const { handleChange, index, preloadedState } = this.props

    handleChange(index, { ...preloadedState, ...changes })
  }

  handleRuleChange = (index, updatedRule) => {
    const { preloadedState } = this.props
    const { rules } = preloadedState

    const updatedRules = Object.assign([], [...rules], {
      [index]: updatedRule
    })

    this.handleChange({ rules: updatedRules })
  }

  handleFieldChange = (index, fieldId) => {
    const { fields, preloadedState } = this.props
    const { rules } = preloadedState
    const rule = rules[index]

    const field = getFieldByFieldId(fieldId, fields)
    const operator = getDefaultOperator(field)

    const updatedRule = {
      ...rule,
      id: fieldId,
      operator,
      value: ''
    }

    this.handleRuleChange(index, updatedRule)
  }

  handleOperatorChange = (index, operator) => {
    const { preloadedState } = this.props
    const { rules } = preloadedState
    const rule = rules[index]

    const updatedRule = {
      ...rule,
      operator,
      value: ''
    }

    this.handleRuleChange(index, updatedRule)
  }

  handleValueChange = (index, value) => {
    const { preloadedState } = this.props
    const { rules } = preloadedState
    const rule = rules[index]

    const updatedRule = {
      ...rule,
      value
    }

    this.handleRuleChange(index, updatedRule)
  }

  render () {
    const { actions, conditions, fields, preloadedState, types } = this.props
    const { rules } = preloadedState

    return (
      <div className='QuarterBackRoot'>
        <div className='QuarterBackContainer'>
          <QuarterBackConditions conditions={conditions} />
          <QuarterBackActions actions={actions} types={types} />
        </div>
        <div className='QuarterBackContainer'>
          {rules.map((rule, index) => {
            const { QB } = rule

            if (QB === RULE_ID) {
              return (
                <QuarterBackRule
                  fields={fields}
                  handleFieldChange={this.handleFieldChange}
                  handleOperatorChange={this.handleOperatorChange}
                  handleValueChange={this.handleValueChange}
                  index={index}
                  key={index}
                  rule={rule}
                />
              )
            }

            if (QB === GROUP_ID) {
              const props = {
                ...this.props,
                handleChange: this.handleRuleChange,
                index,
                preloadedState: rule
              }
              return <QuarterBackRoot key={index} {...props} />
            }

            const type = types.find(type => {
              return type.QB === QB
            })

            return (
              <QuarterBackRoot
                index={index}
                key={index}
                preloadedState={rule}
                {...type}
              />
            )
          })}
        </div>
      </div>
    )
  }
}

export default QuarterBackRoot
