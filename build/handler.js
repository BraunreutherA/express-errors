'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiError = require('./ApiError');

var _ApiError2 = _interopRequireDefault(_ApiError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (error, req, res, next) {
  if (!(error instanceof _ApiError2.default)) {
    next({
      code: 'ERR_NOT_VALID_ERROR_FORMAT',
      status: 500,
      message: 'Internal server error. Please contact the backend team.'
    });
  } else {
    res.status(error.status).send({
      code: error.code,
      status: error.status,
      message: error.message
    });
  }
};