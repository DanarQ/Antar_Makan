import jwt from "jsonwebtoken";

export function authenticate(req, res, next) {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Tidak ada token" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch {
    res.status(401).json({ message: "Token tidak valid" });
  }
}

export function requireRole(roles) {
  return (req, res, next) => {
    if (req.user?.roles !== roles) {
      return res.status(403).json({ message: "Akses ditolak" });
    }
    next();
  };
}
