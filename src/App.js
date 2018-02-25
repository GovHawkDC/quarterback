import React, { Component } from 'react';
import QuarterBack from './lib'

const fieldsMap = {
  root: [
    { id: 'a', label: 'A' },
    { id: 'b', label: 'B' }
  ]
}

const preloadedState = {
  condition: 'or',
  meta: {},
  rules: [
    { id: 'a', operator: 'less', value: '1', meta: {} },
    { id: 'a', operator: 'less', value: '1', meta: {} }
  ]
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuarterBack fieldsMap={fieldsMap} preloadedState={preloadedState} />
      </div>
    );
  }
}

export default App;
