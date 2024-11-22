import express from "express";
import { AdminRoutes } from "../modules/Admin/admin.route";
import { AuthRoutes } from "../modules/Auth/auth.routes";
import { DoctorRoutes } from "../modules/Doctor/doctor.route";
import { UserRoutes } from "../modules/User/user.route";

const router = express.Router();

const modulesRoutes = [
  {
    path: "/users",
    route: UserRoutes,
  },
  {
    path: "/admin",
    route: AdminRoutes,
  },
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/doctors",
    route: DoctorRoutes,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
