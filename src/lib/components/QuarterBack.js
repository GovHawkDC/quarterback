import React, { Component } from 'react'
import QuarterBackRule from './QuarterBackRule'

class QuarterBack extends Component {
  /*
  fields               allowed stuff...
  data|preloadedState  {...}JSON
  actions              ADD_RULE|ADD_GROUP[|...]
  conditions           OR|AND[|XOR|NOT|...]

  className            String=QuarterBack
  */

  /*
  Q{STATE}
    F:name=saxon
    C:OR
    Q{STATE}
      F:age>=25
      F:sex=M
  */
  // state = {
  //   condition: null,
  //   rules: []
  // }

  constructor (props) {
    super(props)

    const { preloadedState = {} } = props

    // TODO:
    this.state = {
      condition: preloadedState.condition || null,
      meta: preloadedState.meta || {},
      rules: preloadedState.rules || []
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
    const { fieldsMap } = this.props

    const { rules } = this.state
    console.log('from QB!!')
    console.log(rules)

    return (
      <div className='QuarterBack'>
        <div className='QuarterBack-container'>
          <div className='QuarterBack-conditions' />

          <div className='QuarterBack-actions' />
        </div>

        <div className='QuarterBack-container'>
          {rules.map((rule, index) => {
            if (rule.condition === undefined) {
              switch (rule.meta.type) {
                default:
                  return (
                    <QuarterBackRule
                      rule={rule}
                      key={index}
                      index={index}
                      fields={fieldsMap.root}
                      handleFieldChange={this.handleFieldChange}
                      handleOperatorChange={this.handleOperatorChange}
                      handleValueChange={this.handleValueChange}
                    />
                  )
              }
            } else {
              switch (rule.meta.type) {
                default:
                  return (
                    <QuarterBack
                      fieldsMap={fieldsMap}
                      key={index}
                      index={index}
                      preloadedState={rule}
                    />
                  )
              }
            }
          })}
        </div>
      </div>
    )
  }
}

export default QuarterBack
