import { Request, Response } from "express";
import { userServices } from "./user.service";

const crateAdmin = async (req: Request, res: Response) => {
  const result = await userServices.createAdminIntoDB(req.body);
  res.send(result);
};

export const userController = {
  crateAdmin,
};
