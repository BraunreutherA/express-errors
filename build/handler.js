'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ApiError = require('./ApiError');

var _ApiError2 = _interopRequireDefault(_ApiError);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-unused-vars */
exports.default = function (error, req, res, next) {
  if (!(error instanceof _ApiError2.default)) {
    res.status(500).send({
      code: 'ERR_INTERNAL',
      status: 500,
      message: error.message
    });
  } else {
    res.status(error.status).send({
      code: error.code,
      status: error.status,
      message: error.message
    });
  }
};