'use client'
import { MainWrapper } from '../components/ui/mainWrapper/MainWrapper'
import classes from './About.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { RollingText } from '../components/ui/textDisplays/rollingText/RollingText'
import { useLayoutEffect, useState } from 'react'
import { gsap } from 'gsap'

export default function About() {
  const [el, setEl] = useState(null)
  const [el2, setEl2] = useState(null)
  const tl = gsap.timeline({ paused: true })

  useLayoutEffect(() => {
    if (!el || !el2) return
    const tween = gsap.from(el, {
      opacity: 0,
      duration: 5,
    })
    tl.add(tween, 0)
    const tween2 = gsap.to(el, {
      opacity: 0,
      duration: 5,
    })
    tl.add(tween2, 1)
    const tween3 = gsap.from(el2, {
      opacity: 0,
      duration: 5,
    })
    tl.add(tween3, 2)
    const tween4 = gsap.to(el2, {
      opacity: 0,
      duration: 5,
    })
    tl.add(tween4, 3)
  }, [el, el2])
  gsap.to(tl, { progress: 1, duration: 20, ease: 'power2.inOut' })

  return (
    <MainWrapper>
      <div className={classes.aboutMain}>
        <div className={classes.item} id="fadeOut1" ref={setEl}>
          <Image
            width={600}
            height={600}
            src="/uconn_cropped.png"
            alt="University Of Connecticut Logo"
          />
        </div>
        <div className={classes.item} id="fadeOut1" ref={setEl2}>
          <Image
            width={600}
            height={600}
            src="/ed_x_new.png"
            alt="EdX/Trilogy Ed Logo"
          />
        </div>
      </div>
    </MainWrapper>
  )
}
