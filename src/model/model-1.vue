<template>
  <div class="foot-father">
    <div class="footer">
      <div class="footer-center">
        <div class="footer-left">
          <p style="font-size: 18px; line-height: 40px;">客服电话</p>
          <p style="font-size: 23px; line-height: 27px; color: #389efb;">86800055</p>
          <p style="font-size: 11px; line-height: 40px; font-family: 'Microsoft YaHei'; color: #999">工作时间 周一至周六
            8:00-17:30</p>
          <p style="font-size: 12px; vertical-align: middle; color: #717171;">
            客服QQ &nbsp;
            <img src="/static/image/site_qq.jpg" height="21" alt="点击咨询"/>
          </p>
        </div>

        <div class="footer-herf">
          <dt class="footer-dt">购物</dt>
          <dd class="footer-dd">阿拉商城</dd>
          <dd class="footer-dd">同城快店</dd>
          <dd class="footer-dd">商家入驻</dd>
          <dd class="footer-dd">商家管理</dd>
        </div>

        <div class="footer-herf">
          <dt class="footer-dt">供应</dt>
          <dd class="footer-dd">二手市场</dd>
          <dd class="footer-dd">本地服务</dd>
          <dd class="footer-dd">车辆租售</dd>
          <dd class="footer-dd">商业服务</dd>
        </div>

        <div class="footer-herf">
          <dt class="footer-dt">房产</dt>
          <dd class="footer-dd">新楼盘</dd>
          <dd class="footer-dd">二手房</dd>
          <dd class="footer-dd">出租房</dd>
          <dd class="footer-dd">找中介</dd>
        </div>

        <div class="footer-herf">
          <dt class="footer-dt">招聘</dt>
          <dd class="footer-dd">找工作</dd>
          <dd class="footer-dd">找人才</dd>
          <dd class="footer-dd">发招聘</dd>
          <dd class="footer-dd">填简历</dd>
        </div>

        <div class="footer-right">
          <table>
            <tr>
              <td>微信公众号</td>
              <td>APP客户端</td>
            </tr>
            <tr>
              <td><img src="/static/image/weixin.png" class="footer-img"/></td>
              <td><img src="/static/image/app.png" class="footer-img"/></td>
            </tr>
          </table>
        </div>
      </div>
      <div class="footer-bottom">
        <div class="footer-bottom-text">
          <span class="footer-bottom-span">宁波阿拉网</span>
          <span class="footer-bottom-span">广告服务</span>
          <span class="footer-bottom-span">排行榜</span>
          <span class="footer-bottom-span">Archiver</span>
          <span class="footer-bottom-span">手机版</span>
          <span class="footer-bottom-span">浙ICP备12020218号</span>
        </div>
      </div>

      <div class="footer-bottom-index">
        Powered by Discuz! X3.4 © 2001-2017 Comsenz Inc. GMT+8, 2019-8-17 17:02 , Processed in 0.067049 second(s), 1
        queries , MemCache On.
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
  .footer {
    margin: 0 auto;
    /*position: relative;*/
    /*height: 280px;*/
    height: auto;
    min-height: 230px;
    background: #ffffff;
    width: 100%;
    /*left: 0;*/
    /*top: 1200px;*/
    /*min-height: 100%;*/
    min-width: 1200px;
    max-width: 100%;
    bottom: 0;
    padding-top: 10px;
    padding-left: 0px;
    padding-bottom: 0px;
    margin-top: 10px;
  }

  .foot-father {
    bottom: 0;
    position: relative;
    height: auto;
    width: 100%;
    background: #FFFFFF;
    padding-top: 5px;
    padding-left: 0px;
    padding-bottom: 0px;
    /*border: black 1px solid;*/
  }

  .footer-center {
    margin: 0 auto;
    width: 87%;
    /*padding-top: 40px;*/
    /*position: relative;*/
    /*padding-bottom: 100px;*/
    /*margin-bottom: 40px;*/
    /*border: black 1px solid;*/
    padding-left: 0px;
    height: auto;
    min-height: 130px;
    min-width: 1200px;
  }

  .footer-left {
    width: 250px;
    height: 150px;
    display: inline-block;
    float: left;
    position: relative;
    padding: 0px;
    /*border: #88ff19 1px solid;*/
    /*margin-left: 40px;*/
  }

  .footer-herf {
    display: inline-block;
    float: left;
    width: 130px;
    height: 150px;
    border-right: #ececec 1px solid;
    /*padding-left: 40px;*/
  }

  .footer-dt {
    text-align: center;
    line-height: 35px;
    font-size: 17px;
  }

  .footer-dd {
    text-align: center;
    line-height: 25px;
    font-size: 11px;
    color: #7a7a7a;
  }

  .footer-dd:hover, .footer-dt:hover {
    cursor: pointer;
    color: #0a0a0a;
  }

  .footer-right {
    display: inline-block;
    float: right;
    width: 250px;
    height: auto;
    position: relative;
    /*border: #88ff19 1px solid;*/
  }

  .footer-right > table {
    text-align: center;
  }

  .footer-img {
    height: 96px;
    width: 96px;
  }

  .footer-bottom {
    display: block;
    width: 100%;
    background-color: #1382de;
    /*position: absolute;*/
    /*top: 180px;*/
    min-width: 1200px;
    margin: 0 auto;
    padding-top: 5px;
    padding-bottom: 5px;
    text-align: center;
    height: 38px;
    margin-top: 30px;
  }

  .footer-bottom-text {
    margin-left: 33%;
  }

  .footer-bottom-span {
    display: inline-block;
    float: left;
    width: auto;
    border-right: #bcbcbc solid 1px;
    font-size: 12px;
    padding: 5px;
    color: #d0e0f1;
    vertical-align: center;
  }

  .footer-bottom-index {
    display: block;
    width: 100%;
    background-color: #ffffff;
    position: relative;
    /*top: 250px;*/
    min-width: 1024px;
    margin: 0 auto;
    padding-bottom: 5px;
    vertical-align: center;
    height: 20px;
    text-align: center;
    padding-top: 5px;
    padding-bottom: 5px;
    font-size: 10px;
  }

</style>
