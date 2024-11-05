import { AppResponse } from "../../utils";
import catchAsync from "../../utils/catchAsync";
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
  const filters = pick(req.query, [
    "name",
    "email",
    "contactNumber",
    "searchTerm",
  ]);

  console.log(filters);
  const result = await AdminService.fetchAllAdminFromDB(filters);

  res
    .status(200)
    .json(
      new AppResponse(201, result, "All Admin data retrieved successfully")
    );
});

export const AdminController = {
  getAllAdmin,
};
