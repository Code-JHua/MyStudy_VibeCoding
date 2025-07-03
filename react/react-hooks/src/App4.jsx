import {useRef, useEffect} from 'react'


function App() {
    const ipt = useRef(null)
    
    useEffect(() => {
        ipt.current.focus()
        
    },[])

    return (
        <div>
            <input type="text" ref={ipt} />
        </div>
    )
}

export default App