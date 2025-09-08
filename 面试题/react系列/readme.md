# HOOK
1. useState
2. useEffect
3. useContext  (父组件向子孙组件传值)
4. useReducer  (状态管理)
5. useCallback  (缓存函数，只有在依赖项变化时才会重新创建函数)
6. useMemo  (缓存组件，只有在 props 变化时才会重新渲染)
7. useRef

memo + useCallback 缓存函数，只有在依赖项变化时才会重新创建函数
memo + useMemo 缓存值，只有在值变化时才会重新渲染


# HOOK 的闭包陷阱和解决方案
1. 当 useEffect 依赖项为空数组时，会在组件挂载时执行，且只执行一次，如果useEffect中使用了状态，那么状态的值会被闭包保留，不会被更新，被更新的是全局的状态，而在useEffect再次访问的状态是闭包中的状态。 这种情况多才出现在 useEffect 中多次修改同一个变量

- 解决方案：
 1. 不让代码产生闭包，给 setState 传递函数，函数中可以访问到全局的最新的状态
 2. 使用 useReducer 来管理状态
 3. 将被修改的状态存入 useEffect 的依赖数组，当状态变化时，会重新执行 useEffect
 4. 借助 useRef，每次组件更新时，给 ref.current 赋值最新的函数，在 useEffect 中调用 ref.current 即可

 # 数据的不可变性 
 1. 普通的 class 组件(继承 Component), 只要 setState 调用了, 就会触发组件的更新
 2. 继承 PureComponent 的 class 组件, 会浅比较 props 和 state, 如果没有变化, 就不会更新组件
 3. function 组件在用 setXXX 时, 只会对比 state 本身有没有变化, 变了就重新渲染

 # immutable 
 通过创建一种新的不可变的数据结构, 来规避 react 源码中对两个对象是否相同的判断规则