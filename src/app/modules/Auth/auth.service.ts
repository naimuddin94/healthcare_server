import prisma from "../../helper/prisma";
import { ILoginPayload } from "./auth.interface";

const loginIntoDB = async (payload: ILoginPayload) => {
  const userData = await prisma.user.findUnique({
    where: {
      email: payload.email,
    },
  });
};

export const AuthService = {
  loginIntoDB,
};
