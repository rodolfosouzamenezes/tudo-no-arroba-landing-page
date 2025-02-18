import { dateToLocale } from './dateToLocale'

export const calculateTimeAgo = (createdAt: string) => {
  const brazilianDate = dateToLocale(createdAt)
  const createdDate: Date = new Date(brazilianDate)
  const currentDate: Date = new Date()

  // Diferença em milisegundos
  const timeDifferenceMs: number = currentDate.getTime() - createdDate.getTime()

  // Diferença em segundos
  const timeDifferenceSeconds: number = timeDifferenceMs / 1000

  // Diferença em minutos
  const timeDifferenceMinutes: number = timeDifferenceSeconds / 60

  // Diferença em horas
  const timeDifferenceHours: number = timeDifferenceMinutes / 60

  // Diferença em dias
  const timeDifferenceDays: number = timeDifferenceHours / 24

  // Diferença em meses
  const timeDifferenceMonths: number =
    currentDate.getMonth() -
    createdDate.getMonth() +
    12 * (currentDate.getFullYear() - createdDate.getFullYear())

  // Diferença em anos
  const timeDifferenceYears: number =
    currentDate.getFullYear() - createdDate.getFullYear()

  if (timeDifferenceMinutes < 1) {
    return 'agora'
  } else if (timeDifferenceMinutes < 60) {
    return `${Math.round(timeDifferenceMinutes)} min`
  } else if (timeDifferenceHours < 24) {
    return `${Math.round(timeDifferenceHours)} h`
  } else if (timeDifferenceDays < 30) {
    return `${Math.round(timeDifferenceDays)} d`
  } else if (timeDifferenceMonths < 12) {
    return `${Math.round(timeDifferenceMonths)} m`
  } else {
    return `${Math.round(timeDifferenceYears)} a`
  }
}
