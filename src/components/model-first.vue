<template lang="html">
  <div class="model">
    <el-header
      style="padding: 0px; width: 100%; min-width: 1200px; background: #FFFFFF; position: relative; top: 40px;
      border: 1px black solid; height: 40px; ">
      <!-- 设置顶部菜单的最大高度以避免菜单栏太高 -->
      <el-menu id="menubar" mode="horizontal" style="max-height:30px;">
        <el-submenu index="1">
          <template slot="title">
            <i class="fa fa-edit"></i>
            <span slot="title">打开的文件</span>
          </template>
          <el-menu-item index="1-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="fa fa-file-text-o"></i>
            <span slot="title">临时文件</span>
          </template>
          <el-submenu index="2-1">
            <span slot="title">选项4</span>
            <el-menu-item index="2-1-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-submenu index="3">
          <template slot="title">
            <i class="fa fa-star-o"></i>
            <span slot="title">模板文件</span>
          </template>
          <el-menu-item index="3-1">选项1</el-menu-item>
        </el-submenu>
        <el-submenu index="4">
          <template slot="title">
            <i class="fa fa-file-archive-o"></i>
            <span slot="title">归档文件</span>
          </template>
          <el-submenu index="4-1">
            <span slot="title">选项4</span>
            <el-menu-item index="4-1-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="4">
          <i class="fa fa-trash-o"></i>
          <span slot="title">废纸篓</span>
        </el-menu-item>
      </el-menu>
    </el-header>
  </div>
</template>

<script>
    export default {
        name: "model-first"
    }
</script>

<style scoped>
  .model {
    margin-top: 30px;
    height: 500px;
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    top: 289px;
    margin: 0 auto;
    margin-top: 0px;
  }

  .el-header {

  }

  /* 水平菜单顶层菜单样式 */
  /* >符号表示直接孩子，.el-menu--horizontal>.el-submenu .el-submenu_title表示的
  是类.el-menu--horizontal元素（这个是顶层菜单el-menu）下的第一层元素（sub-menu）下的标题，
  这个标题是放在<i>元素的slot属性中的，从而找到了<i>元素，修改它的样式就可以了 */
  .el-menu--horizontal > .el-submenu .el-submenu__title {
    height: 30px;
    line-height: 30px;
    border-bottom: 2px solid transparent;
  }

  /* 水平菜单子菜单的标题（注意，标题和菜单项不一样，标题是使用<i slot="title">表示的，需要单独处理），
  这里使用.el-submenu>.el-submenu_title定位到子菜单（不是菜单项） */
  .el-menu--horizontal .el-menu .el-submenu > .el-submenu__title {
    float: none;
    height: 23px;
    line-height: 23px;
  }

  /* 水平菜单子菜单中的所有菜单项 */
  .el-menu--horizontal .el-menu .el-menu-item {
    float: none;
    height: 23px;
    line-height: 23px;
    width: auto;
  }
</style>
