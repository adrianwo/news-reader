import React from "react"
import { useState, useEffect } from "react"
interface Time {
  hour: string
  minutes: string
}

const Clock = () => {
  const [time, setTime] = useState<Time>({ hour: "", minutes: "" })
  useEffect(() => {
    const interval = setInterval(() => {
      let date = new Date()
      let hour = date.getHours().toString()
      let minutes = date.getMinutes().toString()
      if (hour.length === 1) hour = `0${hour}`
      if (minutes.length === 1) minutes = `0${minutes}`
      setTime({ hour, minutes })
    }, 1000)
    return () => clearInterval(interval)
  }, [])
  return <div>{time.hour.length ? `${time.hour}:${time.minutes}` : null}</div>
}

export default Clock
