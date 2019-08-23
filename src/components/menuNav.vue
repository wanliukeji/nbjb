<template>
  <div class="menu-nav">
    <div class="nav-div">
      <ul>
        <li class="li-div">
          首页
        </li>
        <li class="li-div">
          论坛
        </li>
        <li class="li-div">
          手机版
        </li>
        <li class="li-div">
          我的贴子
        </li>
        <li class="li-div">
          APP下载
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "menuNav"
    }
</script>

<style scoped>
  .menu-nav {
    position: relative;
    top: 0px;
    margin: 0 auto;
    min-height: 46px;
    background: #1c8ce9;
    width: 100%;
    min-width: 1200px;
    vertical-align: center;
    text-align: center;
    /*border: black 1px solid;*/
  }
  .nav-div {
    width: 80%;
    height: auto;
    /*border: black 1px solid;*/
    position: relative;
    min-width: 1200px;
    margin: 0 auto;
  }
  .li-div {
    width: 100px;
    min-width: 100px;
    /*border: #88ff19 1px solid;*/
    /*height: 30px;*/
    height: auto;
    position: relative;
    color: #FFFFFF;
    display: inline-block;
    float: left;
    vertical-align: middle;
    text-align: center;
    line-height: 45px;
  }
  li:first-child {
    background: #1382de;
  }


  .li-div:hover {
    background: #1382de;
    cursor: pointer;
  }
</style>
