import { useState, useEffect } from "react"
import ScrambleText from "../ScrambleText"

export default function Time() {
  const usersTimeZone = Intl.DateTimeFormat().resolvedOptions().timeZone
  const userTimeZoneText = usersTimeZone.split("/")[1]
  const [userFormattedTime, setUserFormattedTime] = useState("")

  const getFormattedTime = (timeZone) => {
    const options = {
      timeZone: timeZone,
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }
    return new Intl.DateTimeFormat("en-US", options).format(new Date())
  }

  const updateClock = () => {
    setUserFormattedTime(getFormattedTime(usersTimeZone))
  }

  useEffect(() => {
    updateClock()
  }, [])

  useEffect(() => {
    // Update every second
    const intervalId = setInterval(updateClock, 1000)

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId)
  }, [])

  return (
    <>
      <ScrambleText shuffle delay={4.2}>
        {userTimeZoneText}
      </ScrambleText>{" "}
      {userFormattedTime}
    </>
  )
}
