<!--<link rel="stylesheet" href="/node_modules/iview/dist/styles/iview.css">-->
<template lang="html">
  <div class="top">
    <div class="top-center">
      <ul class="top-left">
        <li class="top-left-li">您好！ <a href="">请登录</a></li>
        <li class="top-left-li">免费注册</li>
        <li class="top-left-li">
          <i class="icon-qq"></i>
          QQ登录
        </li>
        <li class="top-left-li">
          <i class="icon-weixin"></i>
          微信登录
        </li>
      </ul>

      <ul class="top-right">
        <li class="top-right-li">网站首页</li>
        <li class="top-right-li">
          <Dropdown>
            <a href="javascript:void(0)">
              手机端
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <div class="img-div">
                <div class="img-div-child">
                  <img src="/static/image/weixin.png" class="img-hide" alt="手机版" title="手机版">
                  <br>
                  手机版
                </div>
                <div class="img-div-child">
                  <img src="/static/image/weixin.png" class="img-hide" alt="微信公众号" title="微信公众号">
                  <br>
                  微信公众号
                </div>
                <!--                <div class="img-div-child">-->
                <!--                  <img src="/static/image/weixin.png" class="img-hide" alt="微信公众号" title="微信公众号">-->
                <!--                  微信公众号-->
                <!--                  <br>-->
                <!--                </div>-->
                <div class="img-div-child">
                  <img src="/static/image/weixin.png" class="img-hide" alt="小程序" title="小程序">
                  <br>
                  小程序
                </div>
              </div>
            </DropdownMenu>
          </Dropdown>
          <!--          <i class="arrow1"></i>-->
          <!--          <div class="img-div">-->
          <!--            <img src="/static/image/weixin.png" class="img-hide" alt="手机版" title="手机版">-->
          <!--            <img src="/static/image/weixin.png" class="img-hide" alt="微信公众号" title="微信公众号">-->
          <!--            <img src="/static/image/weixin.png" class="img-hide" alt="小程序" title="小程序">-->
          <!--          </div>-->
        </li>
        <li class="top-right-li">

          <!--          个人中心<i class="arrow1"></i>-->
          <!--          <ul class="ul-hide-me">-->
          <!--            <li class="ul-hide-li">个人设置</li>-->
          <!--            <li class="ul-hide-li">信息中心</li>-->
          <!--            <li class="ul-hide-li">我的贴子</li>-->
          <!--            <li class="ul-hide-li">我的收藏</li>-->
          <!--            <li class="ul-hide-li">我的好友</li>-->
          <!--            <li class="ul-hide-li">门户管理</li>-->
          <!--            <li class="ul-hide-li">退出</li>-->
          <!--          </ul>-->
          <Dropdown>
            <a href="javascript:void(0)">
              个人中心
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>个人设置</DropdownItem>
              <DropdownItem>信息中心</DropdownItem>
              <DropdownItem>我的贴子</DropdownItem>
              <DropdownItem>我的收藏</DropdownItem>
              <DropdownItem>我的好友</DropdownItem>
              <DropdownItem>门户管理</DropdownItem>
              <DropdownItem>退出</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
        <!--        <li class="top-right-li">-->
        <!--          快速导航-->
        <!--          &lt;!&ndash;          <i class="arrow1"></i>&ndash;&gt;-->
        <!--          <ul class="ul-hide">-->
        <!--            <li class="ul-hide-li">积分充值</li>-->
        <!--            <li class="ul-hide-li">设为首页</li>-->
        <!--            <li class="ul-hide-li">设为本站</li>-->
        <!--            <li class="ul-hide-li">手机客户端</li>-->
        <!--            <li class="ul-hide-li">道具中心</li>-->
        <!--          </ul>-->
        <!--        </li>-->
        <li class="top-right-li">
          <Dropdown>
            <a href="javascript:void(0)">
              快速导航
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>积分充值</DropdownItem>
              <DropdownItem>设为首页</DropdownItem>
              <DropdownItem>设为本站</DropdownItem>
              <DropdownItem>手机客户端</DropdownItem>
              <DropdownItem>道具中心</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
      </ul>
    </div>

    <div class="top-right-diy">
      <img src="/static/image/panel-toggle.png" class="diy" @mouseover="showDiyChild" alt="">
      <ul class="top-right-li-diy-child">
        <li class="jq">CHENYU</li>
      </ul>
    </div>

  </div>
