export const formatDate = (date: Date) => {
  const year = String(date.getFullYear())
  const month = String(date.getMonth() + 1)
  const day = String(date.getDate())

  return {
    year: `${year}년`,
    month: `${month}월`,
    day: `${day}일`
  }
}