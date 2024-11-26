import { addHours, addMinutes, format } from "date-fns";
import prisma from "../../helper/prisma";

const insertIntoDB = async (payload: any) => {
  const { startDate, endDate, startTime, endTime } = payload;

  const intervalTime = 30;

  const schedules = [];

  const currentDate = new Date(startDate);
  const lastDate = new Date(endDate);

  while (currentDate <= lastDate) {
    const startDateTime = new Date(
      addHours(
        addMinutes(
          `${format(currentDate, "yyyy-MM-dd")}`,
          Number(startTime.split(":")[1])
        ),
        Number(startTime.split(":")[0])
      )
    );

    const endDateTime = new Date(
      addHours(
        addMinutes(
          `${format(currentDate, "yyyy-MM-dd")}`,
          Number(endTime.split(":")[1])
        ),
        Number(endTime.split(":")[0])
      )
    );

    while (startDateTime < endDateTime) {
      const scheduleData = {
        startDateTime: startDateTime,
        endDateTime: addMinutes(startDateTime, intervalTime),
      };

      const existsSchedules = await prisma.schedule.findFirst({
        where: {
          startDateTime: scheduleData.startDateTime,
          endDateTime: scheduleData.endDateTime,
        },
      });

      if (!existsSchedules) {
        const result = await prisma.schedule.create({
          data: scheduleData,
        });

        schedules.push(result);
      }

      startDateTime.setMinutes(startDateTime.getMinutes() + intervalTime);
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }

  return schedules;
};

export const ScheduleService = {
  insertIntoDB,
};
