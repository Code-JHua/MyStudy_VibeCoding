import React, { useState } from 'react'
import PictureCard from './components/PictureCard'
import './App.css'   
import { generateAudio } from './lib/audio'


export default function App() {
  const [audio, setAudio] = useState('')
  const [sentence, setSentence] = useState('')
  const [imgPreview, setImgPreview] = useState<undefined | string>(undefined)
  const [isExpand, setIsExpand] = useState(false)
  const [word, setWord] = useState('请上传图片')
  const [explaination, setExplaination] = useState('')
  const [replys, setReplys] = useState([])


  const userPrompt = `
  分析图片内容，找出最能描述该图片的一个单词，尽量选择更简单的A1～A2级别的单词。

  返回 JSON 数据：
  {
    "image_description": "图片的描述",
    "representative_word": "最能描述图片的单词",
    "example_sentence": "结合英文单词和图片描述，给出一个简单的例句",
    "explanation": "结合图片解析英文单词，段落以 Look at ... 开头，将段落分句，每句单独一行，解析的最后给一个日常生活有关的问句",
    "example_replys": ["根据explanation给出的回复 1", "根据explanation给出的回复 2"]
  }
`;

  const submit = async (data: string) => {
    // console.log(data);
    setImgPreview(data)
    // 图片分析
    const endpoint = 'https://api.moonshot.cn/v1/chat/completions'
    const headers = {
      'Authorization': `Bearer ${import.meta.env.VITE_KIMI_API_KEY}`,
      'Content-Type': 'application/json'
    }
    setWord('分析中...')
    const response = await fetch(endpoint, {
      method: 'POST',
      headers,
      body: JSON.stringify({
        model: "moonshot-v1-8k-vision-preview",
        messages: [
          {
            role: 'user',
            content: [
              {
                type: 'image_url',
                image_url: {
                  url: data
                }
              },
              {
                type: 'text',
                text: userPrompt
              }
            ]
          }
        ]
      })
    })
    const res = await response.json()
    console.log(res.choices[0].message.content);
    const replayData = JSON.parse(res.choices[0].message.content)
    setWord(replayData.representative_word)
    setSentence(replayData.example_sentence)
    setExplaination(replayData.explanation)
    const audio = await generateAudio(replayData.representative_word)
    setAudio(audio)
  }

  return (
    <div className='container'>
      <PictureCard word={word} submit={submit} audio={audio} />
      <div className="output">
        <div>{sentence}</div>
        <div className="detail">
          <button onClick={() => setIsExpand(!isExpand)}>Talk about it</button>

          {
            isExpand ? (
              <div className="expand">
                <img src={imgPreview} alt="" />
                <div className="explaination">
                  {
                    explaination.split('\n').map((item, index) => (
                      <p key={index}>{item}</p>
                    ))
                  }

                </div>
                <div className="reply">
                  {
                    replys.map((item, index) => (
                      <p key={index}>{item}</p>
                    ))
                  }
                </div>

              </div>
            ) : (
              <div className="fold"></div>
            )
          }
        </div>
      </div>
    </div>
  )
}
