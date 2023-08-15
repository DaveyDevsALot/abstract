import React from 'react';
import classes from './Footer.module.css';
import { RollingText } from '../../ui/textDisplays/rollingText/RollingText'
import Link from 'next/link'

export const Footer = () => (
  <footer>
    <div className={classes.footer}>
      <div className={classes.partialBorderDiv} />
      <div className={classes.menuItems}>
        <div className={classes.menuItem}>
          <div className={classes.itemText}>
            <Link href={'/'}>
              <RollingText displayText={'SOFTWARE MAKES EVERYTHING BETTER'} fontSize={'2.5rem'} minFontSize={'1rem'}></RollingText>
            </Link>
          </div>
        </div>
        <div className={classes.menuItem}>
          <div className={classes.itemText}>
            <Link href={'/'}>
              <RollingText displayText={'SO DOES SMILING'} fontSize={'2rem'} minFontSize={'0.5rem'}></RollingText>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </footer>
);