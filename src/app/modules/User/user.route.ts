import express, { NextFunction, Request, Response } from "express";
import { AnyZodObject, z } from "zod";
import { userController } from "./user.controller";

const router = express.Router();

const update = z.object({
  body: z.object({
    password: z.string(),
    admin: z.object({
      name: z.string(),
      email: z.string(),
      contactNumber: z.string(),
    }),
  }),
});

const validateRequest =
  (schema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.parseAsync({ body: req.body });
      next();
    } catch (error) {
      next(error);
    }
  };

router.route("/").post(validateRequest(update), userController.crateAdmin);

export const userRoutes = router;
