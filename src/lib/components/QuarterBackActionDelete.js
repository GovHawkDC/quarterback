// @flow
import * as React from 'react'
import type { ActionIconMap } from './ActionIconMap'
import type { StyleClassMap } from './StyleClassMap'

type Props = {
  actionIconMap: ActionIconMap,
  index: number,
  styleClassMap: StyleClassMap,
  handleDelete: (index: number) => void
}

class QuarterBackActionDelete extends React.Component<Props> {
  handleClick = (event: SyntheticEvent<HTMLButtonElement>) => {
    event.preventDefault()

    const {
      index,
      handleDelete
    } = this.props

    handleDelete(index)
  }

  render () {
    const {
      index,
      styleClassMap
    } = this.props

    // We do not want to delete the "root" element, which will have an
    // index set to -1
    if (index < 0) {
      return null
    }

    const addClassAction = styleClassMap.QuarterBackAction != null
      ? styleClassMap.QuarterBackAction
      : ''
    const addClass = styleClassMap.QuarterBackActionDelete != null
      ? styleClassMap.QuarterBackActionDelete
      : ''

    return (
      <button
        className={`QuarterBackActionDelete ${addClassAction} ${addClass}`}
        onClick={this.handleClick}
      >
        {/* <span>
          <i className='glyphicon glyphicon-remove' />{' '}
        </span> */}
        {' '}
        Delete
      </button>
    )
  }
}

export default QuarterBackActionDelete
