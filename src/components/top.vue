<!--<link rel="stylesheet" href="/node_modules/iview/dist/styles/iview.css">-->
<template lang="html">
  <div class="top">
    <div class="top-center">
      <ul class="top-left">
        <li class="top-left-li">您好！<a style="color: #1C8CE9;" @click="showFlag = true">请登录</a></li>
        <li class="top-left-li"><a href="https://app.cnnb.com/mag/wap/v1/wap/waphome/signup"
                                   style="position: relative;">免费注册</a>
          <svg t="1566630465890" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="7678" width="14" height="14">
            <path
              d="M531.185456 943.532317c0 8.899694-6.493901 16.114003-14.503319 16.114003l-9.364275 0c-8.010441 0-14.504342-7.214309-14.504342-16.114003L492.81352 80.46666c0-8.898671 6.493901-16.114003 14.504342-16.114003l9.364275 0c8.009418 0 14.503319 7.215332 14.503319 16.114003L531.185456 943.532317z"
              p-id="7679" fill="#bfbfbf"></path>
          </svg>
        </li>
        <li class="top-left-li">
          <svg t="1566629622936" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="1147" width="14" height="14">
            <path
              d="M980.79827 694.105946c-21.144216-122.796973-109.844757-203.250162-109.844757-203.250162 12.647784-111.477622-33.792-131.26573-33.792-131.26573C827.392 14.668108 530.985514 20.67373 524.730811 20.839784 518.476108 20.67373 222.01427 14.668108 212.300108 359.590054c0 0-46.467459 19.788108-33.819676 131.26573 0 0-88.700541 80.453189-109.817081 203.250162 0 0-11.291676 207.484541 101.403676 25.40627 0 0 25.350919 69.161514 71.790703 131.26573 0 0-83.082378 28.256865-75.997405 101.625081 0 0-2.87827 81.836973 177.401081 76.218811 0 0 126.699243-9.852541 164.753297-63.515676l16.605405 0 0.276757 0 16.633081 0c38.026378 53.635459 164.725622 63.515676 164.725622 63.515676 180.224 5.618162 177.401081-76.218811 177.401081-76.218811 7.029622-73.368216-75.997405-101.625081-75.997405-101.625081 46.439784-62.104216 71.790703-131.26573 71.790703-131.26573C992.034595 901.590486 980.79827 694.105946 980.79827 694.105946z"
              p-id="1148" fill="#1296db"></path>
          </svg>
          <a
            href="https://www.cnnb.com/connect.php?mod=login&amp;op=init&amp;referer=https%3A%2F%2Fwww.cnnb.com%2F&amp;statfrom=login"
            rel="nofollow">
            QQ登录
          </a>
        </li>
        <li class="top-left-li">
          <svg t="1566630465890" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="7678" width="14" height="14">
            <path
              d="M531.185456 943.532317c0 8.899694-6.493901 16.114003-14.503319 16.114003l-9.364275 0c-8.010441 0-14.504342-7.214309-14.504342-16.114003L492.81352 80.46666c0-8.898671 6.493901-16.114003 14.504342-16.114003l9.364275 0c8.009418 0 14.503319 7.215332 14.503319 16.114003L531.185456 943.532317z"
              p-id="7679" fill="#bfbfbf"></path>
          </svg>
          <svg t="1566629750015" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="1904" width="16" height="16">
            <path
              d="M695.296 346.112c11.776 0 23.552 1.024 34.816 2.048-31.232-146.432-187.904-254.976-366.592-254.976-199.68 0-363.52 136.192-363.52 308.736 0 99.84 54.272 181.76 145.408 245.248l-36.352 109.056L236.032 692.736c45.568 9.216 81.92 18.432 127.488 18.432 11.264 0 22.528-0.512 33.792-1.536-7.168-24.064-11.264-49.664-11.264-76.288 0.512-158.208 136.704-287.232 309.248-287.232zM497.664 240.64c31.232 0 56.32 25.088 56.32 56.32s-25.088 56.32-56.32 56.32-56.32-25.088-56.32-56.32 25.088-56.32 56.32-56.32zM243.2 353.792c-31.232 0-56.32-25.088-56.32-56.32s25.088-56.32 56.32-56.32 56.32 25.088 56.32 56.32-25.088 56.32-56.32 56.32zM1024.512 630.784c0-145.408-145.408-263.68-308.736-263.68-173.056 0-309.248 118.272-309.248 263.68s136.192 263.68 309.248 263.68c36.352 0 72.704-9.216 109.056-18.432l99.84 54.784-27.136-90.624c72.704-54.784 126.976-127.488 126.976-209.408z m-403.456-40.96c-22.016 0-39.936-17.92-39.936-39.936s17.92-39.936 39.936-39.936 39.936 17.92 39.936 39.936-17.92 39.936-39.936 39.936z m199.68 2.56c-22.016 0-39.936-17.92-39.936-39.936s17.92-39.936 39.936-39.936 39.936 17.92 39.936 39.936-17.92 39.936-39.936 39.936z"
              fill="#04ae0f" p-id="1905"></path>
          </svg>
          微信登录
        </li>
      </ul>

      <ul class="top-right">
        <li class="top-right-li">
          <a href="/index.html">
            网站首页
          </a>
        </li>
        <li class="top-right-li">
          <Dropdown>
            <a href="javascript:void(0)">
              <svg t="1566630465890" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="7678" width="14" height="14">
                <path
                  d="M531.185456 943.532317c0 8.899694-6.493901 16.114003-14.503319 16.114003l-9.364275 0c-8.010441 0-14.504342-7.214309-14.504342-16.114003L492.81352 80.46666c0-8.898671 6.493901-16.114003 14.504342-16.114003l9.364275 0c8.009418 0 14.503319 7.215332 14.503319 16.114003L531.185456 943.532317z"
                  p-id="7679" fill="#bfbfbf"></path>
              </svg>
              <svg t="1566630061788" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="3625" width="16" height="16">
                <path
                  d="M657.4 6.6H369.6c-69.7 0-130 32.1-130 106.4v784.5c0 69.7 55.8 123.7 130 123.7h287.9c74.3 0 129.9-60.4 129.9-134.6V106.7c0-69.6-55.7-100.1-130-100.1z m-135 16.5c4.8 0 8.8 4 8.8 8.8 0 4.8-4 8.8-8.8 8.8-4.9 0-8.8-4-8.8-8.8 0-4.9 4-8.8 8.8-8.8z m-44.8 47.2c0-5.1 4.2-9.3 9.3-9.3h75.7c5.1 0 9.3 4.2 9.3 9.3v0.7c0 5.1-4.2 9.3-9.3 9.3h-75.7c-5.1 0-9.3-4.2-9.3-9.3v-0.7zM449 62.1c4.9 0 8.8 4 8.8 8.8 0 4.9-3.9 8.8-8.8 8.8s-8.8-4-8.8-8.8c0-4.9 4-8.8 8.8-8.8z m64.6 926.1c-24.1 0-43.6-19.6-43.6-43.6 0-24.1 19.6-43.6 43.6-43.6 24.1 0 43.6 19.6 43.6 43.6 0.1 23.9-19.5 43.6-43.6 43.6z m229-129c0 7-5.8 12.8-12.9 12.8H297.5c-7.1 0-12.9-5.8-12.9-12.9v-734c0-7.1 5.8-12.9 12.9-12.9h432.2c7.1 0 12.9 5.8 12.9 12.9v734.1z"
                  fill="#bfbfbf" p-id="3626"></path>
              </svg>
              手机端
              <Icon type="ios-arrow-down"></Icon>
              <!--              <span class="right-i"></span>-->
            </a>
            <DropdownMenu slot="list">
              <div class="img-div">
                <div class="img-div-child">
                  <img src="/static/image/app.png" class="img-hide" alt="手机版" title="手机版">
                  <br>
                  手机版
                </div>
                <div class="img-div-child">
                  <img src="/static/image/weixin.png" class="img-hide" alt="微信公众号" title="微信公众号">
                  <br>
                  微信公众号
                </div>
                <div class="img-div-child">
                  <img src="/static/image/xiao.png" class="img-hide" alt="小程序" title="小程序">
                  <br>
                  小程序
                </div>
              </div>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li class="top-right-li">
          <Dropdown>
            <a href="javascript:void(0)">
              <svg t="1566630465890" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="7678" width="14" height="14">
                <path
                  d="M531.185456 943.532317c0 8.899694-6.493901 16.114003-14.503319 16.114003l-9.364275 0c-8.010441 0-14.504342-7.214309-14.504342-16.114003L492.81352 80.46666c0-8.898671 6.493901-16.114003 14.504342-16.114003l9.364275 0c8.009418 0 14.503319 7.215332 14.503319 16.114003L531.185456 943.532317z"
                  p-id="7679" fill="#bfbfbf"></path>
              </svg>
              <a href="https://bbs.cnnb.com/space-uid-8.html">个人中心</a>
              <Icon type="ios-arrow-down"></Icon>
              <!--              <span class="right-i"></span>-->
            </a>
            <DropdownMenu slot="list" >
              <DropdownItem>
                <a href="https://bbs.cnnb.com/home.php?mod=spacecp">个人设置</a>
              </DropdownItem>
              <DropdownItem>
                <a href="https://bbs.cnnb.com/home.php?mod=space&amp;do=pm">信息通知</a>
              </DropdownItem>
              <DropdownItem>
                <a href="https://bbs.cnnb.com/forum.php?mod=guide&amp;view=my">我的帖子</a>
              </DropdownItem>
              <DropdownItem>
                <a href="https://bbs.cnnb.com/home.php?mod=space&amp;do=favorite&amp;view=me">我的收藏</a>
              </DropdownItem>
              <DropdownItem>
                <a href="https://bbs.cnnb.com/home.php?mod=space&amp;do=friend">我的好友</a>
              </DropdownItem>
              <DropdownItem>
                <a href="https://www.cnnb.com/portal.php?mod=portalcp">门户管理</a>
              </DropdownItem>
              <DropdownItem>
                <a href="member.php?mod=logging&amp;action=logout&amp;formhash=952854de" rel="nofollow">退出</a>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
        <li class="top-right-li">
          <Dropdown>
            <a href="javascript:void(0)">
              <svg t="1566630465890" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="7678" width="14" height="14">
                <path
                  d="M531.185456 943.532317c0 8.899694-6.493901 16.114003-14.503319 16.114003l-9.364275 0c-8.010441 0-14.504342-7.214309-14.504342-16.114003L492.81352 80.46666c0-8.898671 6.493901-16.114003 14.504342-16.114003l9.364275 0c8.009418 0 14.503319 7.215332 14.503319 16.114003L531.185456 943.532317z"
                  p-id="7679" fill="#bfbfbf"></path>
              </svg>
              <a href="javascript:void(0);" style="color:#f78115;">快速导航</a>
              <Icon type="ios-arrow-down"></Icon>
            </a>
            <DropdownMenu slot="list">
              <DropdownItem>
                <a
                  href="https://bbs.cnnb.com/home.php?mod=spacecp&amp;ac=plugin&amp;op=credit&amp;id=duceapp_scorebuy:addfunds"
                  class="">
                  <b style="color:#F60; font-size: 11px;">积分充值</b>
                </a>
              </DropdownItem>
              <DropdownItem>
                <a href="javascript:;"
                   onclick="setHomepage('https://www.cnnb.com/source/plugin/magmobileapi/');">设为首页</a>
              </DropdownItem>
              <DropdownItem>
                <a href="https://www.cnnb.com/source/plugin/magmobileapi/"
                   onclick="addFavorite(this.href, '阿拉宁波网');return false;">收藏本站</a>
              </DropdownItem>
              <DropdownItem>
                <a href="http://url.cn/5SdZZYR" target="_blank">手机客户端</a>
              </DropdownItem>
              <DropdownItem>
                <a href="https://bbs.cnnb.com/home.php?mod=magic">道具中心</a>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </li>
      </ul>
    </div>

    <div class="top-right-diy">
      <Dropdown>
        <a href="javascript:void(0)">
          <svg t="1566630465890" class="icon" viewBox="0 0 1024 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg" p-id="7678" width="14" height="14">
          </svg>
          <img src="/static/image/panel-toggle.png" class="diy" @mouseover="showDiyChild" alt="">
        </a>
        <DropdownMenu slot="list">
          <DropdownItem @click="showHideTop">简易模式</DropdownItem>
          <DropdownItem @click="showHideTop">高级模式</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </div>

    <!--  start  -->

    <div class="dial-header" style="margin: 0 auto;">
             
      <el-dialog title="用户登录" :visible.sync="showFlag"
                 style="width:100%; min-width: 1200px; " align="left">
                
        <div style="text-align: center; width: 100%; height: auto; ">
          <table>
            <tr>
              <td class="td-name">账号：</td>
              <td class="td-input"><input type="text" class="input" v-model="info.name">
                <span style="font-size: 16px; color: #999;">
                  <a href="https://bbs.cnnb.com/member.php?mod=register" style="font-size: 11px;">注册</a>
                </span>
              </td>
            </tr>
            <tr>
              <td class="td-name">密码：</td>
              <td class="td-input"><input type="password" class="input" v-model="info.job">
                <span style="color: #999;">
                  <a href="https://bbs.cnnb.com/" style="font-size: 11px;">找回密码</a>
                </span>
              </td>
            </tr>
            <tr>
              <td class="td-name">安全提问：</td>
              <td class="td-input">
                <select type="text" class="input">
                  <option>安全问题(未设置请忽略)</option>
                  <option>母亲的名字</option>
                  <option>爷爷的名字</option>
                  <option>父亲出生的城市</option>
                  <option>你其中一位老师的名字</option>
                  <option>你个人计算机的型号</option>
                  <option>你最新欢的餐馆名称</option>
                  <option>驾驶执照最后四位数</option>
                </select>
              </td>
            </tr>
            <tr>
              <td class="td-name">
              </td>
              <td class="td-input">
                <input type="checkbox" id="checkbox"/><label for="checkbox">&nbsp;
                <span style="font-size: 14px;">自动登录</span>
              </label>
              </td>
            </tr>
            <tr>
              <td class="td-name">
              </td>
              <td class="td-input">
                <el-button size="mini" type="success" @click="radioEvent()">登录</el-button>
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <Divider />
              </td>
            </tr>
            <tr>
              <td class="td-name">
                快捷登录：
              </td>
              <td class="td-input">
                <a href="https://www.cnnb.com/connect.php?mod=login&amp;op=init&amp;referer=https%3A%2F%2Fwww.cnnb.com%2F&amp;statfrom=login"
                  rel="nofollow"><img src="/static/image/qq_login.gif" width="100" height="20"></a>
              </td>
            </tr>
          </table>
                 
        </div>
               
      </el-dialog>
      <el-button type="primary" @click="showFlag = true">选择</el-button>
           
    </div>
    <!--  end  -->
  </div>
