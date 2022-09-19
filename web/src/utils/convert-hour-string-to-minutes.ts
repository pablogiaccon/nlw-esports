export function convertHourStringToMinutes(hourString: string) {
  if (!hourString) return 0;
  const [hour, minutes] = hourString.split(":").map(Number);

  return hour * 60 + minutes;
}
