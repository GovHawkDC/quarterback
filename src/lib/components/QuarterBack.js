import React, { Component } from 'react'
import QuarterBackField from './QuarterBackField'

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

    this.state = {
      condition: preloadedState.condition || null,
      meta: preloadedState.meta || {},
      rules: preloadedState.rules || [],
    }
  }

  func = index => {
    console.log(index)
  }

  render () {
    const { fieldsMap } = this.props

    const { rules } = this.state

    return (
      <div className='QuarterBack'>


        <div className='QuarterBack-container'>


          <div className="QuarterBack-conditions">
          </div>


          <div className="QuarterBack-actions">
          </div>


        </div>


        <div className="QuarterBack-container">
          {rules.map((rule, index) => {
            if (rule.condition === undefined) {
              switch (rule.meta.type) {
                default:
                  return (
                    <QuarterBackField key={index} index={index} fields={fieldsMap.root} handleFieldChange={this.func} />
                  )
              }
            } else {
              switch (rule.meta.type) {
                default:
                  return (
                    <QuarterBack fieldsMap={fieldsMap} key={index} index={index} preloadedState={rule} />
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
