import { createSlice } from '@reduxjs/toolkit'

const todoList = createSlice({
  name: 'todoList',
  initialState: {
    list: [
      {id: 1, title: 'study', completed: true},
      {id: 2, title: 'playGame', completed: false}
    ]
  },

  reducers: {
    addTodo(state, action) {
      state.list = [...state.list, {id: state.list.length + 1, title: action.payload, completed: false}]
    },
    checked(state, action) {
      const {id, completed} = action.payload
      const item = state.list.find(item => item.id === id)
      item.completed = completed
    },
    toggleAll(state, action) {
      const checked = action.payload
      state.list = state.list.map(item => ({
        ...item,
        completed: checked  // 修改所有 todo 项的 completed 状态
      }))
    },
    deleteTodo(state, action) {
      const id = action.payload
      state.list.splice(state.list.find(item => item.id == id) - 1, 1)
    }
  }

})

export const { addTodo, checked, toggleAll, deleteTodo } = todoList.actions



export default todoList.reducer
