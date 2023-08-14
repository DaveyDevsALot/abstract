import React from 'react';
import PropTypes from 'prop-types';

import classes from './Footer.module.css';

export const Footer = () => (
  <footer>
    <div className={classes.footer}>
      <div className={classes.partialBorderDiv} />
        <div className={classes.textContainer}>
          <h3>SOFTWARE MAKES EVERYTHING BETTER</h3>
          <h5>SO DOES SMILING</h5>
        </div>
    </div>
  </footer>
);

Footer.propTypes = {

};

Footer.defaultProps = {
};
