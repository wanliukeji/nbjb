<template lang="html">
  <div class="table-div-father-div">
    <div class="table-center-div">
      <table class="table-model-div">
        <tr>
          <td rowspan="2" class="td-font-1">民生</td>
          <td><a href="">我爱北仑</a></td>
          <td><a href="">阿拉城事</a></td>
          <td><a href="">阿拉播报</a></td>
        </tr>
        <tr>
          <td><a href="">阿拉知道</a></td>
          <td><a href="">民生关注</a></td>
          <td><a href="">曝光台</a></td>
        </tr>
      </table>
      <table class="table-model-div">
        <tr>
          <td rowspan="2" class="td-font-2">生活</td>
          <td><a href="">情感生活</a></td>
          <td><a href="">阿拉亲子</a></td>
          <td><a href="">家具装饰</a></td>
        </tr>
        <tr>
          <td><a href="">喜庆婚嫁</a></td>
          <td><a href="">阿拉美食</a></td>
          <td><a href="">阿拉汽车</a></td>
        </tr>
      </table>
      <table class="table-model-div">
        <tr>
          <td rowspan="2" class="td-font-3">房产</td>
          <td><a href="">个人出售</a></td>
          <td><a href="">中介出售</a></td>
          <td><a href="">找出租房</a></td>
        </tr>
        <tr>
          <td><a href="">中介出租</a></td>
          <td><a href="">楼市热论</a></td>
          <td><a href="">发布房源</a></td>
        </tr>
      </table>
      <table class="table-model-div">
        <tr>
          <td rowspan="2" class="td-font-4">招聘</td>
          <td><a href="">最新招聘</a></td>
          <td><a href="">企业直招</a></td>
          <td><a href="">个人求职</a></td>
        </tr>
        <tr>
          <td><a href="">普工学徒</a></td>
          <td><a href="">发布招聘</a></td>
          <td><a href="">发布求职</a></td>
        </tr>
      </table>
      <table class="table-model-div">
        <tr>
          <td rowspan="2" class="td-font-5">分类</td>
          <td><a href="">家政信息</a></td>
          <td><a href="">二手交易</a></td>
          <td><a href="">阿拉商城</a></td>
        </tr>
        <tr>
          <td><a href="">阿拉票务</a></td>
          <td><a href="">二手汽车</a></td>
          <td><a href="">分类广告</a></td>
        </tr>
      </table>
    </div>
<!--        <img src="/static/image/timg.jpg" alt="" width="1200" height="70">-->
<!--        <img src="/static/image/bujubeilun.png" alt="" width="1200" height="70">-->
  </div>

</template>

<script>
    export default {
        name: "tableNav"
    }
</script>

<style scoped>
  .table-div-father-div {
    min-width: 1200px;
    min-height: 91px;
    background: #FFFFFF;
    /*position: relative;*/
    height: auto;
    top: 0px;
    /*padding-left: 10%;*/
    margin: 0 auto;
    vertical-align: middle;
    text-align: center;
    padding-bottom: 10px;
    padding-left: 10px;
  }

  .table-center-div {
    /*border: #0a0a0a 1px solid;*/
    width: 80%;
    min-width: 1200px;
    height: auto;
    position: inherit;
    padding-top: 13px;
    margin-bottom: 10px;
    margin: 0 auto;
  }

  * {
    line-height: 18px;
  }

  .table-model-div {
    display: inline-block;
    float: left;
    /*border: 1px saddlebrown solid;*/
    margin-left: 0px;
    /*margin: 18px;*/
    width: 19.8%;
    /*position: relative;*/
    /*min-width: 230px;*/
  }

  .td-font-1, .td-font-2, .td-font-3, .td-font-4, .td-font-5 {
    color: #FFFFFF;
    word-break: break-word;
    width: 12px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 8%;
    -webkit-border-radius: 8%;
    -moz-border-radius: 8%;
    line-height: 25px;
    margin-right: 8px;
  }

  .td-font-1 {
    background: #7e5ff2;
  }

  .td-font-2 {
    background: #f36825;
  }

  .td-font-3 {
    background: #18d487;
  }

  .td-font-4 {
    background: #f4c520;
  }

  .td-font-5 {
    background: #399bf3;
  }

  td {
    width: 54px;
    height: 29.6px;
  }

  a {
    font: 11px/1.5 Tahoma, 'Microsoft Yahei', 'Simsun';
    text-decoration: none;
  }

  img {
    margin-top: 10px;
  }

  td:hover {
    color: #18b7eb;
    cursor: pointer;
  }
  .td-font-1:hover, .td-font-2:hover, .td-font-3:hover, .td-font-4:hover, .td-font-5:hover {
    color: #efefef;
  }

</style>
