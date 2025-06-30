function List(props) { // 子组件()
    console.log(props);
    
    return (
        <div>
            <ul>
                {
                    props.data.map((item) => {
                        <li key={item.id}>{item.name}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default List