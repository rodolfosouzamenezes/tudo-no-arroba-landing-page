import { formatText } from '@/utils/formatText'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export const freeTrialFormFieldsSchema = z.object({
  name: z.string({ message: 'Obrigatório' }).min(1, 'Obrigatório'),
  email: z
    .string()
    .email('Informe um email válido')
    .min(1, 'Informe um email')
    .transform((email) => {
      const sanitizedEmail = formatText(email).replaceAll(' ', '')

      return sanitizedEmail
    }),
  phone: z.string({ message: 'Obrigatório' }).refine(
    (phone) => {
      const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-\d{4}$/
      return phoneRegex.test(phone)
    },
    {
      message: 'Informe um número de telefone válido',
    },
  ),
})

export const freeTrialFormResolver = zodResolver(freeTrialFormFieldsSchema)

export type FreeTrialFormFieldsType = z.infer<typeof freeTrialFormFieldsSchema>
