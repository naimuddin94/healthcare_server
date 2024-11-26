import prisma from "../../helper/prisma";

const saveIntoDB = async (payload: any) => {
  return await prisma.doctorSchedules.create({
    data: payload,
  });
};

export const DoctorScheduleService = {
  saveIntoDB,
};
