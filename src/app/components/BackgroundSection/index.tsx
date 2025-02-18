import { WithChildren } from '@/@types/general'

export function BackgroundSection({ children }: WithChildren) {
  return (
    <div className="relative w-full bg-[radial-gradient(circle,_#072A71_0%,_#003CC0_100%)] bg-cover bg-center">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: 'url("/background-waves.png")',
          backgroundSize: 'cover',
        }}
      />
      <div className="relative z-10 flex h-full items-center justify-center">
        {children}
      </div>
    </div>
  )
}
