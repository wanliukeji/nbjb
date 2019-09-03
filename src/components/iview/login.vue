<template>
  <div class="model">
    <i class="close-left">
      <svg t="1567426263402" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
           p-id="1729" width="20" height="20">
        <path
          d="M583.168 523.776L958.464 148.48c18.944-18.944 18.944-50.176 0-69.12l-2.048-2.048c-18.944-18.944-50.176-18.944-69.12 0L512 453.12 136.704 77.312c-18.944-18.944-50.176-18.944-69.12 0l-2.048 2.048c-19.456 18.944-19.456 50.176 0 69.12l375.296 375.296L65.536 899.072c-18.944 18.944-18.944 50.176 0 69.12l2.048 2.048c18.944 18.944 50.176 18.944 69.12 0L512 594.944 887.296 970.24c18.944 18.944 50.176 18.944 69.12 0l2.048-2.048c18.944-18.944 18.944-50.176 0-69.12L583.168 523.776z"
          p-id="1730" fill="#8a8a8a"></path>
      </svg>
    </i>
    <h1>登录</h1>
    <div class="modal-body">
      <input placeholder="输入手机号" class="username-input"/>
      <input placeholder="输入密码" class="password-input"/>
      <p>
        <span class="password-input-p-left">没有账号? 去注册</span>
        <span class="password-input-p-right">忘记密码</span>
      </p>
      <button class="login-btn">登录</button>
    </div>
  </div>
</template>

<script>
    export default {
        name: "login"
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
    margin-top: 20%;
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
    border-bottom: 4px #a8a8a8 solid;
    padding: 20px;
    color: black;
    font-weight: lighter;
  }

  .login-btn {
    height: auto;
    width: 100%;
    margin-top: 30%;
    font-size: 1.3em;
    background: #FFFFFF;
    border: 1px black solid;
    padding-top: 10px;
    padding-bottom: 10px;
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


</style>
