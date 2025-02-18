import { Button } from '@/components/ui/button'

import { Section } from './components/Section'
import { BackgroundSection } from './components/BackgroundSection'
import Image from 'next/image'
import { AdvantageCardList } from './components/AdvantageCardList'

export default function Home() {
  return (
    <>
      <div className="container flex w-full flex-col items-center justify-between py-12 lg:h-[80vh] lg:flex-row">
        <div className="space-y-12  text-center lg:max-w-[50%] lg:text-start">
          <div className="space-y-4">
            <h1 className="animate-fade-in text-5xl font-bold [--animation-delay:400ms]">
              Transforme sua influência em oportunidades
            </h1>
            <h2 className="max-w-full animate-fade-in text-lg font-light [--animation-delay:600ms]">
              O Tudo no @ conecta empresas a influenciadores de forma simples e
              inovadora
            </h2>
          </div>
          <div className="flex w-full animate-fade-in flex-col justify-center space-y-4 [--animation-delay:600ms] sm:flex-row sm:space-x-4 sm:space-y-0 lg:justify-start">
            <Button size="lg" linkProps={{ href: '#download' }}>
              Instalar agora mesmo
            </Button>
          </div>
        </div>
        <Image
          src="/hero.png"
          alt=""
          width={1000}
          height={800}
          quality={100}
          className="hidden w-[40%] animate-fade-in [--animation-delay:600ms] lg:flex"
        />
      </div>
      <BackgroundSection>
        <AdvantageCardList />
      </BackgroundSection>

      <div className="py-16">
        <Section
          title="Sobre o Tudo No@"
          description="O Tudo No@ é uma plataforma inovadora que conecta marcas e influenciadores de maneira estratégica e eficiente. Através do app, empresas podem criar campanhas promocionais oferecendo produtos ou serviços em troca de divulgação nas redes sociais. Influenciadores, por sua vez, encontram oportunidades alinhadas ao seu perfil e recebem benefícios enquanto produzem conteúdo. Com um sistema intuitivo e transparente, o Tudo No@ facilita parcerias e potencializa resultados para ambos os lados."
          onlyColumn
        >
          <div className="flex flex-col items-center justify-center space-y-2 overflow-hidden md:flex-row md:space-x-4 md:space-y-0">
            <Image
              src="/app-preview-2.png"
              alt=""
              width={1000}
              height={800}
              quality={100}
              className="w-full md:w-[45%]"
            />
            <Image
              src="/app-preview-3.png"
              alt=""
              width={1000}
              height={800}
              quality={100}
              className="w-full md:w-[45%]"
            />
            <Image
              src="/app-preview-1.png"
              alt=""
              width={1000}
              height={800}
              quality={100}
              className="w-full md:w-[45%]"
            />
          </div>
        </Section>

        <Section
          title="Para Empresas"
          description="Com o Tudo No@ Business, as marcas têm uma maneira inteligente de divulgar seus produtos e serviços com influenciadores que realmente engajam seu público-alvo. O app permite criar campanhas detalhadas, selecionar os criadores mais alinhados e acompanhar a performance em tempo real. Além disso, com a validação via QR Code, as empresas garantem segurança e controle sobre as trocas realizadas. Simplifique sua estratégia de marketing de influência e conquiste resultados autênticos e impactantes!"
        >
          <Image
            src="/business.png"
            alt=""
            width={1000}
            height={800}
            quality={100}
            className="flex-1"
          />
        </Section>
        <Section
          title="Para Influenciadores"
          description="O Tudo No@ oferece uma nova forma de monetizar sua influência e receber produtos e serviços gratuitamente. No app, você pode explorar campanhas de marcas interessadas em parcerias, se candidatar às oportunidades certas e, após a aprovação, “Pagar No@” via QR Code. Depois, basta registrar suas postagens para garantir futuras colaborações. Crie conteúdo de valor, amplie seu portfólio e cresça no mercado de influência com facilidade!"
          reverse
        >
          <Image
            src="/influencer.png"
            alt=""
            width={1000}
            height={800}
            quality={100}
            className="flex-1"
          />
        </Section>
      </div>

      <BackgroundSection>
        <Section
          id="download"
          title="Baixe o Tudo No@ e Comece Agora! 🚀"
          description="Transforme sua influência em oportunidades ou leve sua marca para o próximo nível! Com o Tudo No@, empresas e influenciadores se conectam de forma simples, segura e estratégica. As empresas podem cadastrar campanhas, encontrar os influenciadores ideais e acompanhar os resultados, enquanto os influenciadores exploram campanhas exclusivas, recebem produtos e serviços e expandem seu portfólio. Não perca tempo! Baixe agora o Tudo No@ e o Tudo No@ Business e aproveite todas as vantagens dessa conexão inovadora."
          className="items-center text-white"
          onlyColumn
        >
          <div className="flex flex-1 items-center justify-center space-x-12">
            <a
              href="https://apps.apple.com/br/app/tudo-no/id6737628527"
              target="_blank"
            >
              <img
                src="/tudo-no-arroba.png"
                className="h-32 w-32 lg:h-40 lg:w-40"
              />
            </a>
            <a
              href="https://apps.apple.com/br/app/tudo-no-business/id6737700671"
              target="_blank"
            >
              <img
                src="/tudo-no-arroba-business.png"
                className="h-32 w-32 lg:h-40 lg:w-40"
              />
            </a>
          </div>
        </Section>
      </BackgroundSection>

      <footer className="flex w-full flex-col items-center justify-center space-y-6 bg-zinc-900 px-8 py-4 text-white">
        <p className="text-center text-[10px] font-light">
          Copyright © 2025 TUDONOARROBA LTDA - CNPJ 57.353.145/0001-93. Todos
          os direitos reservados
        </p>
      </footer>
    </>
  )
}
