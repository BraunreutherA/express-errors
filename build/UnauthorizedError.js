'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiError2 = require('./ApiError');

var _ApiError3 = _interopRequireDefault(_ApiError2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UnauthorizedError = function (_ApiError) {
  _inherits(UnauthorizedError, _ApiError);

  function UnauthorizedError(message, code) {
    _classCallCheck(this, UnauthorizedError);

    /* eslint-disable no-param-reassign */
    if (!code) {
      code = 'ERR_NOT_AUTHORIZED';
    }

    if (!message) {
      message = 'You are not authorized to access this resource.';
    }

    return _possibleConstructorReturn(this, (UnauthorizedError.__proto__ || Object.getPrototypeOf(UnauthorizedError)).call(this, message, 401, code));
  }

  return UnauthorizedError;
}(_ApiError3.default);

exports.default = UnauthorizedError;