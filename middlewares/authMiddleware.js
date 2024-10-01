const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization');
    if (!token) return res.status(401).send('Access denied. No token provided.');
  
    // Add token verification logic here
  
    next();
  };
  
  module.exports = authMiddleware;