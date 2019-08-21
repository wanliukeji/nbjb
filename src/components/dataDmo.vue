<template lang="html">
  <div class="demo">
    <ul>
      <li class="ul-li red-300" v-for="book in items">{{book.name}}</li>
    </ul>
  </div>

<!--  <a href="javascript:void(0)" @click="$router.push('/dialog')">-->
<!--    <van-col span="6" class="marb20">-->
<!--      <van-icon name="pending-deliver" />-->
<!--      <div>弹出框</div>-->
<!--    </van-col>-->
<!--  </a>-->
<!--  <van-button type="primary" @click="onClick">弹出</van-button>-->
</template>

<script>
    export default {
        name: "dataDmo",
        data() {
            return {
                items: [],
                movieList: []
            };
        },
        created() {
            this.$http.get('/static/data/demo.json').then(res => {
                var obj = res.data;
                this.items = obj;
                this.movieList = res.data;
                console.log(this.movieList);
                console.log('obj :' + JSON.stringify(obj));
                //
                // console.log('res :' + JSON.stringify(res));

                if (res.status == 200) {
                    // alert('数据获取成功');
                } else {
                    // alert('获取数据失败');
                }
            })
        },
        mounted() {

        },
        props: {navTitle: String},
        methods: {
            goToInfo(info) {
                //这里因为我想把整个对象传给详情页，所以使用的是session
                sessionStorage.setItem('movieInfo', JSON.stringify(info));
                this.$router.push({
                    path: '/movieInfo',  //路径
                    name: 'movieInfo', //配置路由时的name
                });
            }
        }
    };

    // this.$dialog.alert({
    //     title: "Hello World!", //加上标题
    //     message: "hello world", //改变弹出框的内容
    //     showCancelButton: true //展示取水按钮
    // })
    //     .then(() => { //点击确认按钮后的调用
    //         console.log("点击了确认按钮噢")
    //     })
    //     .catch(() => { //点击取消按钮后的调用
    //         console.log("点击了取消按钮噢")
    //     });
    // this.$dialog.confirm({
    //     title: "hello",
    //     message: "hello world",
    //     confirmButtonText: "你好", //改变确认按钮上显示的文字
    //     cancelButtonText: "你坏" //改变取消按钮上显示的文字
    // }).then(()=> {
    //     console.log("点击了确认按钮噢")
    // }).catch(() => {
    //     console.log("点击了取消按钮噢")
    // })
</script>

<style scoped>
  .demo {
    min-height: 290px;
    min-width: 1200px;
    /*border: #ff1215 1px solid;*/
    position: relative;
    top: 380px;
    vertical-align: middle;
    text-align: center;
    width: 87%;
    height: auto;
  }

  ul {
    margin: 0 auto;
    position: relative;
    width: 100%;
    height: auto;
  }

  .ul-li {
    margin: 5px;
    /*background: #1f8ceb;*/
    text-align: center;
    vertical-align: middle;
    height: auto;
    font-size: 42px;
    font-family: 楷体;

  }

  .red-300 {
   background: red;
  }

  li:hover {
    background: #0a6beb;
    position: relative;
    cursor: pointer;
  }
</style>
