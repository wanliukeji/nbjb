<template>
  <div class="model">

  </div>
</template>

<script>
    export default {
        name: "class",
        props: ['idx'],
        data() {
            return {
                lists: [{
                    cls: "home",
                    name: "首页",
                    push: "/home",
                    icon: "../static/home.png",
                    iconSelect: "../static/home_select.png"
                },
                    {
                        cls: "shares",
                        name: "股票",
                        push: "/shares",
                        icon: "../static/home.png",
                        iconSelect: "../static/home_select.png"
                    },
                    {
                        cla: "community",
                        name: "社区",
                        push: "/community",
                        icon: "/static/home.png",
                        iconSelect: "../static/home_select.png"
                    },
                    {
                        cla: "mine",
                        name: "我的",
                        push: "/mine",
                        icon: "../static/home.png",
                        iconSelect: "../static/home_select.png"
                    }]
            }
        },
        methods: {
            goTo(path) {
                this.$router.replace(path)
            }
        }
    }
</script>

<style scoped>
  .model {
    width: 100%;
    height: 100%;
    margin: 0 auto;
  }

  .footer_guide {
    position: fixed;
    z-index: 100;
    left: 0;
    right: 0;
    bottom: 1px;
    background-color: #fff;
    width: 100%;
    height: 50px;
    display: flex;
    z-index: 10;
  }

  .guide_item {
    display: flex;
    flex: 1;
    text-align: center;
    flex-direction: column;
    align-items: center;
    margin: 5px;
    color: #999999;
  }

  .on {
    color: #02a774
  }

  span {
    font-size: 12px;
    margin-top: 2px;
    margin-bottom: 2px;
  }

  .iconfont {
    font-size: 22px;
  }

  .model-div-row {
    position: relative;
    /*margin-top: 50px;*/
    min-height: 80px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 30px;
    border-bottom: 1px silver solid;
    height: auto;
    padding: 10px;
  }

</style>
