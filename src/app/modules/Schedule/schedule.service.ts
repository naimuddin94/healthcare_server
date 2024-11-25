import { addHours, addMinutes, format } from "date-fns";

const insertIntoDB = async (payload: any) => {
  const { startDate, endDate, startTime, endTime } = payload;

  const intervalTime = 30;

  const currentDate = new Date(startDate);
  const lastDate = new Date(endDate);

  while (currentDate <= lastDate) {
    const startDateTime = new Date(
      addHours(
        `${format(currentDate, "yyyy-MM-dd")}`,
        Number(startTime.split(":")[0])
      )
    );

    const endDateTime = new Date(
      addHours(
        `${format(currentDate, "yyyy-MM-dd")}`,
        Number(endTime.split(":")[0])
      )
    );

    while (startDateTime < endDateTime) {
      const scheduleData = {
        startDateTime: startDateTime,
        endDateTime: addMinutes(startDateTime, intervalTime),
      };

      console.log({ scheduleData });

      startDateTime.setMinutes(startDateTime.getMinutes() + intervalTime);
    }

    currentDate.setDate(currentDate.getDate() + 1);
  }
};

export const ScheduleService = {
  insertIntoDB,
};
