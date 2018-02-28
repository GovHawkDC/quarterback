import React, { Component } from 'react'
import QuarterBack, { ROOT_COMPONENT_ID, RULE_ID } from './lib'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <QuarterBack
          fields={[
            { id: 'a', label: 'A', input: 'number', type: 'integer' },
            { id: 'b', label: 'B', input: 'text', type: 'string' }
          ]}
          isRoot={true}
          preloadedState={{
            QB: ROOT_COMPONENT_ID,
            condition: 'or',
            rules: [
              { QB: RULE_ID, id: 'a', operator: 'less', value: 1 },
              { QB: RULE_ID, id: 'a', operator: 'between', value: [1, 5] }
            ]
          }}
        />
      </div>
    )
  }
}

export default App
