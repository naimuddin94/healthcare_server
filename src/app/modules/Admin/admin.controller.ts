import { AppResponse, pick } from "../../utils";
import catchAsync from "../../utils/catchAsync";
import { adminFilterableFields, adminOptionFields } from "./admin.constant";
import { AdminService } from "./admin.service";


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
