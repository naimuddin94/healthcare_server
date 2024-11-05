import express from "express";
import { adminRoutes } from "../modules/Admin/admin.route";
import { userRoutes } from "../modules/User/user.route";

const router = express.Router();

const modulesRoutes = [
  {
    path: "/users",
    route: userRoutes,
  },
  {
    path: "/admin",
    route: adminRoutes,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
