<template>
  <div id="app">
    <div id="nav" >
    </div>
    <router-view />
  </div>
</template>

<style>
html,
body,
div,
span,
table,
table th,
table td,
input {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: 'Microsoft YaHei', 'Avenir', Helvetica, Arial, sans-serif;
}
#app {
  height: 100%;
  width: 100%;
  text-align: center;
}
/* 红涨绿跌 */
.red {
  color: #ff3232 !important;
}
.green {
  color: #22ac38 !important;
}
/* 两边是圆弧的滚动条样式 */
.scroll-hover::-webkit-scrollbar,
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}
.scroll-hover::-webkit-scrollbar-thumb,
::-webkit-scrollbar-thumb {
  border-radius: 5px;
  height: 30px;
  transition: all 0.4s ease-out;
}

html::-webkit-scrollbar-thumb,
body::-webkit-scrollbar-thumb,
.show-scroll::-webkit-scrollbar-thumb {
  background: #404040 !important;
}

.scroll-hover::-webkit-scrollbar-corner,
::-webkit-scrollbar-corner {
  background-color: rgba(0, 0, 0, 0);
  background: #181818;
}
/* 鼠标移入出现滚动条，移出隐藏效果 */
.scroll-hover {
  overflow: scroll;
}
:hover::-webkit-scrollbar-thumb {
  background: #404040;
}
</style>
