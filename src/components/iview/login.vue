<template lang="html">
  <div class="model" v-show="component_name == 'login'">
    <div class="modal-body">
      <img class="modal-body-logo" src="http://pxasartjo.bkt.clouddn.com/Snipaste_2019-09-04_16-25-19.png" alt="" width="180" height="150">
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
    margin-top: 20%;
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
