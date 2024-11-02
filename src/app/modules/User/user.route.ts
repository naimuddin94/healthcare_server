import express from "express";
import { userController } from "./user.controller";

const router = express.Router();

router.route("/").post(userController.crateAdmin);

export const userRoutes = router;
