import React, { useEffect } from 'react'
import { animated, useSpringValue, useSpring, useSprings, useTrail, useSpringRef,useChain } from '@react-spring/web'
import './index.css'

export default function Demo() {
  // const width = useSpringValue(0, {
  //   config: {
  //     mass: 20,
  //     friction: 5,
  //     tension: 80,
  //   }
  // })
  // useEffect(() => {
  //   width.start(300)
  // }, [width])
  
  // const [styles,api] = useSpring(() => ({
  //   from: {
  //     width: 100,
  //     height: 50,
  //   },
  //   config: {
  //     // duration: 2000,
  //     mass: 10,
  //     friction: 5,
  //     tension: 100,
  //   }
  // }))

  // const [styles, api] = useTrail(3, () => ({
  //   from: {
  //     width: 0
  //   },
  //   to: {
  //     width: 300,
  //   },
  //   config: {
  //     duration: 2000
  //   }
  // }), [])
  
  const api1 = useSpringRef()
  const [styles] = useTrail(3, () => ({
    ref: api1,
    from: { width: 0 },
    to: { width: 300 },
    config: { duration: 1000 }
  }), [])

  const api2 = useSpringRef()
  const [styles2] = useTrail(3, () => ({
    ref: api2,
    from: { height: 100 },
    to: { height: 50 },
    config: { duration: 1000 }
  }), [])

  useChain([api1, api2], [0, 1], 500)
  
  return (
    <div>
      {
        styles.map((style, index) => (
          <animated.div className='box' style={{ ...style, ...styles2[index] }} key={index}>
          </animated.div>
        ))
      }
    </div>
  
  )
}
