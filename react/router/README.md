# 单页应用
- 只有一个 html 文件, 将每一个页面都开发成一个组件, 通过某一种手段(路由)开控制当前加载哪一个组件, 来实现页面切换的效果

# 路由
- 当浏览器 url 变更后, 控制加载对应的组件

# 路由库
- npm i react-router-dom

# 路由库的使用
- BrowserRouter: history 模式的路由
- Routes: 路由出口, 是一个路由列表
- Route: 路由列表项, 配置了路径和组件的映射关系
- Link: 路由链接, 点击后可以切换路由
- useNavigate: 路由跳转函数, 可以在组件中使用, 点击后可以切换路由
- useSearchParams: 获取 url 中的查询参数