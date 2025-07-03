import { useState, useEffect, useLayoutEffect } from 'react'

async function queryData() {
    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(100)

        },2000)
    })
    return data
}

function App() {
    const [num, setNum] = useState(1)
    // 当 num 值变更时,浏览器会的那个 useLayoutEffect 中
    // 的 effect 函数执行完毕再渲染
    useLayoutEffect(() => {
        console.log('useLayoutEffect');

        let data = queryData()
        data.then(data => {
            setNum(data)
        })
        
    },[num])

    return (
        <div>
            <button onClick={() => setNum(num + 1)}>{num}</button>
        </div>
    )
}

export default App