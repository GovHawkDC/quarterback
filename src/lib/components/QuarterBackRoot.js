// @flow
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

type Props = {
  QB: string
}

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
    handleAdd: () => {},
    handleChange: () => {},
    handleDeletion: () => {},
    index: -1,
    preloadedState: {},
    title: '',
    types: []
  }

  getUpdatedRule (index, changes) {
    const { preloadedState: { rules } } = this.props

    return {
      ...rules[index],
      ...changes
    }
  }

  handleAdd = QB => {
    if (QB === RULE_ID) {
      this.handleRuleAdd()
    } else {
      this.handleGroupOrOtherAdd(QB)
    }
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

  handleRuleAdd = () => {
    const { preloadedState } = this.props
    const { rules } = preloadedState

    const newRule = {
      QB: RULE_ID,
      fieldId: '',
      operator: '',
      value: ''
    }

    this.handleChange({ rules: [...rules, newRule] })
  }

  handleGroupOrOtherAdd = QB => {
    const { preloadedState } = this.props
    const { rules } = preloadedState

    const newRule = {
      QB: RULE_ID,
      fieldId: '',
      operator: '',
      value: ''
    }
    const newSomething = {
      QB,
      condition: '',
      rules: [newRule] // TODO: need schema or something for custom types...
    }

    this.handleChange({ rules: [...rules, newSomething] })
  }

  handleRuleDeletion = index => {
    const { preloadedState } = this.props
    const { rules } = preloadedState

    const updatedRules = rules.filter((_, rIndex) => {
      return rIndex !== index
    })

    this.handleChange({ rules: updatedRules })
  }

  handleFieldChange = (index, fieldId) => {
    const { fields } = this.props

    const field = getFieldByFieldId(fieldId, fields)
    const operator = getDefaultOperator(field)

    const updatedRule = this.getUpdatedRule(index, {
      id: fieldId,
      operator,
      value: ''
    })
    this.handleRuleChange(index, updatedRule)
  }

  handleOperatorChange = (index, operator) => {
    const updatedRule = this.getUpdatedRule(index, {
      operator,
      value: ''
    })
    this.handleRuleChange(index, updatedRule)
  }

  handleValueChange = (index, value) => {
    const updatedRule = this.getUpdatedRule(index, { value })
    this.handleRuleChange(index, updatedRule)
  }

  render () {
    const {
      actions,
      conditions,
      fields,
      handleDeletion,
      index,
      preloadedState,
      types
    } = this.props
    const { condition = '', rules = [] } = preloadedState

    return (
      <div className='QuarterBackRoot'>
        <div className='QuarterBackContainer QuarterBackContainer-header'>
          <QuarterBackConditions
            condition={condition}
            conditions={conditions}
            handleChange={this.handleChange}
          />
          <QuarterBackActions
            actions={actions}
            handleAdd={this.handleAdd}
            handleDeletion={handleDeletion}
            index={index}
            types={types}
          />
        </div>
        {/* TODO: Maybe break out into own component so can return null */}
        <div className='QuarterBackContainer QuarterBackContainer-body'>
          {rules.map((rule, index) => {
            const { QB, condition } = rule

            // TODO: Trying to accommodate older data sets from jq
            if (QB === RULE_ID || condition === undefined) {
              return (
                <QuarterBackRule
                  fields={fields}
                  handleFieldChange={this.handleFieldChange}
                  handleOperatorChange={this.handleOperatorChange}
                  handleValueChange={this.handleValueChange}
                  handleDeletion={this.handleRuleDeletion}
                  index={index}
                  key={index}
                  rule={rule}
                />
              )
            }

            // TODO: Trying to accommodate older data sets from jq
            if (QB === GROUP_ID || (condition && QB === undefined)) {
              const props = {
                ...this.props,
                handleAdd: this.handleAdd,
                handleChange: this.handleRuleChange,
                handleDeletion: this.handleRuleDeletion,
                index,
                preloadedState: rule
              }
              return <QuarterBackRoot key={index} {...props} />
            }

            const type = types.find(type => {
              return type.QB === QB
            })

            if (type === undefined) {
              return null
            }

            return (
              <QuarterBackRoot
                handleAdd={this.handleAdd}
                handleChange={this.handleRuleChange}
                handleDeletion={this.handleRuleDeletion}
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
