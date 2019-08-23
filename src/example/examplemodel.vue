<template>
  <div id="exam" class="model">
    <div style="cursor: pointer;" @click="vm.showDialog=true">
      点我打开Dialog
    </div>
    //@closeDialog用来接收子组件传过来的参数
         <Dialog
    @closeDialog="close"
    v-if="vm.showDialog"></Dialog>
  </div>
</template>

<script>
    import Vue from 'vue'
    import Dialog from '../../public/Dialog'
    Vue.component('Dialog',Dialog)
    export default {
        name: "",
        data(){
            return {
                vm: {
                    showDialog: false,
                }
            }
        },
        methods:{
            close(){
                this.vm.showDialog = false;
            }
        }
    }
</script>

<style scoped>
  #exam{
    width: 100%;
    height: 100%;
  }

  .model {

    position: relative;
    width: 100%;
    min-width: 1200px;
    height: 200px;
    margin-bottom: 20px;
    background: #FFFFFF;


  }

</style>
