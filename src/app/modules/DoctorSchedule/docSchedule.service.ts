import prisma from "../../helper/prisma";

// Save a new schedule into the database
const saveIntoDB = async (payload: any) => {
  return await prisma.doctorSchedules.create({
    data: payload,
  });
};

// Fetch all schedules for a specific doctor
const fetchAllMySchedules = async (doctorId: string) => {
  const result = await prisma.doctorSchedules.findMany({
    where: {
      doctorId,
    },
  });

  return result;
};

// Fetch a schedule by its ID
const fetchScheduleFromDB = async (scheduleId: string) => {
  const result = await prisma.doctorSchedules.findMany({
    where: {
      scheduleId,
    },
  });

  return result;
};

// Update a specific schedule
const updateScheduleInDB = async (doctorId: string, payload: any) => {
  const result = await prisma.doctorSchedules.update({
    where: {
      doctorId_scheduleId: {
        doctorId,
        scheduleId: payload.scheduleId,
      },
    },
    data: payload,
  });

  return result;
};

// Delete a specific schedule
const deleteScheduleFromDB = async (payload: any) => {
  const result = await prisma.doctorSchedules.delete({
    where: {
      doctorId_scheduleId: {
        doctorId: payload.doctorId,
        scheduleId: payload.scheduleId,
      },
    },
  });

  return result;
};

export const DoctorScheduleService = {
  saveIntoDB,
  fetchAllMySchedules,
  fetchScheduleFromDB,
  updateScheduleInDB,
  deleteScheduleFromDB,
};
