import ApiError from './ApiError';

/**
 * NotImplementedError
 *
 * default status code: 501
 * default error code: ERR_NOT_IMPLEMENTED
 * default message: This resource is not implemented yet.
 */
export default class NotImplementedError extends ApiError {
  constructor(message, code) {
    /* eslint-disable no-param-reassign */
    if (!code) {
      code = 'ERR_NOT_IMPLEMENTED';
    }

    if (!message) {
      message = 'This resource is not implemented yet.';
    }

    super(message, 501, code);
  }
}
