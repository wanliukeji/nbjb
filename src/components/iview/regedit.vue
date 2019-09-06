<template>
  <div class="model" v-show="component_name == 'regedit'">
    <h1>注册账户</h1>
    <div class="modal-body">
      <input v-model="info.phone" placeholder="输入手机号" class="input-text"/>
      <button class="send-btn" :disabled="disabled" @click="sendcode">{{btntxt}}</button>
      <input v-model="info.check_code" placeholder="输入验证码" class="input-text"/>
      <input v-model="info.invit_code" placeholder="输入邀请码" class="input-text"/>
      <input v-model="info.st_pwd" placeholder="创建密码" class="input-text"/>
      <input v-model="info.sec_pwd" placeholder="确认密码" class="input-text"/>
      <p>
        <span class="password-input-p-left">已有账号? 去登录</span>
        <span class="password-input-p-right">忘记密码</span>
      </p>
      <button class="login-btn" @click="route()">注册</button>
    </div>
    <div class="model-foot">
      <p class="model-foot-p">注册即代表你已经统一云上商城用户协议
        <input type="checkbox" v-model="info.is_agree" class="input-checkbox">
      </p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "regedit",
        data() {
            return {
                component_name: 'regedit',
                info: {
                    phone: '15957408879',
                    check_code: '',
                    invit_code: '',
                    st_pwd: '',
                    sec_pwd: '',
                    is_agree: false
                },
                disabled: false,
                time: 0,
                btntxt: "获取验证码",
                formMess: {
                    phone: this.phone
                }
            }
        },
        created() {
            this.component_name = 'regedit';
        },
        methods: {
            route: function () {
                var param = {
                    phone: this.info.phone,
                    check_code: this.info.check_code,
                    invit_code: this.info.invit_code,
                    st_pwd: this.info.st_pwd,
                    sec_pwd: this.info.sec_pwd,
                    is_agree: this.info.is_agree
                }
                if (this.exec()) {
                    console.log(param);
                    this.$http.post('http://www.gzysxc.cn:8888/api/user/register', param, {emulateJSON: true}).then(function (res) {
                        console.log(res);
                        if (res.status == 200) {

                        } else {

                        }
                        console.log(res);
                    }).catch(function (error) {
                        console.log(error);
                    });
                }
            },
            //统一验证
            exec: function () {
                var phone_flag = false;
                var check_code_flag = false;
                var invit_code_flag = false;
                var pwd_flag = false;
                var is_agree_flag = false;

                console.log(!this.info.phone);

                if (this.info.phone != '' || this.info.phone != null) {
                    if ((/^1[34578]\d{9}$/.test(this.info.phone))) {
                        phone_flag = true;
                    } else {
                        this.$notify.error({
                            title: '操作失败',
                            message: '手机格式输入有误，请重新输入',
                            type: 'ERROR'
                        })
                        return;
                    }
                } else {
                    this.$notify.error({
                        title: '操纵失败',
                        message: '请输入手机号码',
                        type: 'ERROR'
                    })
                    return;
                }

                var new_check_code = 0;
                if (this.info.check_code != '' || this.info.check_code != null) {
                    if (new_check_code == this.info.check_code) {
                        check_code_flag = true;
                    } else {
                        this.$notify.error({
                            title: '验证失败',
                            message: '验证码输入有误',
                            type: 'ERROR'
                        })
                        return;
                    }
                } else {
                    this.$notify.error({
                        title: '验证码输入有误，请重新输入',
                        message: '',
                        type: 'ERROR'
                    })
                    return;
                }

                if (this.info.invit_code != '' || this.info.invit_code != null) {
                    if ('2K1Zheap' == this.info.check_code) {
                        invit_code_flag = true;
                    } else {
                        this.$notify.error({
                            title: '操作失败',
                            message: '邀请码输入有误，请重新输入',
                            type: 'ERROR'
                        })
                        return;
                    }
                } else {
                    this.$notify.error({
                        title: '操作失败',
                        message: '请输入邀请码',
                        type: 'ERROR'
                    })
                    return;
                }

                if (this.info.st_pwd == '' || this.info.st_pwd == null) {
                    this.$notify.error({
                        title: '操作失败',
                        message: '请输入登录密码',
                        type: 'ERROR'
                    })
                    return;
                }

                if (this.info.sec_pwd == '' || this.info.sec_pwd == null) {
                    this.$notify.error({
                        title: '操作失败',
                        message: '请输入确认密码',
                        type: 'ERROR'
                    })
                }

                if (this.info.st_pwd == this.info.sec_pwd) {
                    pwd_flag = true;
                } else {
                    this.$notify.error({
                        title: '操作失败',
                        message: '两次密码不匹配',
                        type: 'ERROR'
                    })

                    if (is_agree == true) {
                        is_agree_flag = true;
                    }
                }

                if (phone_flag && check_code_flag && invit_code_flag && pwd_flag && is_agree_flag) {
                    return true;
                }
            }
            ,
            //验证手机号码部分
            sendcode() {
                var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
                var url = "http://www.gzysxc.cn:8888/api/user/send_check_code";
                if (this.info.phone == '') {
                    alert("请输入手机号码");
                } else if (reg.test(this.phone)) {
                    alert("手机格式不正确");
                } else {
                    this.time = 60;
                    this.disabled = true;
                    this.timer();
                    console.log(url);
                    // this.$http.post(url, {
                    //     phone: this.info.phone
                    // }, {
                    //     headers: {"Content-Type": "application/x-www-form-urlencoded;charset=utf-8"}
                    // }).then(res => {
                    //     console.log(JSON.stringify(res));
                    // })

                    // 并且响应成功以后会执行then方法中的回调函数

                    this.$http.post(url).then(function (result) {
                        // result是所有的返回回来的数据
                        // 包括了响应报文行
                        // 响应报文头
                        // 响应报文体
                        console.log(result.data.message[0]);
                        // _this.name = result.data.message[0].name;
                    });
                }

            },
            timer() {
                if (this.time > 0) {
                    this.time--;
                    this.btntxt = this.time + "s后重新获取";
                    setTimeout(this.timer, 1000);
                } else {
                    this.time = 0;
                    this.btntxt = "获取验证码";
                    this.disabled = false;
                }
            },
            goTo: function () {
                this.$router.push({name: 'login'})
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
    padding-top: 7px;
    padding-bottom: 7px;
    -webkit-border-radius: 38px;
    -moz-border-radius: 38px;
    border-radius: 38px;
    position: absolute;
    right: 15px;
    background-color: #4246ff;
    color: #FFFFFF;
    border: none;
  }


</style>
