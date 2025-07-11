import React from 'react'
import { useState, useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { add, commit } from "../../store/modules/counterStore.js"

export default function index() {
    // 使用 useSelector 函数获取仓库中的数据
    const { count } = useSelector(state => state.counter)
    const { list } = useSelector(state => state.counter)
    const inputRef = useRef(null)
    const dispatch = useDispatch() // 触发器

    const addCount = () => {
        // 调用 仓库里的 add 方法
        dispatch(add())
    }

    const handle = () => {
        dispatch(commit({ inputContent: inputRef.current.value }))
        inputRef.current.value = ''
    }

  return (
      <div>
          {/* <h3>{ count }</h3>
          <button onClick={addCount}>+</button> */}

          <input type="text" ref={ inputRef } />
          <button onClick={handle}>commit</button>
          <ul>
              {
                  list.map((item) => {
                      return <li key={item}>{item}</li>
                  })
              }
          </ul>
      </div>
  )
}
