export function roleMiddleware(...roles) {
  return (req, res, next) => {
    // Role authorization will be added here.
    next();
  };
}