</template>

<script>
    export default {
        name: "top",
        data() {
            return {
                visible: false,
                showFlag: false,
                radio: "",
                info: {
                    name: 'chenny',
                    job: '程序猿',
                    address: '宁波北仑区大榭'
                }
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
            },
            radioEvent() {
                alert(this.info.name);
                this.showFlag = false;
                this.adapterSelected = this.radio;
            },
            showHideTop() {
                this.$notify.success({});
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
    min-width: 1200px;
    /*border: 1px black solid;*/
    background: #f8f8f8 url(https://bbs.cnnb.com/template/weixia_cms/weixia/src/images/topbg.jpg) repeat-x;
    color: #f6f6f6;
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

  .top-right-diy {
    position: relative;
    display: inline-block;
    float: right;
    top: -32px;
    right: 0px;
    z-index: 11;
  }

  .diy {
    position: relative;
    top: -2px;
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

  .dial-header, el-dialog {
  }

  .input {
    width: 80%;
    height: 35px;
    text-align: left;
    font-size: 14px;
    border: #dfdfdf 0.3px solid;
    padding-left: 7px;
  }

  table {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .td-name {
    text-align: right;
    color: #878787;
    font-size: 12px;
  }

  tr {
    padding-top: 10px;
    top: 10px;
  }

  .td-input {
    text-align: left;
    font-size: 12px;
    color: #878787;
  }

  option, select {
    font-size: 14px;
    color: #878787;
  }

  select:hover {
    cursor: pointer;
  }

  a {
    color: #333;
  }


</style>
