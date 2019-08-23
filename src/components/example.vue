<template lang="html">
  <div class="seach">
    <div class="seach-center">
      <div class="img_log"></div>
      <div class="seach-input">
        <input type="text" name="srchtxt" class="seach-text" value="" placeholder="请输入关键字" autocomplete="off"
               x-webkit-speech="" speech="">
        <input type="submit" name="searchsubmit" value="搜索" class="seach-btn">
      </div>

      <a href="#" @click="showFlag = true"
         class="seach-edit">免费发布信息</a>
    </div>

    <el-dialog title="请填写以下信息" :visible.sync="showFlag"
               style="width:100%; min-width: 1200px;">
               
      <div style="text-align: center; width: 100%; height: auto;">

        <table>
          <tr>
            <td class="td-name">姓名：</td>
            <td class="td-input"><input type="text" class="input" v-model="info.name"></td>
          </tr>
          <tr>
            <td class="td-name">职业：</td>
            <td class="td-input"><input type="text" class="input" v-model="info.job"></td>
          </tr>
          <tr>
            <td class="td-name">住址：</td>
            <td class="td-input"><input type="text" class="input" v-model="info.address"></td>
          </tr>
          <tr>
            <td class="td-name">性别：</td>
            <td class="td-input">
              <select type="text" class="input" v-model="info.sex">
                <option selected>男</option>
                <option>女</option>
              </select>
            </td>
          </tr>
        </table>
                   
        <div style="padding-top:20px;text-align: right;">
                       
          <el-button type="text" size="small" @click="showFlag = false">取消</el-button>
                       
          <el-button type="primary" size="small" @click="radioEvent()">确定</el-button>
                     
        </div>
               
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
                }
            }
        },
        methods: {
            show() {

            },
            radioEvent() {
                alert(this.info.name);
                this.showFlag = false;
                this.adapterSelected = this.radio;
            }
        }
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
    width: 80%;
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

  .seach-edit:hover {
    color: #f4f4f4;
  }

  a {
    list-style-type: none;
    text-decoration: none;
  }

  .dial-header, el-dialog {
  }

  .input,select, option {
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
</style>
