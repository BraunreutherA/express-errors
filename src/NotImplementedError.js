import ApiError from './ApiError';

export default class NotImplementedError extends ApiError {
  constructor() {
    super('This resource is not implemented yet.', 501, 'ERR_NOT_IMPLEMENTED');
  }
}
