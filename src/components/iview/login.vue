<template lang="html">
  <div class="model">
    <h1>登录</h1>
    <div class="modal-body">
      <input placeholder="输入手机号" type="text" class="username-input"/>
      <input placeholder="输入密码" type="password" class="password-input"/>
      <p>
        <span class="password-input-p-left" @click="goTo">没有账号? 去注册</span>
        <span class="password-input-p-right">忘记密码</span>
      </p>
    </div>
    <button class="login-btn" @click="route();">登录</button>
  </div>
</template>

<script>
    export default {
        name: "login",
        data() {
            return {
                component_name: 'login'
            }
        },
        created() {
            this.component_name = 'login';
        },
        methods: {
            route: function () {
                this.component_name = 'home';
                this.$router.push({name: 'home'});
            },
            goTo: function () {
                this.$router.push({name: 'regedit'});
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
  }

  .model {
    background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567751267688&di=de16fa21bf5a3a8f8b61b097d49c131f&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201411%2F01%2F20141101045119_wa8CW.jpeg") top center no-repeat;
    background-size: 100% 100%;
    color: #FFFFFF;
    background-size: cover;
    height: 100%;
    width: 100%;
    /*position: absolute;*/
    /*top:0px;*/
    /*left:0px;*/
    /*right:0px;*/
    /*bottom:0px;*/
  }

  .close-left {
    width: 10px;
    height: 10px;
    position: absolute;
    left: 10%;
  }

  h1 {
    font-size: 2em;
    font-family: 楷体;
    position: relative;
    margin-top: 10px;
    margin-top: 20px;
    color: #FFFFFF;
  }

  .modal-body {
    width: 100%;
    margin-top: 0%;
  }

  .username-input, .password-input {
    border: none;
    display: block;
    white-space: nowrap;
    width: 100%;
    background: none;
    font-size: 1em;
    margin-top: 20%;
    border-bottom: 1px #a8a8a8 solid;
    padding: 20px;
    color: black;
    font-weight: lighter;
  }

  .login-btn {
    height: auto;
    width: 85%;
    /*margin-top: 20%;*/
    font-size: 1.2em;
    background: #FFFFFF;
    /*border: 1px black solid;*/
    padding-top: 5px;
    padding-bottom: 5px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    border: none;
    border: black 1px solid;
    background: rgba(0,0,0,0);
    margin-bottom: 10px;
    bottom: 0;
  }

  p {
    margin-top: 30px;
  }

  .password-input-p-left, .password-input-p-right {
    font-size: 0.8em;
  }

  .password-input-p-left {
    display: inline-block;
    float: left;
  }

  .password-input-p-right {
    display: inline-block;
    float: right;
  }

  input:hover {
    cursor: auto;
  }

  input {
    background-color: #FFFFFF;
  }

  .modal-body-logo {
    margin-bottom: -30px;
  }
</style>
