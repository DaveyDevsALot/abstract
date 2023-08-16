import { useMemo } from 'react'
import { gsap } from 'gsap'
export const useGsapContext = (scope) => {
  return useMemo(() => gsap.context(() => {}, scope), [scope])
}
