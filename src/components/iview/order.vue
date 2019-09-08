<template>
  <div class="model">
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
      订单
    </Header>
    <Tabs :animated="true">
      <TabPane label="待付款">
        <div class="model-row" @click="buyTo(item)" v-for="item, index in wait_list">
          <div class="model-row-div">
            <img :src="item.goods_img" class="model-row-div-img" alt="">
            <p>
              <span class="model-row-div-title">{{item.goods_name}}</span>
              <span class="model-row-div-much">
              <svg t="1567478430914" style="margin-top: -3px;" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="2760"
                   width="16" height="16"><path
                d="M228.677632 136.922112 250.308608 123.259904 504.19712 490.998784 520.136704 490.998784 774.024192 123.259904 795.656192 137.491456 551.44448 490.998784 823.703552 490.998784 823.703552 517.184512 533.228544 517.184512 526.190592 528.572416 526.190592 657.219584 823.703552 657.219584 823.703552 682.267648 526.190592 682.267648 526.190592 901.434368 499.073024 901.434368 499.073024 683.410432 200.948736 683.410432 200.948736 656.084992 499.073024 656.084992 499.073024 529.711104 490.677248 516.614144 200.948736 516.614144 200.948736 490.99776 472.887296 490.99776Z"
                p-id="2761" fill="red"></path></svg>
                168
              </span>
            </p>
            <br>
            <div class="model-row-div-text">
              {{item.goods_describe}}
              <!--              <p class="model-row-div-time">2019-10-15</p>-->
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane label="待发货">
        <div class="model-row" @click="buyTo(item)"  v-for="item, index in wait_list">
          <div class="model-row-div">
            <img :src="item.goods_img" class="model-row-div-img" alt="">
            <p>
              <span class="model-row-div-title">{{item.goods_name}}</span>
              <span class="model-row-div-much">
              <svg t="1567478430914" style="margin-top: -3px;" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="2760"
                   width="16" height="16"><path
                d="M228.677632 136.922112 250.308608 123.259904 504.19712 490.998784 520.136704 490.998784 774.024192 123.259904 795.656192 137.491456 551.44448 490.998784 823.703552 490.998784 823.703552 517.184512 533.228544 517.184512 526.190592 528.572416 526.190592 657.219584 823.703552 657.219584 823.703552 682.267648 526.190592 682.267648 526.190592 901.434368 499.073024 901.434368 499.073024 683.410432 200.948736 683.410432 200.948736 656.084992 499.073024 656.084992 499.073024 529.711104 490.677248 516.614144 200.948736 516.614144 200.948736 490.99776 472.887296 490.99776Z"
                p-id="2761" fill="red"></path></svg>
                168
              </span>
            </p>
            <br>
            <div class="model-row-div-text">
              {{item.goods_describe}}
              <!--              <p class="model-row-div-time">2019-10-15</p>-->
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane label="待收货">
        <div class="model-row" @click="buyTo(item)"  v-for="item, index in recv_list">
          <div class="model-row-div">
            <img :src="item.goods_img" class="model-row-div-img" alt="">
            <p>
              <span class="model-row-div-title">{{item.goods_name}}</span>
              <span class="model-row-div-much">
              <svg t="1567478430914" style="margin-top: -3px;" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="2760"
                   width="16" height="16"><path
                d="M228.677632 136.922112 250.308608 123.259904 504.19712 490.998784 520.136704 490.998784 774.024192 123.259904 795.656192 137.491456 551.44448 490.998784 823.703552 490.998784 823.703552 517.184512 533.228544 517.184512 526.190592 528.572416 526.190592 657.219584 823.703552 657.219584 823.703552 682.267648 526.190592 682.267648 526.190592 901.434368 499.073024 901.434368 499.073024 683.410432 200.948736 683.410432 200.948736 656.084992 499.073024 656.084992 499.073024 529.711104 490.677248 516.614144 200.948736 516.614144 200.948736 490.99776 472.887296 490.99776Z"
                p-id="2761" fill="red"></path></svg>
                168
              </span>
            </p>
            <br>
            <div class="model-row-div-text">
              {{item.goods_describe}}
