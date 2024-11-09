import express from "express";
import { validateRequest } from "../../middleware";
import { userController } from "./user.controller";
import { UserValidation } from "./user.validation";

const router = express.Router();

router
  .route("/")
  .post(
    validateRequest(UserValidation.updateSchema),
    userController.crateAdmin
  );

export const userRoutes = router;
