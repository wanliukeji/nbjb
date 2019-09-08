<template>
  <div class="model">
    <Layout>
      <Header class="model-head-span">
        商品分类
      </Header>
      <div class="model-div-row" v-for="item,index in cate_list">
        <div class="model-div-row-center">
          <h4 style="font-family: 楷体; margin-bottom: 20px;">{{item.cate_name}}</h4>
          <div class="model-div-row-div" v-for="sub in item.goods_list">
            <img :src="sub.goods_img" @click="goTo(sub)" alt="" width="60" height="60">
            <span class="model-div-row-center-span">{{sub.name.substr(0,4)}}</span>
          </div>
        </div>
      </div>
    </Layout>
    <nav class="model-nav">
      <router-link v-for="item,index in nav" :to=item.router active-class="active" class="tab">
        <div class="nav_item">
          <svg v-if="index == 0" t="1567592582942" class="icon" viewBox="0 0 1024 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg" p-id="15915" width="30" height="30">
            <path
              d="M512.546 86.050c0 0-12.561-0.546-24.030 7.1-12.015 8.192-462.029 380.109-462.029 380.109s-32.768 25.668 2.731 70.997 74.82 3.823 74.82 3.823l407.962-359.356 414.515 364.817c0 0 36.591 30.583 70.451-11.469 33.86-42.598-3.277-72.090-3.277-72.090l-121.242-99.942v-175.309h-164.932v39.868l-168.209-139.81c0 0-10.923-9.83-26.761-8.738z"
              p-id="15916" fill="#d81e06"></path>
            <path
              d="M512.546 241.152l-410.146 357.171v300.919l333.141 0.546v-246.306l152.917 1.638v244.122l333.141 0.546v-300.919z"
              p-id="15917" fill="#d81e06"></path>
          </svg>
          <svg v-if="index == 1" t="1567592664307" class="icon" viewBox="0 0 1024 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg" p-id="16890" width="30" height="30">
            <path
              d="M109.591489 149.58076c-22.966061 0-41.698704 18.705014-41.698704 41.698704 0 22.994714 18.732643 41.698704 41.698704 41.698704 22.967084 0 41.698704-18.703991 41.698704-41.698704C151.290193 168.284751 132.558573 149.58076 109.591489 149.58076z"
              p-id="16891" fill="#d81e06"></path>
            <path
              d="M262.160303 219.077577l667.177222 0c15.365966 0 27.799136-12.43317 27.799136-27.799136s-12.43317-27.799136-27.799136-27.799136L262.160303 163.479305c-15.365966 0-27.799136 12.43317-27.799136 27.799136S246.795361 219.077577 262.160303 219.077577z"
              p-id="16892" fill="#d81e06"></path>
            <path
              d="M109.102349 467.043089c-22.966061 0-41.698704 18.703991-41.698704 41.698704 0 22.99369 18.732643 41.698704 41.698704 41.698704 22.967084 0 41.698704-18.705014 41.698704-41.698704C150.801053 485.748103 132.069433 467.043089 109.102349 467.043089z"
              p-id="16893" fill="#d81e06"></path>
            <path
              d="M928.849408 480.942657 261.672186 480.942657c-15.365966 0-27.799136 12.43317-27.799136 27.799136s12.43317 27.799136 27.799136 27.799136l667.177222 0c15.365966 0 27.799136-12.43317 27.799136-27.799136S944.215374 480.942657 928.849408 480.942657z"
              p-id="16894" fill="#d81e06"></path>
            <path
              d="M108.559996 791.021831c-22.966061 0-41.698704 18.732643-41.698704 41.698704 0 23.02132 18.732643 41.698704 41.698704 41.698704 22.967084 0 41.698704-18.677385 41.698704-41.698704C150.258701 809.754474 131.527081 791.021831 108.559996 791.021831z"
              p-id="16895" fill="#d81e06"></path>
            <path
              d="M928.307056 804.921399 261.129834 804.921399c-15.365966 0-27.799136 12.488429-27.799136 27.799136 0 15.420201 12.43317 27.799136 27.799136 27.799136l667.177222 0c15.365966 0 27.799136-12.378935 27.799136-27.799136C956.106192 817.409828 943.673022 804.921399 928.307056 804.921399z"
              p-id="16896" fill="#d81e06"></path>
          </svg>

          <svg v-if="index == 2" t="1567592710121" class="icon" viewBox="0 0 1024 1024" version="1.1"
               xmlns="http://www.w3.org/2000/svg" p-id="17854" width="30" height="30">
            <path
              d="M915.273205 941.222715c-24.688285 0-44.692898-20.011776-44.692898-44.693922 0-64.449871-130.515542-238.728126-202.400756-270.248004-13.995759-6.138814-23.889083-19.015076-26.216081-34.123168-2.326998-15.110139 3.229554-30.363542 14.72333-40.430828 48.417733-42.395576 76.175937-103.361089 76.175937-167.265538 0-122.689297-99.818403-222.506676-222.505653-222.506676-122.688273 0-222.506676 99.81738-222.506676 222.506676 0 63.925938 27.758204 124.892475 76.147284 167.265538 11.493775 10.067286 17.051351 25.313525 14.72333 40.422641-2.328022 15.109116-12.205996 27.984355-26.201755 34.124192-71.885214 31.541367-202.385407 205.819622-202.385407 270.255167 0 24.682146-20.011776 44.693922-44.692898 44.693922s-44.692898-20.011776-44.692898-44.693922c0-88.62241 111.209848-245.776659 204.465788-319.610248-42.903136-54.550407-66.74924-122.208343-66.74924-192.456267 0-171.97991 139.913587-311.893496 311.893496-311.893496s311.892473 139.913587 311.892473 311.893496c0 70.233598-23.858384 137.891534-66.762543 192.44808 93.270267 73.827449 204.480114 230.973512 204.480114 319.618435C959.967126 921.211962 939.962513 941.222715 915.273205 941.222715z"
              p-id="17855" fill="#d81e06"></path>
          </svg>
        </div>
      </router-link>
    </nav>
  </div>
