import { useState , useEffect} from 'react'


async function queryData() {
    const data = await new Promise((resolve) => {
        setTimeout(() => {
            resolve(666) 
        }, 2000)
    })
    return data
}

function App() {
    const [value, setValue] = useState('hello')

    useEffect(() => {
        queryData().then(data => {
            setValue(data)
        })
    },[])

    return (
        <div onClick={() => {
            setValue((prenum) => prenum + 1)
        }}>{ value }</div>
    )
}
export default App