'use client'
import { useLayoutEffect, useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap'
import { RollingText } from '../../components/ui/textDisplays/rollingText/RollingText'
import classes from './MainView.module.css'
import photo1 from '../../../public/main/darker_b_&_w.png'
import photo2 from '../../../public/main/David_Site_Impressionist.png'
import { useGsapContext } from '../../hooks/useGsapContext'

export const MainView = () => {
  const containerRef = useRef(null)
  const el = useRef(null)
  const el2= useRef(null)
  const ctx = useGsapContext(containerRef);

  useLayoutEffect(() => {
    if (!el.current || !el2.current || !containerRef) return
    ctx.add(()=> {
      gsap.from(el.current, {
        opacity: 0,
        duration: 6,
        ease: 'ease-in-out',
      })
      gsap.to(el2.current, {
        opacity: 0,
        duration: 6,
        ease: 'ease-in-out',
      })
    })
    return () => ctx.revert();
  }, []);

  return (
    <div className={classes.homeMain}>
      <div className={classes.images} ref={containerRef}>
          <div className={classes.mainImage} id="fadeIn" ref={el}>
            <Image
              className={classes.image}
              src={photo2}
              alt="Black and White Image of David R Coulombe"
            />
          </div>
          <div className={classes.mainImage} id="fadeOut" ref={el2}>
            <Image
              className={classes.image}
              src={photo1}
              alt="Black and White Image of David R Coulombe"
            />
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
