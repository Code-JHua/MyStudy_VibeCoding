import React, { useState, useEffect } from 'react'
import { fromJS } from 'immutable'

// const immutableObj = fromJS({
//   a: {
//     b: 1
//   }
// })
// let newObj = immutableObj.setIn(['a', 'b'], 2); 
// console.log(newObj === immutableObj); // false


export default function Immutable() {
  const [state, setState] = useState(fromJS({
    a: {
      b: 1
    },
    c: 2,
    d: [1, 2, 3],
    e: {
      f: 1
    },
    g: ['1']
  }))

  useEffect(() => {
    setTimeout(() => {
      let newState = state.setIn(['a', 'b'], 2);
      setState(newState);
    }, 2000)
  }, [])

  console.log("render2");
  return (

    <div>
      我是Dong2组件, {state.getIn(['a', 'b'])}
    </div>
  )
}
