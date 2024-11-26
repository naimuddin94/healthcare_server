import httpStatus from "http-status";
import { AppResponse } from "../../utils";
import catchAsync from "../../utils/catchAsync";
import { DoctorScheduleService } from "./docSchedule.service";

const createDocSchedule = catchAsync(async (req, res) => {
  const result = await DoctorScheduleService.saveIntoDB(req.body);

  res
    .status(httpStatus.CREATED)
    .json(
      new AppResponse(
        httpStatus.CREATED,
        result,
        "Doctor schedule created successfully"
      )
    );
});

export const DoctorScheduleController = {
  createDocSchedule,
};
