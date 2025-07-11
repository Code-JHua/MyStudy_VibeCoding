import React, { useState, useRef } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'

export default function () {
    const [list, setlist] = useState(['html', 'css', 'js'])

    return (
        <div>
            <Child1 setlist={setlist}></Child1>
            <Child2 list={list}></Child2>
        </div>
    )
}