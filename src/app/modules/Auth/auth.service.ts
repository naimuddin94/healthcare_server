import bcrypt from "bcrypt";
import httpStatus from "http-status";
import { config } from "../../config";
import prisma from "../../helper/prisma";
import { generateToken } from "../../utils";
import AppError from "../../utils/AppError";
import { ILoginPayload } from "./auth.interface";

const loginIntoDB = async (payload: ILoginPayload) => {
  const userData = await prisma.user.findUniqueOrThrow({
    where: {
      email: payload.email,
    },
  });

  const isPasswordCorrect = await bcrypt.compare(
    payload.password,
    userData.password
  );

  if (!isPasswordCorrect) {
    throw new AppError(httpStatus.BAD_REQUEST, "Invalid credentials!");
  }

  const accessToken = generateToken(
    { email: userData.email, role: userData.role },
    config.access_secret!,
    "30d"
  );

  const refreshToken = generateToken(
    { email: userData.email, role: userData.role },
    config.refresh_secret!,
    "1y"
  );

  return {
    accessToken,
    refreshToken,
    needPasswordChange: userData.needPasswordChange,
  };
};

export const AuthService = {
  loginIntoDB,
};
