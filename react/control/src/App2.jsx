import { useState } from 'react'

function App() { // 受控模式
    const [value, setValue] = useState('hello')
    console.log('组件渲染');
    
    
    function onChange(event) {
        setValue(event.target.value.toUpperCase())
        console.log(event.target.value);
    }
    return (
        <input type="text" value={value} onChange={ onChange } />
    )
}
export default App