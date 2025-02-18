import { formatOnlyNumbers } from './onlyNumbers'

export const formatPhoneNumber = (value: string) => {
  const cleanedValue = formatOnlyNumbers(value)

  // Telefone fixo (8 dígitos)
  if (cleanedValue.length <= 10) {
    return cleanedValue
      .replace(/(\d{2})(\d)/, '($1) $2')
      .replace(/(\d{4})(\d{1,4})/, '$1-$2')
      .replace(/(-\d{4})\d+?$/, '$1')
  }

  // Celular (9 dígitos)
  const maxLength = 11
  const truncatedValue = cleanedValue.slice(0, maxLength)
  return truncatedValue
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d{1,4})/, '$1-$2')
    .replace(/(-\d{4})\d+?$/, '$1')
}
