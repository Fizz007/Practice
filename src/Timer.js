import React, { useEffect, useState } from 'react'

const Stopwatch = () => {

  const [hour, setHour] = useState(0);
  const [min, setMin] = useState(0);
  const [sec, setSec] = useState(0);
  const [play, setPlay] = useState(false)

  var timer;
  useEffect(() => {
    console.log("useEffect called")
    timer = setInterval(() => {
      setSec((prev)=> prev + 1);
      if (sec == 59) {
        setMin(min + 1);
        setSec(0)
      }
      else if (min == 59) {
        setHour(hour + 1)
        setMin(0)
      }

    }, 1000);
    return () => pausee();
    
  })

  function pausee() {
    console.log("pause called")
    clearInterval(timer)   
  }

  function startt() {
    setPlay(!play)
  }

  function resett() {
    setHour(0)
    setMin(0)
    setSec(0)
  }

  return (
    <div>
      <h1 onMouseEnter={pausee} onMouseLeave={startt}>{hour < 10 ? "0" + hour : hour}:{min < 10 ? "0" + min : min}: {sec < 10 ? "0" + sec : sec} </h1>
      <button onClick={resett}>reset</button>
    </div>
  )
}

export default Stopwatch
