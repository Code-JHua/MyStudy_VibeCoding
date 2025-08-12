import React, { useRef, useState } from 'react'
import './App.css'
import axios from 'axios'

export default function App() {
  const inputRef = useRef(null)
  const [list, setList] = useState([])

  const send = () => {
    const value = inputRef.current.value
    if (value) {
      inputRef.current.value = ''
    }

    axios.post('http://localhost:3000/chat', {
      role: 'user',
      content: value,
    }, {
      withCredentials: true
    }).then(res => {
      console.log(res.data)
      setList([...list, {
        role: 'user',
        content: value,
      }, {
        role: 'bot',
        content: res.data.data,
      }])
    })
  }


  return (
    <div className='container'>
      <div className='header'>
        <h1>Chat Box</h1>
      </div>

      <div className="content">

        <div className="bot">
          AI: <span>您好！我是您的 AI 智能助手，可以帮你解答问题，编写代码，进行创作等。请问有什么可以帮您？</span>
        </div>

        <div className="chat">
          {
            list.map((item, index) => (
              <div key={index} className={item.role === 'user' ? 'user question item' : 'bot answer item'}>
                {item.role === 'user' ? 'me' : 'AI'}:
                <span>{item.content}</span>
              </div>
            ))
          }

        </div>

      </div>

      <div className="input">
        <input ref={inputRef} type="text" placeholder="请输入" />
        <button onClick={send}>发送</button>
      </div>

    </div>
  )
}