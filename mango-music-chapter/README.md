1. 做react/vue项目 仿一个音乐类的
2. 做一个上线的业务 思路 架构 技能点

- react 组件由一个组件component实例 和 一个css文件构成 styl
不一定要用官方的 create-react-app ，下次自己的项目就可以从这个目录开始 -》项目模板 

类文件大写，一个文件夹一个组件，便于维护和模块化
- 单页应用 single page application
只有一个页面的应用
提升网站的用户体验
点击路由时，不会重新刷新页面，而是根据路由的配置，把相应的组件显示出来
- 根据页面 可以分析出 头尾不动 中间内容根据Route匹配  
根据页面 可以分析出 头尾不动 中间内容根据Route匹配  
- loading 组件 
在哪个目录下创建？
/components 路由级别组件
loading 服务于任务listAPi 列表组件 -》通用组件 

1. 数据请求阶段 显示loading
2. 数据来了之后 隐藏他 
由父组件决定 父组件要给loading传参 