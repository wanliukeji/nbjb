<template>
  <div class="model">
    <div>
      {{msg}}
      <br>
      <button @click="back" >点我进入</button>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        name: "hello",
        data() {
            return {
                msg: 'HELLO.VUE !',
                num: 0
            }
        },
        methods: {
            back() {
                // alert('正在跳转.....');
                const that = this;
                this.num = +1
                //携带参数跳转
                that.$router.push({path: '/home', query: {num: this.num}}).catch(err => {
                    console.log(err);
                })
                // this.$router.push('/movieList')
            }
        }
    }
</script>

<style scoped>
  .model {
    height: 800px;
    width: 80%;
    position: relative;
    min-width: 1200px;
    background: #FFFFFF;
    color: black;
    font-size: 40px;
    margin: 0 auto;
    text-align: center;
    font-family: 楷体;
    /*border: #0a0a0a 1px solid;*/
    margin-top: 10px;
    margin-bottom: 15px;
  }
</style>
