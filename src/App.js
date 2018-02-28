import React, { Component } from 'react'
import QuarterBack from './lib'

const fieldsMap = {
  root: [
    { id: 'a', label: 'A', input: 'number', type: 'integer' },
    { id: 'b', label: 'B', input: 'text', type: 'string' }
  ]
}

/**
condition: or
rules:
- condition: and
  _QB: 'QBPost'
  rules:
  - { ..., type: 'post' }
  - rules
    - { ..., id: 'title', value: 'First post' }
    - { ..., id: 'likes', value: 100 }
**/

const preloadedState = {
  condition: 'or',
  meta: {},
  rules: [
    { id: 'a', operator: 'less', value: 1, meta: {} },
    { id: 'a', operator: 'between', value: [1, 5], meta: {} }
  ]
}

/**
---
_QB = [
  {
    type: 'post'
    id: 'QBPost'
    component: QBPost
    action: 'Add Post'
    actions: [ 'Add item', 'Add group' ] ?defaults
    fields: [
      { 'id': 'title', label: 'Title', input: 'text', type: 'string' }
    ]
  },
  {
    action:
  }
]
---
**/

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
