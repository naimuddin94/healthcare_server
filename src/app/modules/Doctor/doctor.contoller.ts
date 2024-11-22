import httpStatus from "http-status";
import { AppResponse } from "../../utils";
import catchAsync from "../../utils/catchAsync";
import { DoctorService } from "./doctor.service";

const createDoctor = catchAsync(async (req, res) => {
  const result = await DoctorService.saveDoctorIntoDB(req.body);

  res
    .status(httpStatus.CREATED)
    .json(
      new AppResponse(httpStatus.CREATED, result, "Doctor created successfully")
    );
});

const getAllDoctors = catchAsync(async (req, res) => {
  const result = await DoctorService.fetchAllDoctorsFromDB();

    res
      .status(httpStatus.OK)
      .json(
        new AppResponse(
          httpStatus.OK,
          result,
          "Doctors retrieved successfully"
        )
      );
});

export const DoctorController = {
  createDoctor,
  getAllDoctors,
};
