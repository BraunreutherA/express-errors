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

/**
 * BadRequestError
 *
 * default status code: 400
 * default error code: ERR_BAD_REQUREST
 * default message: Bad request.
 */
var BadRequestError = function (_ApiError) {
  _inherits(BadRequestError, _ApiError);

  function BadRequestError(message, code) {
    _classCallCheck(this, BadRequestError);

    /* eslint-disable no-param-reassign */
    if (!code) {
      code = 'ERR_BAD_REQUREST';
    }

    if (!message) {
      message = 'Bad request.';
    }

    return _possibleConstructorReturn(this, (BadRequestError.__proto__ || Object.getPrototypeOf(BadRequestError)).call(this, message, 400, code));
  }

  return BadRequestError;
}(_ApiError3.default);

exports.default = BadRequestError;