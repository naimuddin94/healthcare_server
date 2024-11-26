import express from "express";
import { DoctorScheduleController } from "./docSchedule.controller";

const router = express.Router();

router.post("/", DoctorScheduleController.createDocSchedule);

export const DocScheduleRoutes = router;
