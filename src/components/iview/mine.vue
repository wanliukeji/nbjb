<template>
  <div class="model">
    <Layout>
      <Header class="model-head-span">
        个人中心
        <i class="close-right" @click="goTo">
          <svg t="1567588073681" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="2615" width="25" height="25">
            <path
              d="M825.6 647.2l-6.4 12.8 8 12 78.4 116 3.2-31.2-139.2 135.2 29.6-3.2-127.2-76-10.4-6.4-11.2 4.8c-8 3.2-16 6.4-24.8 9.6l-13.6 4.8-3.2 13.6-28 131.2 24-19.2H408l24 18.4-34.4-137.6-3.2-12-12-4.8c-7.2-3.2-14.4-5.6-21.6-9.6l-12-5.6-11.2 7.2-120 76.8 30.4 3.2-139.2-136 4 30.4 77.6-124 7.2-11.2-5.6-12c-4-8-7.2-16.8-9.6-24.8l-4.8-12.8-13.6-2.4-134.4-28 19.2 24v-192l-18.4 24 141.6-33.6 12-3.2 4.8-12c3.2-8 7.2-16.8 11.2-24.8l6.4-12.8-8-12-73.6-110.4-3.2 31.2 138.4-136.8-30.4 4L352 186.4l10.4 6.4 11.2-4.8c6.4-2.4 13.6-5.6 20-8l12.8-4 3.2-12.8 32.8-132.8-24 18.4H616l-24-19.2 28.8 136 2.4 12.8 12.8 4.8c10.4 4 20 8 29.6 12.8l12 5.6 11.2-7.2 113.6-71.2-28.8-3.2 140 134.4-4-30.4-76 120-7.2 11.2 5.6 12c3.2 8 7.2 16.8 9.6 24.8l4 12.8 12.8 3.2 134.4 32-18.4-24v192l19.2-24-141.6 28.8-12.8 2.4-4.8 12c-2.4 6.4-5.6 13.6-8.8 20z m32-11.2l4.8 24 141.6-28.8 19.2-4V396l-18.4-4.8-134.4-32-5.6 24 23.2-8c-3.2-9.6-7.2-19.2-11.2-28.8l-22.4 9.6 20.8 12.8 76-120 10.4-16.8-14.4-13.6-140-134.4L793.6 72l-16 10.4L664 153.6l12.8 20.8L688 152c-11.2-5.6-22.4-10.4-34.4-14.4L644.8 160l24-4.8-28.8-136-4-19.2H400.8l-4.8 18.4-32.8 132.8 24 5.6-8-23.2c-8 2.4-15.2 5.6-23.2 8.8l9.6 22.4 12.8-20.8-123.2-73.6-16-9.6-13.6 13.6-138.4 136.8-14.4 14.4 11.2 16.8L157.6 352l20-13.6-21.6-10.4c-4.8 9.6-8.8 18.4-12.8 28l22.4 9.6-5.6-24-141.6 33.6-18.4 4v231.2l19.2 4 135.2 27.2 4.8-24-23.2 8c3.2 9.6 7.2 19.2 11.2 28.8l22.4-9.6-20.8-12.8-77.6 124-10.4 16.8 14.4 13.6 139.2 135.2 13.6 13.6 16-10.4 120-76.8-12.8-20.8-10.4 22.4c8 4 16.8 7.2 24.8 10.4l8.8-22.4-24 5.6 34.4 137.6 4.8 18.4H624.8l4-19.2 28-131.2-24-4.8 8 23.2c9.6-3.2 18.4-6.4 28-10.4l-9.6-22.4-12.8 20.8 127.2 76 16 9.6 13.6-12.8 139.2-136 14.4-14.4-11.2-16.8-78.4-116-20 13.6 21.6 11.2c4-8 8-16 11.2-24l-22.4-9.6z"
              fill="" p-id="2616"></path>
            <path
              d="M512 681.6c-100 0-181.6-81.6-181.6-181.6S412 318.4 512 318.4 693.6 400 693.6 500 612 681.6 512 681.6z m0-315.2c-73.6 0-133.6 60-133.6 133.6S438.4 633.6 512 633.6s133.6-60 133.6-133.6S585.6 366.4 512 366.4z"
              fill="" p-id="2617"></path>
          </svg>
        </i>
      </Header>
      <div class="model-div-row">
        <div class="model-div-row-center" style="margin-bottom: 20px;">
          <div class="model-div-row-left">
            <img src="/static/image/timg.jpg" class="model-div-row-img" alt="">
            <div class="model-div-row-left-right">
              <span style="display: block;">用户名</span>
              <span style="display: block; margin-top: 10px;">VIP</span>
            </div>
          </div>
          <div class="model-div-row-right">
            <p><span class="model-div-row-right-span">邀请码:</span> <a> 5438900</a></p>
          </div>
        </div>
      </div>
      <div class="model-div-row">
          <span class="model-div-row-span">
                成为VIP,赚取收益
          </span>
      </div>

      <div class="model-div-row">
        <div class="model-div-row-center">
          <div class="model-div-row-center-div">待付款</div>
          <div class="model-div-row-center-div">待发货</div>
          <div class="model-div-row-center-div">待收货</div>
          <div class="model-div-row-center-div">全部订单</div>
        </div>
      </div>

      <div class="model-div-row">
          <span class="model-div-row-span">
                免费领取面膜
          </span>
      </div>

      <div class="model-div-row">
        <div class="model-div-row-center">
          <div class="model-div-row-center-div">我的团队</div>
          <div class="model-div-row-center-div">我的钱包</div>
          <div class="model-div-row-center-div">已领取面膜</div>
          <div class="model-div-row-center-div">地址管理</div>
        </div>
      </div>

      <div class="model-div-row">
         <span class="model-div-row-span">
                邀请好友赚佣金
          </span>
      </div>

    </Layout>
    <nav class="model-nav">
      <router-link v-for="item in nav" :to=item.router active-class="active" class="tab">
        <div class="nav_item">{{item.desc}}</div>
      </router-link>
    </nav>
  </div>

