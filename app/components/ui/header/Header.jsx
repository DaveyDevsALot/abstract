import React from 'react'
import Link from 'next/link'
import classes from './Header.module.css'
import { RollingText } from '../textDisplays/rollingText/RollingText'

export const Header = () => (
  <div className={classes.header}>
    <div className={classes.partialBorderDiv} />
    <div className={classes.menuItem}>
      <div className={classes.itemText}>
        <Link href={'/about'}>
          <RollingText
            displayText={'ABOUT'}
            fontSize={'0.9rem'}
            minFontSize={'0.5rem'}
          ></RollingText>
        </Link>
      </div>
    </div>
    <div className={classes.menuItem}>
      <div className={classes.itemText}>
        <Link href={'/'}>
          <RollingText
            displayText={'HOME'}
            fontSize={'0.9rem'}
            minFontSize={'0.5rem'}
          ></RollingText>
        </Link>
      </div>
    </div>
    <div className={classes.menuItem}>
      <div className={classes.itemText}>
        <Link href={'/experience'}>
          <RollingText
            displayText={'EXPERIENCE'}
            fontSize={'0.9rem'}
            minFontSize={'0.5rem'}
          ></RollingText>
        </Link>
      </div>
    </div>
  </div>
)
