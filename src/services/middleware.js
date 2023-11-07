import jwt from "jsonwebtoken";
import db from "../models"

const middleware = {
  verifyToken: async(req, res, next) => {
    const token = req.query.access_token;

    if (token) {
      try {
        const user_id = jwt.verify(token, "password");
        await db.User.findOne({ id: user_id })
        .then(() => next())
        .catch((err) => res.status(500).json({ message: err }))
      } catch (error) {
        res.status(403).json({ message: "token hết hạn" })
      }
    } else res.status(401).json({ message: "token không hợp lệ!" })
  },
  check_manager: (req, res, next) => {
    if (req.data[0].role == 1) next();
    else res.status(401).json({ message: "không đủ quyền truy cập" });
  },
  check_admin: (req, res, next) => {
    if (req.data[0].role == 2) next();
    else res.status(401).json({ message: "không đủ quyền truy cập" });
  }
}
module.exports = middleware