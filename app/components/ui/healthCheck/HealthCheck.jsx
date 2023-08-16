'use client'
import { useState } from 'react'
import { GET } from '../../../api/route'
import classes from '../healthCheck/HealthCheck.module.css'
import { useInterval } from '../../../hooks/useInterval'
import HeartSvg from '../heartSvg/HeartSvg'

const determineHealthStatusColor = (data, isLoading) => {
  if (data && !isLoading) return 'limegreen'
  else if (!data && !isLoading) return 'red'
  else return 'white'
}
export const HealthCheck = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useInterval(async () => {
    setIsLoading(true)
    const result = await GET()
    console.log('HEALTH CHECK: ', result)
    setIsLoading(false)
    setData(result)
  }, 5000)

  return (
    <div className={classes.healthCheckMain}>
      <HeartSvg
        style={{
          position: 'absolute',
          top: 0,
          fill: determineHealthStatusColor(data, isLoading),
        }}
      />
    </div>
  )
}
