export const formatDateWithTime = (
  dateString: string,
  timeString: string
): string => {
  const date = new Date(dateString)

  const day = date.getDate()
  const month = date.toLocaleString('default', { month: 'long' }).toLowerCase()

  return `${day} ${month}, ${timeString}`
}
