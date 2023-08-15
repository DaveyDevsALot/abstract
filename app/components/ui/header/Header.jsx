import React from 'react';
import classes from './Header.module.css';
import { RollingText } from '@/app/components/ui/textDisplays/rollingText/RollingText'

export const Header = () => (
  <nav>
    <div className={classes.header}>
      <div className={classes.partialBorderDiv} />
      <div className={classes.menuItems}>
        <div className={classes.menuItem}>
          <div className={classes.itemText}>
            <RollingText displayText={'ABOUT'} fontSize={'2rem'} minFontSize={'0.5rem'}></RollingText>
          </div>
        </div>
        <div className={classes.menuItem}>
          <div className={classes.itemText}>
            <RollingText displayText={'HOME'} fontSize={'2rem'} minFontSize={'0.5rem'}></RollingText>
          </div>
        </div>
        <div className={classes.menuItem}>
          <div className={classes.itemText}>
            <RollingText displayText={'EXPERIENCE'} fontSize={'2rem'} minFontSize={'0.5rem'}></RollingText>
          </div>
        </div>
      </div>
    </div>
  </nav>
);
