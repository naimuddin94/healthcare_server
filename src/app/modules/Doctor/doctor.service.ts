import { Doctor } from "@prisma/client";
import prisma from "../../helper/prisma";

const saveDoctorIntoDB = async (payload: Doctor) => {
  return await prisma.doctor.create({
    data: payload,
  });
};

export const DoctorService = {
  saveDoctorIntoDB,
};
