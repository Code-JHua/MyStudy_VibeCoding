import React, { useState, useEffect } from 'react'

export default function Dong2() {
  const [state, setState] = useState({
    a: {
      b: 1
    }
  })
  const [state2, setState2] = useState(1)

  useEffect(() => {
    setTimeout(() => {
      state.a.b = 2
      setState(state)
    }, 2000)
    setTimeout(() => {
      setState2(2)
    }, 4000)
  }, [])

  console.log("render2");
  return (
    
    <div>
      我是Dong2组件, {state.a.b}, {state2}
    </div>
  )
}
