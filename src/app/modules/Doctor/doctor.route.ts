import express from "express";
import { DoctorController } from "./doctor.contoller";

const router = express.Router();

router
  .route("/")
  .get(DoctorController.getAllDoctors)
  .post(DoctorController.createDoctor);

router.route("/:doctorId").get(DoctorController.getDoctor);

export const DoctorRoutes = router;
