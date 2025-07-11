import React, { useState, useRef } from 'react'
import Child from './Child.jsx'

export default function () {
    const [list, setlist] = useState(['html', 'css', 'js'])



    return (
        <div>
            <Child setlist={setlist}></Child>
            <div className="bd">
                {
                    list.map((item) => {
                        return <li key={item}>{item}</li>
                     })
                }
            </div>
        </div>
    )
}
