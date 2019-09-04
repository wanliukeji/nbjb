<template>
  <div class="model">
    <Layout>
      <Header class="model-head-span">
        个人中心
      </Header>
      <div class="model-div-row">
        <div class="model-div-row-center">
          <div class="model-div-row-left">
            <img src="/static/image/timg.jpg" class="model-div-row-img" alt="">
          </div>
          <div class="model-div-row-right">
            <svg t="1567476046283" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
                 p-id="1728" width="17" height="10">
              <path
                d="M719.969 493.984L298.307 72.323c-9.417-9.418-23.192-10.912-30.767-3.337-7.575 7.574-6.08 21.349 3.337 30.767l411.91 411.908-412.412 412.408c-9.418 9.418-10.912 23.194-3.337 30.769 7.574 7.575 21.35 6.08 30.767-3.337l421.663-421.663a29.523 29.523 0 0 0 4.589-5.937c6.68-7.718 4.994-20.835-4.088-29.917z"
                fill="#8a8a8a" p-id="1729"></path>
            </svg>
          </div>

        </div>
      </div>
      <div class="model-div-row" style="margin-top: 20px;">
        <div class="model-div-row-center" style="margin-bottom: 20px;">
          <p><span class="model-div-row-center-left-span">昵称</span>
            <span class="model-div-row-center-right-span">
          <svg t="1567476046283" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="1728" width="17" height="10">
            <path
              d="M719.969 493.984L298.307 72.323c-9.417-9.418-23.192-10.912-30.767-3.337-7.575 7.574-6.08 21.349 3.337 30.767l411.91 411.908-412.412 412.408c-9.418 9.418-10.912 23.194-3.337 30.769 7.574 7.575 21.35 6.08 30.767-3.337l421.663-421.663a29.523 29.523 0 0 0 4.589-5.937c6.68-7.718 4.994-20.835-4.088-29.917z"
              fill="#8a8a8a" p-id="1729"></path>
          </svg>
        </span></p>
        </div>
      </div>
      <br>
      <div class="model-div-row" style="margin-top: -40px;">
        <div class="model-div-row-center">
          <p><span class="model-div-row-center-left-span">修改手机号码</span>
            <span class="model-div-row-center-right-span">
          <svg t="1567476046283" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="1728" width="17" height="10">
            <path
              d="M719.969 493.984L298.307 72.323c-9.417-9.418-23.192-10.912-30.767-3.337-7.575 7.574-6.08 21.349 3.337 30.767l411.91 411.908-412.412 412.408c-9.418 9.418-10.912 23.194-3.337 30.769 7.574 7.575 21.35 6.08 30.767-3.337l421.663-421.663a29.523 29.523 0 0 0 4.589-5.937c6.68-7.718 4.994-20.835-4.088-29.917z"
              fill="#8a8a8a" p-id="1729"></path>
          </svg>
        </span></p>
        </div>
      </div>
      <br>
      <div class="model-div-row" style="margin-top: -40px;">
        <div class="model-div-row-center">
          <p><span class="model-div-row-center-left-span">绑定微信号</span>
            <span class="model-div-row-center-right-span">
          <svg t="1567476046283" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="1728" width="17" height="10">
            <path
              d="M719.969 493.984L298.307 72.323c-9.417-9.418-23.192-10.912-30.767-3.337-7.575 7.574-6.08 21.349 3.337 30.767l411.91 411.908-412.412 412.408c-9.418 9.418-10.912 23.194-3.337 30.769 7.574 7.575 21.35 6.08 30.767-3.337l421.663-421.663a29.523 29.523 0 0 0 4.589-5.937c6.68-7.718 4.994-20.835-4.088-29.917z"
              fill="#8a8a8a" p-id="1729"></path>
          </svg>
        </span></p>
        </div>
      </div>
      <div class="model-div-row" style="margin-top: -20px;">
        <div class="model-div-row-center">
          <p><span class="model-div-row-center-left-span">上传收款码</span>
            <span class="model-div-row-center-right-span">
          <svg t="1567476046283" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="1728" width="17" height="10">
            <path
              d="M719.969 493.984L298.307 72.323c-9.417-9.418-23.192-10.912-30.767-3.337-7.575 7.574-6.08 21.349 3.337 30.767l411.91 411.908-412.412 412.408c-9.418 9.418-10.912 23.194-3.337 30.769 7.574 7.575 21.35 6.08 30.767-3.337l421.663-421.663a29.523 29.523 0 0 0 4.589-5.937c6.68-7.718 4.994-20.835-4.088-29.917z"
              fill="#8a8a8a" p-id="1729"></path>
          </svg>
        </span></p>
        </div>
      </div>
      <div class="model-div-row" style="margin-top: -20px;" @click="route">
        <div class="model-div-row-center">
          <p><span class="model-div-row-center-left-span" >注销</span>
            <span class="model-div-row-center-right-span">
          <svg t="1567476046283" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="1728" width="17" height="10">
            <path
              d="M719.969 493.984L298.307 72.323c-9.417-9.418-23.192-10.912-30.767-3.337-7.575 7.574-6.08 21.349 3.337 30.767l411.91 411.908-412.412 412.408c-9.418 9.418-10.912 23.194-3.337 30.769 7.574 7.575 21.35 6.08 30.767-3.337l421.663-421.663a29.523 29.523 0 0 0 4.589-5.937c6.68-7.718 4.994-20.835-4.088-29.917z"
              fill="#8a8a8a" p-id="1729"></path>
          </svg>
        </span></p>
        </div>
      </div>
    </Layout>
    <nav class="model-nav">
      <router-link v-for="item in nav" :to=item.router active-class="active" class="tab">
        <div class="nav_item">{{item.desc}}</div>
      </router-link>
    </nav>
  </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                nav: [
                    {
                        router: "/home",
                        class: "icon-home",
                        desc: "首页"
                    },
                    {
                        router: "/class",
                        class: "icon-service",
                        desc: "分类"
                    },
                    {
                        router: "/personal",
                        class: "icon-personal",
                        desc: "个人中心"
                    },
                ]
            }
        },
        methods: {
            route: function () {
                this.component_name = 'home';
                this.$router.push({name: 'login', query: {component_name: 'login'}});
            }
        }
    }
