<template>
  <div class="model">

    <van-nav-bar fixed title="职位列表" left-text="返回" left-arrow @click-left="onClickLeft">
      <svg t="1572229825059" @click="onClickRight" slot="right" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5058" width="20" height="20"><path d="M38.5536 858.8288v-66.0992h946.944v66.0992H38.5536z m0-330.2912V462.4384H856.064v66.0992H38.5536z m0-330.3424v-66.048h946.944v66.0992H38.5536z" p-id="5059" fill="#ffffff"></path></svg>
    </van-nav-bar>


    <van-dropdown-menu class="menu">
      <van-dropdown-item v-model="value1" :options="option1"/>
      <van-dropdown-item v-model="value2" :options="option2"/>
      <van-dropdown-item v-model="value3" :options="option3"/>
      <van-dropdown-item v-model="value4" :options="option4"/>
    </van-dropdown-menu>
    <van-search placeholder="请输入搜索关键词" v-model="value" shape="round" class="search"/>
    <div style="position: relative;">
      <ul class="tab-ul">
        <li class="tab-ul-li" v-for="i in [1,2,3,4,5,6,7,8,9,10]">
          <div class="li-top">
            <p>
              <span class="p-title">PHP</span>
              <span class="p-right-a">8000~12000</span>
            </p>
            <p>
              <span class="tab-ul-li-p-span">苏州</span>
              <i class="tab-ul-li-p-i"></i>
              <span class="tab-ul-li-p-span">3-5年</span>
              <i class="tab-ul-li-p-i"></i>
              <span class="tab-ul-li-p-span">本科</span>
              <i class="tab-ul-li-p-i"></i>
              <span class="tab-ul-li-p-span">临时</span>
              <span class="tab-ul-li-p-time">2019-10-29</span>
            </p>
            <p>
              <span class="tab-ul-li-div">绩效奖金</span>
              <span class="tab-ul-li-div">周末双休</span>
            </p>
          </div>
          <div class="li-bottom-div">
            <div class="li-bottom-div-img">
              <img src="/static/image/baidu.jpg" width="50" height="43">
            </div>
            <div class="li-bottom-div-title">
              <p class="li-bottom-div-name">北京百度网络科技</p>
              <p class="li-bottom-div-p">
                <span class="li-bottom-div-span">100-499人</span>
                <span class="li-bottom-div-span">国有企业</span>
                <span class="li-bottom-div-span">互联网/IT/通信</span>
              </p>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <van-loading type="spinner" color="#1989fa" vertical/>
  </div>
</template>

<script>
    export default {
        name: "jobList",
        data() {
            return {
                value: '',
                value1: 0,
                value2: 'a',
                value3: 'a',
                value4: 'a',
                option1: [
                    {text: '工作地点', value: 0},
                    {text: '不限', value: 1},
                    {text: '北仑区', value: 2},
                    {text: '江东区', value: 3},
                    {text: '鄞州区', value: 4},
                    {text: '镇海区', value: 5},
                    {text: '海曙区', value: 6},
                    {text: '宁海县', value: 7},
                    {text: '余姚县', value: 8}
                ],
                option2: [
                    {text: '行业领域', value: 'a'}
                ],
                option3: [
                    {text: '职业类型', value: 'a'},
                    {text: '不限', value: 'b'}
                ],
                option4: [
                    {text: '更多', value: 'a'},
                    {text: '不限', value: 'b'}
                ],
                count: 0,
                isLoading: false
            }
        },
        methods: {
            onClickLeft() {
                history.go(-1);
            },
            onClickRight() {
                Toast('按钮');
            },
            onRefresh() {
                setTimeout(() => {
                    this.$toast('刷新成功');
                    this.isLoading = false;
                    this.count++;
                }, 500);
            }
        }
    }
</script>

<style scoped>
  .model {
    position: relative;
    width: 100%;
    padding: 0 auto;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
  }

  .van-nav-bar {
    background-color: #1382de;
    /*position: fixed;*/
  }

  .van-nav-bar__title, .van-nav-bar__text, .van-nav-bar .van-icon {
    color: #ffffff;
  }

  .grid-span {
    font-size: 12px;
    margin-top: 3px;
    color: #404040;
  }

  .tab-div {
    position: relative;
    margin-top: 50px;
    height: auto;
    position: relative;
    padding-bottom: 50px;
  }

  .tab-ul {
    width: 100%;
    padding-bottom: 10px;
  }

  .tab-ul-li {
    padding: 10px;
    background-color: #FFFFFF;
    white-space: nowrap;
    margin-bottom: 10px;
  }

  .li-top {
    border-bottom: #F2F2F2 1px solid;
    padding: 0px 0px 10px 0px;
  }

  .li-bottom-div {
    width: 100%;
    position: relative;
    padding: 10px 0px 0px 0px;
  }

  .li-bottom-div-img {
    display: inline-block;
    width: 15%;
    vertical-align: top;
  }

  .li-bottom-div-title {
    display: inline-block;
    width: 60%;
    vertical-align: top;
  }

  .li-bottom-div-name {
    color: #212121;
    font-size: 15px;
  }

  .li-bottom-div-p {
    padding: 0;
    white-space: nowrap;
    margin-top: 0px;
  }

  .li-bottom-div-span {
    color: #8D8E91;
    font-size: 12px;
    vertical-align: bottom;
    margin-bottom: 0;
  }

  .li-bottom-right {
    display: inline-block;
    width: auto;
    vertical-align: bottom;
  }

  .li-bottom-div-btn {
    padding: 2px;
    background-color: #0a6beb;
    border: none;
    color: #FFFFEE;
    width: 85px;
  }

  .p-title {
    font-size: 16px;
    font-weight: bold;
    color: #000;
    display: inline-block;
    left: 0;
  }

  .p-right-a {
    color: #FF0B00;
    font-size: 14px;
    font-weight: bolder;
    right: 0;
    float: right;
  }

  .tab-ul-li-p-span {
    color: #8D8E91;
    font-size: 14px;
    line-height: 35px;
    margin-right: 10px;
  }

  .tab-ul-li-p-time {
    float: right;
    color: #C4C4C4;
    font-size: 8px;
    bottom: 0;
    margin-bottom: 0px;
    margin-top: 8px;
  }

  .tab-ul-li-div {
    padding: 5px;
    background-color: #f4f4f6;
    color: #636363;
  }

  .tab-ul-li-p-i {
    border: #F2F2F2 1px solid;
    margin-right: 12px;
    height: 5px;
  }

  .van-dropdown-item {
    color: #444444;
  }

  .menu {
    z-index: 10;
    margin-top: -55px;
    position: fixed;
    width: 100%;
  }

  .search {
    margin: 100px 0px 10px 0px;
    position: relative;
  }

</style>
