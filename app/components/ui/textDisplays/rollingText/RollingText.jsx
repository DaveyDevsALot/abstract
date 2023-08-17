'use client'
import React, { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import SplitType from 'split-type'
import classes from './RollingText.module.css'
export const RollingText = ({
  displayText,
  fontSize,
  minFontSize = '0.5rem',
}) => {
  const ref = useRef()

  useLayoutEffect(() => {
    const repeatCount = 15
    const split = new SplitType('span', { type: 'chars' })
    const tl = gsap.timeline({ paused: true })

    split.chars.forEach((obj, i) => {
      let txt = obj.innerText
      let clone = `<div class="cloneText" style="position:absolute;top:0"> ${txt} </div>`
      obj.innerHTML = `<div class="originalText"> ${txt} </div>${clone}`
      gsap.set(obj.childNodes[1], {
        yPercent: i % 2 === 0 ? -100 : 100,
      })
      let tween = gsap.to(obj.childNodes, {
        repeat: repeatCount,
        ease: 'none',
        yPercent: i % 2 === 0 ? '+=100' : '-=100',
      })
      tl.add(tween, 0)
    })
    gsap.to(tl, { progress: 1, duration: 8, ease: 'power4.inOut' })
  }, [])

  return (
    <div
      className={classes.stage}
      ref={ref}
      style={{
        fontSize: `clamp(${minFontSize}, -0.875rem + 5vw, ${fontSize})`,
      }}
    >
      <span className={classes.cloneText}>{displayText}</span>
    </div>
  )
}
