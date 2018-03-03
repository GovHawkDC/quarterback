import React, { Component } from 'react'
import './App.css'
import './lib/components/QuarterBack.css'
import QuarterBack, { GROUP_ID, RULE_ID } from './lib'

function test () {
  return 'helloworld'
}
test()

const fields = [
  { id: 'title', label: 'Title', input: 'text', type: 'string' },
  { id: 'pub_year', label: 'Year Published', input: 'number', type: 'integer' },
  { id: 'pages', label: 'Number of Pages', input: 'number', type: 'integer' }
]

const data = {
  condition: 'or',
  rules: [
    {
      QB: RULE_ID,
      id: 'title',
      operator: 'equal',
      value: 'Where the red fern grows'
    },
    {
      QB: GROUP_ID,
      condition: 'and',
      rules: [
        { QB: RULE_ID, id: 'pub_year', operator: 'less', value: 1962 },
        { QB: RULE_ID, id: 'pages', operator: 'greater', value: 200 }
      ]
    }
  ]
}

class App extends Component {
  render () {
    return (
      <div className='App'>
        <QuarterBack fields={fields} preloadedState={data} />
      </div>
    )
  }
}

export default App
