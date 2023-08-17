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

  useLayoutEffect(() => {
    const tl = gsap.timeline({ paused: true })
    if (!el || !el2) return
    tl.from(el, {
      opacity: 0,
      duration: 2.5,
      ease: 'easeInOut',
    })
    tl.to(el, {
      opacity: 0,
      duration: 2.5,
      ease: 'easeInOut',
    })
    tl.from(el2, {
      opacity: 0,
      duration: 2.5,
      ease: 'easeInOut',
    })
    tl.to(el2, {
      opacity: 0,
      duration: 2.5,
      ease: 'easeInOut',
    })
    tl.play()
  }, [el, el2])
  return (
    <MainWrapper>
      <div className={classes.aboutMain}>
        <div className={classes.item} id="fadeOut1" ref={setEl}>
          <Image
            width={800}
            height={800}
            src="/uconn_cropped.png"
            alt="University Of Connecticut Logo"
          />
        </div>
        <div className={classes.item} id="fadeOut1" ref={setEl2}>
          <Image
            width={800}
            height={800}
            src="/ed_x_new.png"
            alt="EdX/Trilogy Ed Logo"
          />
        </div>
      </div>
    </MainWrapper>
  )
}
