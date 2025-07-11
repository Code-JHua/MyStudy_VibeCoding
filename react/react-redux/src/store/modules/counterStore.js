import { createSlice } from '@reduxjs/toolkit'

// 仓库中的一个子模块
const counter = createSlice({
  name: 'counter',  // 子模块的名称
  
  initialState: {   // 子模块的初始状态
    count: 10,
    list: ['html', 'css', 'js']
  },
  reducers: {  // 修改数据的同步方法
    add(state) { // 形参代表 initialState{}
      state.count++
    },

    // 接收当前状态和动作对象作为参数
    commit(state, action) {
      const { inputContent } = action.payload
      // 检查是否有有效载荷数据
      if(inputContent)
      // 将有效载荷添加到状态中的 list 数组
      state.list = [...state.list, inputContent]
    }
  }

})

const { add, commit } = counter.actions; // 抛出同步方法
export { add, commit } 

const counterReducer = counter.reducer; // 抛出子模块的 reducer
export default counterReducer


