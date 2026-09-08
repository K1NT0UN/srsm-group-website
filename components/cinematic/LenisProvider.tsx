'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import Lenis from 'lenis'

const LenisContext = createContext<Lenis | null>(null)

export function useLenis() {
  return useContext(LenisContext)
}

/** Buttery smooth scrolling for the cinematic experience. Respects reduced motion. */
export default function LenisProvider({ children }: { children: React.ReactNode }) {
  const [lenis, setLenis] = useState<Lenis | null>(null)
  const pathname = usePathname()

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    const instance = new Lenis({ lerp: 0.09, smoothWheel: true })
    let raf = requestAnimationFrame(function loop(time: number) {
      instance.raf(time)
      raf = requestAnimationFrame(loop)
    })
    setLenis(instance)

    return () => {
      cancelAnimationFrame(raf)
      instance.destroy()
      setLenis(null)
    }
  }, [])

  // Lenis keeps its own scroll offset, so the router's jump-to-top on navigation
  // is overwritten on the very next frame — you'd arrive on the new page still at
  // the depth you left the old one (e.g. Contact at the bottom of home -> About).
  // Reset it ourselves. Hash targets are left alone: those are meant to land
  // partway down the page.
  useEffect(() => {
    if (!lenis || window.location.hash) return
    lenis.scrollTo(0, { immediate: true })
  }, [pathname, lenis])

  return <LenisContext.Provider value={lenis}>{children}</LenisContext.Provider>
}
