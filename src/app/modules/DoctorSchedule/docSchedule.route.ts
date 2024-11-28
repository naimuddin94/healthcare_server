import express from "express";
import { DoctorScheduleController } from "./docSchedule.controller";

const router = express.Router();

router
  .route("/")
  .post(DoctorScheduleController.createDocSchedule)
  .get(DoctorScheduleController.getAllMySchedules);

router.route("/:scheduleId").get(DoctorScheduleController.getSchedule);

export const DocScheduleRoutes = router;
