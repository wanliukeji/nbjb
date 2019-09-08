<template lang="html">
  <div class="model">
    <div class="modal-body">
      <img class="modal-body-logo" src="http://pxasartjo.bkt.clouddn.com/Snipaste_2019-09-04_16-25-19.png" alt=""
           width="100" height="100">
      <input placeholder="输入手机号" v-model="info.phone" type="text" class="username-input" autocomplete="off"/>
      <input placeholder="输入密码" v-model="info.cus_pwd" type="password" class="password-input"/>
      <p>
        <span class="password-input-p-left" @click="goTo">没有账号? 去注册</span>
        <span class="password-input-p-right">忘记密码</span>
      </p>
    </div>
    <button class="login-btn" @click="login();">登录</button>
  </div>
</template>

<script>
    import storage from 'good-storage'

    export default {
        name: "login",
        data() {
            return {
                component_name: 'login',
                info: {
                    cus_pwd: 'bbc123good',
                    cus_id: '',
                    phone: '15957408879'
                }
            }
        },
        created() {
        },
        methods: {
            login: function () {
                var user_info = localStorage.getItem('cus_info');
                var url = 'http://www.gzysxc.cn:8888/api/user/login';
                if (user_info == '' || user_info == null) {
                    if (this.is_flag(this.info.phone) && this.is_flag(this.info.cus_pwd)) {
                        this.$http.post(url, {
                                cus_pwd: this.info.cus_pwd,
                                phone: this.info.phone
                            },
                            {sync: true},
                            {emulateJSON: true}
                        ).then(res => {
                            var data = res.body;
                            var cus_info = data.cus_info;
                            if (res.status == 200) {
                                localStorage.setItem('cus_info', JSON.stringify(cus_info));
                                var info = localStorage.getItem('cus_info');
                                this.$router.push({name: 'home'})
                            } else {
                                console.log(JSON.stringify(res));
                                this.$notify.error({
                                    title: '登录失败',
                                    message: '请输入正确的账号密码',
                                    type: 'error'
                                })
                                return;
                            }
                        }).catch(err => {
                            console.log(err);
                        });
                    }
                } else {
                    var json = JSON.parse(user_info);
                    this.$http.post(url, {
                            cus_id: json.id
                        },
                        {sync: true},
                        {emulateJSON: true}
                    ).then(res => {
                        var data = res.body;
                        var cus_info = data.cus_info;
                        if (res.status == 200) {
                            localStorage.setItem('cus_info', JSON.stringify(cus_info));
                            var info = localStorage.getItem('cus_info');
                            this.$router.push({name: 'home'})
                        } else {
                            console.log(JSON.stringify(res));
                            this.$notify.error({
                                title: '登录失败',
                                message: '请输入正确的账号密码',
                                type: 'error'
                            })
                            return;
                        }
                    }).catch(err => {
                        console.log(err);
                    });

                }
            },
            goTo: function () {
                this.$router.push({name: 'regedit'});
            },
            is_flag(val) {
                if (val != '' || val != null) {
                    return true;
                }
                return false;
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
    position: page;
    top: 0;
    padding-top: 30px;
    bottom: 0;
    left: 0;
    right: 0;
    color: #080808;
    min-height: 668px;
  }

  .model {
    background: url("https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1567751267688&di=de16fa21bf5a3a8f8b61b097d49c131f&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fblog%2F201411%2F01%2F20141101045119_wa8CW.jpeg") top center no-repeat;
    background-size: 100% 100%;
    color: #FFFFFF;
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
    margin-top: 35%;
    border-bottom: 1px #a8a8a8 solid;
    padding: 20px;
    color: black;
    font-weight: lighter;
  }

  .login-btn {
    height: auto;
    width: 85%;
    font-size: 1.2em;
    background: #1f1fe9;
    padding-top: 5px;
    padding-bottom: 5px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    border: none;
    color: #FFFFFF;
    position: fixed;
    bottom: 30px;
    left: 10%;
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
    border-radius: 30px;
    height: 35px;
  }

  .modal-body-logo {
    margin-bottom: -30px;
  }
</style>
