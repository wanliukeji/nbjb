<template>
  <div class="model">
    <Layout>
      <Header class="model-head-span">
        <i class="close-left" @click="goTo">
          <svg t="1567585969191" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg"
               p-id="1713" width="16" height="16">
            <path
              d="M209.92 988.16c-15.36 0-30.72-15.36-30.72-30.72s15.36-30.72 30.72-30.72h471.04c153.6 0 281.6-128 281.6-281.6s-128-281.6-281.6-281.6H102.4l220.16 220.16c5.12 5.12 10.24 10.24 10.24 20.48 0 5.12-5.12 15.36-10.24 20.48-5.12 5.12-10.24 10.24-20.48 10.24-5.12 0-15.36-5.12-20.48-10.24L10.24 353.28c-5.12-5.12-10.24-10.24-10.24-20.48 0-5.12 5.12-15.36 10.24-20.48L281.6 40.96c5.12-5.12 10.24-10.24 20.48-10.24 5.12 0 15.36 5.12 20.48 10.24 0 10.24 5.12 15.36 5.12 25.6 0 5.12-5.12 15.36-10.24 20.48L97.28 307.2h583.68a343.04 343.04 0 0 1 0 686.08H209.92z"
              fill="#d81e06" p-id="1714"></path>
          </svg>
        </i>

    <h1>我的团队</h1>
      </Header>
    <Tabs :animated="true">
      <TabPane label="我的上级">
        <div class="model-row">
          <div class="model-div-row">
            <div class="model-div-row-center">
              <div class="model-div-row-left">
                <img src="/static/image/wechat.jpg" class="model-div-row-img" alt="">
                <span style="margin-left: 50px;">CHENYU</span>
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
          <div class="model-div-row">
            <div class="model-div-row-center">
              <div class="model-div-row-left">
                <img src="/static/image/wechat.jpg" class="model-div-row-img" alt="">
                <span style="margin-left: 50px;">CHENYU</span>
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
          <div class="model-div-row">
            <div class="model-div-row-center">
              <div class="model-div-row-left">
                <img src="/static/image/wechat.jpg" class="model-div-row-img" alt="">
                <span style="margin-left: 50px;">CHENYU</span>
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
        </div>

      </TabPane>
      <TabPane label="一级下属">
        <div class="model-row">
          <div class="model-div-row">
            <div class="model-div-row-center">
              <div class="model-div-row-left">
                <img src="/static/image/wechat.jpg" class="model-div-row-img" alt="">
                <span style="margin-left: 50px;">CHENYU</span>
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
          <div class="model-div-row">
            <div class="model-div-row-center">
              <div class="model-div-row-left">
                <img src="/static/image/wechat.jpg" class="model-div-row-img" alt="">
                <span style="margin-left: 50px;">CHENYU</span>
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
          <div class="model-div-row">
            <div class="model-div-row-center">
              <div class="model-div-row-left">
                <img src="/static/image/wechat.jpg" class="model-div-row-img" alt="">
                <span style="margin-left: 50px;">CHENYU</span>
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
        </div>
      </TabPane>
      <TabPane label="二级下属">
        <div class="model-row">
          <div class="model-div-row">
            <div class="model-div-row-center">
              <div class="model-div-row-left">
                <img src="/static/image/wechat.jpg" class="model-div-row-img" alt="">
                <span style="margin-left: 50px;">CHENYU</span>
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
          <div class="model-div-row">
            <div class="model-div-row-center">
              <div class="model-div-row-left">
                <img src="/static/image/wechat.jpg" class="model-div-row-img" alt="">
                <span style="margin-left: 50px;">CHENYU</span>
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
          <div class="model-div-row">
            <div class="model-div-row-center">
              <div class="model-div-row-left">
                <img src="/static/image/wechat.jpg" class="model-div-row-img" alt="">
                <span style="margin-left: 50px;">CHENYU</span>
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
        </div>
      </TabPane>
    </Tabs>
    </Layout>
  </div>
</template>

<script>
    export default {
        name: "team",
        methods : {
            goTo: function () {
                window.history.back();
            }
        }
    }
</script>

<style scoped>

  * {
    background-color: #FFFFFF;
  }
  .model {
    height: 100%;
    width: 100%;
    padding-left: 10%;
    padding-right: 10%;
    position: relative;
    top: 0;
    padding-top: 20px;
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
    margin-bottom: 20px;
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
    display: block;
    float: left;
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

  .model-div-row-center {
    width: 80%;
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

  .model-div-row-right {
    margin: 0 auto;
    display: inline-block;
    float: right;
    position: absolute;
    margin-top: 33px;
    right: 0px;
    vertical-align: middle;
  }

  .model-head-span {
    background-color: #FFFFFF;
    height: auto;
    vertical-align: middle;
    text-align: center;
    max-width: 100%;
    margin: 0 auto;
    min-width: 100%;
    font-size: 24px;
    font-family: 楷体;
  }

</style>
