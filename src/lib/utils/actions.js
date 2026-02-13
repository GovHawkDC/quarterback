import { QB_RULE, QB_GROUP } from './constants'

var uidCounter = 0
function createUid () {
  uidCounter += 1
  return 'qb_' + Date.now().toString(36) + '_' + uidCounter.toString(36)
}

function getActionByQB (actions, QB) {
  return actions.find(function (action) {
    return action.QB === QB
  })
}

function getActionByType (type) {
  if (type.action != null) {
    return type.action
  }

  var display = type.title != null ? type.title : 'Custom'

  return Object.assign({}, groupAction, {
    QB: type.QB,
    display: display // TODO: Way to customize...
  })
}

var ruleAction = {
  QB: QB_RULE,
  display: 'Rule',
  getDefaultData: function getDefaultData () {
    return {
      _uid: createUid(),
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

var groupAction = {
  QB: QB_GROUP,
  display: 'Group',
  getDefaultData: function getDefaultData (fields, defaultCondition) {
    var rules = fields != null && fields.length > 0 ? [ruleAction.getDefaultData()] : []

    return {
      _uid: createUid(),
      QB: this.QB,
      condition: defaultCondition,
      rules: rules
    }
  }
}

export { getActionByQB, getActionByType, ruleAction, groupAction }
