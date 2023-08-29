import Image from 'next/image'
import { useLayoutEffect, useRef } from 'react'
import { gsap } from 'gsap'
import classes from './AboutView.module.css'
import photo1 from '../../../public/about/uconn_cropped.png'
import photo2 from '../../../public/about/ed_x_new.png'
import { useGsapContext } from '../../hooks/useGsapContext'
export default function AboutView() {
  const containerRef = useRef()
  const ref1 = useRef()
  const ref2 = useRef()
  const ref3 = useRef()
  const ctx = useGsapContext(containerRef);

  useLayoutEffect(() => {
    if (!ref1.current || !ref2.current || !ref3.current) return
    ctx.add(() => {
      const tl = gsap.timeline({ paused: true })
      tl.from(ref1.current, {
        opacity: 0,
        duration: 2.5,
        ease: 'easeInOut',
      })
      tl.to(ref1.current, {
        opacity: 0,
        duration: 2.5,
        ease: 'easeInOut',
      })
      tl.from(ref2.current, {
        opacity: 0,
        duration: 2.5,
        ease: 'easeInOut',
      })
      tl.to(ref2.current, {
        opacity: 0,
        duration: 2.5,
        ease: 'easeInOut',
      })
      tl.from(ref3.current, {
        opacity: 0,
        duration: 2.5,
        ease: ref3.current,
      })
      tl.play()
    })
    return () => ctx.revert();
  }, []);

  return (
    <div className={classes.aboutMain}>
      <div className={classes.items} ref={containerRef}>
        <div className={classes.item1} ref={ref1}>
          <Image
            src={photo1}
            alt="University Of Connecticut Logo"
          />
        </div>
        <div className={classes.item2} ref={ref2}>
          <Image
            src={photo2}
            alt="EdX/Trilogy Ed Logo"
          />
        </div>
        <div className={classes.textDisplayMain} ref={ref3}>
          <div className={classes.textDisplayItem}>
            <div className={classes.textLabel}>
              The University of Connecticut 2004-2008
            </div>
            <div className={classes.textLine}>Bachelor of Science</div>
            <div className={classes.textLine}>Turf and Soil Sciences</div>
          </div>
          <div className={classes.textDisplayItem}>
            <div className={classes.textLabel}>
              The University of North Carolina / Trilogy 2017-2019
            </div>
            <div className={classes.textLine}>
              Attended Two Semester Coding Bootcamp @ UNC
            </div>
            <div className={classes.textLine}>
              Teaching Assistant for 2 Semesters
            </div>
          </div>
          <div className={classes.textDisplayItem}>
            <div className={classes.textLabel} />
          </div>
          <div className={classes.centeredText}>
            <div className={classes.textLine}>
              I am David Robert Coulombe. I am passionate about so many things
              in life. Friends, family, music, travel, food, golf, and fishing
              just to name a few.
            </div>
            <div className={classes.textLine}>
              But all of my friends would tell you that I love
            </div>
            <div className={classes.textLine} style={{ textAlign: 'center' }}>
              SMILING AND LAUGHTER MOST{' '}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}