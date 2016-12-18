import ExtendableError from './ExtendableError';

/**
 * ApiError
 *
 * This error type is the base for the error handler and can be completly customized.
 */
export default class ApiError extends ExtendableError {
  constructor(message, status, code) {
    super(message);
    this.status = status;
    this.code = code;
  }
}
