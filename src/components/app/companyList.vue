<template>
  <div class="model">
    <van-nav-bar fixed title="公司列表" left-text="返回" left-arrow @click-left="onClickLeft">
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
      <ul>
        <li class="row-lis" v-for="i in [1,2,3,4,5]">
          <div class="li-left">
            <h3 class="p-title">阿里巴巴</h3>
            <p class="li-left-p">该企业有10个在招职位</p>
            <p class="li-bottom">
              <span class="li-span">宁波</span>
              <span class="li-span">1-49人</span>
              <span class="li-span">外商合资</span>
              <span class="li-span">中国合资企业</span>
            </p>
          </div>
          <div class="li-rigth">
            <img src="/static/image/aali.jpg" width="100%" height="90">
          </div>
        </li>
        <li class="li-bottom-p">
          查看更多
        </li>
      </ul>
    </div>
    <!-- <van-loading type="spinner" color="#1989fa" vertical/> -->
  </div>
</template>

<script>
    export default {
        name: "companyList",
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

  .p-title {
    font-size: 16px;
    font-weight: bold;
    color: #000;
    display: inline-block;
    left: 0;
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

  .row-lis {
    /*border-bottom: 1px #F2F2F2 solid;*/
    padding: 15px 10px 10px;
    white-space: nowrap;
    background-color: #FFFFFF;
    margin-bottom: 10px;
  }

  .li-left {
    width: 70%;
    display: inline-block;
    height: 94px;
    position: relative;
  }

  .li-left-p {
    color: #8D8E91;
    font-size: 12px;
    line-height: 35px;
  }

  .li-bottom {
    bottom: 0;
    margin-bottom: 0;
    float: bottom;
    position: absolute;
  }

  .li-rigth {
    display: inline-block;
    width: 28%;
    vertical-align: top;
    padding: 2px;
  }

  .li-bottom-p {
    border-bottom: 1px #F2F2F2 solid;
    padding: 10px 0px 10px;
    white-space: nowrap;
    text-align: center;
  }

  .li-span {
    color: #404040;
    font-size: 14px;
    white-space: nowrap;
    margin-right: 5px;
  }


</style>