</script>

<style scoped>
  .model {
    height: 100%;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    position: relative;
    top: 0;
    padding-top: 20px;
    /*background: #151515;*/
  }

  h1 {
    font-size: 1em;
    font-family: 楷体;
    position: relative;
    margin-bottom: 50px;
  }

  p {
    margin-top: 30px;
  }

  input:hover {
    cursor: auto;
  }

  .model-div-row {
    position: relative;
    min-height: 60px;
    width: 100%;
    margin: 0 auto;
    height: auto;
    padding: 10px;
    background-color: #FFFFFF;
    margin-bottom: 10px;

  }

  .model-div-row-center {
    width: 80%;
    position: relative;
    height: auto;
    margin: 0 auto;
  }

  .model-div-row-left {
    position: relative;
    height: 100%;
    display: inline-block;
    float: left;
    margin-top: 15px;
    left: 0px;
  }

  .model-div-row-img {
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
  }

  .model-div-row-left {

  }

  .model-div-row-right {
    margin: 0 auto;
    display: inline-block;
    float: right;
    position: absolute;
    margin-top: 33px;
    right: 0px;
    vertical-align: middle;
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
  * {
    background-color: #FFFFFF;
  }

  .model-div-row-center-left-span {
    display: inline-block;
    float: left;
    left: 0px;
  }

  .model-div-row-center-right-span {
    display: inline-block;
    float: right;
    margin-top: 5px;
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

  .model-foot-span {
    background-color: #FFFFFF;
    height: auto;
    vertical-align: middle;
    text-align: center;
    max-width: 100%;
    margin: 0 auto;
    min-width: 100%;
    font-size: 20px;
    font-family: 楷体;
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
    border-top:1px #f4f4f4 solid ;
  }

  .nav_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    /*color: #999999;*/
  }

</style>
