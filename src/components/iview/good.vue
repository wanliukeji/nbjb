<template>
  <div class="model">
    <Layout>
      <Header class="model-head-span">
        <span class="model-head-font">商品</span>
      </Header>
      <i class="close-left" @click="goTo">
        <svg t="1567775293857" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
             p-id="1726" width="23" height="23">
          <path
            d="M683.2 958.4c-6.4 0-12.8-1.6-17.6-6.4l-414.4-416c-6.4-6.4-9.6-16-9.6-24s3.2-17.6 9.6-24l414.4-416c9.6-9.6 24-9.6 33.6 0 9.6 9.6 9.6 24 0 33.6L294.4 512l406.4 406.4c9.6 9.6 9.6 24 0 33.6-6.4 3.2-12.8 6.4-17.6 6.4z"
            fill="#ffffff" p-id="1727"></path>
        </svg>
      </i>

      <div class="model-div-row">
        <img :src="info.goods_img" alt="" class="model-div-row-img">
      </div>

      <div class="model-div-row-hr" style="text-align: left;">
      <span>
      <svg t="1567478430914" style="margin-top: -3px" class="icon" viewBox="0 0 1024 1024" version="1.1"
           xmlns="http://www.w3.org/2000/svg"
           p-id="2760"
           width="16" height="16"><path
        d="M228.677632 136.922112 250.308608 123.259904 504.19712 490.998784 520.136704 490.998784 774.024192 123.259904 795.656192 137.491456 551.44448 490.998784 823.703552 490.998784 823.703552 517.184512 533.228544 517.184512 526.190592 528.572416 526.190592 657.219584 823.703552 657.219584 823.703552 682.267648 526.190592 682.267648 526.190592 901.434368 499.073024 901.434368 499.073024 683.410432 200.948736 683.410432 200.948736 656.084992 499.073024 656.084992 499.073024 529.711104 490.677248 516.614144 200.948736 516.614144 200.948736 490.99776 472.887296 490.99776Z"
        p-id="2761" fill="#444444"></path></svg>
        {{info.price}}
      </span>

        <div class="model-div-row-text">
          {{info.describe}}
        </div>
      </div>

      <span style="height: 2px; background: #bcbcbc;"></span>
      <button class="login-btn" @click="buyTo">去付款</button>
    </Layout>
    <el-dialog
      title="支付"
      :visible.sync="centerDialogVisible"
      width="80%"
      center>
      <img src="/static/image/app.png" alt="" width="100%" height="300">
      <p align="center" style="color: red;">
        <svg t="1567478430914" style="margin-top: -3px" class="icon" viewBox="0 0 1024 1024" version="1.1"
             xmlns="http://www.w3.org/2000/svg"
             p-id="2760"
             width="16" height="16"><path
          d="M228.677632 136.922112 250.308608 123.259904 504.19712 490.998784 520.136704 490.998784 774.024192 123.259904 795.656192 137.491456 551.44448 490.998784 823.703552 490.998784 823.703552 517.184512 533.228544 517.184512 526.190592 528.572416 526.190592 657.219584 823.703552 657.219584 823.703552 682.267648 526.190592 682.267648 526.190592 901.434368 499.073024 901.434368 499.073024 683.410432 200.948736 683.410432 200.948736 656.084992 499.073024 656.084992 499.073024 529.711104 490.677248 516.614144 200.948736 516.614144 200.948736 490.99776 472.887296 490.99776Z"
          p-id="2761" fill="red"></path></svg>
        168
      </p>
      <span slot="footer" class="dialog-footer">
    <el-button @click="centerDialogVisible = false" size="mini">取 消</el-button>
    <el-button type="primary" @click="centerDialogVisible = false" size="mini">确 定</el-button>
  </span>
    </el-dialog>
  </div>
</template>

<script>
    export default {
        name: "good",
        data() {
            return {
                info: {
                    goods_img: '',
                    price: 0,
                    describe: ''
                },
                centerDialogVisible: false
            }
        },
        created() {
            this.info = this.$router.history.current.params.name
        },
        methods: {
            goTo: function () {
                window.history.back();
            },
            buyTo: function () {
                this.centerDialogVisible = true
                // this.$router.push({name: 'address'});
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
    width: 10px;
    height: 10px;
    position: absolute;
    float: left;
    left: 10px;
    vertical-align: middle;
    margin-top: 19px;
    background: rgba(0, 0, 0, 0);
    color: #FFFFFF;
  }

  h1 {
    font-size: 1.5em;
    font-family: 楷体;
    position: relative;
  }


  .login-btn {
    margin: 0 auto;
    height: auto;
    width: 80%;
    font-size: 0.8em;
    background: red;
    padding-top: 8px;
    padding-bottom: 8px;
    -webkit-border-radius: 30px;
    -moz-border-radius: 30px;
    border-radius: 30px;
    margin-bottom: 20px;
    color: #FFFFFF;
    border: none;
  }

  p {
    margin-top: 30px;
  }

  .model-div-row, .model-div-row-hr {
    position: relative;
    margin-top: 20px;
    min-height: 200px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 20px;
    padding-left: 10%;
    padding-right: 10%;
    margin-bottom: 10px;
    margin-top: 50px;
  }

  .model-div-row-hr {
    border-top: 1px red solid;
    width: 100%;
    margin-top: 20px;
    padding-top: 20px;
  }

  .model-div-row-img {
    display: inline-block;
    width: 100%;
  }

  .model-div-row-text {
    height: auto;
    width: 100%;
    min-height: 100px;
    padding: 10px;
    /*white-space: nowrap;*/
    font-size: 12px;
    /*text-indent: 2em;*/
    line-height: 20px;
    text-align: left;
    left: 0;
  }

  .model-head-span {
    background-color: #1C8CE9;
    height: auto;
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
