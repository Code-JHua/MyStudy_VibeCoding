import React from 'react'
import { useRef, useState } from 'react'
import './App.css'

export default function App() {
  const [imgUrl, setImgUrl] = useState('')
  const promptRef = useRef(null)

  const generateImage = async () => {
    const negative_prompt = 'Blurry, Bad, Bad anatomy, Bad proportions, Deformed, Disconnected limbs, Disfigured, Extra arms, Extra limbs, Extra hands, Fused fingers, Gross proportions, Long neck, Malformed limbs, Mutated, Mutated hands, Mutated limbs, Missing arms, Missing fingers, Poorly drawn hands, Poorly drawn face.'

    const endpoint = '/klingai/v1/images/generations'
    const token = await(await fetch('/api/jwt-auth')).text()
    const payload = { // 定义请求体
      prompt: promptRef.current.value,
      negative_prompt,
      model_name: 'kling-v1',
      aspect_ratio: '1:1',
    }
    const headers = { // 定义请求头
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    }
    const res = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify(payload),
    })
    const data = await res.json()
    setImgUrl(data.data[0].url)
  }

  return (
    <div className='container'>
      <div>
        <label htmlFor="">Prompt:</label>
        <button onClick={generateImage}>Send</button>
        <textarea name="" id="" className='prompt_textarea' ref={promptRef}></textarea>
      </div>
      <div className="output">
        {imgUrl && <img src={imgUrl} alt="Generated image" />}
      </div>
    </div>
  )
}
