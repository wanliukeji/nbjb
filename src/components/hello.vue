<template>
  <div class="model">
    {{msg}}
    <button @click="back">点我返回</button>
<!--    <router-link to="/home">-->
<!--      <button>点我进入</button>-->
<!--    </router-link>-->
  </div>
</template>

<script>
    export default {
        name: "hello",
        data() {
            return {
                msg: 'My Name Is Chenny Son !'
            }
        },
        methods: {
            back() {
                // alert('正在跳转.....');
                const that = this;
                that.$router.push({name: 'home'}).catch(err => {
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
    font-size: 20px;
    margin: 0 auto;
    text-align: center;
    font-family: 楷体;
  }
</style>
