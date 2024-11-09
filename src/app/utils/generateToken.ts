import jwt from "jsonwebtoken";
const generateToken = (
  data: Record<string, unknown>,
  secret: string,
  expire: string
) => {
  return jwt.sign(data, secret, {
    expiresIn: expire,
  });
};

export default generateToken;
