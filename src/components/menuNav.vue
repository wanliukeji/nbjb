<template>
  <div class="menu-nav">
    <div class="nav-div">
      <ul>
<!--      slice 截取集合长度 控制循环次数    -->
        <li class="li-div" v-for="(item,index) in  items.slice(0,10)" :key="index" >
          <a :href="item.href">
            {{item.name}}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "menuNav",
        data() {
            return {
                items: []
            }
        },
        created() {
            this.$http.get('/static/data/menuNav.json').then(res => {
                var obj = res.data;
                this.items = obj;
                if (res.status == 200) {
                    // this.$notify({
                    //     title: '成功连接服务器',
                    //     message: '获取数据成功',
                    //     type: 'success'
                    // });
                    // console.log(this.items);
                } else {
                    this.$notify.error({
                        title: '连接服务器失败',
                        message: result,
                        type: 'error'
                    });
                }
            }).catch(function (result) {
                this.$notify.error({
                    title: '成功连接服务器',
                    message: result,
                    type: 'error'
                });
            });
        }
    }
</script>

<style scoped>
  .menu-nav {
    position: relative;
    top: 0px;
    margin: 0 auto;
    min-height: 46px;
    background: #1c8ce9;
    width: 100%;
    min-width: 1200px;
    vertical-align: center;
    text-align: center;
    /*border: black 1px solid;*/
  }

  .nav-div {
    width: 80%;
    height: auto;
    /*border: black 1px solid;*/
    position: relative;
    min-width: 1200px;
    margin: 0 auto;
  }

  .li-div, a {
    width: 100px;
    min-width: 100px;
    /*border: #88ff19 1px solid;*/
    /*height: 30px;*/
    height: auto;
    position: relative;
    color: #FFFFFF;
    display: inline-block;
    float: left;
    vertical-align: middle;
    text-align: center;
    line-height: 45px;
  }

  .li-div > a {
    font-size: 16px;
  }

  li:first-child {
    background: #1382de;
  }


  .li-div:hover {
    background: #1382de;
    cursor: pointer;
  }
</style>


<!--备份-->
<!--        <li class="li-div">-->
<!--          论坛-->
<!--        </li>-->
<!--        <li class="li-div">-->
<!--          手机版-->
<!--        </li>-->
<!--        <li class="li-div">-->
<!--          我的贴子-->
<!--        </li>-->
<!--        <li class="li-div">-->
<!--          APP下载-->
<!--        </li>-->
