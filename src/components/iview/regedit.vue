<template>
  <div class="model" >
    <h1>注册账户</h1>
    <div class="modal-body">
      <input v-model="info.phone" placeholder="输入手机号" class="input-text"/>
      <button class="send-btn" :disabled="disabled" @click="sendcode">{{btntxt}}</button>
      <input v-model="info.check_code" placeholder="输入验证码" class="input-text"/>
      <input v-model="info.invit_code" placeholder="输入邀请码" class="input-text"/>
      <input v-model="info.st_pwd" type="password" placeholder="创建密码" class="input-text"/>
      <input v-model="info.sec_pwd" type="password" placeholder="确认密码" class="input-text"/>
      <p>
        <span class="password-input-p-left">已有账号? 去登录</span>
        <span class="password-input-p-right">忘记密码</span>
      </p>
      <button class="login-btn" @click="route()">注册</button>
    </div>
    <div class="model-foot">
      <p class="model-foot-p">注册即代表你已经统一云上商城用户协议
        <input type="checkbox" id="input-checkbox" v-model="info.is_agree" class="input-checkbox">
      </p>
    </div>
  </div>
</template>

<script>
    import axios from "axios";

    export default {
        name: "regedit",
        data() {
            return {
                component_name: 'regedit',
                info: {
                    phone: '15957408879',
                    check_code: '22654',
                    invit_code: '2K1Zheap',
                    st_pwd: 'bbc123good',
                    sec_pwd: 'bbc123good',
                    is_agree: true
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
                var url = 'http://www.gzysxc.cn:8888/api/user/register';
                if (this.exec()) {
                    console.log(param);
                    this.$http.post(url, param, {emulateJSON: true}).then(function (res) {
                        console.log(res);
                        if (res.status == 200) {
                            this.$notify.success({
                                title: '操作成功',
                                message: '恭喜您注册成功',
                                type: 'success'
                            })
                            this.$router.push({name: 'home'})
                        } else {
                            this.$notify.error({
                                title: '注册',
                                message: '抱歉,注册失败',
                                type: 'error'
                            })
                        }
                    }).catch(function (error) {
                        console.log(error);
                    });
                } else {
                    // alert(2);
                }
            },
            //统一验证
            exec: function () {
                var phone_flag = false;
                var check_code_flag = false;
                var invit_code_flag = false;
                var pwd_flag = false;
                var is_agree_flag = false;

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

                if (this.info.check_code != '' || this.info.check_code != null) {
                    check_code_flag = true;
                } else {
                    this.$notify.error({
                        title: '请输入验证码',
                        message: '',
                        type: 'ERROR'
                    })
                    return;
                }

                if (this.info.invit_code != '' || this.info.invit_code != null) {
                    if ('2K1Zheap' == this.info.invit_code) {
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
                }

                is_agree_flag = $("input[type='checkbox']").is(':checked');

                if (!is_agree_flag) {
                    this.$notify.error({
                        title: '操作失败',
                        message: '您尚未同意本公司的用户协议,请先同意本公司用户协议',
                        type: 'ERROR'
                    })
                }

                if (phone_flag && check_code_flag && invit_code_flag && pwd_flag && is_agree_flag) {
                    return true;
                }
            }
            ,
            //验证手机号码部分
            sendcode() {
                var reg = 11 && /^((13|14|15|17|18)[0-9]{1}\d{8})$/;
                var url = 'http://www.gzysxc.cn:8888/api/user/send_check_code';
                if (this.exec()) {
                    this.time = 60;
                    this.disabled = true;
                    this.timer();
                    console.log(url);
                    this.$http.post(url, {
                            phone: this.info.phone
                        },
                        {emulateJSON: true}).then(res => {
                        console.log(JSON.stringify(res));
                    })
                } else {

                }

                // 并且响应成功以后会执行then方法中的回调函数
                // axios({
                //     method: 'POST',
                //     url: url,
                //     header:'Access-Control-Allow-Origin'
                // }).then(function (res) {
                //     console.log(JSON.stringify(res));
                // }).catch(err => {
                //     console.log(JSON.stringify(err));
                // });

                // $.ajax({
                //     url: url,
                //     type: 'get',
                //     dataType: 'jsonp',  // 处理Ajax跨域问题
                //     async: true,
                //     jsonp:"callback",//请求类型是回调
                //     jsonpCallback:"callbackFunction",//数据请求成功时回调的方法
                //     headers: {
                //         "content-type": "application/x-www-form-urlencoded",
                //         "cache-control": "no-cache",
                //         "postman-token": "790bc9ac-1215-ff3e-2293-ecc3d6eb0c0a"
                //     },
                //     timeout: 1000,
                //     crossDomain: true,
                //     success: function (data) {
                //         console.log(JSON.stringify(data))
                //     },
                //     complete: function (XMLHttpRequest, status) { //请求完成后最终执行参数
                //         if (status == 'timeout') {//超时,status还有success,error等值的情况
                //             ajaxTimeOut.abort(); //取消请求
                //         }
                //     }
                // });

            }
            ,
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
            }
            ,
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

  .model {
    background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567751267688&di=de16fa21bf5a3a8f8b61b097d49c131f&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201411%2F01%2F20141101045119_wa8CW.jpeg") top center no-repeat;
    background-size: 100% 100%;
    color: #FFFFFF;
  }

  .close-left {

    position: absolute;
    left: 10%;
  }

  h1 {
    font-size: 1.6em;
    font-family: 楷体;
    position: relative;
    top: 10px;
    padding-top: 15px;
    padding-bottom: 15px;
  }

  .modal-body {
    width: 100%;
    margin-top: -8%;
    bottom: 0;
    margin-bottom: 0px;
    padding-left: 10%;
    padding-right: 10%;
  }

  .input-text {
    border: none;
    display: block;
    white-space: nowrap;
    width: 100%;
    background: none;
    font-size: 1em;
    margin-top: 20px;
    border-bottom: 1px #FFFFFF solid;
    padding: 20px;
    color: black;
    font-weight: lighter;
  }

  .login-btn {
    height: auto;
    width: 100%;
    margin-top: 15%;
    font-size: 1em;
    border: 1px #d3d3d3 solid;
    padding-top: 7px;
    padding-bottom: 7px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    background-color: rgba(0, 0, 0, 0);
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
    padding-bottom: 10px;
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
    width: 130px;
    margin-top: -40px;
    font-size: 0.8em;
    padding-top: 4px;
    padding-bottom: 4px;
    -webkit-border-radius: 38px;
    -moz-border-radius: 38px;
    border-radius: 38px;
    position: absolute;
    right: 10%;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    font-weight: 500;
    border: #FFFFFF 1px solid;
    margin-bottom: 20px;
  }

  input {
    color: #FFFFFF;
  }

  .modal-body-logo {
    background-color: rgba(0, 0, 0, 0);
  }

</style>
