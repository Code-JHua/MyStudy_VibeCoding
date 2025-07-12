import React from 'react'

interface PersonProps {
    name: string
    content?: React.ReactNode
}

function Person(props: PersonProps) {
    return (
        <div>
            <h3>你好,我是{props.name}</h3>
            {props.content}
        </div>
    )
}

const Animal: React.FC<PersonProps> = (props) => {
    return (
        <div>
            <h3>我是{props.name}</h3>
        </div>
    )
}

function App() {
    return (
        <div>
            <h1>Hello React</h1>
            <Person name='小华' content={ <button>提交</button>} />
            <Animal name='动物'/>
        </div>
    )
}

export default App