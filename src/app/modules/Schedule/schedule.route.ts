import express from "express";
import { ScheduleController } from "./service.controller";

const router = express.Router();

router.post("/", ScheduleController.createSchedule);

export const ScheduleRoutes = router;
