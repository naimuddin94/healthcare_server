import express from "express";
import { AdminRoutes } from "../modules/Admin/admin.route";
import { AuthRoutes } from "../modules/Auth/auth.routes";
import { DoctorRoutes } from "../modules/Doctor/doctor.route";
import { ScheduleRoutes } from "../modules/Schedule/schedule.route";
import { UserRoutes } from "../modules/User/user.route";
import { DocScheduleRoutes } from "../modules/DoctorSchedule/docSchedule.route";

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
  {
    path: "/schedules",
    route: ScheduleRoutes,
  },
  {
    path: "/doc-schedules",
    route: DocScheduleRoutes,
  },
];

modulesRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
