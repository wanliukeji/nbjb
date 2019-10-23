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
        <p style="border-bottom: 1px #F2F2F2 solid;">
          <span class="p-title">热门企业</span>
          <span class="p-right">查看更多</span>
        </p>
        <ul>
          <li style="border-bottom: 1px #F2F2F2 solid; padding: 15px 0px 10px; white-space: nowrap;">
            <div class="li-left" style="width: 70%; display: inline-block; height: 94px;position:relative;">
              <h3 class="p-title">阿里巴巴</h3>
              <p style="color: #8D8E91;font-size: 12px; line-height: 35px;">该企业有10个在招职位</p>
              <p style="bottom: 0; margin-bottom: 0; float: bottom; position: absolute;">
                <span class="li-span">宁波</span>
                <span class="li-span">1-49人</span>
                <span class="li-span">外商合资</span>
                <span class="li-span">中国合资企业</span>
              </p>
            </div>
            <div style="display:inline-block;width: 28%; vertical-align: top; padding: 2px;">
              <img src="/static/image/aali.jpg" width="100%" height="90">
            </div>
          </li>
        </ul>
      </van-col>
    </van-row>
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
    height: 1200px;
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
</style>
