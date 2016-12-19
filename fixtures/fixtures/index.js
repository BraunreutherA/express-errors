'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var NotFound = exports.NotFound = {
  code: 'ERR_NOT_FOUND',
  status: 404,
  message: 'This requested resource was not found.'
};

var Unauthorized = exports.Unauthorized = {
  code: 'ERR_NOT_AUTHORIZED',
  status: 401,
  message: 'You are not authorized to access this resource.'
};

var NotImplemented = exports.NotImplemented = {
  code: 'ERR_NOT_IMPLEMENTED',
  status: 501,
  message: 'This resource is not implemented yet.'
};

var BadRequest = exports.BadRequest = {
  code: 'ERR_BAD_REQUREST',
  status: 400,
  message: 'Bad request.'
};