</template>

<script>
    export default {
        name: "class",
        props: ['idx'],
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
                        router: "/mine",
                        class: "icon-personal",
                        desc: "个人中心"
                    },
                ],
                cate_list: [],
                goods_info: '',
                goods_img: ''
            }
        },
        created() {
            this.$http.get(
                'http://www.gzysxc.cn:8888/api/goods/get_cate',
                {cate_id: 1},
                {emulateJSON: true}
            ).then(res => {
                var _json = res.body;
                var logo = res.logo;
                if (res.status == 200) {
                    this.cate_list = _json.cate_list;
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
            goTo: function (sub) {
                this.$router.push({
                    name: 'good', params: {
                        name: sub
                    }
                });
            }
        }
    }
</script>

<style scoped>
  .model {
    width: 100%;
    height: 100%;
    margin: 0 auto;
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

  .nav_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999999;
  }

  span {
    font-size: 12px;
    margin-top: 2px;
    margin-bottom: 2px;
  }

  .model-div-row {
    position: relative;
    /*margin-top: 50px;*/
    min-height: 200px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 10px;
    padding-top: 10px;
    padding-bottom: 40px;
    background-color: #FFFFFF;
    border-top: #ededed 1px solid;
  }

  * {
    background-color: #FFFFFF;
  }

  .model-div-row-div {
    max-width: 33.3%;
    height: 100px;
    display: inline-block;
    float: left;
    padding: 10px;
  }

  .model-div-row-center {
    width: 80%;
    position: relative;
    height: auto;
    margin: 0 auto;
  }

  .model-div-row-center-span {
    display: block;
    font-size: 16px;
    font-family: 楷体;
    margin-top: 16px;
    white-space: nowrap;
  }


</style>
