import React from 'react'
import { useRef } from 'react'

export default function Child1(props) {
    const inputRef = useRef(null)

    const handle = () => {
        if (inputRef.current.value === '') return
        props.setlist([...props.list, inputRef.current.value])
        inputRef.current.value = ''
    }

    return (
        <div>
            <div className="hd">
                <input type="text" ref={inputRef} />
                <button onClick={handle}>commit</button>
            </div>
        </div>
    )
}
