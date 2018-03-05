import * as React from 'react'
import QuarterBackGroup from './QuarterBackGroup'

type Props = {}

class QuarterBack extends React.Component<Props> {
  constructor (props) {
    super(props)

    const {
      condition = '',
      rules = []
    } = props.rules

    this.state = {
      // QB,
      condition,
      rules
    }
  }

  handleUpdate = (data) => {
    this.setState(prevState => {
      return {
        ...prevState,
        ...data
      }
    })
  }

  render () {
    return (
      <QuarterBackGroup
        group={this.state}
        handleUpdate={this.handleUpdate}
      />
    )
  }
}

export default QuarterBack
