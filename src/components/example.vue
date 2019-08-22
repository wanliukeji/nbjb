<template lang="html">
  <div class="seach">
    <div class="seach-center">
      <div class="img_log"></div>
      <div class="seach-input">
        <input type="text" name="srchtxt" class="seach-text" value="" placeholder="请输入关键字" autocomplete="off"
               x-webkit-speech="" speech="">
        <input type="submit" name="searchsubmit" value="搜索" class="seach-btn">
      </div>

      <a href="https://bbs.cnnb.com/forum.php?mod=misc&amp;action=nav" onclick="showWindow('nav', this.href, 'get', 0)"
         class="seach-edit">免费发布信息</a>
    </div>
  </div>
  <!--  <div class="seachZ"></div>-->
</template>

<script>
    export default {
        name: "example"
    }
</script>

<style scoped>
  .seach {
    margin: 0 auto;
    text-align: center;
    width: 100%;
    vertical-align: middle;
    height: auto;
    background: #ff9715;
    color: black;
    position: relative;
    min-height: 120px;
    top: 0px;
    min-width: 1200px;
    background: url("/static/image/header_bg.jpg") no-repeat;
    background-size: 100%;
    /*padding-left: 10%;*/
    /*padding-right: auto;*/
    /*padding-top: 20px;*/
    /*border: black 1px solid;*/
    text-align: center;
  }

  .seach-center {
    width: 60%;
    /*border: black 1px solid;*/
    min-width: 1200px;
    height: 120px;
    vertical-align: top;
    display: inline-block;
  }

  .img_log {
    background: url("/static/image/logo.gif");
    width: 230px;
    height: 70px;
    vertical-align: top;
    border: none;
    position: relative;
    top: 15px;
    /*left: 20px;*/
    display: inline-block;
    float: left;
  }

  .seach-input {
    display: block;
    height: auto;
    /*border: red 1px solid;*/
    min-height: 40px;
    width: auto;
    bottom: 0px;
    position: relative;
    top: 40px;
    border: #0a6beb solid 1px;
    width: 400px;
  }

  .seach-text {
    float: left;
    width: 372px;
    height: 42px;
    outline: 0;
    border: 0 none;
    background: 0 0;
    background: #FFFFFF;
    color: #d0d0d0;
    text-indent: 10px;
    font-size: 14px;
    line-height: 42px;
    top: 41px;
    /*border: #ff291f 1px solid;*/
    border-bottom: 1px #0a6beb solid;
    position: static;
  }

  .seach-btn {
    position: absolute;
    top: -1.5px;
    right: -1px;
    display: block;
    overflow: hidden;
    width: 66px;
    height: 44px;
    outline: 0;
    border: 0 none;
    border-top-right-radius: 2px;
    border-bottom-right-radius: 2px;
    background: #1C8CE9 url(https://bbs.cnnb.com/template/weixia_cms/weixia/src/svg/search.svg) no-repeat center center;
    background-size: 35px;
    color: #fff;
    text-indent: -999em;
    font-size: 16px;
    cursor: pointer;
  }

  p {
    display: block;
    padding-left: 10px;
    font-size: 14px;
    line-height: 18px;
    cursor: pointer;
  }

  * {
    font: 12px/1.5 Tahoma, 'Microsoft Yahei', 'Simsun';
    color: #1382de;
  }

  ul, li {
    margin: 0;
    padding: 0;
  }

  .seach-edit {
    float: right;
    /*margin-top: 35px;*/
    padding: 0 18px 0 10px;
    height: 44px;
    border: 0 none;
    border-radius: 2px;
    background: #1C8CE9 url(https://bbs.cnnb.com/template/weixia_cms/weixia/src/svg/add.svg) no-repeat 8px center;
    background-size: 40px;
    color: #fff;
    text-indent: 44px;
    font-size: 16px;
    line-height: 44px;
    cursor: pointer;
    top: 40px;
  }
</style>
