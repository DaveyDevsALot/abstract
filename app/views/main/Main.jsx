'use client'
import { useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { gsap } from 'gsap'
import { RollingText } from '../../components/ui/textDisplays/rollingText/RollingText'
import classes from './Main.module.css'
import SplitType from 'split-type'

export const Main = () => {
  const [el, setEl] = useState(null)
  const [el2, setEl2] = useState(null)

  useLayoutEffect(() => {
    if (!el || !el2) return
    gsap.from(el, {
      opacity: 0,
      duration: 8,
    })
    gsap.to(el2, {
      opacity: 0,
      duration: 8,
    })
  }, [el, el2])

  return (
    <div className={classes.homeMain}>
      <div className={classes.homeItem}>
        <div className={classes.images}>
          <div className={classes.mainImage}>
            <Image
              width={200}
              height={200}
              src="/main/darker_b_&_w.png"
              alt="Black and White Image of David R Coulombe"
            />
          </div>
          <div className={classes.mainImage2} id="fadeIn" ref={setEl}>
            <Image
              width={200}
              height={200}
              src="/main/David_Site_Impressionist.png"
              alt="Black and White Image of David R Coulombe"
            />
          </div>
          <div className={classes.mainImage2} id="fadeOut" ref={setEl2}>
            <Image
              width={200}
              height={200}
              src="/main/darker_b_&_w.png"
              alt="Black and White Image of David R Coulombe"
            />
          </div>
        </div>
      </div>
      <div className={classes.mainText}>
        <div className={classes.menuItem}>
          <div className={classes.itemText}>
            <Link href={'/'}>
              <RollingText
                displayText={'DAVID COULOMBE'}
                fontSize={'5rem'}
                minFontSize={'3rem'}
              ></RollingText>
            </Link>
          </div>
        </div>
        <div className={classes.menuItem}>
          <div className={classes.itemText}>
            <Link href={'/'}>
              <RollingText
                displayText={'SENIOR REACT ENGINEER'}
                fontSize={'2rem'}
                minFontSize={'1.5rem'}
              ></RollingText>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
