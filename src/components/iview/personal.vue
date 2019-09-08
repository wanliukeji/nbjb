<template>
  <div class="model">
    <Layout>
      <Header class="model-head-span">
        <i class="close-left" @click="goTo">
          <svg t="1567775293857" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="1726" width="23" height="23">
            <path
              d="M683.2 958.4c-6.4 0-12.8-1.6-17.6-6.4l-414.4-416c-6.4-6.4-9.6-16-9.6-24s3.2-17.6 9.6-24l414.4-416c9.6-9.6 24-9.6 33.6 0 9.6 9.6 9.6 24 0 33.6L294.4 512l406.4 406.4c9.6 9.6 9.6 24 0 33.6-6.4 3.2-12.8 6.4-17.6 6.4z"
              fill="#ffffff" p-id="1727">
            </path>
          </svg>
        </i>
        设置
      </Header>
      <div class="model-div-row" @click="route('upload_head')">
        <div class="model-div-row-center">
          <div class="model-div-row-left">
            <img :src="cus_info.avatar_url" class="model-div-row-img" alt="">
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
      <div class="model-div-row" @click="value3 = true">
        <div class="model-div-row-center">
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
      <div class="model-div-row" style="margin-top: -40px;" @click="value4 = true">
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
      <div class="model-div-row" style="margin-top: -40px;" @click="value6 = true">
        <div class="model-div-row-center">
          <p><span class="model-div-row-center-left-span">修改密码</span>
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
      <div class="model-div-row" style="margin-top: -40px;" @click="value5 = true">
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
      <div class="model-div-row" style="margin-top: -20px;" @click="route('upload_qr')">
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
      <div class="model-div-row" style="margin-top: -20px;" @click="route('login')">
        <div class="model-div-row-center">
          <p><span class="model-div-row-center-left-span">注销</span>
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


    <Drawer
      title="修改昵称"
      v-model="value3"
      width="80%"
      :mask-closable="false"
      :styles="styles">
      <Form :model="cus_info">
        <Row :gutter="32">
          <Col span="32">
            <FormItem label="用户名" label-position="top">
              <Input v-model="cus_info.new_name" placeholder="请输入新的用户名....."/>
            </FormItem>
          </Col>
        </Row>
      </Form>
      <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="value3 = false">取消</Button>
        <Button type="primary" @click="updata_name">确定</Button>
      </div>
    </Drawer>
    <Drawer
      title="修改手机号码"
      v-model="value4"
      width="80%"
      :mask-closable="false"
      :styles="styles"
    >
      <Form :model="cus_info">
        <Row :gutter="32">
          <Col span="32">
            <FormItem label="手机号码" label-position="top">
              <Input v-model="cus_info.phone" placeholder="请输入新的手机号码....."/>
              <button class="send-btn" :disabled="disabled" @click="sendcode">{{btntxt}}</button>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="32">
          <Col span="32">
            <FormItem label="验证码" label-position="top">
              <Input v-model="cus_info.check_code" placeholder="请输入验证码....."/>
            </FormItem>
          </Col>
        </Row>
      </Form>
      <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="value4 = false">取消</Button>
        <Button type="primary" @click="updata_phone">确定</Button>
      </div>
    </Drawer>
    <Drawer
      title="修改密码"
      v-model="value6"
      width="80%"
      :mask-closable="false"
      :styles="styles"
    >
      <Form :model="cus_info">
        <Row :gutter="32">
          <Col span="32">
            <FormItem label="旧密码" label-position="top">
              <Input type="password" v-model="cus_info.last_pwd" placeholder="请输入旧密码....."/>
            </FormItem>
          </Col>
        </Row>
        <Row :gutter="32">
          <Col span="32">
            <FormItem label="新密码" label-position="top">
              <Input type="password" v-model="cus_info.new_pwd" placeholder="请输入新密码....."/>
            </FormItem>
          </Col>
        </Row>
      </Form>
      <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="value6 = false">取消</Button>
        <Button type="primary" @click="updata_pwd">确定</Button>
      </div>
    </Drawer>
    <Drawer
      title="绑定微信号"
      v-model="value5"
      width="80%"
      :mask-closable="false"
      :styles="styles"
    >
      <Form :model="cus_info">
        <Row :gutter="32">
          <Col span="32">
            <FormItem label="微信号码" label-position="top">
              <Input v-model="cus_info.new_wechat" placeholder="请输入新的微信号码....."/>
            </FormItem>
          </Col>
        </Row>
      </Form>
      <div class="demo-drawer-footer">
        <Button style="margin-right: 8px" @click="value5 = false">取消</Button>
        <Button type="primary" @click="updata_wechat">确定</Button>
      </div>
    </Drawer>
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
                ],
                value3: false,
                value4: false,
                value5: false,
                value6: false,
                styles: {
                    height: 'calc(100% - 55px)',
                    overflow: 'auto',
                    paddingBottom: '53px',
                    position: 'static'
                },
                formData: {
                    name: '',
                    url: '',
                    owner: '',
                    type: '',
                    approver: '',
                    date: '',
                    desc: ''
                },
                cus_info: {
                    cus_id: 0,
                    new_name: '',
                    check_code: '',
                    phone: '15957408879',
                    last_pwd: '',
                    new_pwd: '',
                    new_wechat: ''
                },
                disabled: false,
                time: 0,
                btntxt: "获取验证码",
                info: {
                    phone: '',
                    check_code: ''
                }
            }
        },
        created() {
            var info = localStorage.getItem('cus_info');
            this.cus_info = JSON.parse(info);
            console.log(this.cus_info);
        },
        methods: {
            route: function (val) {
                if ('login' == val) {
                    localStorage.removeItem('cus_info')
                }
                this.$router.push({name: val});
            },
            goTo: function () {
                window.history.back();
            },
            updata_name() {
                var _this = this;
                _this.value3 = false;
                var url = 'http://www.gzysxc.cn:8888/api/user/update_name';
                if (_this.cus_info.new_name != '' || _this.cus_info.new_name != null) {
                    alert(_this.cus_info.new_name);
                    var info = JSON.stringify(localStorage.getItem('cus_info'));
                    if (null != info) {
                        var cus_id = Number(info.cus_id);
                        _this.$http.post(url, {
                            cus_id: 3,
                            new_name: _this.cus_info.new_name
                        }, {emulateJSON: true}).then(res => {
                            var _json = res.body;
                            if (_json.errcode == 0) {
                                _this.$notify.success({
                                    title: '修改成功',
                                    message: _json.errmsg
                                });
                            } else {
                                _this.$notify.error({
                                    title: '修改失败',
                                    message: _json.errmsg
                                });
                            }
                        });
                    }
                }
            },
            updata_pwd() {
                var _this = this;
                _this.value6 = false;
                var url = 'http://www.gzysxc.cn:8888/api/user/update_password';
                if (_this.cus_info.last_pwd != '' || _this.cus_info.new_pwd != '') {
                    var info = JSON.stringify(localStorage.getItem('cus_info'));
                    if (null != info) {
                        var cus_id = Number(info.cus_id);
                        _this.$http.post(url, {
                            cus_id: 3,
                            last_pwd: _this.cus_info.last_pwd,
                            new_pwd: _this.cus_info.new_pwd,
                        }, {emulateJSON: true}).then(res => {
                            var _json = JSON.stringify(res.body);
                            if (_json.errcode == 0) {
                                _this.$notify.success({
                                    title: '修改成功',
                                    message: _json.errmsg
                                });
                            } else {
                                _this.$notify.error({
                                    title: '修改失败',
                                    message: _json.errmsg
                                });
                            }
                        });
                    }
                }
            },
            updata_phone() {
                var _this = this;
                _this.value4 = false;
                var url = 'http://www.gzysxc.cn:8888/api/user/update_phone';
                if (this.exec_phone() && this.exec_code()) {
                    var info = JSON.stringify(localStorage.getItem('cus_info'));
                    if (null != info) {
                        var cus_id = Number(info.cus_id);
                        _this.$http.post(url, {
                            cus_id: 3,
                            new_name: _this.cus_info.new_name
                        }, {emulateJSON: true}).then(res => {
                            var _json = JSON.stringify(res.body);
                            if (_json.errcode == 0) {
                                _this.$notify.success({
                                    title: '修改成功',
                                    message: _json.errmsg,
                                    type: "success"
                                });
                            } else {
                                _this.$notify.error({
                                    title: '修改失败',
                                    message: _json.errmsg,
                                    type: "error"
                                });
                            }
                        });
                    }
                } else {
                    _this.$notify.error({
                        title: '修改失败',
                        message: '',
                        type: "error"
                    });
                }
            },
            updata_wechat() {
                var _this = this;
                _this.value5 = false;
                var url = 'http://www.gzysxc.cn:8888/api/user/update_wechat';
                if (this.cus_info.new_wechat != '' || this.cus_info.new_wechat != null) {
                    var info = JSON.stringify(localStorage.getItem('cus_info'));
                    if (null != info) {
                        var cus_id = Number(info.cus_id);
                        _this.$http.post(url, {
                            cus_id: 3,
                            new_wechat: _this.cus_info.new_wechat
                        }, {emulateJSON: true}).then(res => {
                            var _json = res.body;
                            console.log(_json);
                            if (_json.errcode == 0) {
                                _this.$notify.success({
                                    title: '修改成功',
                                    message: _json.errmsg,
                                    type: "success"
                                });
                            } else {
                                _this.$notify.error({
                                    title: '修改失败',
                                    message: _json.errmsg,
                                    type: "error"
                                });
                            }
                        });
                    }
                } else {
                    _this.$notify.error({
                        title: '修改失败',
                        message: '',
                        type: "error"
                    });
                }
            },
            //验证手机号码部分
            sendcode() {
                var url = 'http://www.gzysxc.cn:8888/api/user/send_check_code';
                if (this.exec_phone()) {
                    this.time = 60;
                    this.disabled = true;
                    this.timer();
                    this.$http.post(url, {
                            phone: this.cus_info.phone,
                            check_code: this.info.check_code
                        },
                        {emulateJSON: true}).then(res => {
                        var data = JSON.stringify(res.data);
                          this.$notify.warning({
                              title:'状态',
                              message:data.errmsg,
                              type:"warning"
                          })
                    })
                } else {
                    return;
                }
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
            },
            //手机验证
            exec_phone: function () {
                var phone_flag = false;
                if (this.cus_info.phone != '' || this.cus_info.phone != null) {
                    if ((/^1[34578]\d{9}$/.test(this.cus_info.phone))) {
                        phone_flag = true;
                    } else {
                        this.$notify.error({
                            title: '操作失败',
                            message: '手机格式输入有误，请重新输入',
                            type: 'ERROR'
                        })
                        return phone_flag;
                    }
                } else {
                    this.$notify.error({
                        title: '操作失败',
                        message: '请输入正确的手机号码',
                        type: 'ERROR'
                    })
                    return phone_flag;
                }
                return phone_flag;
            },
            exec_code() {
                var check_code_flag = false;
                if (this.cus_info.check_code != '' || this.cus_info.check_code != null) {
                    check_code_flag = true;
                } else {
                    this.$notify.error({
                        title: '请输入验证码',
                        message: '',
                        type: 'ERROR'
                    })
                    return check_code_flag;
                }
            }
        }
    }
