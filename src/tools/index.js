import jwt from "jsonwebtoken";

const tools = {
  gennerateToken: (payload, secretKey, expiresIn) => {
    const token = jwt.sign(payload, secretKey, { expiresIn });
    return token;
  },
  gennerateRefreshToken: (payload, secretKey, expiresIn) => {
    const refreshoken = jwt.sign(payload, secretKey, { expiresIn });
    return refreshoken;
  }
};
module.exports = tools;