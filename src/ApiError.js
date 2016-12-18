import ExtendableError from './ExtendableError';

export default class ApiError extends ExtendableError {
  constructor(message, status, code) {
    super(message);
    this.status = status;
    this.code = code;
  }
}
