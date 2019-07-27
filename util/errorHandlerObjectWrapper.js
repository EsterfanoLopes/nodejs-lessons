module.exports = (httpStatusCode, err) => {
  const error = new Error(err);
  error.httpStatusCode = httpStatusCode;
  return next(error);
}
