<template lang="html">
  <div class="model">
    <ul>
      <li class="model-li" v-for="item in items">{{item.name}}</li>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "exampleModel",
        data() {
            return {
                items: []
            };
        },
        created() {
            this.$http.get('/static/data/demo.json').then(res => {
                var obj = res.data;
                this.items = obj;
                this.movieList = res.data;
                console.log(this.movieList);
                console.log('obj :' + JSON.stringify(obj));
                //
                // console.log('res :' + JSON.stringify(res));
                if (res.status == 200) {
                    // alert('数据获取成功');
                } else {
                    // alert('获取数据失败');
                }
            })
        }
        // },
        // methods() {
        //
        // }
    }
</script>

<style scoped>
  .model {
    position: relative;
    width: 80%;
    min-width: 1200px;
    height: auto;
    /*padding-left: 7.5%;*/
    margin: 0 auto;
    /*min-height: 800px;*/
    vertical-align: center;
    /*margin-top: 10px;*/
    display: block;
    /*border: black 1px solid;*/
    /*top: 380px;*/
    padding-left: auto;
    top: 5px;
    bottom: 10px;
    margin-bottom: 10px;
    background: #FFFFFF;
    /*min-height: 400px;*/
    margin-top: 10px;
  }

  .model-li {
    height: auto;
    font-size: 24px;
    background: #fffffc;
    font-family: 楷体;
    margin-top: 3px;
    cursor: pointer;
  }

  .model-li:hover {
    background: #0a6beb;
  }
</style>
