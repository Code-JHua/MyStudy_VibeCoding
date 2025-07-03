import { useState, useEffect } from 'react'

async function queryData() {
    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(666)
        }, 2000)
    })
    return data
}

function App() {
    let [num, setNum] = useState(1) // [1, function]
    let [age, setAge] = useState(18)

    // useEffect(() => {
    //     console.log('useEffect 执行了');
    //     queryData().then(data => {
    //         setNum(data)
    //     })
    // }, [])
    useEffect(() => {
        console.log('useEffect 执行了');
        let timer = setInterval(() => {
            console.log('定时器执行了');
        }, 1000);

        return () => {
            console.log('定时器被清除了');
            clearInterval(timer)
        }
    }, [num, age])

    function handle() {
        console.log(num);
        setNum(num + 1) //将 num 修改为参数值,并重新渲染(刷新页面)
    }

    return (
        <div>
            <button onClick={handle}>{num}</button>
            <h2 onClick={() => setAge(age + 1)}>{age}</h2>
        </div>
    )
}

export default App;