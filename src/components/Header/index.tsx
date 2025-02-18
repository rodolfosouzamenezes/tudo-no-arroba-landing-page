'use client'

import { useRouter } from 'next/navigation'
import { Button } from '../ui/button'

export function Header() {
  const router = useRouter()

  return (
    <header className="fixed left-0 right-0 top-0 z-20 flex justify-center border-b bg-white">
      <div className="container px-12">
        <div className="flex items-center justify-center py-3">
          <Button
            variant="ghost"
            className="p-0 hover:bg-transparent"
            onClick={() => router.replace('/')}
          >
            <img src="/logo.png" className="h-10 w-10" />
          </Button>

          <Button
            className="ml-auto hidden md:flex"
            linkProps={{ href: '#download' }}
          >
            Instale agora mesmo
          </Button>
        </div>
      </div>
    </header>
  )
}
