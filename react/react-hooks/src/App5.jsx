import { createContext, useContext } from "react"; 


function Child1(props) {
    console.log(props);
    
    return (
        <div>
            <h2>子组件 -- {props.data}</h2>
            <Child2 />
        </div>
    )
}
function Child2(props) {
    const count = useContext(numContext)
    return (
        <div>
            <h3>孙子组件 -- {count}</h3>
        </div>
    )
}

const numContext = createContext()
function App() { 
    let num = 100

    return (
        <div>
            <numContext.Provider value={num}>
            <h1>父组件</h1>
            <Child1 />
            </numContext.Provider>
        </div>
    )
}

export default App;