</template>

<script type="text/javascript">
    export default {
        name: 'mine',
        props: ['idx'],
        data() {
            return {
                nav: [
                    {
                        router: "/home",
                        desc: "首页"
                    },
                    {
                        router: "/class",
                        desc: "分类"
                    },
                    {
                        router: "/mine",
                        desc: "个人中心"
                    },
                ]
            }
        },
        methods: {
            goTo: function (){

                this.$router.push({name: 'personal'});
            }
        }
    }

</script>

<style scoped>
  .model {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  .model-head-span {
    background-color: #FFFFFF;
    height: auto;
    vertical-align: middle;
    text-align: center;
    max-width: 100%;
    margin: 0 auto;
    min-width: 100%;
    font-size: 24px;
    font-family: 楷体;
  }

  span {
    font-size: 12px;
    margin-top: 2px;
    margin-bottom: 2px;
  }

  .iconfont {
    font-size: 22px;
  }

  .model-div-row {
    position: relative;
    /*margin-top: 50px;*/
    min-height: 80px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 30px;
    border-bottom: 1px silver solid;
    height: auto;
    padding: 10px;
  }

  .model-div-row-div {
    width: 33.3%;
    height: 100px;
    display: inline-block;
    float: left;
    padding: 10px;
  }

  .model-div-row-center {
    width: 80%;
    position: relative;
    height: auto;
    margin: 0 auto;
  }

  .model-div-row-left {
    position: relative;
    width: 50%;
    height: 100%;
    display: inline-block;
    float: left;
    margin-top: 15px;
  }

  .model-div-row-img {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .model-div-row-left-right {
    display: inline-block;
    float: right;
    height: 100%;
  }

  .model-div-row-left {

  }

  .model-div-row-right {
    margin: 0 auto;
    vertical-align: center;
  }

  p {
    font-size: 2.3em;
  }

  p > span {
    font-size: 12px;
  }

  p > a {
    font-size: 12px;
  }

  .model-div-row-span {
    font-size: 14px;
    vertical-align: middle;
  }

  .model-div-row-center-div {
    font-size: 10px;
    width: 25%;
    display: inline-block;
    float: left;
    height: 100%;
  }

  .model-div-row-center-span {
    display: block;
    font-family: 楷体;
    margin-top: 10px;
  }


  .model-nav {
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 1px;
    background-color: #fff;
    width: 100%;
    height: 50px;
    display: flex;
    z-index: 10;
    padding-top: 8px;
    border-top: 1px #f4f4f4 solid;
  }

  .nav_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999999;
  }

  .close-right {
    width: 10px;
    height: 10px;
    position: absolute;
    margin-top: 20px;
    right: 10%;
  }

</style>
