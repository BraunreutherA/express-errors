'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var NotFound = exports.NotFound = {
  code: 'ERR_NOT_FOUND',
  status: 404,
  message: 'This requested resource was not found.'
};

var NotImplemented = exports.NotImplemented = {
  code: 'ERR_NOT_IMPLEMENTED',
  status: 501,
  message: 'This resource is not implemented yet.'
};