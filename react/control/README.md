# dependencies
- 生产依赖: 项目开发完成后,打包时, dependencies中的第三方源代码也就被打包起来

# devDependencies
- 开发依赖: 只在开发过程中有意义,不会被打包到最终的项目代码中

# 受控模式 VS 非受控模式
- 表单中的 input:
1. 用户修改 input 值
2. 代码修改 input 值

- 非受控模式: 能用代码设置表单的初始值, 但是无法再次修改 value, 能修改 value 的只有用户

- 通常情况下,不推荐使用受控模式
  但是