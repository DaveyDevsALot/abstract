'use client'
import { useLayoutEffect, useState } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { RollingText } from '../../components/ui/textDisplays/rollingText/RollingText'
import classes from './Main.module.css'
import photo1 from '/public/main/darker_b_&_w.png'
import photo2 from '/public/main/David_Site_Impressionist.png'

export const Main = () => {
  const [el, setEl] = useState(null)
  const [el2, setEl2] = useState(null)

  useLayoutEffect(() => {
    if (!el || !el2) return
    gsap.from(el, {
      opacity: 0,
      duration: 12,
      ease: 'ease-in-out',
    })
    gsap.to(el2, {
      opacity: 0,
      duration: 12,
      ease: 'ease-in-out',
    })
  }, [el, el2])

  return (
    <div className={classes.homeMain}>
      <div className={classes.homeItem}>
        <div className={classes.images}>
          <div className={classes.mainImage}>
            <Image
              height={400}
              src={photo1}
              alt="Black and White Image of David R Coulombe"
            />
          </div>
          <div className={classes.mainImage2} id="fadeIn" ref={setEl}>
            <Image
              height={400}
              src={photo2}
              alt="Black and White Image of David R Coulombe"
            />
          </div>
          <div className={classes.mainImage2} id="fadeOut" ref={setEl2}>
            <Image
              height={400}
              src={photo1}
              alt="Black and White Image of David R Coulombe"
            />
          </div>
        </div>
      </div>
      <div className={classes.mainText}>
        <div className={classes.menuItem}>
          <div className={classes.itemText}>
            <RollingText
              displayText={'DAVID COULOMBE'}
              fontSize={'5rem'}
              minFontSize={'3rem'}
            />
          </div>
        </div>
        <div className={classes.menuItem}>
          <div className={classes.itemText}>
            <RollingText
              displayText={'SENIOR REACT ENGINEER'}
              fontSize={'2rem'}
              minFontSize={'1.5rem'}
            />
          </div>
        </div>
      </div>
    </div>
  )
}
