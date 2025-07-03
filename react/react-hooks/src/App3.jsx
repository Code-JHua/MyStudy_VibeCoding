import { useReducer } from "react";
import {produce} from 'immer'

function reducer(state, action) {
    switch (action.type) {
        case 'add':
            // return {
            //     result: state.result + action.num
        // }
            return produce(state, (state) => {
                state.a.b.c += action.num
            })
        case 'minus':
            return produce(state, (state) => {
                state.a.b.c -= action.num
            })
    }
}

function App() {
    // useReducer 接收的第二个参数
    const [res, dispatch] = useReducer(reducer, { result: 0, a: { b: { c: 100, d:{ e:10 } } } })

    return (
        <div>
            <h3>{res.a.b.c}</h3>

            <button onClick={() => dispatch({ type: 'add', num: 2 })}>+</button>
            <button onClick={() => dispatch({ type: 'minus', num: 1 })}>-</button>


        </div>
    )
}

export default App