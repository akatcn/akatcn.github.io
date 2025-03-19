export const formatDateKr = (date: Date) => {
  const year = date.toLocaleDateString("ko-KR", { year: "numeric", timeZone: "Asia/Seoul" })
  const month = date.toLocaleDateString("ko-KR", { month: "numeric", timeZone: "Asia/Seoul" })
  const day = date.toLocaleDateString("ko-KR", { day: "numeric", timeZone: "Asia/Seoul" })

  return {
    year,
    month,
    day
  }
}