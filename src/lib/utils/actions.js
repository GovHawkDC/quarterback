// @flow
import type { Action } from './Action'
import { QB_RULE, QB_GROUP } from './constants'

function getActionByQB (actions: Array<Action>, QB: string): ?Action {
  return actions.find(action => action.QB === QB)
}

const ruleAction: Action = {
  QB: QB_RULE,
  display: 'Add rule',
  getDefaultData: function () {
    return {
      QB: this.QB,
      field: '',
      id: '',
      input: '',
      operator: null,
      type: '',
      value: null
    }
  }
}

const groupAction: Action = {
  QB: QB_GROUP,
  display: 'Add group',
  getDefaultData: function (fields) {
    const rules = fields != null && fields.length > 0
      ? [ruleAction.getDefaultData()]
      : []

    return {
      QB: this.QB,
      condition: '',
      rules
    }
  }
}

export {
  getActionByQB,
  ruleAction,
  groupAction
}
