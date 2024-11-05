import { AppResponse } from "../../utils";
import catchAsync from "../../utils/catchAsync";
import { adminFilterableFields, adminOptionFields } from "./admin.constant";
import { AdminService } from "./admin.service";

const pick = (obj: Record<string, unknown>, keys: string[]) => {
  const finalObj: Partial<typeof obj> = {};
  for (const key of keys) {
    if (obj && Object.hasOwnProperty.call(obj, key)) {
      finalObj[key] = obj[key];
    }
  }

  return finalObj;
};

const getAllAdmin = catchAsync(async (req, res) => {
  const filters = pick(req.query, adminFilterableFields);

  const options = pick(req.query, adminOptionFields);

  const result = await AdminService.fetchAllAdminFromDB(filters, options);

  res
    .status(200)
    .json(
      new AppResponse(200, result.data, "All Admin data retrieved successfully", result.meta)
    );
});

export const AdminController = {
  getAllAdmin,
};
