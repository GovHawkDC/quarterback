import React, { Component } from 'react'
import QuarterBack, { GROUP_ID, RULE_ID } from './lib'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <QuarterBack
          fields={[
            { id: 'a', label: 'A', input: 'number', type: 'integer' },
            { id: 'b', label: 'B', input: 'text', type: 'string' }
          ]}
          preloadedState={{
            condition: 'or',
            rules: [
              { QB: RULE_ID, id: 'a', operator: 'less', value: 1 },
              { QB: RULE_ID, id: 'a', operator: 'between', value: [1, 5] },
              {
                QB: GROUP_ID,
                condition: 'and',
                rules: [
                  { QB: RULE_ID, id: 'a', operator: 'less', value: 1 },
                  { QB: RULE_ID, id: 'a', operator: 'between', value: [1, 5] }
                ]
              }
            ]
          }}
        />
      </div>
    )
  }
}

export default App
