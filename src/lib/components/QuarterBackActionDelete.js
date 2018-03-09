// @flow
import * as React from 'react'
import type { ActionIconMap } from '../utils/ActionIconMap'
import type { StyleClassMap } from '../utils/StyleClassMap'

type Props = {
  actionIconMap: ActionIconMap,
  index: number,
  styleClassMap: StyleClassMap,
  handleDelete: (index: number) => void
}

class QuarterBackActionDelete extends React.Component<Props> {
  getActionIcon (): React.Component {
    const {
      actionIconMap
    } = this.props

    if (actionIconMap.QuarterBackActionDelete != null) {
      return actionIconMap.QuarterBackActionDelete
    }

    if (actionIconMap.QuarterBackAction != null) {
      return actionIconMap.QuarterBackAction
    }

    return () => null
  }

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

    const ActionIcon = this.getActionIcon()

    return (
      <button
        className={`QuarterBackActionDelete ${addClassAction} ${addClass}`}
        onClick={this.handleClick}
      >
        <ActionIcon /> Delete
      </button>
    )
  }
}

export default QuarterBackActionDelete
