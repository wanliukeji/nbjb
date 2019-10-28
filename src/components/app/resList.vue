<template>
  <div class="model">
    <van-nav-bar fixed title="简历列表" left-text="返回" left-arrow @click-left="onClickLeft">
      <svg t="1572229825059" @click="onClickRight" slot="right" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5058" width="20" height="20"><path d="M38.5536 858.8288v-66.0992h946.944v66.0992H38.5536z m0-330.2912V462.4384H856.064v66.0992H38.5536z m0-330.3424v-66.048h946.944v66.0992H38.5536z" p-id="5059" fill="#ffffff"></path></svg>
    </van-nav-bar>
    <van-dropdown-menu class="menu">
      <van-dropdown-item v-model="value1" :options="option1"/>
      <van-dropdown-item v-model="value3" :options="option3"/>
      <van-dropdown-item v-model="value4" :options="option4"/>
    </van-dropdown-menu>
    <van-search placeholder="请输入搜索关键词" v-model="value" shape="round" class="search"/>
    <div style="position: relative;">
      <ul class="tab-ul">
        <li class="tab-ul-li" v-for="(i,index) in [1,2,3,4,5,6,7,8,9,10]">
          <div class="li-top">
            <div class="li-top-left">
              <span style="line-height: 27px;"><b>Ch**</b></span>
              <span v-show="index%2!=0">
                <svg t="1571882013895" class="icon icon-sex"
                     viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="2795" width="14" height="14"><path
                  d="M914.285714 0 658.285714 0l0 109.714286 178.428343 0-160.393143 160.393143C605.429029 215.606857 516.928 182.857143 420.571429 182.857143 188.286171 182.857143 0 371.143314 0 603.428571s188.286171 420.571429 420.571429 420.571429 420.571429-188.286171 420.571429-420.571429c0-96.356571-32.749714-184.8576-87.250286-255.749486L914.285714 187.285943 914.285714 365.714286l109.714286 0L1024 109.714286 1024 0 914.285714 0zM420.571429 914.285714c-171.392 0-310.857143-139.465143-310.857143-310.857143s139.465143-310.857143 310.857143-310.857143 310.857143 139.465143 310.857143 310.857143S591.963429 914.285714 420.571429 914.285714z"
                  p-id="2796" fill="#1296db"></path></svg>
              </span>
              <span v-show="index%2==0">
                <svg t="1571883585315" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="3838" width="14" height="14"><path
                  d="M588.8 64C390.4 64 224 236.8 224 448c0 76.8 25.6 153.6 64 217.6l-32 25.6-83.2-89.6c-19.2-19.2-44.8-19.2-64 0-19.2 19.2-19.2 44.8 0 64l89.6 89.6-121.6 121.6c-19.2 19.2-19.2 44.8 0 64 6.4 12.8 19.2 19.2 32 19.2s25.6-6.4 32-12.8l115.2-128 83.2 89.6c6.4 6.4 19.2 12.8 32 12.8s25.6-6.4 32-12.8c19.2-19.2 19.2-44.8 0-64L320 755.2l25.6-25.6c64 57.6 147.2 96 243.2 96 204.8 0 371.2-172.8 371.2-377.6s-166.4-384-371.2-384z m0 672c-153.6 0-281.6-128-281.6-288s128-288 281.6-288 281.6 128 281.6 288-128 288-281.6 288z"
                  fill="#d4237a" p-id="3839"></path></svg>
              </span>
            </div>
            <div class="li-top-right">
              <span>
              <svg style="margin-bottom: 2px;" t="1571883912820" class="icon" viewBox="0 0 1024 1024" version="1.1"
                   xmlns="http://www.w3.org/2000/svg" p-id="4778" width="8" height="8"><path
                d="M512 1020.736a103.68 103.68 0 0 1-81.344-39.168L145.344 625.024h8.832C118.144 560.64 95.36 497.152 95.36 416.704c0-233.6 192.384-423.68 428.224-416.448 220.416 6.016 402.112 190.528 404.928 411.2 0.96 72.96-16.896 138.752-58.624 213.568h8.128l-33.28 42.304-251.456 314.24c-19.84 24.896-49.408 39.168-81.28 39.168zM223.232 638.976l248.064 310.144c19.904 24.832 61.504 24.832 81.408 0l249.344-312.192c53.824-84.032 75.392-149.248 74.432-224.896C873.984 219.008 715.072 57.536 522.176 52.288a365.12 365.12 0 0 0-374.72 364.416c0 84.608 29.888 149.248 74.624 220.48l1.152 1.792z"
                fill="#dbdbdb" p-id="4779"></path><path
                d="M512 598.912A182.528 182.528 0 0 1 329.728 416.64 182.528 182.528 0 0 1 512 234.368a182.464 182.464 0 0 1 182.272 182.272A182.464 182.464 0 0 1 512 598.912z m0-312.384a130.368 130.368 0 0 0-130.176 130.176c0 71.808 58.432 130.176 130.176 130.176a130.304 130.304 0 0 0 130.176-130.176A130.432 130.432 0 0 0 512 286.528z"
                fill="#dbdbdb" p-id="4780"></path></svg>
                苏州
              </span>
              <span>
                <svg style="margin-bottom: 2px;" t="1571884048313" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="6139" width="10" height="10"><path
                  d="M832 884H193c-47.4 0-86-38.6-86-86V358c0-47.4 38.6-86 86-86h639c47.4 0 86 38.6 86 86v440c0 47.4-38.6 86-86 86zM193 306c-28.7 0-52 23.3-52 52v440c0 28.7 23.3 52 52 52h639c28.7 0 52-23.3 52-52V358c0-28.7-23.3-52-52-52H193z"
                  fill="#e6e6e6" p-id="6140"></path><path
                  d="M707 302.5h-34V226c0-28.7-23.3-52-52-52H404c-28.7 0-52 23.3-52 52v72.9h-34V226c0-47.4 38.6-86 86-86h217c47.4 0 86 38.6 86 86v76.5zM131.5 464.6h765.6v34H131.5z"
                  fill="#e6e6e6" p-id="6141"></path><path
                  d="M688 555.9c-9.4 0-17-7.6-17-17V416c0-9.4 7.6-17 17-17s17 7.6 17 17v122.9c0 9.4-7.6 17-17 17zM333 555.9c-9.4 0-17-7.6-17-17V416c0-9.4 7.6-17 17-17s17 7.6 17 17v122.9c0 9.4-7.6 17-17 17z"
                  fill="#e6e6e6" p-id="6142"></path></svg>
                1-2年
              </span>
              <span>
                <svg t="1571884093690" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="6688" width="14" height="14"><path
                  d="M895.1808 395.3664L521.728 194.8672c-6.0416-3.2768-13.312-3.2768-19.3536 0L128.8192 395.3664c-14.2336 7.68-14.4384 27.9552-0.3072 35.9424L264.192 507.5968v194.4576c0 7.8848 4.608 15.1552 11.6736 18.5344l230.1952 109.056c5.632 2.6624 12.0832 2.6624 17.7152-0.1024l224.4608-108.8512c7.0656-3.3792 11.5712-10.5472 11.5712-18.432V507.5968l73.9328-41.5744v310.6816c0 11.264 9.216 20.48 20.48 20.48s20.48-9.216 20.48-20.48V442.9824l20.7872-11.6736c14.1312-7.9872 13.9264-28.2624-0.3072-35.9424zM718.848 686.1824L514.8672 790.3232 305.152 685.9776V530.6368l196.8128 110.592c6.2464 3.4816 13.824 3.4816 20.0704 0l196.8128-110.592v155.5456z m-206.848-86.3232L181.0432 413.7984 512 236.1344l330.9568 177.664L512 599.8592z"
                  p-id="6689" fill="#dbdbdb"></path></svg>
                大专
              </span>
            </div>
          </div>
          <div class="li-bottom">
            <div class="li-bottom-left">
              <img v-show="index%2!=0" src="/static/image/wechat.jpg" class="li-bottom-left-img">
              <img v-show="index%2==0" src="/static/image/nv.jpg" class="li-bottom-left-img">
              <div class="li-bottom-left-div">
                <p class="li-bottom-p">期望职位&nbsp;<span class="li-bottom-p-name">软件开发工程师</span></p>
                <p class="li-bottom-p">期望薪资&nbsp;<span class="li-bottom-p-span">8000</span>
                </p>
              </div>
            </div>
            <div class="li-bottom-right">
              <span class="li-bottom-right-span">14天前</span>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
    export default {
        name: "resList",
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
    /*border: #151515 1px solid;*/
    border-bottom: #e0e1e3 1px dashed;
    min-height: 30px;
  }

  .li-top-left {
    left: 0;
    display: inline-block;
    float: left;
  }

  .li-top-right {
    right: 0;
    display: inline-block;
    float: right;
    color: #9d9ea0;
    font-size: 12px;
    line-height: 24px;
  }

  .icon-sex {
    line-height: 29px;
    margin-bottom: 6px;
  }

  .li-bottom {
    min-height: 30px;
  }

  .li-bottom-left {
    padding: 10px;
    display: inline-block;;
    width: 80%;
    vertical-align: top;
  }

  .li-bottom-left-img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    vertical-align: top;
  }

  .li-bottom-left-div {
    display: inline-block;
    margin: 0px 10px 0 10px;
  }

  .li-bottom-p {
    color: #151515;
    font-size: 14px;
    line-height: 25px;
  }

  .li-bottom-p-name {
    color: #52cac1;
  }

  .li-bottom-p-span {
    color: #FF0B00;
  }

  .li-bottom-right {
    display: inline-block;
    text-align: center;
    height: 50px;
    width: 20%;
    vertical-align: top;
  }

  .li-bottom-right {
    display: inline-block;
    padding-bottom: 0px;
    margin-top: 10px;
  }

  .li-bottom-right-span {
    color: #cccccc;
    font-size: 8px;
    float: bottom;
    display: inline-block;
    margin-top: 30px;
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
