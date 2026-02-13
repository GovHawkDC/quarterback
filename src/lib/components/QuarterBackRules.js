var _createClass = (function () { function defineProperties (target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor) } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor } }())

function _objectWithoutProperties (obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i] } return target }

function _classCallCheck (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function') } }

function _possibleConstructorReturn (self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called") } return call && (typeof call === 'object' || typeof call === 'function') ? call : self }

function _inherits (subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass) } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass }

import * as React from 'react'

import { insertAt, removeAt } from '../utils/arrays'
import { QB_RULE, QB_GROUP } from '../utils/constants'
import { getTypeByQB } from '../utils/types'
import QuarterBackRule from './QuarterBackRule'
import QuarterBackGroup from './QuarterBackGroup'

var uidCounter = 0
function createUid () {
  uidCounter += 1
  return 'qb_' + Date.now().toString(36) + '_' + uidCounter.toString(36)
}

function ensureUID (data) {
  if (data == null || typeof data !== 'object') {
    return data
  }

  if (data._uid == null || data._uid === '') {
    data._uid = createUid()
  }

  if (Array.isArray(data.rules)) {
    data.rules.forEach(function (rule) {
      ensureUID(rule)
    })
  }

  return data
}

var QuarterBackRules = (function (_React$Component) {
  _inherits(QuarterBackRules, _React$Component)

  function QuarterBackRules () {
    var _ref

    var _temp, _this, _ret

    _classCallCheck(this, QuarterBackRules)

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key]
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = QuarterBackRules.__proto__ || Object.getPrototypeOf(QuarterBackRules)).call.apply(_ref, [this].concat(args))), _this), _this.handleUpdate = function (data, index) {
      var _this$props = _this.props,
        rules = _this$props.rules,
        handleUpdate = _this$props.handleUpdate

      var normalizedData = ensureUID(data)
      if (rules[index] != null && rules[index]._uid != null) {
        normalizedData._uid = rules[index]._uid
      }

      var groupRulesFragment = {
        rules: insertAt(rules, index, normalizedData)
      }

      handleUpdate(groupRulesFragment)
    }, _this.handleDelete = function (index) {
        var _this$props2 = _this.props,
          rules = _this$props2.rules,
          handleUpdate = _this$props2.handleUpdate

        var groupRulesFragment = {
          rules: removeAt(rules, index)
        }

        handleUpdate(groupRulesFragment)
      }, _temp), _possibleConstructorReturn(_this, _ret)
  }
  /**
   * Takes a modified group or rule and index and overwrites a copy of
   * the current rules prop at the specified index. Passes the modified
   * rules copy to parent
   */

  /**
   * Takes an index and removes the rule or group in a copy of the current
   * rules prop at the specified index. Passes the modified rules copy to
   * parent
   */

  _createClass(QuarterBackRules, [{
    key: 'render',
    value: function render () {
      var _this2 = this

      var _props = this.props,
        actionIconMap = _props.actionIconMap,
        conditions = _props.conditions,
        fields = _props.fields,
        filterTypes = _props.filterTypes,
        inputsSeparator = _props.inputsSeparator,
        lang = _props.lang,
        operatorsConfig = _props.operatorsConfig,
        rules = _props.rules,
        softFilterTypes = _props.softFilterTypes,
        selectPlaceholder = _props.selectPlaceholder,
        styleClassMap = _props.styleClassMap,
        types = _props.types

      if (rules.length < 1) {
        return null
      }

      var addClass = styleClassMap.QuarterBackRules != null ? styleClassMap.QuarterBackRules : ''

      return React.createElement(
        'div',
        { className: 'QuarterBackRules ' + addClass },
        rules.map(function (data, index) {
          var normalizedData = ensureUID(data)
          var QB = normalizedData.QB,
            condition = normalizedData.condition
          var key = normalizedData._uid

          // "Old" rule data from jQuery plugin will not have "condition"
          // key

          if (QB === QB_RULE || condition === undefined) {
            return React.createElement(QuarterBackRule, {
              key: key,
              QB: QB_RULE,
              actionIconMap: actionIconMap,
              fields: fields,
              index: index,
              inputsSeparator: inputsSeparator,
              lang: lang,
              operatorsConfig: operatorsConfig,
              rule: normalizedData,
              selectPlaceholder: selectPlaceholder,
              styleClassMap: styleClassMap,
              handleUpdate: _this2.handleUpdate,
              handleDelete: _this2.handleDelete
            })
          }

          // "Old" group data from jQuery plugin _will_ have a "condition" key
          if (QB === QB_GROUP || QB === undefined && condition !== undefined) {
            return React.createElement(QuarterBackGroup, {
              key: key,
              QB: QB_GROUP,
              actionIconMap: actionIconMap,
              conditions: conditions,
              defaultCondition: _this2.props.defaultCondition,
              fields: fields,
              filterTypes: filterTypes,
              group: normalizedData,
              index: index,
              inputsSeparator: inputsSeparator,
              lang: lang,
              operatorsConfig: operatorsConfig,
              selectPlaceholder: selectPlaceholder,
              softFilterTypes: softFilterTypes,
              styleClassMap: styleClassMap,
              types: types,
              handleUpdate: _this2.handleUpdate,
              handleDelete: _this2.handleDelete
            })
          }

          var type = getTypeByQB(types, QB)

          if (!type) {
            throw new Error('Unable to find type')
          }

          var action = type.action,
            actionAddClass = type.actionAddClass,
            actionIcon = type.actionIcon,
            _type$defaultConditio = type.defaultCondition,
            defaultCondition = _type$defaultConditio === undefined ? _this2.props.defaultCondition : _type$defaultConditio,
            typeProps = _objectWithoutProperties(type, ['action', 'actionAddClass', 'actionIcon', 'defaultCondition'])

          return React.createElement(QuarterBackGroup, Object.assign({}, typeProps, {
            key: key,
            actionIconMap: actionIconMap,
            defaultCondition: defaultCondition,
            filterTypes: filterTypes,
            group: normalizedData,
            index: index,
            inputsSeparator: inputsSeparator,
            lang: lang,
            operatorsConfig: operatorsConfig,
            selectPlaceholder: selectPlaceholder,
            softFilterTypes: softFilterTypes,
            styleClassMap: styleClassMap,
            handleUpdate: _this2.handleUpdate,
            handleDelete: _this2.handleDelete
          }))
        })
      )
    }
  }])

  return QuarterBackRules
}(React.Component))

export default QuarterBackRules
