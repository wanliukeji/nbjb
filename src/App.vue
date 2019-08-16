<template>
  <div id="index_ul">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'index_ul',
  created:function () {
    alert(1.1);
  },
  methods:{

  }
}

var load = new Vue({
  el: '#index_ul',
  data: {
    items: [],
    obj: {
      context: '',
      pageNo: 0,
      pageSize: 1
    },
    total:10
  },
  //初始化数据
  created: function(){
    alert(1.1);
  },
  filters: {
    formatDate:function (value) {
      var date = new Date(value);
      var year = date.getFullYear();
      var month = date.getMonth()+1;
      var day = date.getDate();
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var seconds = date.getSeconds();
      return year + '-' + month + '-' + day + '-' + ' ' + hours + ':' + minutes + ':' + seconds;
    }
  },
  headers: {"Content-Type": "application/json;charset=utf-8"},
  methods: {
    //页面搜索 初始化
    seach:function () {
      var url = "/api/vfile/getPage";
      this.$http.post(url, JSON.stringify(this.obj), {emulateJSON: true}).then(function (res) {
        if (res.status == 200) {
          this.items = res.data.data.records;
          //异步刷新
          this.created;
        } else {
          console.log('ERROR:' + JSON.stringify(res.data));
        }
      }, function (res) {
        console.log(JSON.stringify(res));
      });
    },
    prevSeach:function(){
      this.obj.pageNo -= 1;
      if (this.obj.pageNo < 0){
        this.obj.pageNo = 0;
      }
      this.seach();
    },
    pageSeach:function(){
      this.seach();
    },
    nextSeach:function () {
      if(this.total > this.obj.pageNo){
        this.obj.pageNo += 1;
        this.seach();
      }else {
        this.total = this.obj.pageNo;
        this.seach();
      }
    }
  }
});
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
