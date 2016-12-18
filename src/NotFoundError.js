import ApiError from './ApiError';

export default class NotFoundError extends ApiError {
  constructor(message, code) {
    /* eslint-disable no-param-reassign */
    if (!code) {
      code = 'ERR_NOT_FOUND';
    }

    if (!message) {
      message = 'This requested resource was not found.';
    }

    super(message, 404, code);
  }
}
