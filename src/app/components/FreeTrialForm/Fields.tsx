'use client'

import { Input } from '@/components/ui/input'
import { useFormContext } from 'react-hook-form'
import { FreeTrialFormFieldsType } from './form.schema'

export function FreeTrialFormFields() {
  const {
    register,
    formState: { errors },
  } = useFormContext<FreeTrialFormFieldsType>()

  return (
    <>
      <Input label="Nome" error={errors.name?.message} {...register('name')} />
      <Input
        label="Email"
        error={errors.email?.message}
        {...register('email')}
      />
      <Input
        label="Telefone"
        error={errors.phone?.message}
        mask="phoneNumber"
        {...register('phone')}
      />
    </>
  )
}
