import React, { useLayoutEffect, useRef } from 'react'
import PropTypes from 'prop-types'
import { gsap } from 'gsap'
import SplitType from 'split-type'
import classes from './RollingText.module.css'

export const RollingText = ({ displayText }) => {
  const ref = useRef()
  useLayoutEffect(() => {
    const repeatCount = 8;
    const tl = gsap.timeline({ paused: true });
    const split = new SplitType("h1", { type: "chars" });

    split.chars.forEach((obj, i) => {
      let txt = obj.innerText;
      let clone = `<div class="cloneText" style="position:absolute;top:0"> ${txt} </div>`;
      let newHTML = `<div class="originalText"> ${txt} </div>${clone}`;
      obj.innerHTML = newHTML;
      gsap.set(obj.childNodes[1], {
        yPercent: i % 2 === 0 ? -100 : 100
      });
      let tween = gsap.to(obj.childNodes, {
        repeat: repeatCount,
        ease: "none",
        yPercent: i % 2 === 0 ? "+=100" : "-=100"
      });
      tl.add(tween, 0);
    });
    gsap.to(tl, { progress: 1, duration: 4, ease: "power4.inOut" });

  }, []);

  return (
    <div className={classes.stage} ref={ref}>
      <h1 className={classes.cloneText}>{displayText}</h1>
    </div>
  );
}

RollingText.propTypes = {
  displayText: PropTypes.string.isRequired,
};

RollingText.defaultProps = {
};
