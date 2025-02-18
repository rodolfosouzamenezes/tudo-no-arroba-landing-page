import './globals.css'
import 'react-toastify/dist/ReactToastify.css'

import type { Metadata } from 'next'

import { Providers } from './providers'
import { ToastContainer } from 'react-toastify'
import { cn } from '@/lib/utils'
import { fontLogo, fontSans } from '@/styles/fonts'
import { Header } from '@/components/Header'
import { WithChildren } from '@/@types/general'

export const metadata: Metadata = {
  title: 'Tudo No@ - Transforme sua influência em oportunidades',
  description:
    'O Tudo no @ conecta empresas a influenciadores de forma simples e inovadora',
}

export default function RootLayout({ children }: WithChildren) {
  return (
    <html suppressHydrationWarning lang="pt-BR" className="antialiased">
      <body
        className={cn(
          'min-h-screen bg-background font-sans antialiased dark:bg-zinc-900',
          fontSans.variable,
          fontLogo.variable,
        )}
      >
        <Providers>
          <div className="relative flex h-screen max-h-screen justify-center overflow-hidden bg-white dark:bg-zinc-800">
            <Header />

            <div className="mt-16 flex h-[calc(100vh_-_64px)] w-full justify-center overflow-y-scroll">
              <main className="w-full">{children}</main>
            </div>
          </div>

          <ToastContainer
            autoClose={1500}
            closeOnClick
            position="bottom-right"
            pauseOnFocusLoss
            icon={false}
            pauseOnHover
            theme="colored"
          />
        </Providers>
      </body>
    </html>
  )
}
