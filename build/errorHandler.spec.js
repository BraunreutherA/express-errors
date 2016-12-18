'use strict';

var _nodeMocksHttp = require('node-mocks-http');

var _nodeMocksHttp2 = _interopRequireDefault(_nodeMocksHttp);

var _ApiError = require('./ApiError');

var _ApiError2 = _interopRequireDefault(_ApiError);

var _NotImplementedError = require('./NotImplementedError');

var _NotImplementedError2 = _interopRequireDefault(_NotImplementedError);

var _NotFoundError = require('./NotFoundError');

var _NotFoundError2 = _interopRequireDefault(_NotFoundError);

var _UnauthorizedError = require('./UnauthorizedError');

var _UnauthorizedError2 = _interopRequireDefault(_UnauthorizedError);

var _handler = require('./handler');

var _handler2 = _interopRequireDefault(_handler);

var _fixtures = require('./fixtures');

var fixtures = _interopRequireWildcard(_fixtures);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('API Error handling', function () {
  it('Should set the status to 500 and throw error that complains that the error is not an ApiError.', function () {
    var error = new Error('Test error');
    var next = function next(errorObject) {
      expect(errorObject).to.be.deep.equal({
        code: 'ERR_NOT_VALID_ERROR_FORMAT',
        status: 500,
        message: 'Internal server error. Please contact the backend team.'
      });
    };

    (0, _handler2.default)(error, null, null, next);
  });

  it('Should send the error as an json object and set the proper status.', function () {
    var error = new _ApiError2.default('Test error', 404, 'ERR_NOT_FOUND');
    var res = _nodeMocksHttp2.default.createResponse();

    (0, _handler2.default)(error, null, res, function () {});

    var data = res._getData();
    expect(res.statusCode).to.be.equal(404);
    expect(data).to.be.deep.equal({
      code: 'ERR_NOT_FOUND',
      status: 404,
      message: 'Test error'
    });
  });

  it('Should send the NotImplemented error as an json object and set the proper status.', function () {
    var res = _nodeMocksHttp2.default.createResponse();
    (0, _handler2.default)(new _NotImplementedError2.default(), null, res, function () {});

    var data = res._getData();
    expect(res.statusCode).to.be.equal(501);
    expect(data).to.be.deep.equal(fixtures.NotImplemented);
  });

  it('Should send the NotFound error as an json object and set the proper status.', function () {
    var res = _nodeMocksHttp2.default.createResponse();
    (0, _handler2.default)(new _NotFoundError2.default(), null, res, function () {});

    var data = res._getData();
    expect(res.statusCode).to.be.equal(404);
    expect(data).to.be.deep.equal(fixtures.NotFound);
  });

  it('Should send the Unauthorized error as an json object and set the proper status.', function () {
    var res = _nodeMocksHttp2.default.createResponse();
    (0, _handler2.default)(new _UnauthorizedError2.default(), null, res, function () {});

    var data = res._getData();
    expect(res.statusCode).to.be.equal(401);
    expect(data).to.be.deep.equal(fixtures.Unauthorized);
  });
}); /* eslint-disable no-underscore-dangle */