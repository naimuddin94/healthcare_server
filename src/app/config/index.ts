import dotenv from "dotenv";
import path from "path";

dotenv.config({ path: path.join(process.cwd(), ".env") });

export const config = {
  access_secret: process.env.ACCESS_TOKEN_SECRET,
  refresh_secret: process.env.REFRESH_TOKEN_SECRET,
  access_token_expire: process.env.ACCESS_TOKEN_EXPIRY,
  refresh_token_expire: process.env.REFRESH_TOKEN_EXPIRY,
};
