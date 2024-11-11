export const getMonthName = (date: Date): string =>
  date.toLocaleString('en-US', { month: 'long' })
