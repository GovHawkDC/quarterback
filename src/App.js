import React, { Component } from 'react'
import './App.css'
import './lib/components/QuarterBack.css'
import './lib/components/QuarterBackClassic.css'
import QuarterBack, { ruleAction, Select, QuarterBackHeader, QuarterBackTitle } from './lib'

class PowerGroup extends Component {
  handleUpdate = (value, index) => {
    const rule = { ...this.props.group.rules[index], value }
    const rules = Object.assign([], [...this.props.group.rules], { [index]: rule })
    const group = { ...this.props.group, rules }
    this.props.handleUpdate(group, this.props.index)
  }

  handleCustom =event => {
    const { checked, value } = event.target
    let chcks = this.props.group.rules[1].value.split(',').filter(Boolean)

    if ((checked && chcks.includes(value)) || (!checked && !chcks.includes(value))) {
      return
    }

    if (checked) {
      chcks = [...chcks, value]
    } else {
      chcks = chcks.filter(c => c !== value)
    }
    this.handleUpdate(chcks.join(','), 1)
  }

  render () {
    const chcks = this.props.group.rules[1].value.split(',')
    return (
      <div className='QuarterBackGroup'>
        <QuarterBackTitle title={this.props.title} />
        <QuarterBackHeader
          condition={this.props.group.condition}
          conditions={this.props.conditions}
          fields={this.props.fields}
          index={this.props.index}
          types={this.props.types}
          handleCreate={this.handleCreate}
          handleUpdate={this.handleUpdate}
          handleDelete={this.props.handleDelete}
        />
        <div className='QuarterBackRules'>
          <input type='text' value={this.props.group.rules[0].value} onChange={event => this.handleUpdate(event.target.value, 0)} />
          <div>
            <input checked={chcks.includes('book')} type='checkbox' value='book' onChange={event => this.handleCustom(event)} /> Book{' '}
            <input checked={chcks.includes('movie')} type='checkbox' value='movie' onChange={event => this.handleCustom(event)} /> Movie
          </div>
        </div>
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
    { id: 'duration', label: 'Running time (mins)', input: 'number', type: 'integer' }
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
            value: ''
          }
        ]
      }
    }
  },
  title: 'Search'
}]

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
        <QuarterBack handleUpdate={this.handleUpdate} types={types} />
        <pre>{JSON.stringify(this.state.data, null, 2)}</pre>
      </div>
    )
  }
}

export default App
