import { env } from '@/utils/env'
import nodemailer from 'nodemailer'

export const transporter = nodemailer.createTransport({
  host: env.EMAIL_SMTP,
  port: 587,
  secure: false,
  auth: {
    user: env.EMAIL_USER,
    pass: env.EMAIL_PASSWORD,
  },
})
