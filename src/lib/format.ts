/** Converts a 24-hour time string (HH:mm) to 12-hour AM/PM format. */
export function formatTime12h(time24: string): string {
  const [hourStr, minuteStr] = time24.split(':')
  const hour = Number(hourStr)
  const period = hour >= 12 ? 'PM' : 'AM'
  const hour12 = ((hour + 11) % 12) + 1
  return `${hour12}:${minuteStr} ${period}`
}
