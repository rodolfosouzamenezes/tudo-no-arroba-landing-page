import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
  Tailwind,
} from '@react-email/components'
import * as React from 'react'

interface FreeTrialEmailProps {
  name: string
  email: string
  phone: string
}

export const FreeTrialEmail = ({ email, name, phone }: FreeTrialEmailProps) => {
  const previewText = `${name} quer testar o Tudo No@`

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="mx-auto my-auto bg-white px-2 font-sans">
          <Container className="mx-auto my-[40px] max-w-[465px] rounded border border-solid border-[#eaeaea] p-[20px]">
            <Section className="my-8">
              <Img
                src="https://modernizesoftwares.s3.us-east-2.amazonaws.com/66abfe87-5793-4e13-8fbb-b070053c5e2a-Frame 4533858.png"
                width="180"
                height="30"
                alt="Tudo No@ e Modernize"
                className="mx-auto"
              />
            </Section>
            <Heading className="mx-0 my-[30px] p-0 text-[24px] font-normal text-black">
              Solicitação de teste grátis do Tudo No@
            </Heading>
            <Text className="text-[14px] leading-[24px] text-black">
              Olá representante da Modernize,
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              Temos boas notícias para você,{' '}
              <strong className="capitalize">{name}</strong> está solicitando um{' '}
              <strong>teste grátis de 1 mês do Tudo No@</strong>. Entre em
              contato:
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              <strong className="capitalize">Email: </strong> {email}
            </Text>
            <Text className="text-[14px] leading-[24px] text-black">
              <strong className="capitalize">Telefone: </strong> {phone}
            </Text>

            <Section className="mb-[32px] mt-[32px] text-center">
              <Button
                className="rounded bg-black px-5 py-3 text-center text-[12px] font-semibold uppercase text-white no-underline"
                href={`mailto:${email}`}
              >
                Enviar email
              </Button>
            </Section>

            <Hr className="mx-0 my-[26px] w-full border border-solid border-[#eaeaea]" />
            <Text className="text-[12px] leading-[24px] text-[#666666]">
              Esse e cliente entrou em contato a apartir de nossa Landing Page
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  )
}

FreeTrialEmail.PreviewProps = {
  email: 'costumer.name@mail.com',
  name: 'Costumer name',
  phone: '(015) 99766-7822',
} as FreeTrialEmailProps

export default FreeTrialEmail