<!--              <p class="model-row-div-time">2019-10-15</p>-->
            </div>
          </div>
        </div>
      </TabPane>
      <TabPane label="全部订单">
        <div class="model-row" @click="buyTo(item)"  v-for="item, index in all_order">
          <div class="model-row-div">
            <img :src="item.goods_img" class="model-row-div-img" alt="">
            <p>
              <span class="model-row-div-title">{{item.goods_name}}</span>
              <span class="model-row-div-much">
              <svg t="1567478430914" style="margin-top: -3px;" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg"
                   p-id="2760"
                   width="16" height="16"><path
                d="M228.677632 136.922112 250.308608 123.259904 504.19712 490.998784 520.136704 490.998784 774.024192 123.259904 795.656192 137.491456 551.44448 490.998784 823.703552 490.998784 823.703552 517.184512 533.228544 517.184512 526.190592 528.572416 526.190592 657.219584 823.703552 657.219584 823.703552 682.267648 526.190592 682.267648 526.190592 901.434368 499.073024 901.434368 499.073024 683.410432 200.948736 683.410432 200.948736 656.084992 499.073024 656.084992 499.073024 529.711104 490.677248 516.614144 200.948736 516.614144 200.948736 490.99776 472.887296 490.99776Z"
                p-id="2761" fill="red"></path></svg>
                168
              </span>
            </p>
            <br>
            <div class="model-row-div-text">
              {{item.goods_describe}}
              <!-- <p class="model-row-div-time"></p>-->
            </div>
          </div>
        </div>

      </TabPane>
    </Tabs>
  </div>
</template>

<script>
    export default {
        name: "order",
        data() {
            return {
                info: {
                    cus_id: null,
                    page: 1,
                    size: 10
                },
                all_order: [],
                recv_list: [],
                wait_list:[]
            }
        },
        created() {
            var $info = localStorage.getItem('cus_info');
            var _info = JSON.parse($info);
            this.info.cus_id = _info.id;
            //待付款 代发货
            this.$http.get('http://www.gzysxc.cn:8888/api/order/wait_pay/?&cus_id=' + this.info.cus_id + '&page=' + this.info.page + '&size=' + this.info.size, this, {emulateJSON: true}).then(res => {
                var json = res.body;
                if (json.errcode == 0) {
                    this.wait_list = json.all_order;
                    this.$notify.warning({title: '状态', message: res.errmsg, type: "warning"});
                } else {
                    this.$notify.warning({title: '状态', message: res.errmsg, type: "warning"});
                }
            });
            var url = 'http://www.gzysxc.cn:8888/api/order/wait_recv/?&cus_id=' +
                this.info.cus_id + '&page=' + this.info.page + '&size=' + this.info.size;
            //待收货
            this.$http.get(url
                , {
                    cus_id: this.info.cus_id,
                    page: 1,
                    size: 10
                }, {emulateJSON: true}).then(res => {
                var json = res.body;
                if (json.errcode == 0) {
                    this.recv_list = json.all_order;
                } else {
                    this.$notify.warning({title: '状态', message: res.errmsg, type: "warning"});
                }
            })
            var url = 'http://www.gzysxc.cn:8888/api/order/my_all_orders/?&cus_id=' +
                this.info.cus_id + '&page=' + this.info.page + '&size=' + this.info.size;
            //全部订单
            this.$http.get(url
                , {
                    cus_id: this.info.cus_id,
                    page: 1,
                    size: 10
                }, {emulateJSON: true}).then(res => {
                var json = res.body;
                if (json.errcode == 0) {
                    this.all_order = json.all_order;
                } else {
                    this.$notify.warning({title: '状态', message: res.errmsg, type: "warning"});
                }
            })
        },
        methods: {
            goTo: function () {
                window.history.back();
            },
            buyTo: function (sub) {
                this.$router.push({
                    name: 'good', params: {
                        name: {
                            goods_img: sub.goods_img,
                            price: sub.total,
                            describe: sub.goods_describe
                        }
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
    position: relative;
    top: 0;
  }

  .model-row {
    height: 100px;
    padding: 15px;
  }

  .model-row-div-img {
    width: 80px;
    height: 80px;
    display: inline-block;
    float: left;
    margin-right: 10px;
  }

  .model-row-div-title {
    font-size: 16px;
    float: left;
    color: #444444;
  }

  .model-row-div-much {
    color: red;
    float: right;
  }

  .model-row-div-text {
    display: block;
    float: bottom;
    font-size: 12px;
    text-align: left;
    margin-top: 8px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  .model-row-div-time {
    font-size: 10px;
    color: #bcbcbc;
    margin-top: 17px;
    float: right;
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

  .model-row-div {
  }

  .model-head-span {
    background-color: #1C8CE9;
    vertical-align: middle;
    text-align: center;
    max-width: 100%;
    margin: 0 auto;
    min-width: 100%;
    font-size: 22px;
    font-family: 楷体;
    color: #FFFFFF;
    font-weight: bolder;
    max-height: 58px;
  }
</style>
