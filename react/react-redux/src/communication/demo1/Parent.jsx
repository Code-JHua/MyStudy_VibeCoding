import React, { useState, useRef } from 'react'
import Child from './Child.jsx'

export default function () {
  const [list, setlist] = useState(['html', 'css', 'js'])
  const inputRef = useRef(null)

  const handle = () => {
    if (inputRef.current.value === '') return
    setlist([...list, inputRef.current.value])
    inputRef.current.value = ''
  }
    
    
  return (
      <div>
          <div className="hd">
              <input type="text" ref={inputRef} />
              <button onClick={ handle }>commit</button>
          </div>
          <Child list={list} />
    </div>
  )
}
