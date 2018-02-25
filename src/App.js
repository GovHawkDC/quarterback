import React, { Component } from 'react';
import QuarterBack from './lib'

const fields = [
  { id: 'a', label: 'A' },
  { id: 'b', label: 'B' }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <QuarterBack fields={fields} />
      </div>
    );
  }
}

export default App;
