import { useState, createContext, useContext } from "react"


const myContext = createContext()
const Provider = myContext.Provider


function B() {
    const msg = useContext(myContext)
    return (
        <div>
            <h3>BBB --{msg}</h3>
        </div>
    )
}

function A() {
    return (
        <div>
            <h3>AAA</h3>
            <B></B>
        </div>
    )
}

export default function index() {
const [msg, setMsg] = useState('Index 组件中的数据')

    return (
        <div>
            <Provider value={msg}>
                <A></A>
            </Provider>
        </div>
    )
}
