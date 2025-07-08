import './index.css'
import { useState } from 'react'

function Deepseek() {
    const [question, setQuestion] = useState('')
    const [content, setContent] = useState('')
    const [stream, setStream] = useState(false)
    let str = ''

    async function sendQuestion() {
        // 1.获取到输入的问题
        if (!question) return
        // 2.发送问题
        setContent('思考中...')
        // 3.跟 deepseek 交互
        const endpoint = 'https://api.deepseek.com/chat/completions'
        const headers = {
            'Authorization': `Bearer ${import.meta.env.VITE_API_KEY}`,
            'Content-Type': 'application/json'
        }
        const body = {
            model: 'deepseek-chat',
            messages: [{
                role: 'user',
                content: question
            }],
            stream: stream
        }

        const response = await fetch(endpoint, {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(body)
        })

        

        
        if (stream) { // 流式输出
            setContent('')
            const reader = response.body.getReader() // 读取器
            const decoder = new TextDecoder() // 解码器
            let done = false
            let buffer = ''

            while (!done) {
                let { value, done } = await reader.read() // 读取到二进制数据
                const chunkValue = buffer + decoder.decode(value) // 解码
                buffer = ''
                const lines = chunkValue.split('\n').filter(line => line.startsWith('data: '))
                for (const line of lines) {
                    const incoming = line.slice(6)
                    if (incoming === '[DONE]') {
                        done = true
                        break
                    }
                    try {
                        const data = JSON.parse(incoming)
                        const delta = data.choices[0]?.delta?.content // 一小节中文
                        if (delta) {
                            // str += delta
                            setContent((prev) => prev + delta)
                        }
                    } catch (error) {
                        console.log(error)
                    }
                }
            }
        } else { // 非流式输出
            const data = await response.json()
            setContent(data.choices[0].message.content)
        }
    }

    return (
        <div className="container">
            <div>
                <label >请输入问题:</label>
                <input type="text" className="question-input" onChange={(e) => setQuestion(e.target.value)}/>
                <button onClick={sendQuestion}>发送</button>
            </div>
            <div className="response">
                <div>
                    <label>streaming</label>
                    <input type="checkbox" id="streaming" onChange={(e) => setStream(e.target.checked)}/>
                </div>
                <div>
                    {content}
                </div>
            </div>
        </div>
    )
}
export default Deepseek