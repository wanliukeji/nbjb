<template>
  <div class="model">
    <Layout>
      <Header class="model-head-span">
        <i class="close-left" @click="goTo">
          <svg t="1567775293857" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="1726" width="21" height="21">
            <path
              d="M683.2 958.4c-6.4 0-12.8-1.6-17.6-6.4l-414.4-416c-6.4-6.4-9.6-16-9.6-24s3.2-17.6 9.6-24l414.4-416c9.6-9.6 24-9.6 33.6 0 9.6 9.6 9.6 24 0 33.6L294.4 512l406.4 406.4c9.6 9.6 9.6 24 0 33.6-6.4 3.2-12.8 6.4-17.6 6.4z"
              fill="#ffffff" p-id="1727">
            </path>
          </svg>
        </i>
        地址管理
      </Header>
      <hr>
      <div class="model-div-row">
      <span class="model-text">江苏省
        &nbsp;南京市
        &nbsp;玄武区
        &nbsp;凌峰小区
        &nbsp;201单元303号</span>
      </div>

      <div class="model-div-row-btn" @click="value3 = true">
        <svg t="1567483051512" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="1723" width="16" height="16" style="position: absolute; top: 22px; right: 35% ">
          <path
            d="M906.212134 565.732986 565.732986 565.732986 565.732986 906.212134C565.732986 926.013685 541.666486 959.972 511.97312 959.972 482.297674 959.972 458.213254 926.013685 458.213254 906.212134L458.213254 565.732986 117.734106 565.732986C97.950475 565.732986 63.97424 541.666486 63.97424 511.97312 63.97424 482.279754 97.950475 458.213254 117.734106 458.213254L458.213254 458.213254 458.213254 117.734106C458.213254 97.950475 482.297674 63.97424 511.97312 63.97424 541.666486 63.97424 565.732986 97.950475 565.732986 117.734106L565.732986 458.213254 906.212134 458.213254C925.995765 458.213254 959.972 482.279754 959.972 511.97312 959.972 541.666486 925.995765 565.732986 906.212134 565.732986Z"
            p-id="1724" fill="#ffffff"></path>
        </svg>
      </div>

      <Drawer
        title="添加地址"
        v-model="value3"
        width="80%"
        :mask-closable="false"
        >
        <Form :v-model="info">
          <Row :gutter="32">
            <Col span="32">
              <FormItem label="省份" label-position="top">
                <Select v-model="info.province" remote :remote-method="prvselect" placeholder="请选择">
                  <Option v-for="item in proList" :value="item.ID" :key="item.ID">{{ item.AddName }}</Option>
                </Select>
              </FormItem>
              <FormItem label="市" label-position="top">
                <Select v-model="info.city" remote :remote-method="citselect" placeholder="请选择">
                  <Option v-for="item in cityList" :value="item.ID" :key="item.ID">{{ item.AddName }}</Option>
                </Select>
              </FormItem>
              <FormItem label="区/县" label-position="top">
                <Select v-model="info.district" placeholder="请选择">
                  <Option v-for="item in disList" :value="item.ID" :key="item.ID">{{ item.AddName }}</Option>
                </Select>
              </FormItem>
              <FormItem label="详细地址" label-position="top">
                <Input v-model="info.detail" placeholder="请输入详细地址....."/>
              </FormItem>
              <FormItem label="收货人电话" label-position="top">
                <Input v-model="info.phone" placeholder="请输入详细地址....."/>
              </FormItem>
              <FormItem label="收货人姓名" label-position="top">
                <Input v-model="info.recv_name" placeholder="请输入详细地址....."/>
              </FormItem>
            </Col>
          </Row>
        </Form>
        <div class="demo-drawer-footer">
          <Button style="margin-right: 8px" @click="value3 = false">取消</Button>
          <Button type="primary" @click="submit">确定</Button>
        </div>
      </Drawer>

    </Layout>
  </div>

</template>

