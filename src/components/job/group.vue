<template>
  <div class="model">
    <div class="model-row">
      <div class="model-row-left">
        <div class="model-row-left-top">
          <p class="body-title">筛选条件</p>
          <p style="border-bottom: 3px solid #e5e5e5; margin-top: 10px;"></p>
        </div>
        <div class="model-row-left-body">
          <dl class="open">
            <dt class="model-row-left-nav">
              <a href="javascript:;" class="open-title">职位性质
                <i class="open-title-right">
                  <svg t="1571111429872" class="icon open-title-up" viewBox="0 0 1024 1024" version="1.1"
                       xmlns="http://www.w3.org/2000/svg" p-id="1813" width="17" height="17">
                    <path d="M876.8 377.6l-96-89.6L512 556.8 243.2 288 147.2 377.6 512 736z" fill="#666666"
                          p-id="1814"></path>
                  </svg>
                </i>
              </a>
            </dt>
            <dd style="display: none;">
              <a href="#" class="dd-frist">不限</a>
              <a href="#">全职</a>
              <a href="#">兼职</a>
              <a href="#">临时</a>
              <a href="#">实习</a>
            </dd>
          </dl>
        </div>
      </div>
      <div class="model-row-right"></div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "group",
        watch: {
            filterText(val) {
                this.$refs.tree2.filter(val);
            }
        },

        methods: {},

        data() {
            return {
                filterText: ''
            };
        }
    }

    $(function () {
        $('.model-row-left-nav').bind('click', function () {
            let dom = $(this).next().toggle(1000);
            let child = $(this).children().children();
            $(child).removeClass('open-title-up');
            $(child).addClass('open-title-down');
        });
        $('.model-row-left-nav').unbind('click', function () {
            // let dom = $(this).next().toggle(1000);
            let child = $(this).children().children();
            $(child).addClass('open-title-up');
            $(child).removeClass('open-title-down');
        });
    })
</script>

<style scoped>
  .model {
    width: 100%;
    height: auto;
  }

  .model-row {
    width: 80%;
    height: auto;
    position: relative;
    top: 20px;
    min-width: 1200px;
    margin: 0 auto;
    position: relative;
    padding: 0 auto;
    min-height: 230px;
    min-width: 1200px;
    margin: 0px auto;
    vertical-align: top;
    white-space: nowrap;
  }

  .model-row-left {
    min-width: 198px;
    background: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, .05);
    width: 18%;
    height: 500px;
    display: inline-block;
    margin-right: 15px;
  }

  .model-row-left-top {
    margin: 0px 0px -10px;
    position: relative;
    line-height: 25px;
    margin-top: 20px;
    font-size: 16px;
    color: #333;
  }

  .model-row-left-body {
    margin: 0 auto;
    font: 12px/1.5 "Microsoft Yahei", "Hiragino Sans GB", "STHeiti", "\5B8B\4F53", sans-serif, tahoma, arial;
    display: block;
    font-size: 14px;
    color: #333;
    background: #fff;
    -webkit-font-smoothing: antialiased;
    padding: 15px;
    font-size: 14px;
    height: auto;
    width: 100%;
  }

  .dd-frist {
    color: #f60;
    position: relative;
    display: block;
  }

  a {
    text-decoration: none;
    font-size: 16px;
    font-family: microsoft yahei;
    color: #9297a0;
    position: relative;
    display: block;
    line-height: 26px;
    padding: 5px;
    display: block;
  }

  a:hover {
    color: #333333;
  }

  .open {
    margin-bottom: 10px;
  }

  .open-title {
    position: relative;
    display: block;
    line-height: 26px;
    text-align: left;
    color: #4d4d4d;
    font-size: 16px;
    font-family: microsoft yahei;
  }

  .open-title-up {
    float: right;
    vertical-align: middle;
    position: relative;
    margin-top: 5px;
    transform: rotate(0deg);
    -ms-transform: rotate(0deg); /* IE 9 */
    -moz-transform: rotate(0deg); /* Firefox */
    -webkit-transform: rotate(0deg); /* Safari 和 Chrome */
    -o-transform: rotate(0deg);
  }

  .open-title-down {
    float: right;
    vertical-align: middle;
    position: relative;
    margin-top: 5px;
    transform: rotate(180deg);
    -ms-transform: rotate(180deg); /* IE 9 */
    -moz-transform: rotate(180deg); /* Firefox */
    -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
    -o-transform: rotate(180deg);
  }

  dl {
    display: block;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  .body-title {
    /*margin: 10px -10px 10px;*/
    padding-left: 15px;
    line-height: 1;
    border-left: 5px solid #e76320;
    font-size: 18px;
    color: #333;
  }

  .model-row-right {
    width: 79.5%;
    margin-left: 15px;
    min-width: 980px;
    padding-left: 20px;
    min-height: 600px;
    display: inline-block;
    border: #151515 1px solid;
    vertical-align: top;
  }


</style>
