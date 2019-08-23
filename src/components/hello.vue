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
    height: 300px;
    width: 100%;
    margin-top: 40px;
    margin-bottom: 40px;
    position: relative;
    background: #FFFFFF;
    color: black;
    font-size: 40px;
    margin: 0 auto;
    text-align: center;
    font-family: 楷体;
  }
</style>
