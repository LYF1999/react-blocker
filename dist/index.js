'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

exports.default = requireBlocker;

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function requireBlocker(_ref) {
  var blockFunc = _ref.blockFunc;

  return function (Target) {
    var Blocker = function (_React$Component) {
      (0, _inherits3.default)(Blocker, _React$Component);

      function Blocker() {
        (0, _classCallCheck3.default)(this, Blocker);
        return (0, _possibleConstructorReturn3.default)(this, (Blocker.__proto__ || (0, _getPrototypeOf2.default)(Blocker)).apply(this, arguments));
      }

      (0, _createClass3.default)(Blocker, [{
        key: 'render',
        value: function render() {
          var result = blockFunc(this.props);
          if (result && typeof result !== 'function' && !_react2.default.isValidElement(result)) {
            throw new Error('error type, please check the value which the func return');
          }
          return result || _react2.default.createElement(Target, this.props);
        }
      }]);
      return Blocker;
    }(_react2.default.Component);

    return Blocker;
  };
}
module.exports = exports['default'];
