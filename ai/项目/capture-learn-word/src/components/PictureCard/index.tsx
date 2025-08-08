import React, { useState } from 'react'
import './index.css'
import { generateAudio } from '../../lib/audio'



interface PictureCardProps {
  word: string,
  submit: (data: string) => void,
  audio: string,
}

export default function PictureCard(props: PictureCardProps) { // 上传图片且可以预览 功能
  const [imgPreview, setImgPreview] = useState('https://res.bearbobo.com/resource/upload/W44yyxvl/upload-ih56twxirei.png')
  const { submit, audio, word } = props

  const updateImgData = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    console.log(e.target.files?.[0].name.split('.')[0]);
    
    
    const file = e.target.files?.[0]
    if (file) { // 存在则预览图片
      return new Promise((resolve, reject) => {
        const reader = new FileReader()

        reader.readAsDataURL(file) 
        reader.onload = () => { // 图片加载完成
          const data = reader.result as string // 图片base64编码

          setImgPreview(data)
          submit(data)
          resolve(data)
        }
        reader.onerror = (err) => {  // 图片加载失败
          reject(err)
        }
      })
    } 
  }

  const playAudio = async () => {
    const au = new Audio(audio)
    au.play()
  }

  return (
    <div className='card'>
      <input id='selectImage' type="file" className='input' accept='.jpg,.png,.jpeg,.gif' onChange={updateImgData} /> 
        <label htmlFor="selectImage" className='upload'>
          <img src={imgPreview} alt="" />
      </label>
      <div className="word">
        {word}
      </div>
      <div className="playAudio">
        <img width={20} src="https://res.bearbobo.com/resource/upload/Omq2HFs8/playA-3iob5qyckpa.png" alt="" onClick={playAudio} />
      </div>
    </div>
  )
}
