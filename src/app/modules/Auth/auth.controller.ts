import httpStatus from "http-status";
import { AppResponse } from "../../utils";
import catchAsync from "../../utils/catchAsync";
import { AuthService } from "./auth.service";

const login = catchAsync(async (req, res) => {
  const { accessToken, refreshToken, needPasswordChange } =
    await AuthService.loginIntoDB(req.body);

  res
    .cookie("refreshToken", refreshToken, {
      secure: true,
      httpOnly: true,
    })
    .status(httpStatus.OK)
    .json(
      new AppResponse(
        httpStatus.OK,
        { accessToken, needPasswordChange },
        "Login successfully"
      )
    );
});

export const AuthController = {
  login,
};
