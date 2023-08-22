'use client'
import { useState, useEffect } from 'react'
import classes from './DateTime.module.css'
import { useInterval } from '../../../hooks/useInterval'
export const DateTime = () => {
  const [date, setDate] = useState(new Date())

  useInterval(() => {
    setDate(new Date())
  }, 1000)

  return (
    <div className={classes.dateTimeMain}>
      {/*  Date */}
      <p>{date.toLocaleDateString()}</p>
      {/*  Git Branch */}
      <p>{process.env.GIT_BRANCH}</p>
      {/* Time */}
      <p>{date.toLocaleTimeString()}</p>
    </div>
  )
}

export default DateTime
