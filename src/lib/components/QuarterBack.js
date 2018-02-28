import React, { Component } from 'react'
import { GROUP_ID, ROOT_COMPONENT_ID, RULE_ID } from './helpers/constants'
import QuarterBackActions from './QuarterBackActions'
import QuarterBackConditions from './QuarterBackConditions'
import QuarterBackRule from './QuarterBackRule'

class QuarterBack extends Component {
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
    isRoot: false,
    preloadedState: {},
    title: '',
    types: []
  }

  constructor (props) {
    super(props)

    const { isRoot } = props

    if (isRoot) {
      const { QB, preloadedState } = props
      const { condition = '', rules = [] } = preloadedState

      this.state = {
        QB,
        condition,
        rules
      }
    }
  }

  getState () {
    const { isRoot } = this.props

    if (isRoot) {
      return this.state
    }

    const { QB, preloadedState } = this.props
    const { condition = '', rules = [] } = preloadedState

    return {
      QB,
      condition,
      rules
    }
  }

  handleFieldChange = (index, fieldId, operator) => {
    // TODO: Update types for rules!
    const { rules } = this.state
    const rule = rules[index]
    const updatedRule = {
      ...rule,
      id: fieldId,
      operator,
      value: ''
    }
    const updatedRules = Object.assign([], [...rules], {
      [index]: updatedRule
    })

    this.setState(prevState => {
      return {
        ...prevState,
        rules: updatedRules
      }
    })
  }

  handleOperatorChange = (index, operator) => {
    const { rules } = this.state
    const rule = rules[index]
    const updatedRule = {
      ...rule,
      operator,
      value: ''
    }
    const updatedRules = Object.assign([], [...rules], {
      [index]: updatedRule
    })

    this.setState(prevState => {
      return {
        ...prevState,
        rules: updatedRules
      }
    })
  }

  handleValueChange = (index, value) => {
    const { rules } = this.state
    const rule = rules[index]
    const updatedRule = {
      ...rule,
      value
    }
    // TODO: Helper func for this stuff
    const updatedRules = Object.assign([], [...rules], {
      [index]: updatedRule
    })

    this.setState(prevState => {
      return {
        ...prevState,
        rules: updatedRules
      }
    })
  }

  render () {
    const { actions, conditions, fields, title, types } = this.props
    const { rules } = this.getState()
    console.log('from QB!!')
    console.log(this.getState())

    return (
      <div className='QuarterBack'>
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
              return <QuarterBack {...this.props} />
            }

            const type = types.find(type => {
              return type.QB === QB
            })

            return <QuarterBack {...type} />
          })}
        </div>
      </div>
    )
  }
}

export default QuarterBack