</template>

<script>
    export default {
        name: "top",
        data() {
            return {
                visible: false
            }
        },
        methods: {
            handleOpen() {
                this.visible = true;
            },
            handleClose() {
                this.visible = false;
            },
            showDiyChild() {
                //引用JQUERY
                var text = $('.jq').text();
                // alert(text);
            }
        }
    }
</script>

<style scoped>
  .top {
    width: 100%;
    min-width: 100%;
    height: 40px;
    position: relative;
    background: #f9f9f9;
    /*padding-left: 10%;*/
    /*padding-right: 10%;*/
    min-width: 1200px;
    /*border: 1px black solid;*/
  }

  .top-center {
    position: relative;
    width: 80%;
    min-width: 1200px;
    height: 40px;
    margin: 0 auto;
    vertical-align: middle;
  }

  .top-left, .top-right {
    display: inline-block;
    height: 40px;
    vertical-align: middle;
    padding-top: 12px;
  }

  .top-left {
    float: left;
  }

  .top-right {
    float: right;
  }

  .top-left-li, .top-right-li {
    display: inline-block;
    float: left;
    font-size: 11px;
    margin-right: 12px;
    color: #404040;
    /*border: black 1px solid;*/
    /*min-width: 80px;*/
  }

  .top-right-li:hover, .top-right-diy:hover {
    cursor: pointer;
    color: #0a6beb;
  }

  .top-left-li:hover {
    cursor: pointer;
    color: #0a6beb;
  }

  .top-right-li:hover .ul-hide-li {
    display: block;
  }

  .ul-hide, .ul-hide-me {
    display: none;
    z-index: 1;
    position: absolute;
    /*padding-left: 0;*/
    top: 40px;
    width: auto;
    background: #FFFFFF;
    padding: 8px;
    line-height: 18px;
    /*border: black 1px solid;*/
  }

  .top-right-diy {
    position: relative;
    display: inline-block;
    float: right;
    top: -27px;
    right: 0px;
    z-index: 11;
  }

  .diy {
    position: relative;
    top: -2px;
    /*right: 10px;*/
    /*float: right;*/
    /*padding: 0;*/
    /*width: 56px;*/
    /*background: url(/static/image/panel-toggle.png) no-repeat 100% 1px;*/
    /*text-indent: -9999px;*/
    /*overflow: hidden;*/
    /*border: 1px black solid;*/
  }

  .ul-hide-me {
    right: 50px;
    width: 70px;
  }

  .ul-hide-li {
    font-size: 11px;
    width: 60px;
    padding-left: 0;
    text-align: left;
    line-height: 18px;
  }

  .img-div {
    /*display: none;*/
    /*border: black 1px solid;*/
    position: absolute;
    top: 40px;
    z-index: 10;
    right: 115px;
    padding: 5px;
    background: #FFFFFF;
    width: 380px;
    position: absolute;
    right: 0px;
    top: 0px;
  }

  .img-div-child {
    display: inline-block;
    float: left;
    text-align: center;
    font-size: 10px;
    color: #8d8d8d;
  }

  .img-hide {
    width: 120px;
    height: 120px;
  }

  .arrow1 {
    position: absolute;
    right: 3px;
    top: 48%;
    width: 6px;
    height: 6px;
    margin-top: 0px;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    -webkit-transform: rotate(225deg);
    content: '';
  }

  .arrow2:hover {
    position: absolute;
    right: 3px;
    top: 40%;
    width: 6px;
    height: 6px;
    margin-top: 0px;
    border-right: 1px solid #000;
    border-bottom: 1px solid #000;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    content: '';
  }

  .top-right-li-diy-child {
    display: none;
  }
</style>
