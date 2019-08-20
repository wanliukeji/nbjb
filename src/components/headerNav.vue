<template lang="html">
  <ul class="cont-ul
   clear">
    <li class="cont-li b1" v-for="item in movieList" @click="goToInfo(item)">
      <div class="img-con">
        <img class="movie-img" :src="item.images.large">
      </div>
      <div class="movie-msg clear">
        <p class="movie-name">{{item.title}}</p>
        <p class="movie-price r1">
          <span>评分 </span>{{item.rating.average}}</p>
      </div>
    </li>
  </ul>
</template>

<script>

    export default {
        data() {
            return {
                movieList: [],
            };
        },
        mounted() {
            // 这个是vue的钩子函数，当new Vue()实例创建完毕后执行的函数，关于vue的生命周期，可以去官网查看详情
            // 这里我用的是豆瓣的一个公共接口
            // this.$http
            //     .jsonp("https://api.douban.com/v2/movie/top250?count=10")
            //     .then(res => {
            //         this.movieList = res.data.subjects;
            //         console.log(res.data.subjects);
            //         res = null;
            //     })
            //     .catch(error => {
            //         console.log("http error" + error);
            //     });
        },
        props: {navTitle:String},
        methods:{
            goToInfo(info){
                //这里因为我想把整个对象传给详情页，所以使用的是session
                sessionStorage.setItem('movieInfo',JSON.stringify(info));
                this.$router.push({
                    path:'/movieInfo',  //路径
                    name:'movieInfo', //配置路由时的name
                });
            }
        }
    };
 </script>
