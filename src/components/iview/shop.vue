<template>
  <div class="model">
    <Layout>
      <Header class="model-head-span">
        <i class="close-left" @click="goTo">
          <svg t="1567585969191" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="1713" width="16" height="16">
            <path
              d="M209.92 988.16c-15.36 0-30.72-15.36-30.72-30.72s15.36-30.72 30.72-30.72h471.04c153.6 0 281.6-128 281.6-281.6s-128-281.6-281.6-281.6H102.4l220.16 220.16c5.12 5.12 10.24 10.24 10.24 20.48 0 5.12-5.12 15.36-10.24 20.48-5.12 5.12-10.24 10.24-20.48 10.24-5.12 0-15.36-5.12-20.48-10.24L10.24 353.28c-5.12-5.12-10.24-10.24-10.24-20.48 0-5.12 5.12-15.36 10.24-20.48L281.6 40.96c5.12-5.12 10.24-10.24 20.48-10.24 5.12 0 15.36 5.12 20.48 10.24 0 10.24 5.12 15.36 5.12 25.6 0 5.12-5.12 15.36-10.24 20.48L97.28 307.2h583.68a343.04 343.04 0 0 1 0 686.08H209.92z"
              fill="#FFFFFF" p-id="1714"></path>
          </svg>
        </i>
        <span class="model-head-font">已领取面膜</span>
      </Header>

      <div class="model-div-row">
        <h6 class="model-div-row-title">当前已领取面膜</h6>
        <span class="model-div-row-munch">{{mask_number}}&nbsp;张</span>
        <button class="model-div-row-btn">
          通知商家发货
        </button>
      </div>
    </Layout>

  </div>
</template>

<script>
    export default {
        name: "shop",
        data() {
            return {
                mask_number: 0,
                cus_id: 0
            }
        },
        created() {
            this.$http.post(
                'http://www.gzysxc.cn:8888/api/user/mask', {cus_id: 3}, {emulateJSON: true}
            ).then(res => {
                var _json = res.body;
                if (res.status == 200) {
                    this.mask_number = _json.mask_number;
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
    left: 10%;
  }

  h1 {
    font-size: 1em;
    font-family: 楷体;
    position: relative;
    vertical-align: middle;;
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
    background: red;
    border: none;
    border-radius: 20px;
    -moz-border-radius: 20px;
    -webkit-border-radius: 20px;
    width: 80%;
    margin-top: 30px;
    margin-bottom: 20px;
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


</style>
