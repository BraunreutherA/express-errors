import ApiError from './ApiError';

/**
 * BadRequestError
 *
 * default status code: 400
 * default error code: ERR_BAD_REQUREST
 * default message: Bad request.
 */
export default class BadRequestError extends ApiError {
  constructor(message, code) {
    /* eslint-disable no-param-reassign */
    if (!code) {
      code = 'ERR_BAD_REQUREST';
    }

    if (!message) {
      message = 'Bad request.';
    }

    super(message, 400, code);
  }
}
