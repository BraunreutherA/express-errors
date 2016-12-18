/* eslint-disable no-underscore-dangle */
import httpMocks from 'node-mocks-http';
import ApiError from './ApiError';
import NotImplementedError from './NotImplementedError';
import NotFoundError from './NotFoundError';
import UnauthorizedError from './UnauthorizedError';
import errorHandler from './handler';
import * as fixtures from './fixtures';

describe('API Error handling', () => {
  it('Should set the status to 500 and throw error that complains that the error is not an ApiError.', () => {
    const error = new Error('Test error');
    const next = (errorObject) => {
      expect(errorObject).to.be.deep.equal({
        code: 'ERR_NOT_VALID_ERROR_FORMAT',
        status: 500,
        message: 'Internal server error. Please contact the backend team.',
      });
    };

    errorHandler(error, null, null, next);
  });

  it('Should send the error as an json object and set the proper status.', () => {
    const error = new ApiError('Test error', 404, 'ERR_NOT_FOUND');
    const res = httpMocks.createResponse();

    errorHandler(error, null, res, () => {});

    const data = res._getData();
    expect(res.statusCode).to.be.equal(404);
    expect(data).to.be.deep.equal({
      code: 'ERR_NOT_FOUND',
      status: 404,
      message: 'Test error',
    });
  });

  it('Should send the NotImplemented error as an json object and set the proper status.', () => {
    const res = httpMocks.createResponse();
    errorHandler(new NotImplementedError(), null, res, () => {});

    const data = res._getData();
    expect(res.statusCode).to.be.equal(501);
    expect(data).to.be.deep.equal(fixtures.NotImplemented);
  });

  it('Should send the NotFound error as an json object and set the proper status.', () => {
    const res = httpMocks.createResponse();
    errorHandler(new NotFoundError(), null, res, () => {});

    const data = res._getData();
    expect(res.statusCode).to.be.equal(404);
    expect(data).to.be.deep.equal(fixtures.NotFound);
  });

  it('Should send the Unauthorized error as an json object and set the proper status.', () => {
    const res = httpMocks.createResponse();
    errorHandler(new UnauthorizedError(), null, res, () => {});

    const data = res._getData();
    expect(res.statusCode).to.be.equal(401);
    expect(data).to.be.deep.equal(fixtures.Unauthorized);
  });
});
