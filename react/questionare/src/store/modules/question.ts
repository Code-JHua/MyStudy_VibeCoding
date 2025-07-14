import {createSlice} from '@reduxjs/toolkit'
//创建子模块
const question = createSlice({
  name: 'question',
  initialState:{
    questionList: [],
    answer: [],
    answerId: [] as number[]
  },
  reducers:{
    setQuestionList(state,action){
      state.questionList = action.payload
    },
    setAnswer(state,action){
      state.answer = action.payload
    },
    setAnswerId(state,action){
      state.answerId.push(action.payload)
    }
  }
})

export const {setQuestionList,setAnswer,setAnswerId} = question.actions
export default question.reducer