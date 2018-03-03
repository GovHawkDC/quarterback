// @flow
import * as React from 'react'

type Props = {
  index: number,
  handleDelete: (index: number) => void
}

class QuarterBackActionDelete extends React.Component<Props> {
  handleClick = event => {
    event.preventDefault()
    this.props.handleDelete(this.props.index)
  }

  render () {
    // We do not want to delete the "root" element, which will have an
    // index set to -1
    if (this.props.index < 0) {
      return null
    }

    return (
      <button className='QuarterBackActionDelete' onClick={this.handleClick}>
        Delete
      </button>
    )
  }
}

export default QuarterBackActionDelete
