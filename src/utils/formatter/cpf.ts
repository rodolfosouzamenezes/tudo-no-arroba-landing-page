import { formatOnlyNumbers } from './onlyNumbers'

export const formatCpf = (value: string): string => {
  const cleanedValue = formatOnlyNumbers(value)

  return cleanedValue
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1')
}
