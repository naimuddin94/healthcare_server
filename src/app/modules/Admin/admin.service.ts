import { Prisma } from "@prisma/client";
import { pagination, TOptions } from "../../helper/pagination";
import prisma from "../../helper/prisma";
import { adminSearchableFields } from "./admin.constant";

const fetchAllAdminFromDB = async (
  query: Record<string, unknown>,
  options: TOptions
) => {
  const { searchTerm, ...filteredValues } = query;

  const { page, skip, limit } = pagination.calculatePagination(options);

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

  const data = await prisma.admin.findMany({
    where: whereCondition,
    skip,
    take: limit,
    orderBy:
      options.sortBy && options.sortOrder
        ? {
            [options.sortBy]: options.sortOrder,
          }
        : {
            createdAt: "desc",
          },
  });

  const total = await prisma.admin.count({
    where: whereCondition,
  });

  return { data, meta: { page, limit, total } };
};

export const AdminService = {
  fetchAllAdminFromDB,
};
