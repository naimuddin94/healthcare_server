import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const adminSearchableFields = ["name", "email", "contactNumber"];

const fetchAllAdminFromDB = async (query: any) => {
  const { searchTerm, ...filteredValues } = query;

  const andCondition: Prisma.AdminWhereInput[] = [];

  if (searchTerm) {
    andCondition.push({
      OR: adminSearchableFields.map((field) => ({
        [field]: {
          contains: searchTerm,
          mode: "insensitive",
        },
      })),
    });
  }

  if (Object.keys(filteredValues).length) {
    andCondition.push({
      AND: Object.keys(filteredValues).map((key) => ({
        [key]: {
          equals: filteredValues[key],
        },
      })),
    });
  }

  const whereCondition: Prisma.AdminWhereInput = { AND: andCondition };
  return await prisma.admin.findMany({
    where: whereCondition,
  });
};

export const AdminService = {
  fetchAllAdminFromDB,
};
