<template>
  <div class="model">
    {{msg}}
    <button @click="go">点我跳转</button>
  </div>
</template>

<script>
    export default {
        name: "index",
        data() {
            return {
                msg: 'INDEX.VUE!'
            }
        },
        methods:{
            go(){
                this.$router.push('/hello')
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
