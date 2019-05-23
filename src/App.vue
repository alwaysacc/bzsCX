<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
<style lang="less">
  @import './styles/common';
  #app{
    font-family: 微软雅黑;
    font-size: 14px;
    width: 100%;
    height: 100%;
  }
  .el-menu--collapse .el-menu .el-submenu, .el-menu--popup {
    min-width: 120px;
    margin:0;
  }
</style>
