'use client'
import { useState , useEffect } from 'react'
import classes from './DateTime.module.css'
export const DateTime = () => {
  const [date,setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(()=>setDate(new Date()), 1000 )
    return function cleanup() {
      clearInterval(timer)
    }
  })
  return(
    <div className={classes.dateTimeMain}>
      {/*  Date */}
      <p>{date.toLocaleDateString()}</p>
      {/*  Git Branch */}
      <p>{process.env.GIT_BRANCH}</p>
      {/* Time */}
      <p>{date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</p>
    </div>
  )
}

export default DateTime