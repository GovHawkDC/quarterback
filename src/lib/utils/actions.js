// @flow
import type { Action } from './Action'
import type { Type } from './Type'
import { QB_RULE, QB_GROUP } from './constants'

function getActionByQB (actions: Array<Action>, QB: string): ?Action {
  return actions.find(action => action.QB === QB)
}

function getActionByType (type: Type): Action {
  if (type.action != null) {
    return type.action
  }

  const display = type.title != null ? type.title : 'Custom'

  return {
    ...groupAction,
    QB: type.QB,
    display // TODO: Way to customize...
  }
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
  getDefaultData: function (fields, defaultCondition) {
    const rules = fields != null && fields.length > 0
      ? [ruleAction.getDefaultData()]
      : []

    return {
      QB: this.QB,
      condition: defaultCondition,
      rules
    }
  }
}

export {
  getActionByQB,
  getActionByType,
  ruleAction,
  groupAction
}
