import React, { useEffect, useState } from 'react'
import { GET } from '../../../api/route'
import classes from '../healthCheck/HealthCheck.module.css'
import { useInterval } from '../../../hooks/useInterval'

export const HealthCheck = () => {
  const [data, setData] = useState({})

  useInterval(async () => {
    const result = await GET()
    setData(result)
  }, 5000)
  console.log(data)
  return (
    <div>
      {data && <p className={classes.healthCheck}>{data.status}</p>}
      {!data && <p className={classes.healthCheck}>BAD</p>}
    </div>
  )
}
