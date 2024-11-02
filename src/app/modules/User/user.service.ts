import { PrismaClient, UserRole } from "@prisma/client";

const prisma = new PrismaClient();

const createAdminIntoDB = async (data: any) => {
  const userData = {
    email: data.admin.email,
    password: data.password,
    role: UserRole.ADMIN,
  };

  return await prisma.$transaction(async (tx) => {
    await tx.user.create({
      data: userData,
    });

    return await tx.admin.create({
      data: data.admin,
    });
  });
};

export const userServices = {
  createAdminIntoDB,
};
