import ApiError from './ApiError';

export default (error, req, res, next) => {
  if (!(error instanceof ApiError)) {
    next({
      code: 'ERR_NOT_VALID_ERROR_FORMAT',
      status: 500,
      message: 'Internal server error. Please contact the backend team.',
    });
  } else {
    res.status(error.status).send({
      code: error.code,
      status: error.status,
      message: error.message,
    });
  }
};
