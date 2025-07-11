import { useSelector, useDispatch } from 'react-redux'
import './TodoList.css'
import { useRef } from 'react'
import { addTodo, checked, toggleAll, deleteTodo } from '../../store/modules/todoListStore'



function TodoList() {
  const { list } = useSelector(state => state.todoList)
  const inputRef = useRef(null)
  const dispatch = useDispatch();

  const handleAddList = () => {  // 添加 todo 项
    if (inputRef.current.value.trim() === '') return
    dispatch(addTodo(inputRef.current.value))
    inputRef.current.value = ''
  }
  const handleChecked = (id, e) => {   // 切换每个 todo 项的完成状态
    console.log(id, e);
    const completed = e.target.checked
    dispatch(checked({ id, completed }))

  }
  const handleCheckedAll = (e) => {  // 切换全部 todo 项的完成状态
    dispatch(toggleAll(e.target.checked));
  }
  const handleDelete = (id) => { // 删除 todo 项
    dispatch(deleteTodo(id))
  }

  // 全部完成时, toggle-all 的状态为 true
  const isCheckedAll = list.length > 0 && list.find(item => !item.completed) === undefined

  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        <input
          className="new-todo"
          autoFocus
          autoComplete="off"
          placeholder="What needs to be done?"
          onKeyUp={(e) => {
            console.log(e);

            if (e.key === 'Enter') {
              handleAddList()
            }
          }}
          ref={inputRef}
        />
      </header>

      <section className="main">
        <input id="toggle-all" className="toggle-all" type="checkbox" checked={isCheckedAll} onChange={(e) => handleCheckedAll(e)} />
        <label htmlFor="toggle-all"></label>
        <ul className="todo-list">
          {
            list.map((item) => (
              <li key={item.id} className={`todo ${item.completed ? 'completed' : ''}`}>
                <div className="view">
                  <input className="toggle" type="checkbox" checked={item.completed} onChange={(e) => handleChecked(item.id, e)} />
                  <label>{item.title}</label>
                  <button className="destroy" onClick={() => handleDelete(item.id)}></button>
                </div>
              </li>
            ))
          }
        </ul>
      </section>
    </section>
  )
}

export default TodoList