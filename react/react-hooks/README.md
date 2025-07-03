- 单页应用: 整个项目只有唯一的一个 html 文件,所有的页面都做成组件的样子,被添加到这个 html 文件中进行渲染

- 组件:
1. class 组件
2. function 组件

# hooks(钩子函数)
- 由 react 官方封装好的一系列函数
1. useState -- 定义一个响应式变量,提供专门的方法修改变量值
2. useEffect -- 副作用函数    
    1. 组件每次加载(挂载)会触发
    2. useEffect 第二个参数为数组,数组中存放的是一些状态值,只有当这些状态值发生变化时,才会触发 useEffect 函数
    3. useEffect 函数中可以返回一个函数,这个函数会在组件卸载时执行

3. useLayoutEffect -- 中的 effect 函数作为同步函数来执行
4. useReducer -- 当修改 state 的逻辑比较复杂时,用 useReducer 来处理
    1. 传入的 reducer 函数中不能直接修改原 state,必须返回一个新的 state
    2. usseReducer + immer

5. useRef ==获取 DOM 结构
6. useContext -- 跨组件传值

# UI框架

# todo
1. 初次加载页面,展示后端(json)返回的所有数据 get http://localhost:3000/data
2. 搜索每一条数据的功能  get http://localhost:3000/data?name=
3. 点击删除按钮,删除当前行数据  delete http://localhost:3000/data/:id
