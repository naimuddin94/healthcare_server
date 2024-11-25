import { Request, Response } from "express";
import httpStatus from "http-status";
import { AppResponse } from "../../utils";
import catchAsync from "../../utils/catchAsync";
import { ScheduleService } from "./schedule.service";

const createSchedule = catchAsync(async (req: Request, res: Response) => {
  const result = await ScheduleService.insertIntoDB(req.body);

  res
    .status(200)
    .json(
      new AppResponse(
        httpStatus.CREATED,
        result,
        "Schedule created successfully"
      )
    );
});

export const ScheduleController = {
  createSchedule,
};
