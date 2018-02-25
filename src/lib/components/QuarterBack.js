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
  state = {
    condition: null,
    rules: []
  }

  func = index => {
    console.log(index)
  }

  render () {
    // const { rules } = this.state
    const { fields } = this.props

    return (
      <div className='QuarterBack'>


        <div className='QuarterBack-container'>


          <div className="QuarterBack-conditions">
          </div>


          <div className="QuarterBack-actions">
          </div>


        </div>


        <div className="QuarterBack-container">
          <QuarterBackField fields={fields} index={0} handleFieldChange={this.func} />
          <QuarterBackField fields={fields} index={1} handleFieldChange={this.func} />
        </div>


      </div>
    )
  }
}

export default QuarterBack
