import httpStatus from "http-status";
import { AppResponse } from "../../utils";
import catchAsync from "../../utils/catchAsync";
import { userServices } from "./user.service";

const crateAdmin = catchAsync(async (req, res) => {
  const result = await userServices.createAdminIntoDB(req.body);

  res
    .status(httpStatus.CREATED)
    .json(new AppResponse(201, result, "Admin created successfully"));
});

export const userController = {
  crateAdmin,
};
