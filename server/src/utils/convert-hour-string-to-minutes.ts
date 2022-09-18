export function convertHourStringToMinutes(hourString: string) {
  const [hour, minutes] = hourString.split(":").map(Number);

  return hour * 60 + minutes;
}
