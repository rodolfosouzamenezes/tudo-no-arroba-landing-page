'use client'

import * as Form from '@/components/Form'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'
import { FreeTrialFormFieldsType, freeTrialFormResolver } from './form.schema'
import { FreeTrialFormFields } from './Fields'
import { Button } from '@/components/Button'
import { api } from '@/services/api'

export function FreeTrialForm() {
  const formMethods = useForm<FreeTrialFormFieldsType>({
    resolver: freeTrialFormResolver,
  })

  const {
    formState: { isSubmitting },
    reset,
  } = formMethods

  const onSubmitSignIn = async (data: FreeTrialFormFieldsType) => {
    try {
      await api.post('/api/freeTrialEmail', data)

      toast.success('Em breve entraremos em contato!')
      reset()
    } catch (error) {
      toast.error(
        'Não foi possível solicitar o teste grátis, tente novamente mais tarde',
      )
    }
  }

  return (
    <Form.Provider formMethods={formMethods} onSubmit={onSubmitSignIn}>
      <FreeTrialFormFields />

      <Button
        type="submit"
        isLoading={isSubmitting}
        className="w-full bg-green-600 text-lg hover:bg-green-700"
      >
        Experimente Grátis
      </Button>
    </Form.Provider>
  )
}
