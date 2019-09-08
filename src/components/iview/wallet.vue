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
        <span class="model-head-font">我的钱包</span>
      </Header>
      <div class="model-div-row">
        <h6 class="model-div-row-title">当前可用余额</h6>
        <span class="model-div-row-munch">{{brokerage}} &nbsp;元</span>
        <button class="model-div-row-btn">
          提现
        </button>
      </div>
    </Layout>
  </div>
</template>

<script>
    export default {
        name: "wallet",
        data() {
            return {
                brokerage: 0,
                cus_id: 0
            }
        },
        created() {
            this.$http.post(
                'http://www.gzysxc.cn:8888/api/user/brokerage', {cus_id: 3}, {emulateJSON: true}
            ).then(res => {
                var _json = res.body;
                if (res.status == 200) {
                    this.brokerage = _json.brokerage;
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
    /*background: #151515;*/
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
    min-height: 60px;
    width: 100%;
    margin: 0 auto;
    height: auto;
    padding: 10px;
    background-color: #FFFFFF;
  }

  .model-div-row-center {
    width: 80%;
    position: relative;
    height: auto;
    margin: 0 auto;
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

  .model-div-row-title {
    font-weight: 300;
    margin-bottom: 10px;
  }

  .model-div-row-munch {
    font-size: 2em;
    display: block;
  }

  .model-div-row-btn {
    padding: 5px;
    background: #FFFFFF;
    border: none;
    border-radius: 20px;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    width: 80%;
    margin-top: 30px;
    margin-bottom: 20px;
    background-color: red;
    color: #FFFFFF;
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

  .model-head-font {
    vertical-align: middle;
    margin-bottom: 20px;
    font-size: 22px;
    font-family: 楷体;
  }

</style>
