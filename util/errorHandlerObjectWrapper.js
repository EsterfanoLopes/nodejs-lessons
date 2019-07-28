module.exports = (httpStatusCode, err, next) => {
  const error = new Error(err);
  error.httpStatusCode = httpStatusCode;
  return next(error);
}
