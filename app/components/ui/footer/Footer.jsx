import React from 'react';
import PropTypes from 'prop-types';

import classes from './Footer.module.css';
import { RollingText } from '../../ui/textDisplays/rollingText/RollingText'

export const Footer = () => (
  <footer>
    <div className={classes.footer}>
      <div className={classes.partialBorderDiv} />
        <div className={classes.textContainer}>
          <div className={classes.topLine}>
            <RollingText displayText={'SOFTWARE MAKES EVERYTHING BETTER'} fontSize={'2.5rem'} minFontSize={'1rem'}></RollingText>
          </div>
            <RollingText displayText={'SO DOES SMILING'} fontSize={'2rem'} minFontSize={'0.5rem'}></RollingText>
        </div>
    </div>
  </footer>
);

Footer.propTypes = {

};

Footer.defaultProps = {
};
