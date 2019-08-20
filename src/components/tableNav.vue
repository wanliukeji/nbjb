<template lang="html">
  <div class="table-div">
    <div class="table-center">
      <table class="table">
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
      <table class="table">
        <tr>
          <td rowspan="2" class="td-font-2">生活</td>
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
      <table class="table">
        <tr>
          <td rowspan="2" class="td-font-3">房产</td>
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
      <table class="table">
        <tr>
          <td rowspan="2" class="td-font-4">招聘</td>
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
      <table class="table">
        <tr>
          <td rowspan="2" class="td-font-5">分类</td>
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
    </div>
  </div>

</template>

<script>
    export default {
        name: "tableNav"
    }
</script>

<style scoped>
  .table-div {
    min-width: 100%;
    min-height: 91px;
    background: #FFFFFF;
    position: absolute;
    height: 91px;
    top: 206px;
    /*padding-left: 10%;*/
    margin: 0 auto;
    vertical-align: middle;
    text-align: center;
  }

  .table-center {
    /*border: #0a0a0a 1px solid;*/
    width: 87%;
    min-width: 1200px;
    height: auto;
    position: relative;
    padding-top: 13px;
  }

  * {
    line-height: 18px;
  }

  .table {
    display: inline-block;
    float: left;
    /*border: 1px saddlebrown solid;*/
    margin-left: 25px;
    /*margin: 18px;*/
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
   font:  10px/1.5 Tahoma,'Microsoft Yahei','Simsun';
  }

</style>
