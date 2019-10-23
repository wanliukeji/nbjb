<template>
  <div class="model">
    <van-nav-bar title="阿拉招聘" left-text="返回" right-text="设置" left-arrow @click-left="onClickLeft"
                 @click-right="onClickRight"/>
    <van-swipe :autoplay="3000" indicator-color="white">
      <van-swipe-item>
        <img src="/static/image/aali.jpg" class="img-item">
      </van-swipe-item>
      <van-swipe-item>
        <img src="/static/image/google.jpg" class="img-item">
      </van-swipe-item>
      <van-swipe-item>
        <img src="/static/image/baidu.jpg" class="img-item">
      </van-swipe-item>
      <van-swipe-item>
        <img src="/static/image/microsoft.jpg" class="img-item">
      </van-swipe-item>
    </van-swipe>
    <van-search placeholder="请输入搜索关键词" v-model="value" shape="round"/>
    <van-grid>
      <van-grid-item>
        <img src="https://ihuoniao.cn/templates/job/touch/skin3/images/icon01.png" class="item-img" alt="">
        <span class="grid-span">找工作</span>
      </van-grid-item>

      <van-grid-item>
        <img src="https://ihuoniao.cn/templates/job/touch/skin3/images/icon02.png" class="item-img" alt="">
        <span class="grid-span">找人才</span>
      </van-grid-item>

      <van-grid-item>
        <img src="https://ihuoniao.cn/templates/job/touch/skin3/images/icon03.png" class="item-img" alt="">
        <span class="grid-span">招聘企业</span>
      </van-grid-item>

      <van-grid-item>
        <img src="https://ihuoniao.cn/templates/job/touch/skin3/images/icon04.png" class="item-img" alt="">
        <span class="grid-span">招聘会</span>
      </van-grid-item>
    </van-grid>
    <van-row type="flex" justify="center">
      <van-col span="0">
        <div style="padding: 10px;">
          <img src="https://ihuoniao.cn/templates/job/touch/skin3/images/fczx.png" width="20%" height="40"
               class="row-left-img">
          <div class="row-right-div">
            <marquee direction="up" height="35" scrollamount="3">
              <ul>
                <li class="li-p">大碶模具企业招聘注塑机师傅</li>
                <li class="li-p">春晓纸箱厂包吃住不体检,夫妻房</li>
                <li class="li-p">诚招计算机网络专业技术元(8000-12000)</li>
              </ul>
            </marquee>
          </div>
        </div>
      </van-col>
    </van-row>
    <van-row type="flex" justify="center">
      <van-col span="0">
        <ul>
          <li><a href="https://ihuoniao.cn/b/post.html?do=add"><img
            src="https://ihuoniao.cn/templates/job/touch/skin3/images/fabu1.png" class="li-img"></a></li>
          <li><a href="https://ihuoniao.cn/b"><img src="https://ihuoniao.cn/templates/job/touch/skin3/images/fabu2.png"
                                                   class="li-img"></a></li>
        </ul>
      </van-col>
    </van-row>
    <van-row type="flex" class="row-div">
      <van-col span="24">
        <p>
          <span class="p-title">招聘会</span>
          <span class="p-right">查看更多</span>
        </p>
        <div class="row-col-div">
          <img src="/static/image/aali.jpg" class="row-col-div-img">
          <p style="margin-top: 5px; white-space: nowrap; color: #333333;padding-right: 10px; max-width: 100%;">
            9月14日宁波北仑秋季招人,春晓梅山现场招聘</p>
        </div>
      </van-col>
    </van-row>
    <van-row type="flex" class="row-div">
      <van-col span="24">
        <p class="row-p">
          <span class="p-title">热门企业</span>
          <span class="p-right">查看更多</span>
        </p>
        <ul>
          <li class="row-lis" v-for="i in [1,2,3,4,5]">
            <div class="li-left">
              <h3 class="p-title">阿里巴巴</h3>
              <p class="li-left-p">该企业有10个在招职位</p>
              <p class="li-bottom">
                <span class="li-span">宁波</span>
                <span class="li-span">1-49人</span>
                <span class="li-span">外商合资</span>
                <span class="li-span">中国合资企业</span>
              </p>
            </div>
            <div class="li-rigth">
              <img src="/static/image/aali.jpg" width="100%" height="90">
            </div>
          </li>
          <li class="li-bottom-p">
            查看更多
          </li>
        </ul>
      </van-col>
    </van-row>
    <van-row type="flex" class="row-div" style="padding: 0; height: 100px; margin-bottom: 20px;">
      <van-col span="24">
        <img src="https://uploads.ihuoniao.cn/job/advthumb/large/2019/07/15/1563190378565.png" height="150"
             width="100%">
      </van-col>
    </van-row>
    <van-tabs v-model="active" class="tab-div">
      <van-tab title="推荐职位">
        <ul class="tab-ul">
          <li class="tab-ul-li" v-for="i in [1,2,3,4,5,6]">
            <div class="li-top">
              <p>
                <span class="p-title">PHP</span>
                <span class="p-right-a">8000~12000</span>
              </p>
              <p>
                <span class="tab-ul-li-p-span">苏州</span>
                <i class="tab-ul-li-p-i"></i>
                <span class="tab-ul-li-p-span">3-5年</span>
                <i class="tab-ul-li-p-i"></i>
                <span class="tab-ul-li-p-span">本科</span>
                <i class="tab-ul-li-p-i"></i>
                <span class="tab-ul-li-p-span">临时</span>
                <span class="tab-ul-li-p-time">2019-10-29</span>
              </p>
              <p>
                <span class="tab-ul-li-div">绩效奖金</span>
                <span class="tab-ul-li-div">周末双休</span>
              </p>
            </div>
            <div class="li-bottom-div">
              <div class="li-bottom-div-img">
                <img src="/static/image/baidu.jpg" width="50" height="43">
              </div>
              <div class="li-bottom-div-title">
                <p class="li-bottom-div-name">北京百度网络科技</p>
                <p class="li-bottom-div-p">
                  <span class="li-bottom-div-span">100-499人</span>
                  <span class="li-bottom-div-span">国有企业</span>
                  <span class="li-bottom-div-span">互联网/IT/通信</span>
                </p>
              </div>
              <div class="li-bottom-right">
                <button class="li-bottom-div-btn">
                  立即投递
                </button>
              </div>
            </div>
          </li>
        </ul>
      </van-tab>
      <van-tab title="最新职位">

      </van-tab>
    </van-tabs>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o">首页</van-tabbar-item>
      <van-tabbar-item icon="search">搜索</van-tabbar-item>
      <van-tabbar-item icon="chat-o">信息</van-tabbar-item>
      <van-tabbar-item icon="manager-o">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
    export default {
        name: "appIndex",
        data() {
            return {
                active: 0,
                images: [
                    'https://img.yzcdn.cn/vant/apple-1.jpg',
                    'https://img.yzcdn.cn/vant/apple-2.jpg'
                ],
                value: ''
            }
        },
        methods: {
            onClickLeft() {
                Toast('返回');
            },
            onClickRight() {
                Toast('按钮');
            }
        }
    }
