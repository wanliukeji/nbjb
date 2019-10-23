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
        <span style="font-size: .24rem; margin-top: 3px; color: #404040;">找工作</span>
      </van-grid-item>

      <van-grid-item>
        <img src="https://ihuoniao.cn/templates/job/touch/skin3/images/icon02.png" class="item-img" alt="">
        <span style="font-size: .24rem; margin-top: 3px; color: #404040;">找人才</span>
      </van-grid-item>

      <van-grid-item>
        <img src="https://ihuoniao.cn/templates/job/touch/skin3/images/icon03.png" class="item-img" alt="">
        <span style="font-size: .24rem; margin-top: 3px; color: #404040;">招聘企业</span>
      </van-grid-item>

      <van-grid-item>
        <img src="https://ihuoniao.cn/templates/job/touch/skin3/images/icon04.png" class="item-img" alt="">
        <span style="font-size: .24rem; margin-top: 3px; color: #404040;">招聘会</span>
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
          <li><a href="https://ihuoniao.cn/b/post.html?do=add"><img src="https://ihuoniao.cn/templates/job/touch/skin3/images/fabu1.png" class="li-img"></a></li>
          <li><a href="https://ihuoniao.cn/b"><img src="https://ihuoniao.cn/templates/job/touch/skin3/images/fabu2.png" class="li-img"></a></li>
        </ul>
      </van-col>
    </van-row>

    <van-row type="flex" justify="center">
      <van-col span="0">
        <ul>
          <li><a href="https://ihuoniao.cn/b/post.html?do=add"><img src="https://ihuoniao.cn/templates/job/touch/skin3/images/fabu1.png" class="li-img"></a></li>
          <li><a href="https://ihuoniao.cn/b"><img src="https://ihuoniao.cn/templates/job/touch/skin3/images/fabu2.png" class="li-img"></a></li>
        </ul>
      </van-col>
    </van-row>

    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o">标签</van-tabbar-item>
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


</style>
