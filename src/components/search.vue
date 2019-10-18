<template lang="html">
  <div class="seach-div">
    <div class="seach-center-div" style="margin: 0 auto;">
      <a href="/index.html">
        <div class="img_log"></div>
      </a>
      <div class="seach-input-div">
        <div class="seach-input-div-center">
          <select class="select-div">
            <option>阿拉娱乐</option>
            <option>全部板块</option>
            <option>阿拉新闻</option>
          </select>
          <svg t="1566630465890" class="icon icon-select-left" viewBox="0 0 1024 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg"
               p-id="7678" width="27" height="27">
            <path
              d="M531.185456 943.532317c0 8.899694-6.493901 16.114003-14.503319 16.114003l-9.364275 0c-8.010441 0-14.504342-7.214309-14.504342-16.114003L492.81352 80.46666c0-8.898671 6.493901-16.114003 14.504342-16.114003l9.364275 0c8.009418 0 14.503319 7.215332 14.503319 16.114003L531.185456 943.532317z"
              p-id="7679" fill="#ccc"></path>
          </svg>
          <input type="text" name="srchtxt" class="seach-text-div" value="" placeholder="请输入关键字"/>
          <button type="submit" name="searchsubmit" value="搜索" class="seach-btn-div"/>
        </div>

      </div>

      <a href="#" @click="showFlag = true"
         class="seach-edit-div">免费发布信息</a>
    </div>

    <el-dialog title="论坛导航" :visible.sync="showFlag" style="width:100%; min-width: 1200px;float: left; font-size: 14px; font-weight: 700;
    color: #999;" align="left">
      <div class="hide-div-nav">
        <p class="hide-p">
          <span class="hide-p-span">
            阿拉宁波网 > 阿拉宁波-职场 > 个人求职专区 &nbsp;[进入板块]
          </span>
          <button class="hide-p-btn">发新帖</button>
        </p>
        <ul class="hide-ul-div" style="padding: 8px;">
          <li class="hide-ul-div-li">
            <span class="hide-ul-div-li-span">常用板块</span>
            <svg style="float: right;" t="1566798959379" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1821" width="10" height="10">
              <path d="M270.387 27.273l484.233 485.222-485.222 484.233z" p-id="1822" fill="#bfbfbf"></path>
            </svg>
          </li>
          <br>
          <li class="hide-ul-div-li">
            <span class="hide-ul-div-li-span">阿拉宁波-民生</span>
            <svg style="float: right;" t="1566798959379" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1821" width="10" height="10">
              <path d="M270.387 27.273l484.233 485.222-485.222 484.233z" p-id="1822" fill="#bfbfbf"></path>
            </svg>
          </li>
          <br>
          <li class="hide-ul-div-li">
            <span class="hide-ul-div-li-span">阿拉宁波-生活</span>
            <svg style="float: right;" t="1566798959379" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1821" width="10" height="10">
              <path d="M270.387 27.273l484.233 485.222-485.222 484.233z" p-id="1822" fill="#bfbfbf"></path>
            </svg>
          </li>
          <br>
          <li class="hide-ul-div-li">
            <span class="hide-ul-div-li-span">阿拉宁波-职场</span>
            <svg style="float: right;" t="1566798959379" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1821" width="10" height="10">
              <path d="M270.387 27.273l484.233 485.222-485.222 484.233z" p-id="1822" fill="#bfbfbf"></path>
            </svg>
          </li>
          <br>
          <li class="hide-ul-div-li">
            <span class="hide-ul-div-li-span">阿拉宁波-分类信息</span>
            <svg style="float: right;" t="1566798959379" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1821" width="10" height="10">
              <path d="M270.387 27.273l484.233 485.222-485.222 484.233z" p-id="1822" fill="#bfbfbf"></path>
            </svg>
          </li>
          <br>
          <li class="hide-ul-div-li">
            <span class="hide-ul-div-li-span">阿拉宁波-商家</span>
            <svg style="float: right;" t="1566798959379" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1821" width="10" height="10">
              <path d="M270.387 27.273l484.233 485.222-485.222 484.233z" p-id="1822" fill="#bfbfbf"></path>
            </svg>
          </li>
          <br>
          <li class="hide-ul-div-li">
            <span class="hide-ul-div-li-span">阿拉宁波-文化</span>
            <svg style="float: right;" t="1566798959379" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1821" width="10" height="10">
              <path d="M270.387 27.273l484.233 485.222-485.222 484.233z" p-id="1822" fill="#bfbfbf"></path>
            </svg>
          </li>
          <br>
          <li class="hide-ul-div-li">
            <span class="hide-ul-div-li-span">阿拉宁波-文化</span>
            <svg style="float: right;" t="1566798959379" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1821" width="10" height="10">
              <path d="M270.387 27.273l484.233 485.222-485.222 484.233z" p-id="1822" fill="#bfbfbf"></path>
            </svg>
          </li>
          <br>
          <li class="hide-ul-div-li">
            <span class="hide-ul-div-li-span">阿拉宁波-公益</span>
            <svg style="float: right;" t="1566798959379" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1821" width="10" height="10">
              <path d="M270.387 27.273l484.233 485.222-485.222 484.233z" p-id="1822" fill="#bfbfbf"></path>
            </svg>
          </li>
          <br>
          <li class="hide-ul-div-li">
            <span class="hide-ul-div-li-span">阿拉宁波-趣园</span>
            <svg style="float: right;" t="1566798959379" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1821" width="10" height="10">
              <path d="M270.387 27.273l484.233 485.222-485.222 484.233z" p-id="1822" fill="#bfbfbf"></path>
            </svg>
          </li>
          <br>

        </ul>

        <ul class="hide-ul-div">
          <li class="hide-ul-div-li">
            <span class="hide-ul-div-li-span">我爱北仑</span>
            <svg style="float: right;" t="1566798959379" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1821" width="10" height="10">
              <path d="M270.387 27.273l484.233 485.222-485.222 484.233z" p-id="1822" fill="#bfbfbf"></path>
            </svg>
          </li>
          <br>
          <li class="hide-ul-div-li">
            <span class="hide-ul-div-li-span">阿拉播报</span>
            <svg style="float: right;" t="1566798959379" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1821" width="10" height="10">
              <path d="M270.387 27.273l484.233 485.222-485.222 484.233z" p-id="1822" fill="#bfbfbf"></path>
            </svg>
          </li>
          <br>
          <li class="hide-ul-div-li">
            <span class="hide-ul-div-li-span">阿拉知道</span>
            <svg style="float: right;" t="1566798959379" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1821" width="10" height="10">
              <path d="M270.387 27.273l484.233 485.222-485.222 484.233z" p-id="1822" fill="#bfbfbf"></path>
            </svg>
          </li>
          <br>
          <li class="hide-ul-div-li">
            <span class="hide-ul-div-li-span">曝光台</span>
            <svg style="float: right;" t="1566798959379" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1821" width="10" height="10">
              <path d="M270.387 27.273l484.233 485.222-485.222 484.233z" p-id="1822" fill="#bfbfbf"></path>
            </svg>
          </li>
          <br>
          <li class="hide-ul-div-li">
            <span class="hide-ul-div-li-span">阿拉城事</span>
            <svg style="float: right;" t="1566798959379" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1821" width="10" height="10">
              <path d="M270.387 27.273l484.233 485.222-485.222 484.233z" p-id="1822" fill="#bfbfbf"></path>
            </svg>
          </li>
          <br>
          <li class="hide-ul-div-li">
            <span class="hide-ul-div-li-span">阿拉宁波-商家</span>
            <svg style="float: right;" t="1566798959379" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1821" width="10" height="10">
              <path d="M270.387 27.273l484.233 485.222-485.222 484.233z" p-id="1822" fill="#bfbfbf"></path>
            </svg>
          </li>
          <br>
          <li class="hide-ul-div-li">
            <span class="hide-ul-div-li-span">民生关注</span>
            <svg style="float: right;" t="1566798959379" class="icon" viewBox="0 0 1024 1024" version="1.1"
                 xmlns="http://www.w3.org/2000/svg" p-id="1821" width="10" height="10">
              <path d="M270.387 27.273l484.233 485.222-485.222 484.233z" p-id="1822" fill="#bfbfbf"></path>
            </svg>
          </li>
          <br>
        </ul>

        <ul class="hide-ul-div">
          <li class="hide-ul-div-li">
            <span class="hide-ul-div-li-span">企业招聘-认证区</span>
          </li>
          <br>
          <li class="hide-ul-div-li">
            <span class="hide-ul-div-li-span">个人求职专区</span>
          </li>
          <br>
        </ul>
                           
      </div>
             
    </el-dialog>

  </div>
  <!--  <div class="seachZ"></div>-->
