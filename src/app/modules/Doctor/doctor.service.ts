import { Doctor } from "@prisma/client";
import prisma from "../../helper/prisma";

const saveDoctorIntoDB = async (payload: Doctor) => {
  return await prisma.doctor.create({
    data: payload,
  });
};

const fetchAllDoctorsFromDB = async () => {
  return await prisma.doctor.findMany();
};

const fetchDoctorFromDB = async (id: string) => {
  return await prisma.doctor.findFirst({
    where: {
      id,
    },
  });
};

export const DoctorService = {
  saveDoctorIntoDB,
  fetchAllDoctorsFromDB,
  fetchDoctorFromDB,
};