<script>
    export default {
        name: "Address",
        data() {
            return {
                info: {
                    cus_id :3,
                    province:'',
                    city:'',
                    district:'',
                    detail:'',
                    phone:'',
                    recv_name:''
                },
                value3: false,
                ridData: [{
                    date: '2016-05-02',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-04',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-01',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }, {
                    date: '2016-05-03',
                    name: '王小虎',
                    address: '上海市普陀区金沙江路 1518 弄'
                }],
                dialogTableVisible: false,
                dialogFormVisible: false,
                form: {
                    name: '',
                    region: '',
                    date1: '',
                    date2: '',
                    delivery: false,
                    type: [],
                    resource: '',
                    desc: '',
                    recv_name: ''
                },
                formLabelWidth: '120px',
                proList : [],
                cityList : [],
                disList : []
            }
        },
        created () {
            this.$http.post(
                'http://www.gzysxc.cn:8888/api/user/add_addr',
                {
                    info: this.info
                },
                {
                    emulateJSON: true
                }
            ).then(res => {
                var _json = res.body;
                if (res.status == 200) {

                } else {
                    this.$notify.error({
                        title: '连接服务器失败',
                        message: _json.errmsg,
                        type: "error"
                    });
                }
            });
            this.$http.get(
                '/static/data/address.json',
                {
                    info: this.info
                },
                {
                    emulateJSON: true
                }
            ).then(res => {
                var _json = res.body;
                for (var i = 0; i < _json.length; i++) {
                    var obj = _json[i];
                  if (0 == obj.TopID ){
                      this.proList.push(obj);
                  }
                }

                if (res.status == 200) {
                } else {
                    this.$notify.error({
                        title: '连接服务器失败',
                        message: _json.errmsg,
                        type: "error"
                    });
                }
            });
        },
        methods: {
            goTo: function () {
                window.history.back();
            },
            prvselect: function () {
                    this.$http.get(
                        '/static/data/address.json', {
                            emulateJSON: true
                        }
                    ).then(res => {
                        if (res.status == 200) {
                            var _json = res.body;
                            for (var i = 0; i < _json.length; i++) {
                                var obj = _json[i];
                                if (this.info.province == obj.TopID ){
                                    this.cityList.push(obj);
                                }
                            }
                            console.log(this.cityList);
                        } else {
                            this.$notify.error({
                                title: '连接服务器失败',
                                message: _json.errmsg,
                                type: "error"
                            });
                        }
                    });
            },
            citselect: function () {
                this.$http.get(
                    '/static/data/address.json', {
                        emulateJSON: true
                    }
                ).then(res => {
                    if (res.status == 200) {
                        var _json = res.body;
                        for (var i = 0; i < _json.length; i++) {
                            var obj = _json[i];
                            if (this.info.city == obj.TopID ){
                                this.disList.push(obj);
                            }
                        }
                    } else {
                        this.$notify.error({
                            title: '连接服务器失败',
                            message: _json.errmsg,
                            type: "error"
                        });
                    }
                });
            },
            submit: function () {
                this.$http.post(
                    'http://www.gzysxc.cn:8888/api/user/add_addr',
                    {
                        info: this.info
                    },
                    {
                        emulateJSON: true
                    }
                ).then(res => {
                    var _json = res.body;
                    if (res.status == 200) {

                    } else {
                        this.$notify.error({
                            title: '连接服务器失败',
                            message: _json.errmsg,
                            type: "error"
                        });
                    }
                });
                this.$http.get(
                    '/static/data/address.json',
                    {
                        info: this.info
                    },
                    {
                        emulateJSON: true
                    }
                ).then(res => {
                    var _json = res.body;
                    for (var i = 0; i < _json.length; i++) {
                        var obj = _json[i];
                        if (0 == obj.TopID ){
                            this.proList.push(obj);
                        }
                    }

                    if (res.status == 200) {
                    } else {
                        this.$notify.error({
                            title: '连接服务器失败',
                            message: _json.errmsg,
                            type: "error"
                        });
                    }
                });
            }
        }
    }
</script>

<style scoped>

  .model {
    height: 100%;
    width: 100%;
    /*padding-left: 10%;*/
    /*padding-right: 10%;*/
    position: relative;
    top: 0;
  }

  .close-left {
    width: 8px;
    height: 8px;
    position: absolute;
    float: left;
    left: 10px;
    vertical-align: middle;
    margin-top: 19px;
    background: rgba(0, 0, 0, 0);
  }

  h1 {
    font-size: 1.2em;
    font-family: 楷体;
    position: relative;
    margin-bottom: 40px;
  }

  .model-div-row {
    position: relative;
    min-height: 70px;
    width: 100%;
    margin: 0 auto;
    border-bottom: 1px #c8c8c8 solid;
    padding-top: 20px;
    background-color: #FFFFFF;
  }

  .model-text {
    font-size: 12px;
  }

  .model-div-row-span {
    left: 0;
    font-size: 14px;
    text-align: left;
    display: inline-block;
    float: left;
  }

  .model-div-row-btn {
    width: 60px;
    height: 60px;
    border: none;
    border-radius: 50%;
    position: fixed;
    right: 20%;
    margin: 0 auto;
    margin-bottom: 10px;
    top: 80%;
    background-color: #0a6beb;
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
</style>
