export default (req, res, next) => {
  // TODO: Investigate why req.secure doesn't work
  if (req.get('x-forwarded-proto') === 'https') {
    return next();
  }

  res.redirect(301, 'https://' + req.hostname + req.url);
};
