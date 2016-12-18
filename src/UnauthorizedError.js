import ApiError from './ApiError';

export default class UnauthorizedError extends ApiError {
  constructor(message, code) {
    /* eslint-disable no-param-reassign */
    if (!code) {
      code = 'ERR_NOT_AUTHORIZED';
    }

    if (!message) {
      message = 'You are not authorized to access this resource.';
    }

    super(message, 401, code);
  }
}
