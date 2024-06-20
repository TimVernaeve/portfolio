'use client'

import { ReactLenis, useLenis } from 'lenis/react'

interface SmoothScrollProps {
  children: React.ReactNode
}

const SmoothScroll = ({ children }: SmoothScrollProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const lenis = useLenis(({ scroll }) => {
    // called every scroll
  })

  return (
    <ReactLenis root>
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll
