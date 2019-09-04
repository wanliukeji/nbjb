<template>
  <div class="model">

    <div class="model-div-row" >
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


    <nav class="model-nav">
      <router-link v-for="item in nav" :to=item.router active-class="active" class="tab">
        <div  class="guide_item">{{item.desc}}</div>
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
                lists: [{
                    cls: "home",
                    name: "首页",
                    push: "/home",
                    icon: "../static/home.png",
                    iconSelect: "../static/home_select.png"
                },
                    {
                        cls: "shares",
                        name: "股票",
                        push: "/shares",
                        icon: "../static/home.png",
                        iconSelect: "../static/home_select.png"
                    },
                    {
                        cla: "community",
                        name: "社区",
                        push: "/community",
                        icon: "/static/home.png",
                        iconSelect: "../static/home_select.png"
                    },
                    {
                        cla: "mine",
                        name: "我的",
                        push: "/mine",
                        icon: "../static/home.png",
                        iconSelect: "../static/home_select.png"
                    }]
            }
        },
        methods: {
            goTo(path) {
                this.$router.replace(path)
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

  .footer_guide {
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
  }

  .guide_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999999;
  }

  .on {
    color: #02a774
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


</style>