</template>

<script>
    export default {
        name: "example",
        data() {
            return {
                showFlag: false,
                radio: "",
                info: {
                    name: 'chenny',
                    job: '程序猿',
                    address: '宁波北仑区大榭',
                    sex: '男'
                },
                input1: '',
                input2: '',
                input3: '',
                select: ''
            }
        },
        methods: {
            show() {

            },
            radioEvent() {
                // this.$dialog.alert(this.info.name);
                this.showFlag = false;
                this.adapterSelected = this.radio;
            }
        }
    }
</script>


<style scoped>
  .seach-div {
    text-align: center;
    width: 100%;
    vertical-align: middle;
    height: 120px;
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
    margin: 0 auto;
    text-align: center;
  }

  .seach-center-div {
    width: 80%;
    /*border: black 1px solid;*/
    min-width: 1200px;
    height: 120px;
    vertical-align: top;
    position: relative;
    display: block;
    margin: 0px auto;
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
    position: relative;
    margin-left: 10px;
    display: inline;
  }

  select::-ms-expand {
    display: none;
  }

  .select-div {
    display: inline-block;
    width: 100px;
    height: 42px;
    font-size: 13px;
    color: #454545;
    padding-left: 15px;
    text-align: center;
    appearance: none;
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari 和 Chrome */
    border: 1px #1C8CE9 solid;
    border-right: none;
    left: 0;
    float: left;
    outline: none;
    /*将默认的select选择框样式清除*/
    -ms-appearance: none;
    /*在选择框的最右侧中间显示小箭头图片*/
  }

  .select-div:hover {
    cursor: pointer;
  }

  .select-div > option {
    font-size: 13px;
    color: #454545;
    border: 0;
    border: none;
    border: 0;
    background: transparent;
    padding-left: 15px;
    /*background: url("http://ourjs.github.io/static/2015/arrow.png") no-repeat scroll right center transparent;*/
  }

  option::-ms-expand {
    display: none;
  }

  option {
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari 和 Chrome */
    appearance: none;
    outline: none;
    border: 0;
  }


  .seach-input-div {
    height: auto;
    /*border: red 1px solid;*/
    width: auto;
    bottom: 0px;
    position: relative;
    top: 40px;
    /*border: #0a6beb solid 1px;*/
    min-width: 538px;
    display: inline-block;
    margin: 0 auto;
    margin-left: -110px;
  }

  .seach-input-div-center {
    margin: 0 auto;
    vertical-align: middle;
    position: relative;
    height: 44px;
    width: auto;
  }

  .el-select .el-input {
    width: 130px;
    z-index: 11;
  }

  .input-with-select .el-input-group__prepend {
    background-color: #fff;
  }

  .seach-text-div {
    float: left;
    width: 240px;
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
    /*border-bottom: 2px #0a6beb solid;*/
    border-top: 1px #1C8CE9 solid;
    border-bottom: 1px #1C8CE9 solid;
    position: static;
  }

  .seach-btn-div {
    position: absolute;
    top: -1px;
    right: -1px;
    display: inline-block;
    overflow: hidden;
    width: 66px;
    height: 43px;
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
    left: auto;
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

  .seach-edit-div {
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
    position: absolute;
    right: 10px;
  }

  .seach-edit-div:hover {
    color: #f4f4f4;
  }

  a {
    list-style-type: none;
    text-decoration: none;
  }

  .dial-header, el-dialog {
  }

  .input, select, option {
    width: 90%;
    height: 35px;
    text-align: left;
    font-size: 16px;
    border: #dfdfdf 0.3px solid;
    padding-left: 3px;
  }

  el-dialog {
  }

  table {
    width: 100%;
    height: 100%;
    position: relative;
  }

  .td-name {
    text-align: right;
    color: black;
  }

  tr {
    margin-top: 20px;
    padding-top: 10px;
  }

  .td-input {
    text-align: left;
    color: black;
  }

  .hide-div-nav {
    text-align: center;
    width: 100%;
    height: auto;
    min-width: 581px;
  }

  .hide-p {
    white-space: nowrap;
    overflow: hidden;
    width: 100%;
    padding: 7px 0;
    text-align: left;
    padding-left: 30px;

  }

  .hide-p-span {
    color: #444;
    font: 12px/1.5 Tahoma, 'Microsoft Yahei', 'Simsun';

  }

  .hide-p-btn {
    border: none;
    background: #f2f2f2;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    font: 12px/1.5 Tahoma, 'Microsoft Yahei', 'Simsun';
    color: #959595;
    float: right;
  }

  .hide-ul-div {
    display: inline-block;
    margin: 0 auto;
    overflow-x: hidden;
    overflow-y: auto;
    padding: 5px;
    width: 196px;
    height: 300px;
    border: 1px solid #CCC;
    position: relative;
    margin-left: -5px;
  }

  .hide-ul-div-li {
    width: 180px;
    display: block;
    margin-top: 3px;
  }

  .hide-ul-div-li:hover {
    background: #c12446;
    cursor: pointer;
  }

  .hide-ul-div-li-span {
    color: #9c9c9c;
    float: left;
    font-size: 11px;
  }

  .icon-select-left {
    position: absolute;
    float: left;
    top: 7px;
    z-index: 10;
    display: inline-block;
    left: 0;
    margin-left: 80px;
  }

</style>
