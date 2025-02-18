import FreeTrialEmail from '@/emails/FreeTrial'
import { NextResponse } from 'next/server'
import { render } from '@react-email/components'
import { transporter } from '@/lib/nodemailer'
import { env } from '@/utils/env'
import { SentMessageInfo } from 'nodemailer'

interface FreeTrialEmailBody {
  email: string
  name: string
  phone: string
}

export async function POST(req: Request) {
  try {
    const body: FreeTrialEmailBody = await req.json()

    const { email, name, phone } = body

    if (!email || !name || !phone) {
      return NextResponse.json(
        { error: 'Os campos email, nome e telefone são obrigatórios' },
        { status: 400 },
      )
    }

    const emailHtml = await render(
      FreeTrialEmail({
        email,
        name,
        phone,
      }),
    )

    const mailData = {
      from: env.EMAIL_USER,
      to: 'comercial@modernizesh.com',
      subject: 'Solicitação de teste grátis do Tudo No@',
      html: emailHtml,
    }

    const success = await new Promise<boolean>((resolve, reject) => {
      transporter
        .sendMail(mailData)
        .then((info: SentMessageInfo) => {
          if (info.response.includes('250')) {
            resolve(true)
          } else {
            reject(new Error('Falha ao enviar o email'))
          }
        })
        .catch(reject)
    })

    if (!success) {
      throw new Error('Erro ao enviar o email')
    }

    return NextResponse.json(
      { message: 'Email enviado com sucesso' },
      { status: 200 },
    )
  } catch (error) {
    console.error('Erro ao enviar o email:', error)

    return NextResponse.json(
      { error: 'Erro ao enviar o email' },
      { status: 500 },
    )
  }
}
