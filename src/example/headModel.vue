<template lang="html">
  <div class="seach-div">
    <div class="seach-center-div">
      <div class="img_log"></div>
      <div class="seach-input-div" style=" display: inline-block;">
        <select class="select-div">
          <!--          <icon type="el-icon-arrow-down" style="position: absolute; z-index: 100;"></icon>-->
          <option>全部板块</option>
          <option>阿拉新闻</option>
          <option>阿拉娱乐</option>
        </select>
        <input type="text" name="srchtxt" class="seach-text-div" value="" placeholder="请输入关键字" autocomplete="off"
               x-webkit-speech="" speech="">
        <input type="submit" name="searchsubmit" value="搜索" class="seach-btn-div">
      </div>

      <a href="#" @click="showFlag = true"
         class="seach-edit-div">免费发布信息</a>
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
          <tr>
            <td class="td-name">户籍：</td>
            <td class="td-input"><input type="text" class="input" v-model="info.address"></td>
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
        name: "head",
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
  }

  .select-div {
    display: inline-block;
    float: left;
    width: 120px;
    height: 42px;
    margin-left: -320px;
    position: absolute;
    font-size: 13px;
    color: #454545;
    padding-left: 15px;
    text-align: center;
    appearance: none;
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari 和 Chrome */
    border: 1px #1C8CE9 solid;
    border-right: none;
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
    display: block;
    height: auto;
    /*border: red 1px solid;*/
    width: auto;
    bottom: 0px;
    position: relative;
    top: 40px;
    /*border: #0a6beb solid 1px;*/
    width: 400px;
    margin: 0 auto;
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
    top: -0.5px;
    right: -1px;
    display: block;
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
</style>
