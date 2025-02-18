'use client'

import { BarChart2, HeartHandshake, QrCode, TrendingUp } from 'lucide-react'
import { AdvantageCard } from '../AdvantageCard'
import { useRef } from 'react'
import { useInView } from 'framer-motion'
import { cn } from '@/lib/utils'

export function AdvantageCardList() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  return (
    <div
      ref={ref}
      className="container grid gap-4 py-16 md:grid-cols-2 lg:grid-cols-4 lg:gap-14"
    >
      <AdvantageCard
        title="Conexão Estratégica"
        description="Marcas e influenciadores se conectam de forma fácil e segmentada, garantindo parcerias alinhadas e eficazes."
        icon={HeartHandshake}
        className={cn({
          'animate-fade-in': inView,
        })}
      />
      <AdvantageCard
        title="Pagamentos Facilitados"
        description={
          'Influenciadores podem "Pagar No@" via QR Code, simplificando o acesso a produtos e serviços'
        }
        icon={QrCode}
        className={cn({
          'animate-fade-in duration-500': inView,
        })}
      />
      <AdvantageCard
        title="Gestão de Campanhas"
        description="Empresas acompanham solicitações, aprovam influenciadores e monitoram o desempenho das campanhas em um só lugar."
        icon={BarChart2}
        className={cn({
          'animate-fade-in duration-700': inView,
        })}
      />
      <AdvantageCard
        title="Evolução Profissional"
        description="O app ajuda criadores de conteúdo a construir um portfólio sólido e aumentar sua relevância no mercado."
        icon={TrendingUp}
        className={cn({
          'animate-fade-in duration-1000': inView,
        })}
      />
    </div>
  )
}
