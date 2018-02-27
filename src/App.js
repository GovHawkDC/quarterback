import React, { Component } from 'react'
import QuarterBack from './lib'

const fieldsMap = {
  root: [
    { id: 'a', label: 'A', input: 'number', type: 'integer' },
    { id: 'b', label: 'B', input: 'text', type: 'string' }
  ]
}

const preloadedState = {
  condition: 'or',
  meta: {},
  rules: [
    { id: 'a', operator: 'less', value: 1, meta: {} },
    { id: 'a', operator: 'less', value: '2', meta: {} }
  ]
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        <QuarterBack fieldsMap={fieldsMap} preloadedState={preloadedState} />
      </div>
    )
  }
}

export default App
