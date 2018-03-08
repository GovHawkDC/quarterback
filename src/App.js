import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'
import './lib/components/styles/QuarterBack.css'
import './lib/components/styles/QuarterBackClassic.css'
import QuarterBack, { ruleAction, Checkboxes, Select, Text } from './lib'

class PowerGroup extends Component {
  handleUpdate = (value, index) => {
    const rule = { ...this.props.rules[index], value }
    const rules = Object.assign([], [...this.props.rules], { [index]: rule })
    this.props.handleUpdate({ rules })
  }

  render () {
    const searchValue = this.props.rules[0].value
    const typeValue = this.props.rules[1].value

    return (
      <div className='QuarterBackRules'>
        <Text
          index={0}
          styleClassMap={{QuarterBackInput: 'form-control'}}
          value={searchValue}
          handleUpdate={this.handleUpdate}
        />
        <Checkboxes
          index={1}
          styleClassMap={{QuarterBackInput: 'form-control'}}
          value={typeValue}
          values={[
            { label: 'Book', value: 'book' },
            { label: 'Movie', value: 'movie' }
          ]}
          handleUpdate={this.handleUpdate}
        />
      </div>
    )
  }
}

class AsyncSelect extends Component {
  state = {
    loading: true,
    values: []
  }

  componentDidMount () {
    setTimeout(() => {
      // this.props.handleUpdate('penguin', this.props.index)

      this.setState(prevState => {
        return {
          ...prevState,
          loading: false,
          values: [
            { label: 'Penguin', value: 'penguin' },
            { label: 'Pearson', value: 'pearson' }
          ]
        }
      })
    }, 5e2)
  }

  render () {
    if (this.state.loading) {
      return <p>Loading&hellip;</p>
    }

    const props = {
      ...this.props,
      values: this.state.values
    }

    return <Select {...props} />
  }
}

const book = {
  QB: 'Book',
  fields: [
    { id: 'title', label: 'Title', input: 'text', type: 'string' },
    { id: 'pub_year', label: 'Year Published', input: 'number', type: 'integer' },
    { id: 'pages', label: 'Number of Pages', input: 'number', type: 'integer' },
    { id: 'genre',
      label: 'Genre',
      input: 'select',
      type: 'string',
      values: [
        { label: 'Sci-Fi', value: 'scifi' },
        { label: 'Romance', value: 'romance' }
      ] },
    {
      QBComponent: AsyncSelect,
      id: 'publisher',
      label: 'Publisher',
      input: 'select',
      type: 'string',
      defaultValue: 'penguin'
    }
  ],
  title: 'Book Query'
}

const movieAction = {
  QB: 'Movie',
  display: 'Add movie',
  getDefaultData: function () {
    return {
      QB: this.QB,
      condition: '',
      rules: [ruleAction.getDefaultData()]
    }
  }
}
const movie = {
  QB: 'Movie',
  action: movieAction,
  fields: [
    { id: 'title', label: 'Title', input: 'text', type: 'string' },
    { id: 'rel_year', label: 'Year Released', input: 'number', type: 'integer' },
    { id: 'duration', label: 'Running time (mins)', input: 'number', type: 'integer' },
    { id: 'kw', label: 'Keywords', input: 'textarea', type: 'string' },
    { id: 'genre',
      label: 'Genre',
      input: 'checkbox',
      type: 'string',
      values: [
        { label: 'Sci-Fi', value: 'scifi' },
        { label: 'Romance', value: 'romance' }
      ] }
  ],
  title: 'Movie Query'
}

const types = [book, movie, {
  QB: 'Search',
  QBComponent: PowerGroup,
  action: {
    QB: 'Search',
    display: 'Add search',
    getDefaultData: function () {
      return {
        QB: this.QB,
        condition: '',
        rules: [
          {
            QB: 'query_string',
            field: 'qs',
            id: 'qs',
            input: 'search',
            operator: 'equal',
            type: 'string',
            value: ''
          },
          {
            QB: 'type',
            field: 'qstype',
            id: 'qstype',
            input: 'checkbox',
            operator: 'equal',
            type: 'string',
            value: []
          }
        ]
      }
    }
  },
  conditions: [],
  title: 'Search'
}]

const styleClassMap = {
  QuarterBackConditions: 'btn-group',
  QuarterBackCondition: 'btn btn-sm btn-primary',
  QuarterBackConditionActive: 'active',
  QuarterBackActions: 'btn-group',
  QuarterBackAction: 'btn btn-sm btn-success',
  QuarterBackActionDelete: 'btn btn-sm btn-danger',
  QuarterBackInput: 'form-control'
}

// const data = {
//   condition: 'or',
//   rules: [
//     {
//       QB: QB_RULE,
//       id: 'title',
//       operator: 'equal',
//       value: 'Where the red fern grows'
//     },
//     {
//       QB: QB_GROUP,
//       condition: 'and',
//       rules: [
//         { QB: QB_RULE, id: 'pub_year', operator: 'less', value: '1962' },
//         { QB: QB_RULE, id: 'pages', operator: 'greater', value: '200' }
//       ]
//     }
//   ]
// }

class App extends Component {
  state = {}

  handleUpdate = data => {
    this.setState(prevState => ({ ...prevState, data }))
  }

  render () {
    return (
      <div className='App'>
        <QuarterBack handleUpdate={this.handleUpdate} styleClassMap={styleClassMap} types={types} />
        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
      </div>
    )
  }
}

export default App