</script>

<style scoped>
  .model {
    height: 100%;
    width: 100%;
    position: relative;
    top: 0;
  }

  .demo-drawer-footer {
    width: 100%;
    position: absolute;
    bottom: 0;
    left: 0;
    border-top: 1px solid #e8e8e8;
    padding: 10px 16px;
    text-align: right;
    background: #fff;
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
    width: 100%;
    margin: 0 auto;
    height: auto;
    padding-bottom: 25px;
    background-color: #FFFFFF;
  }

  .model-div-row-center {
    width: 90%;
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
    /*background-color: #FFFFFF;*/
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
    background-color: #1C8CE9;
    height: auto;
    vertical-align: middle;
    text-align: center;
    max-width: 100%;
    margin: 0 auto;
    min-width: 100%;
    font-size: 24px;
    font-family: 楷体;
    color: #FFFFFF;
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
    border-top: 1px #f4f4f4 solid;
  }

  .close-left {
    width: 10px;
    height: 10px;
    position: absolute;
    float: left;
    left: 10px;
    vertical-align: middle;
    margin-top: 19px;
    background: rgba(0, 0, 0, 0);
  }

  .send-btn {
    height: 30px;
    width: 100px;
    margin-top: -40px;
    font-size: 0.8em;
    -webkit-border-radius: 38px;
    -moz-border-radius: 38px;
    border-radius: 38px;
    position: absolute;
    right: 0;
    background-color: rgba(0, 0, 0, 0);
    border: none;
    font-weight: 500;
    border: none;
    /*margin-bottom: 30px;*/
    background: #0a6beb;
    color: #FFFFFF;
  }
</style>
