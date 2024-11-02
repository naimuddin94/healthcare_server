import { Prisma, PrismaClient } from "@prisma/client";
import { DefaultArgs } from "@prisma/client/runtime/library";
import bcrypt from "bcrypt";

const prismaMiddleware = (
  prisma: PrismaClient<Prisma.PrismaClientOptions, never, DefaultArgs>
) => {
  prisma.$use(async (params, next) => {
    if (params.model === "User") {
      if (params.action === "create" || params.action === "update") {
        const userData = params.args.data;
        if (userData.password) {
          const saltRounds = 10;
          userData.password = await bcrypt.hash(userData.password, saltRounds);
        }
      }
    }
    return next(params);
  });
};

export default prismaMiddleware;
