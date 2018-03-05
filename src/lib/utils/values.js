// @flow
import type { Operator } from './Operator'
import type { Value } from './Value'

function getDefaultValueByOperator (operator: Operator): Value {
  switch (operator.meta.numberOfInputs) {
    case 1:
      return ''
    case 2:
      return ['', '']
    default:
      return null
  }
}

export {
  getDefaultValueByOperator
}
