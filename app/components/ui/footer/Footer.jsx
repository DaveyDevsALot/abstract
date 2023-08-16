'use client'
import React, { useEffect, useState } from 'react'
import classes from './Footer.module.css';
import { RollingText } from '../../ui/textDisplays/rollingText/RollingText'
import Link from 'next/link'
import { GET } from '../../../api/route'

export const Footer = () => {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)

  // useEffect(async () => {
  //   await fetch('/')
  //     .then((res) => {
  //       console.log(res)
  //       return res.json()
  //     })
  //     .then((data) => {
  //       setData(data)
  //       setLoading(false)
  //     })
  // }, [])

  useEffect(() => {
    async function startFetching() {
      setData(null);
      const result = await GET();
      if (!ignore) {
        setData(result);
      }
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    }
  }, []);


  if (!data) return null
else
  return (
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
}