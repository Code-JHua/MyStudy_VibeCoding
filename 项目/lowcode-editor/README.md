# 低代码平台
- 物料区
- 画布区
- 组件右侧的属性区

1. 将物料区的组件拖拽到画布区即可, 其实就是维护一个 json 对象, 用户执行拖拽, 我们将组件对象添加到 json 的某一层中
2. 在右侧编辑某组件的属性, 其实就是在改组件的对象中增加属性值
3. 将 json 展示成树状图

# tailwindcss
- 原子化css, 只需要写类名, 不需要写 css, 尤其在低代码平台需要
npm install tailwindcss@3 postcss
npm install autoprefixer
npx tailwindcss init -p   初始化了一个 tailwindcss 配置文件和 postcss 的配置文件

# 准备
npm install allotment --save  拖动改变容器大小

# zustand 仓库
1. npm install zustand --save