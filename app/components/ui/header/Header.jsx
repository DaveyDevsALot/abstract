import React from 'react';
import Link from 'next/link'
import classes from './Header.module.css';
import { RollingText } from '@/app/components/ui/textDisplays/rollingText/RollingText'

export const Header = () => (
  <nav>
    <div className={classes.header}>
      <div className={classes.partialBorderDiv} />
        <div className={classes.menuItems}>
          <div className={classes.menuItem}>
            <div className={classes.itemText}>
              <Link href={'/'}>
                  <RollingText displayText={'ABOUT'} fontSize={'1rem'} minFontSize={'0.5rem'}></RollingText>
              </Link>
            </div>
          </div>
          <div className={classes.menuItem}>
            <div className={classes.itemText}>
              <Link href={'/'}>
                <RollingText displayText={'HOME'} fontSize={'1rem'} minFontSize={'0.5rem'}></RollingText>
              </Link>
            </div>
          </div>
          <div className={classes.menuItem}>
            <div className={classes.itemText}>
              <Link href={'/'}>
                <RollingText displayText={'EXPERIENCE'} fontSize={'1rem'} minFontSize={'0.5rem'}></RollingText>
              </Link>
            </div>
          </div>
        </div>
    </div>
  </nav>
);