</script>

<style scoped>
  .model {
    position: relative;
    width: 100%;
    padding: 0 auto;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 0;
  }

  .van-nav-bar {
    background-color: #1382de;
    /*position: fixed;*/
  }

  .van-nav-bar__title, .van-nav-bar__text, .van-nav-bar .van-icon {
    color: #ffffff;
  }

  .grid-span {
    font-size: 12px;
    margin-top: 3px;
    color: #404040;
  }

  .img-item {
    width: 100%;
    height: 220px;
  }

  .item-img {
    height: 60%;
    width: 60%;
  }

  .van-grid-item {
    border: none;
    margin-top: 10px;
  }

  .van-row {
    background-color: #ffffff;
    margin-top: 10px;
  }

  .li-p {
    white-space: nowrap;
    color: black;
    font-size: 14px;
  }

  .row-left-img {
    display: inline-block;
    margin-left: 5px;
    vertical-align: top;
  }

  .row-right-div {
    display: inline-block;
    left: 0;
    width: 70%;
    vertical-align: top;
  }

  .li-img {
    margin: 0 auto;
    width: 50%;
    display: inline-block;
    float: left;
    padding: 8px;
  }

  .row-div {
    padding: 10px;
    width: 100%;
  }

  p {
    width: 100%;
  }

  .p-title {
    font-size: 16px;
    font-weight: bold;
    color: #000;
    display: inline-block;
    left: 0;
  }

  .p-right-a {
    color: #FF0B00;
    font-size: 14px;
    font-weight: bolder;
    right: 0;
    float: right;
  }

  .tab-ul-li-p-span {
    color: #8D8E91;
    font-size: 14px;
    line-height: 35px;
    margin-right: 10px;
  }

  .tab-ul-li-p-time {
    float: right;
    color: #C4C4C4;
    font-size: 8px;
    bottom: 0;
    margin-bottom: 0px;
    margin-top: 8px;
  }

  .tab-ul-li-div {
    padding: 5px;
    background-color: #f4f4f6;
    color: #636363;
  }

  .tab-ul-li-p-i {
    border: #F2F2F2 1px solid;
    margin-right: 12px;
    height: 5px;
  }

  .p-right {
    font-size: 12px;
    color: #BEC0C4;
    display: inline-block;
    float: right;
    right: 0;
    margin-top: 5px;
    text-align: right;
  }

  .row-col-div {
    height: auto;
    margin-top: 5px;
    padding: 5px;
  }

  .row-col-div-img {
    width: 100%;
    height: 150px;
    border-radius: 5px;
    -moz-border-radius: 5px;
    -webkit-border-radius: 5px;
  }

  .li-span {
    color: #404040;
    font-size: 14px;
    white-space: nowrap;
    margin-right: 5px;
  }

  .row-p {
    border-bottom: 1px #F2F2F2 solid
  }

  .row-lis {
    border-bottom: 1px #F2F2F2 solid;
    padding: 15px 0px 10px;
    white-space: nowrap;
  }

  .li-left {
    width: 70%;
    display: inline-block;
    height: 94px;
    position: relative;
  }

  .li-left-p {
    color: #8D8E91;
    font-size: 12px;
    line-height: 35px;
  }

  .li-bottom {
    bottom: 0;
    margin-bottom: 0;
    float: bottom;
    position: absolute;
  }

  .li-rigth {
    display: inline-block;
    width: 28%;
    vertical-align: top;
    padding: 2px;
  }

  .li-bottom-p {
    border-bottom: 1px #F2F2F2 solid;
    padding: 10px 0px 10px;
    white-space: nowrap;
    text-align: center;
  }

  .tab-div {
    position: relative;
    margin-top: 50px;
    height: auto;
    position: relative;
    padding-bottom: 50px;
  }

  .tab-ul {
    width: 100%;
    padding-bottom: 10px;
  }

  .tab-ul-li {
    padding: 10px;
    background-color: #FFFFFF;
    white-space: nowrap;
    margin-bottom: 10px;
  }

  .li-top {
    border-bottom: #F2F2F2 1px solid;
    padding: 0px 0px 10px 0px;
  }

  .li-bottom-div {
    width: 100%;
    position: relative;
    padding: 10px 0px 0px 0px;
  }

  .li-bottom-div-img {
    display: inline-block;
    width: 15%;
    vertical-align: top;
  }

  .li-bottom-div-title {
    display: inline-block;
    width: 60%;
    vertical-align: top;
  }

  .li-bottom-div-name {
    color: #212121;
    font-size: 15px;
  }

  .li-bottom-div-p {
    padding: 0;
    white-space: nowrap;
    margin-top: 0px;
  }

  .li-bottom-div-span {
    color: #8D8E91;
    font-size: 12px;
    vertical-align: bottom;
    margin-bottom: 0;
  }

  .li-bottom-right {
    display: inline-block;
    width: auto;
    vertical-align: bottom;
  }

  .li-bottom-div-btn {
    padding: 2px;
    background-color: #0a6beb;
    border: none;
    color: #FFFFEE;
    width: 85px;
  }

</style>
