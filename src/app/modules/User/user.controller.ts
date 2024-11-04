import { AppResponse } from "../../utils";
import catchAsync from "../../utils/catchAsync";
import { userServices } from "./user.service";

const crateAdmin = catchAsync(async (req, res) => {
  const result = await userServices.createAdminIntoDB(req.body);

  res
    .status(201)
    .json(new AppResponse(201, result, "Admin created successfully"));
});

export const userController = {
  crateAdmin,
};
