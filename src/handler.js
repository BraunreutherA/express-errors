import ApiError from './ApiError';

/* eslint-disable no-unused-vars */
export default (error, req, res, next) => {
  if (!(error instanceof ApiError)) {
    res.status(500).send({
      code: 'ERR_INTERNAL',
      status: 500,
      message: error.message,
    });
  } else {
    res.status(error.status).send({
      code: error.code,
      status: error.status,
      message: error.message,
    });
  }
};
