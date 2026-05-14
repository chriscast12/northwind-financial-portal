function requireAuth(req, res, next) {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.includes("Bearer")) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  next();
}

module.exports = { requireAuth };
