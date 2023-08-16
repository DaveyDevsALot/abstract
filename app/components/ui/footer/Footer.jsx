'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import classes from './Footer.module.css'
import { RollingText } from '../../ui/textDisplays/rollingText/RollingText'
import Link from 'next/link'
import { GET } from '../../../api/route'
import { HealthCheck } from '../healthCheck/HealthCheck'

// No SSR and dynamic import for Next Server matching errors due to clock.
const ClockWithNoSSR = dynamic(() => import('../dateTime/DateTime'), {
  ssr: false,
})
export const Footer = () => {
  return (
    <footer>
      <div className={classes.footer}>
        <div className={classes.partialBorderDiv} />
        <div className={classes.menuItems}>
          <div className={classes.menuItem}>
            <div className={classes.itemText}>
              <Link href={'/'}>
                <RollingText
                  displayText={'SOFTWARE MAKES EVERYTHING BETTER'}
                  fontSize={'2.5rem'}
                  minFontSize={'1rem'}
                ></RollingText>
              </Link>
            </div>
          </div>
          <div className={classes.menuItem}>
            <div className={classes.itemText}>
              <Link href={'/'}>
                <RollingText
                  displayText={'SO DOES SMILING'}
                  fontSize={'2rem'}
                  minFontSize={'0.5rem'}
                ></RollingText>
              </Link>
            </div>
          </div>
        </div>
        <ClockWithNoSSR />
        <HealthCheck />
      </div>
    </footer>
  )
}
