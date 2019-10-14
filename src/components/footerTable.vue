<template lang="html">
  <div class="model">
    <p class="p-font"><a href="">友情链接</a></p>

    <ul class="ul-div">
      <li class="li-div" v-for="(item,index) in items.slice(0,4)">{{item.name}}</li>
    </ul>
    <ul class="ul-div">
      <li class="li-div" v-for="(item,index) in items.slice(4,8)">{{item.name}}</li>
    </ul>
    <ul class="ul-div">
      <li class="li-div" v-for="(item,index) in items.slice(8,12)">{{item.name}}</li>
    </ul>
    <ul class="ul-div">
      <li class="li-div" v-for="(item,index) in items.slice(12,16)">{{item.name}}</li>
    </ul>
    <ul class="ul-div">
      <li class="li-div" v-for="(item,index) in items.slice(16,20)">{{item.name}}</li>
    </ul>
    <ul class="ul-div">
      <li class="li-div" v-for="(item,index) in items.slice(20,24)">{{item.name}}</li>
    </ul>
    <ul class="ul-div">
      <li class="li-div" v-for="(item,index) in items.slice(24,28)">{{item.name}}</li>
    </ul>
    <ul class="ul-div">
      <li class="li-div" v-for="(item,index) in items.slice(28,32)">{{item.name}}</li>
    </ul>
    <ul class="ul-div">
      <li class="li-div" v-for="(item,index) in items.slice(32,36)">{{item.name}}</li>
    </ul>
    <!--    <ul class="ul-div">-->
    <!--      <li class="li-div">北仑区幼</li>-->
    <!--      <li class="li-div">上虞论坛</li>-->
    <!--      <li class="li-div">泉州论坛</li>-->
    <!--      <li class="li-div">蚌埠论坛</li>-->
    <!--    </ul>-->
    <!--    <ul class="ul-div">-->
    <!--      <li class="li-div">化龙巷</li>-->
    <!--      <li class="li-div">平湖论坛</li>-->
    <!--      <li class="li-div">莱芜论坛</li>-->
    <!--      <li class="li-div">徐州论坛</li>-->
    <!--    </ul>-->
    <!--    <ul class="ul-div">-->
    <!--      <li class="li-div">乐清上班族</li>-->
    <!--      <li class="li-div">海宁论坛</li>-->
    <!--      <li class="li-div">高邮论坛</li>-->
    <!--      <li class="li-div">湖州南太湖</li>-->
    <!--    </ul>-->
    <!--    <ul class="ul-div">-->
    <!--      <li class="li-div">女排在线</li>-->
    <!--      <li class="li-div">新昌论坛</li>-->
    <!--      <li class="li-div">潍坊论坛</li>-->
    <!--      <li class="li-div">易车论坛</li>-->
    <!--    </ul>-->
    <!--    <ul class="ul-div">-->
    <!--      <li class="li-div">慈溪论坛</li>-->
    <!--      <li class="li-div">星空论坛</li>-->
    <!--      <li class="li-div">丹阳翼网</li>-->
    <!--      <li class="li-div">番禺社区</li>-->
    <!--    </ul>-->
    <!--    <ul class="ul-div">-->
    <!--      <li class="li-div">余姚论坛</li>-->
    <!--      <li class="li-div">东林书院</li>-->
    <!--      <li class="li-div">昆山热线</li>-->
    <!--      <li class="li-div">株洲在线</li>-->
    <!--    </ul>-->
    <!--    <ul class="ul-div">-->
    <!--      <li class="li-div">宁海在线</li>-->
    <!--      <li class="li-div">烟台论坛</li>-->
    <!--      <li class="li-div">重庆论坛</li>-->
    <!--      <li class="li-div">荆州论坛</li>-->
    <!--    </ul>-->
    <!--    <ul class="ul-div">-->
    <!--      <li class="li-div">奉化论坛</li>-->
    <!--      <li class="li-div">昆山论坛</li>-->
    <!--      <li class="li-div">镇江论坛</li>-->
    <!--      <li class="li-div">长沙论坛</li>-->
    <!--    </ul>-->
    <!--    <ul class="ul-div">-->
    <!--      <li class="li-div">厦门小鱼网</li>-->
    <!--      <li class="li-div">淮北人论坛</li>-->
    <!--      <li class="li-div">碧海潮声</li>-->
    <!--      <li class="li-div">YY515游戏</li>-->
    <!--    </ul>-->
  </div>
</template>

<script>
    export default {
        name: "footerTable",
        data() {
            return {
                items: []
            }
        },
        created() {
            this.$http.get('/static/data/footNav.json').then(res => {
                var obj = res.data;
                this.items = obj;
                if (res.status == 200) {
                    // this.$notify({
                    //     title: '成功连接服务器',
                    //     message: '获取数据成功！',
                    //     type: 'success'
                    // });
                    // console.log(JSON.stringify(this.items));
                } else {
                    this.$notify.error({
                        title: '获取数据失败',
                        message: result,
                        type: 'error'
                    });
                }
            }).catch(function (result) {
                this.$notify.error({
                    title: '获取数据失败',
                    message: result,
                    type: 'error'
                });
            });
        }
    }
</script>

<style scoped>
  .model {
    position: relative;
    width: 80%;
    min-width: 1200px;
    height: auto;
    vertical-align: center;
    display: block;
    padding-left: 30px;
    background: #FFFFFF;
    padding-top: 30px;
    height: 200px;
    margin: 0 auto;
    margin-bottom: 10px;
    margin-top: 30px;
  }

  .p-font, a {
    color: #78bb09;
    font-size: 15px;
    text-align: left;
    position: relative;
    margin-bottom: 40px;
  }

  .ul-div {
    display: inline-block;
    float: left;
    position: relative;
    margin-right: 30px;
    min-width: 100px;
    padding-left: 2px;
    width: 11%;
    margin: 0px;
  }

  .li-div {
    /*display: inline-block;*/
    /*float: left;*/
    width: auto;
    line-height: 16px;
    color: #999;
    font-size: 14px;
    border-right: 1px #f1f1f1 solid;
    margin: 7px 10px 7px 0;
    text-align: left;
  }

  .li-div:hover {
    cursor: pointer;
    color: black;
  }

  a {
    display: inline-block;
    float: left;
    width: auto;
    height: auto;
    /*border: #0a0a0a 1px solid;*/
    border-bottom: 1px #78bb09 solid;
    position: absolute;
  }

</style>
