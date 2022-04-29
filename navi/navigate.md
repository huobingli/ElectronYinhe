## navigate 银河侧边栏

### 目录说明
```
Navigate
|- /assert 会被webpack编译静态资源
|- /public 不会被webpack处理编译，最后直接复制到最终打包目录下，必须使用"绝对路径"
|- /src
    |- components 用于组件具体实现
    |- utils 目前主要放暴露给客户端调用方法
    |- views 用于组件路由,通常用于router.js
    |- App.vue  页面入口文件
    |- main.js
    |- router.js    路由
|- babel.config.js  babel编译文件
|- package-lock.json npm包文件
|- package.json npm包文件
|- settings.js  项目配置文件
|- vue.config.js 项目配置文件
```

### 使用说明
主要修改components/Navigate.vue

以LeftNavi.vue为例
``` js
//template元素是html模板，天生不可见，有display:none属性
<template>
一些html的元素
</template>

// js
<script>
data: 数据  
methods: 方法  
created() 模板渲染成html前调用，用于初始化某些值  
mounted() 模板渲染成html后调用，用于页面初始化完成后的操作，例如调用window.open初始化页面内容  
</script>
```