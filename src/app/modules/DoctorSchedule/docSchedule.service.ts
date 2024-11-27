import prisma from "../../helper/prisma";

const saveIntoDB = async (payload: any) => {
  return await prisma.doctorSchedules.create({
    data: payload,
  });
};

const fetchAllMySchedules = async (doctorId: string) => {
  const result = await prisma.doctorSchedules.findMany({
    where: {
      doctorId,
    },
  });

  return result;
};

export const DoctorScheduleService = {
  saveIntoDB,
  fetchAllMySchedules,
};
