<template lang="html">
  <div class="model">
    <router-link to='app.html'>
      <button>点我到第二个页面</button>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "model-first"
    }
</script>

<style scoped>
  .model {
    display: block;
    position: relative;
    background: #FFFFFF;
    min-height: 300px;
    width: 1200px;
    height: auto;
    margin-top: 40px;
    margin-bottom: 40px;
    margin: 0 auto;
  }

</style>
