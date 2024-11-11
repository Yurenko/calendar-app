export const getMonthsFromCurrent = Array.from(
  { length: 6 },
  (_, index) =>
    new Date(new Date().getFullYear(), new Date().getMonth() + index)
)
