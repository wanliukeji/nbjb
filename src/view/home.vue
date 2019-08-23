<template>
  <div class="home">
    {{msg}}
    <br>
    <button @click="go">点我返回</button>
<!--    <router-view></router-view>-->
  </div>
</template>

<script>
    export default {
        name: "home",
        data() {
            return {
                //获取参数
                num: this.$route.query.num,
                msg: 'HOME.VUE'
            }
        },
        created() {

        },
        methods: {
            go() {
              // alert(this.num);
              this.num = 0;
              this.$router.go(-1);
            }
        }
    }
</script>

<style scoped>

  .home {
    font-size: 40px;
    font-family: 楷体;
    text-align: center;
  }
</style>
