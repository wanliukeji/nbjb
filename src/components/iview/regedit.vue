<template>
  <div class="model" v-show="component_name == 'regedit'">
    <h1>注册账户</h1>
    <div class="modal-body">
      <input placeholder="输入手机号" class="input-text"/>
      <button class="send-btn">发送验证码</button>
      <input placeholder="输入验证码" class="input-text"/>
      <input placeholder="输入邀请码" class="input-text"/>
      <input placeholder="创建密码" class="input-text"/>
      <input placeholder="确认密码" class="input-text"/>
      <p>
        <span class="password-input-p-left">已有账号? 去登录</span>
        <span class="password-input-p-right">忘记密码</span>
      </p>
      <button class="login-btn" @click="route()">注册</button>
    </div>
    <div class="model-foot">
      <p class="model-foot-p">注册即代表你已经统一云上商城用户协议
        <input type="checkbox" class="input-checkbox">
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "regedit",
        data() {
            return {
                component_name : 'regedit'
            }
        },
        created() {
            this.component_name = 'regedit';
        },
        methods: {
            route: function () {
                this.$router.push({name: 'home'});
            }
        }
    }
</script>

<style scoped>
  .model {
    height: auto;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    position: relative;
    padding-top: 10px;
  }

  .close-left {

    position: absolute;
    left: 10%;
  }

  h1 {
    font-size: 2em;
    font-family: 楷体;
    position: relative;
  }

  .modal-body {
    width: 100%;
    margin-top: -8%;
  }

  .input-text {
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
    width: 100%;
    margin-top: 20%;
    font-size: 1em;
    background: #FFFFFF;
    border: 1px black solid;
    padding-top: 7px;
    padding-bottom: 7px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
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

  .model-foot {
    margin: 0 auto;
    position: relative;
    bottom: 0;
    border: 1px silver 1px;
    width: 100%;
  }

  .model-foot-p {
    font-size: 1em;
    margin-bottom: 20px;
  }

  .input-checkbox {
    width: 1em;
    height: 1em;
    top: 4.5px;
    position: absolute;
    margin-left: 20px;
  }

  .send-btn {
    height: auto;
    width: 30%;
    margin-top: -50px;
    font-size: 1em;
    background: #FFFFFF;
    border: 1px black solid;
    padding-top: 5px;
    padding-bottom: 5px;
    -webkit-border-radius: 38px;
    -moz-border-radius: 38px;
    border-radius: 38px;
    position: absolute;
    right: 15px;
  }


</style>
