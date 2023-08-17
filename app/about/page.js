'use client'
import { MainWrapper } from '../components/ui/mainWrapper/MainWrapper'
import classes from './About.module.css'
import Image from 'next/image'
import { useLayoutEffect } from 'react'
import { gsap } from 'gsap'

export default function About() {
  // useLayoutEffect(() => {
  //   const tl = gsap.timeline({ paused: true })
  //   tl.from('#fadeOut1', {
  //     opacity: 0,
  //     duration: 2.5,
  //     ease: 'easeInOut',
  //   })
  //   tl.to('#fadeOut1', {
  //     opacity: 0,
  //     duration: 2.5,
  //     ease: 'easeInOut',
  //   })
  //   tl.from('#fadeOut2', {
  //     opacity: 0,
  //     duration: 2.5,
  //     ease: 'easeInOut',
  //   })
  //   tl.to('#fadeOut2', {
  //     opacity: 0,
  //     duration: 2.5,
  //     ease: 'easeInOut',
  //   })
  //   tl.from('#fadeOut3', {
  //     opacity: 0,
  //     duration: 2.5,
  //     ease: 'easeInOut',
  //   })
  //   tl.play()
  // }, [])

  return (
    <MainWrapper>
      <div className={classes.aboutMain}>
        <div className={classes.items}>
          <div className={classes.item1} id="fadeOut1">
            <Image
              width={800}
              height={800}
              src="/uconn_cropped.png"
              alt="University Of Connecticut Logo"
            />
          </div>
          <div className={classes.item2} id="fadeOut2">
            <Image
              width={800}
              height={800}
              src="/ed_x_new.png"
              alt="EdX/Trilogy Ed Logo"
            />
          </div>
          <div className={classes.textDisplayMain} id="fadeOut3">
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
    </MainWrapper>
  )
}
