import React, { useEffect, useState } from 'react'
import { GET } from '../../../api/route'
import classes from '../healthCheck/HealthCheck.module.css'

export const HealthCheck = () => {
  const [data, setData] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function checkHealth() {
      setData(null)
      const result = await GET()
      if (isLoading) {
        setData(result)
      }
    }
    checkHealth()
    return () => {
      setIsLoading(false)
    }
  }, [])

  return (
    <div>
      {(data || isLoading) && <p className={classes.healthCheck}>OK</p>}
      {!data && !isLoading && <p className={classes.healthCheck}>BAD</p>}
    </div>
  )
}
