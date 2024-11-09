import express from "express";
import { AdminController } from "./admin.controller";

const router = express.Router();

router.route("/").get(AdminController.getAllAdmin);

export const AdminRoutes = router;
