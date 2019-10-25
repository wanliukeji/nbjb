<template>
  <div class="model">
    <div class="model-head">
      <div class="nav-left">
        <ul class="nav-left-ul">
          <li class="nav-left-li" @mouseover="changeActive($event,item.code)" @mouseout="removeActive($event,item.code)"
              v-for="(item,index) in items.slice(12,22)" :key="index">
            {{item.name}}
            <i class="right-arrow"></i>
          </li>
        </ul>
      </div>
      <div class="nav-center">
        <Carousel autoplay loop>
          <CarouselItem v-for="item in imgs">
            <div class="demo-carousel">
              <img :src="item" alt="" class="head-img">
            </div>
          </CarouselItem>
        </Carousel>
      </div>
      <div class="hidden-div" ref="hide_div" @mouseover="showarrow($event)" @mouseout="hidearrow($event)">
        <div class="hidden-div-center">
          <div class="hidden-div-model" v-for="item in subItem">
            <h4>
              <a @click="goGroup(item.name)" class="hidden-div-p">
                {{item.name}}
              </a>
            </h4>
            <ul class="hidden-div-model-ul">
              <li class="hidden-div-model-li" v-for="sub in item.subLevelModelList" @click="goGroup(sub.name)">
                <a class="hidden-div-model-li-a">{{sub.name}}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="nav-right">
        <el-tabs v-model="activeName" style="margin-left: 15px;">
          <el-tab-pane label="热点资讯" name="first" class="nav-right-tab">
            <ul>
              <li class="nav-right-li">
                <img class="nav-right-li-img"/>
                <span class="nav-right-li-span">多地今年高考报名人数在减少北京连续多地今年高考报名人数在减少北京连续</span>
              </li>
              <li class="nav-right-li">
                <span class="nav-right-li-span">多地今年高考报名人数在减少北京连续多地今年高考报名人数在减少北京连续</span>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
        <div class="nav-right-btn-div">
          <Button type="primary" class="nav-right-btn">
            发布招聘职位
          </Button>
          <Button type="primary" class="nav-right-btn">
            入驻招聘单位
          </Button>
        </div>
      </div>
    </div>
    <br>
    <div class="nav-bottom">
      <ul class="nav-bottom-ul">
        <li class="nav-bottom-li" v-for="item in imgs"><a href=""><img :src="item" class="nav-bottom-li-img"></a></li>
      </ul>
    </div>
    <div class="model-div">
      <div class="model-div-title">
        <i class="row-left"></i>
        热门职位
        <i class="row-right"></i>
        <a class="model-div-title-right">查看更多</a>
      </div>
      <div class="model-div-row">
        <ul class="model-div-row-ul">
          <li class="model-div-row-li-3" v-for="item in jobs" @click="gotInfo(item.code)">
            <div class="hot-jop" :title="item.company">
              <h3>
                <a href="" class="hot-jop-title">{{item.name}}</a>
                <span class="hot-jop-gz">{{item.salary}}</span>
              </h3>
              <br>
              <div>
                <span class="hot-jop-yq">
                  <a class="hot-jop-yq-span">{{item.addr}}</a>
                  <a class="hot-jop-yq-span">{{item.education}}</a>
                  <a class="hot-jop-yq-span">{{item.undergo}}</a>
                  <a class="hot-jop-yq-span">{{item.jobType}}</a>
                </span>
                <span class="hot-jop-yq-time">[{{item.time}}]</span>
              </div>
              <div>
                <span class="hot-jop-yq-word">{{item.name}}</span>
              </div>
              <div class="hot-jop-gs">
                <div class="hot-jop-gs-logo">
                  <img :src="item.imgUrl" width="50" height="50"/>
                </div>
                <div class="hot-jop-gs-right">
                  <p class="hot-jop-gs-name">
                    {{item.company}}
                  </p>
                  <div class="hot-jop-gs-xx">
                    <span class="hot-jop-gs-xx-span">{{item.scale}}人</span>
                    <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                      <path
                        d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                        p-id="1710" fill="#bfbfbf"></path>
                    </svg>
                    <span class="hot-jop-gs-xx-span">{{item.type}}</span>
                    <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                      <path
                        d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                        p-id="1710" fill="#bfbfbf"></path>
                    </svg>
                    <span class="hot-jop-gs-xx-span">{{item.nature}}</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="model-div">
      <div class="model-div-title">
        <i class="row-left"></i>
        热门企业
        <i class="row-right"></i>
        <a class="model-div-title-right">查看更多</a>
      </div>
      <div class="model-div-row">
        <ul class="model-div-row-ul">
          <li class="model-div-row-li-4" v-for="item in companys" @click="gotCompanyList(item.code)">
            <div class="hot-qy-top">
              <img :src="item.imgUrl" class="hot-qy-img">
            </div>
            <div class="hot-qy-center">
              <img :src="item.logo"
                   class="hot-qy-center-img">
            </div>

            <div class="hot-qy-bottom">
              <a align="center" class="hot-qy-bottom-title">
                {{item.company}}
              </a>

              <div class="hot-qy-bottom-xx">
                <span class="hot-qy-bottom-span">{{item.scale}}人</span>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#bfbfbf"></path>
                </svg>
                <span class="hot-qy-bottom-span">{{item.type}}</span>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#bfbfbf"></path>
                </svg>
                <span class="hot-qy-bottom-span">{{item.nature}}</span>
              </div>
              <div>
                <a class="hot-qy-bottom-font">在招职位</a>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="20" height="20">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#444"></path>
                </svg>
                <a class="hot-qy-bottom-font">企业相册</a>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <br>
    <div class="model-div">
      <div class="model-div-title">
        <i class="row-left"></i>
        招聘会
        <i class="row-right"></i>
        <a class="model-div-title-right">查看更多</a>
      </div>

      <div class="model-div-row">
        <ul class="model-div-row-ul">
          <li class="model-div-row-li-2" v-for="item in fairs">
            <div class="work-w">
              <div class="work-w-right">
                <img
                  :src="item.imgUrl"
                  class="work-w-img">
              </div>
              <div class="work-w-left">
                <a href="">
                  <h4 class="work-w-left-title">
                    {{item.text}}
                  </h4>
                </a>
                <p class="work-w-left-time">{{item.time}}</p>
                <p class="work-w-left-address">{{item.addr}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <br>
    <div class="model-foot">
      <div class="foot-left">
        <button shape="circle" class="foot-left-btn">查看更多</button>
      </div>
      <div class="foot-center">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="才市速递" name="first">
            <div class="foot-center-tab">
              <div class="block foot-center-tab-child">
                <span class="demonstration"></span>
                <el-carousel trigger="click" height="150px">
                  <el-carousel-item><img
                    src="data:image/jpeg;base64,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"
                    alt="" width="250" height="150">
                  </el-carousel-item>
                  <el-carousel-item><img width="250" height="150">
                  </el-carousel-item>
                  <el-carousel-item><img src="/static/image/baidu.jpg" alt="" width="250" height="150">
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>
            <div class="foot-center-tab-fw">
              <ul>
                <li class="foot-center-tab-fw-li">
                  <a href="">
                    <span class="foot-center-tab-fw-li-span">山东威海市：为人才服务到每个细节</span>
                  </a>
                  <span class="foot-center-tab-fw-li-span-time">2016-09-19</span>
                </li>
                <li class="foot-center-tab-fw-li">
                  <a href="">
                    <span class="foot-center-tab-fw-li-span">山东威海市：为人才服务到每个细节</span>
                  </a>
                  <span class="foot-center-tab-fw-li-span-time">2016-09-19</span>
                </li>
                <li class="foot-center-tab-fw-li">
                  <a href="">
                    <span class="foot-center-tab-fw-li-span">山东威海市：为人才服务到每个细节</span>
                  </a>
                  <span class="foot-center-tab-fw-li-span-time">2016-09-19</span>
                </li>
                <li class="foot-center-tab-fw-li">
                  <a href="">
                    <span class="foot-center-tab-fw-li-span">山东威海市：为人才服务到每个细节</span>
                  </a>
                  <span class="foot-center-tab-fw-li-span-time">2016-09-19</span>
                </li>
                <li class="foot-center-tab-fw-li">
                  <a href="">
                    <span class="foot-center-tab-fw-li-span">山东威海市：为人才服务到每个细节</span>
                  </a>
                  <span class="foot-center-tab-fw-li-span-time">2016-09-19</span>
                </li>
                <li class="foot-center-tab-fw-li">
                  <a href="">
                    <span class="foot-center-tab-fw-li-span">山东威海市：为人才服务到每个细节</span>
                  </a>
                  <span class="foot-center-tab-fw-li-span-time">2016-09-19</span>
                </li>
                <li class="foot-center-tab-fw-li">
                  <a href="">
                    <span class="foot-center-tab-fw-li-span">山东威海市：为人才服务到每个细节</span>
                  </a>
                  <span class="foot-center-tab-fw-li-span-time">2016-09-19</span>
                </li>
                <li class="foot-center-tab-fw-li">
                  <a href="">
                    <span class="foot-center-tab-fw-li-span">山东威海市：为人才服务到每个细节</span>
                  </a>
                  <span class="foot-center-tab-fw-li-span-time">2016-09-19</span>
                </li>
              </ul>
            </div>
          </el-tab-pane>
          <el-tab-pane label="热点资讯" name="second"></el-tab-pane>
        </el-tabs>
      </div>
      <div class="foot-right">
        <el-tabs v-model="activeName" @tab-click="handleClick">
          <el-tab-pane label="热点资讯" name="first">
            <ul>
              <li class="nav-right-li">
                <img class="nav-right-li-img"
                     src=""
                     alt=""/>
                <span class="nav-right-li-span">多地今年高考报名人数在减少北京连续多地今年高考报名人数在减少北京连续</span>
              </li>
            </ul>
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: "jobNav",
        data() {
            return {
                info: {
                    val: ''
                },
                activeName: 'first',
                items: [],
                localmap: new Map(),
                querymap: new Map(),
                subItem: [],
                imgs: ['/static/image/job.jpg', '/static/image/google.jpg', 'static/image/microsoft.jpg', '/static/image/aali.jpg', '/static/image/sina.jpg'],
                jobs: [],
                companys: [],
                fairs: []
            }
        },
        created() {
            this.$http.get('/static/data/job_work.json').then(res => {
                var obj = res.data;
                if (res.status == 200) {
                    this.$notify({
                        title: '成功连接服务器',
                        message: '获取数据成功！',
                        type: 'success'
                    });
                    this.items = obj.data;
                    try {
                        this.forItem(this.items);
                    } catch (e) {
                        console.log(e);
                    }
                } else {
                    this.$notify.error({
                        title: '获取数据失败',
                        message: result,
                        type: 'error'
                    });
                }
            }).catch(function (result) {
                this.$notify.error({
                    title: '获取数据失败',
                    message: result,
                    type: 'error'
                });
            });

            this.$http.get('/static/data/jobs.json').then(res => {
                var obj = res.data;
                if (res.status == 200) {
                    this.$notify({
                        title: '成功连接服务器',
                        message: '获取数据成功！',
                        type: 'success'
                    });
                    this.jobs = obj.data;
                } else {
                    this.$notify.error({
                        title: '获取数据失败',
                        message: result,
                        type: 'error'
                    });
                }
            }).catch(function (result) {
                this.$notify.error({
                    title: '获取数据失败',
                    message: result,
                    type: 'error'
                });
            });

            this.$http.get('/static/data/company.json').then(res => {
                var obj = res.data;
                if (res.status == 200) {
                    this.$notify({
                        title: '成功连接服务器',
                        message: '获取数据成功！',
                        type: 'success'
                    });
                    this.companys = obj.data;
                } else {
                    this.$notify.error({
                        title: '获取数据失败',
                        message: result,
                        type: 'error'
                    });
                }
            }).catch(function (result) {
                this.$notify.error({
                    title: '获取数据失败',
                    message: result,
                    type: 'error'
                });
            });
            this.$http.get('/static/data/fair.json').then(res => {
                var obj = res.data;
                if (res.status == 200) {
                    this.$notify({
                        title: '成功连接服务器',
                        message: '获取数据成功！',
                        type: 'success'
                    });
                    this.fairs = obj.data;
                } else {
                    this.$notify.error({
                        title: '获取数据失败',
                        message: result,
                        type: 'error'
                    });
                }
            }).catch(function (result) {
                this.$notify.error({
                    title: '获取数据失败',
                    message: result,
                    type: 'error'
                });
            });
        },
        methods: {
            changeActive(e, code) {
                var obj = this.localmap.get(code);
                var entity = obj;
                this.subItem = entity.subLevelModelList;
                let parent = e.currentTarget;
                let sub = e.currentTarget.firstElementChild;
                $(parent).css('background-color', '#0a6beb');
                $(sub).css('display', 'none');
                this.$refs.hide_div.style.display = 'block';
            },
            removeActive: function (e, code) {
                // console.log(code);
                let parent = e.currentTarget;
                let sub = e.currentTarget.firstElementChild;
                $(sub).css('display', 'block');
                $(parent).css('background-color', '#1c8ce9');
                this.$refs.hide_div.style.display = 'none';
            },
            showarrow() {
                // alert(1.1);
                // let sub = e.currentTarget.firstElementChild;
                // $(sub).css('display','none');
                this.$refs.hide_div.style.display = 'block';
            },
            hidearrow() {
                // let sub = e.currentTarget.firstElementChild;
                // $(sub).css('display','block');
                this.$refs.hide_div.style.display = 'none';
            },
            handleClick(tab, event) {
                console.log(tab, event);
            },
            goGroup(val) {
                this.$router.push({name:'group'});
            },
            gotInfo(id) {
                this.$router.push({name:'info'});
            },
            gotCompanyList(id) {
                this.$router.push({name:'companyGroup'});
            },
            forItem(items) {
                try {
                    for (let i = 0; i < items.length; i++) {
                        var item = items[i];
                        this.querymap.set(item.code, item);
                        this.localmap.set(item.code, item);
                        for (let j = 0; j < item.subLevelModelList.length; j++) {
                            var sub = item.subLevelModelList[j];
                            this.querymap.set(sub.code, sub);
                            for (let k = 0; k < sub.subLevelModelList.length; k++) {
                                var son = sub.subLevelModelList[k];
                                this.querymap.set(son.code, son);
                            }
                        }
                    }
                } catch (e) {
                    console.error(e);
                }

            },
            setloacl(item) {
                localStorage.setItem(item.code, JSON.stringify(item));
            }
        }
    }
</script>

<style scoped>
  .model {
    margin: 0 auto;
    height: auto;
    width: 80%;
    min-width: 1200px;
  }

  .model-head {
    margin-top: 8px;
    width: 100%;
    height: 460px;
    min-width: 1200px;
    white-space: nowrap;
    position: relative;
  }

  .head-img {
    width: 100%;
    min-width: 685px;
    height: 440px;
  }

  .nav-left, .nav-center, nav-right {
    /*border: #151515 1px dashed;*/
    height: 100%;
  }

  .nav-left {
    position: relative;
    min-width: 270px;
    width: 25%;
    height: 440px;
    z-index: 2;
    background: #1c8ce9;
    padding-top: 10px;
    -webkit-border-top-left-radius: 8px;
    -moz-border-top-left-radius: 8px;
    border-top-left-radius: 8px;
    -webkit-border-bottom-left-radius: 8px;
    -moz-border-bottom-left-radius: 8px;
    border-bottom-left-radius: 8px;
    display: inline-block;
    margin: 0 auto;
    right: 0;
    float: left;
    -moz-box-shadow: 0px 5px #d6d6d6;
    box-shadow: 0px 5px #d6d6d6;
  }

  .right-arrow {
    float: right;
    margin-top: 18px;
    border-right: 1px solid #dbdbdb;
    border-bottom: 1px solid #dbdbdb;
    width: 8px;
    height: 8px;
    -moz-transform: rotate(-45deg);
    -o-transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }

  .nav-center, .foot-center {
    height: 440px;
    overflow: hidden;
    position: relative;
    min-width: 680px;
    width: 50%;
    display: inline-block;
    margin: 0 auto;
    margin-left: 0;
    float: left;
    -moz-box-shadow: 0px 5px #cfcfcf;
    box-shadow: 0px 5px #cfcfcf;
  }

  .nav-bottom {
    padding: 0;
    height: auto;
    width: 100%;
    min-height: 100px;
    margin-top: 15px;
    display: block;
  }

  .hidden-div {
    min-width: 680px;
    height: 440px;
    position: absolute;
    z-index: 10;
    width: 50%;
    left: 25%;
    top: auto;
    display: none;
    background: #FFFFFF;
    padding: 25px;
    overflow-y: scroll;
    /*overflow-x: scroll;*/
  }

  .hidden-div-center {
    /*border: 1px black solid;*/
    width: auto;
    height: auto;
    position: relative;
    overflow-y: auto;
  }

  .hidden-div-model {
    width: auto;
    height: auto;
    position: relative;
    display: block;
    padding-bottom: 15px;
    margin-bottom: 20px;
  }

  .hidden-div-model-ul {
    width: auto;
    height: auto;
  }

  .hidden-div-model-li {
    display: inline-block;
    width: auto;
    height: auto;
    text-align: left;
    float: left;
    margin-right: 20px;
    margin-bottom: 10px;
  }

  .hidden-div-p {
    font-size: 14px;
    color: #151515;
    text-align: left;
    width: 100%;
    display: block;
    float: left;
    margin-bottom: 10px;
    border-bottom: #dfdfdf solid 1px;
    padding-bottom: 5px;
  }

  .hidden-div-model-li-a {
    font-size: 12px;
    color: #6b6b6b;
  }

  .hidden-div-model-li-a:hover {
    color: #0a6beb;
    cursor: pointer;
  }

  .demo-carousel {
    width: 100%;
    height: 440px;
  }

  .nav-right, .foot-right {
    width: auto;
    padding: 0 auto;
    height: 440px;
    position: relative;
    background: #FFFFFF;
    -webkit-border-top-right-radius: 8px;
    -moz-border-top-right-radius: 8px;
    border-top-right-radius: 8px;
    -webkit-border-bottom-right-radius: 8px;
    -moz-border-bottom-right-radius: 8px;
    border-bottom-right-radius: 8px;
    -moz-box-shadow: 5px 5px #cfcfcf;
    box-shadow: 5px 5px #cfcfcf;
    overflow-y: hidden;
    margin: 0 auto;
    /*padding-left: 15px;*/
    padding-right: 15px;
    overflow-x: hidden;
  }

  .nav-right-tab {
    float: left;
    position: relative;
    top: -20px;
    margin: 20px;
  }

  .nav-right-btn-div {
    position: absolute;
    z-index: 10;
    bottom: 18px;
    width: 100%;
    height: auto;
    margin: 0 auto;
  }

  .nav-right-btn {
    display: block;
    width: 70%;
    font-size: 16px;
    padding: 3px;
    margin: 0 auto;
    margin-top: 10px;
    float: bottom;
  }

  .nav-right-li {
    /*line-height: 40px;*/
    margin-bottom: 10px;
  }

  .nav-right-li-img {
    height: 50px;
    width: 50px;
    display: inline-block;
    float: left;
  }

  .nav-right-li-span {
    font-size: 16px;
    color: #4f4f4f;
    position: relative;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    white-space: normal;
    height: 50px;
    text-align: left;
    padding-left: 10px;
  }

  .nav-right-li-span:hover {
    cursor: pointer;
    color: #257af0;
  }

  .nav-left-ul {
    display: inline-block;
    width: 100%;
    position: relative;
  }

  .nav-left-li {
    color: #fff;
    font-size: 16px;
    text-align: left;
    height: 44px;
    line-height: 32px;
    padding: 0 20px 0 30px;
  }

  .nav-left-li:hover {
    background: #257af0;
    cursor: pointer;
  }

  .nav-bottom-ul {
    position: relative;
    width: 100%;
    min-width: 1200px;
  }

  .nav-bottom-li {
    width: 20%;
    height: auto;
    display: inline-block;
    float: left;
  }

  .nav-bottom-li-img {
    float: left;
    padding: 0 auto;
    margin: 0 auto;
    width: 100%;
    min-width: 240px;
    height: 110px;
    display: block;
  }

  .model-div {
    width: 100%;
    height: auto;
    position: relative;
    top: 20px;
    min-width: 1200px;
    margin: 0 auto;
    position: relative;
    padding: 0 auto;
  }

  .model-div-title {
    display: block;
    font-size: 1.17em;
    margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-size: 26px;
    text-align: center;
    font-family: microsoft yahei;
  }

  .model-div-title-right {
    font-size: 13px;
    float: right;
    display: block;
    position: absolute;
    right: 20px;
  }

  .row-left {
    content: '';
    display: inline-block;
    width: 100px;
    height: 1px;
    background-color: #c4c4c4;
    vertical-align: middle;
    margin-right: 20px;
  }

  .row-right {
    content: '';
    display: inline-block;
    width: 100px;
    height: 1px;
    background-color: #c4c4c4;
    vertical-align: middle;
    margin-left: 20px;
  }

  .model-div-row {
    position: relative;
    width: auto;
    height: auto;
    margin: 0 auto;
    min-width: 1200px;
    margin: 0 auto;
    padding: 0 auto;
  }

  .model-div-row-ul {
    width: auto;
    height: auto;
    margin: 0 auto;
    padding: 0 auto;
  }

  .model-div-row-li-2 {
    width: 49.6%;
    height: 170px;
    background-color: #fff;
    display: inline-block;
    padding: 25px 20px;
    min-width: 590px;
    min-height: 170px;
    position: relative;
    -webkit-transition: ease-in-out .3s;
    -moz-transition: ease-in-out .3s;
    transition: ease-in-out .3s;
  }

  .model-div-row-li-3 {
    background-color: #fff;
    display: inline-block;
    padding: 25px 20px;
    margin: 0 auto;
    min-width: 396px;
    min-height: 220px;
    position: relative;
    -webkit-transition: ease-in-out .3s;
    -moz-transition: ease-in-out .3s;
    transition: ease-in-out .3s;
    width: 33%;
    height: 33%;
  }

  .model-div-row-li-4 {
    display: inline-block;
    width: 24.6%;
    min-width: 285px;
    height: 390px;
    min-height: 390px;
    background-color: #fff;
    -webkit-transition: ease-in-out .3s;
    -moz-transition: ease-in-out .3s;
    transition: ease-in-out .3s;
    margin: 0 auto;
    margin-top: 5px;
  }

  .model-div-row-li-3:hover, .model-div-row-li-4:hover, .model-div-row-li-2:hover {
    -moz-box-shadow: 3px 3px 3px 3px #cfcfcf;
    box-shadow: 3px 3px 3px 3px #cfcfcf;
    cursor: pointer;
  }

  .model-foot {
    width: 100%;
    height: 460px;
    min-width: 1200px;
  }

  .foot-left {
    position: relative;
    min-width: 270px;
    width: 25%;
    /*width: 270px;*/
    height: 440px;
    z-index: 2;
    background: #1c8ce9;
    padding-top: 10px;
    /*padding-left: 15px ;*/
    -webkit-border-top-left-radius: 8px;
    -moz-border-top-left-radius: 8px;
    border-top-left-radius: 8px;
    -webkit-border-bottom-left-radius: 8px;
    -moz-border-bottom-left-radius: 8px;
    border-bottom-left-radius: 8px;
    display: inline-block;
    margin: 0 auto;
    /*right: 0;*/
    float: left;
    -moz-box-shadow: 0px 5px #cfcfcf;
    box-shadow: 0px 5px #cfcfcf;
    /*margin-left: 5px;*/
    /*margin-right: -15px;*/
    background: url('/static/image/aali.jpg') no-repeat;
    background-size: cover;
    margin: 0.1px;
  }

  .foot-left-btn {
    position: absolute;
    padding: 5px;
    min-width: 130px;
    background-color: #0a6beb;
    border: none;
    color: white;
    margin: 0 auto;
    margin-top: 370px;
    text-align: center;
    border-radius: 20px;
    -webkit-border-radius: 20px;
    -moz-border-radius: 20px;
    margin-left: 31%;
  }

  .foot-center {
    position: relative;
    width: 50%;
    padding-left: 20px;
    padding-right: 20px;
    z-index: 10;
    background-color: #FFFFFF;
  }

  .foot-right {
    position: relative;
    width: auto;
    max-width: 24.3%;
    padding: 20px;
    margin-left: 0px;
    border-left: 0.5px #ececec solid;
  }

  .hot-jop {
    position: absolute;
    width: 89%;
    height: 81%;
    margin-top: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .hot-jop-title {
    font-size: 18px;
    color: #38383b;
    float: left;
  }

  .hot-jop-gz {
    color: red;
    font-family: Tahoma, 'Microsoft Yahei', 'Simsun';
    float: right;
    font-size: 16px;
    font-weight: bolder;
  }

  .hot-jop-yq {
    float: left;
    left: 0px;
    position: absolute;
  }

  .hot-jop-yq-span {
    font-size: 15px;
    color: #8a8b91;
    line-height: 40px;
  }

  .hot-jop-yq-time {
    font-size: 12px;
    color: #c6c7d0;
    line-height: 40px;
    float: right;
  }

  .hot-jop-yq-word {
    position: absolute;
    display: inline-block;
    padding: 0 10px;
    height: 22px;
    line-height: 22px;
    font-size: 12px;
    color: #8a8b91;
    background-color: #f4f6f9;
    margin-right: 15px;
    top: 65px;
    left: 0px;
  }

  .hot-jop-gs {
    border-top: 1px #eaebee solid;
    width: 100%;
    height: 75px;
    position: absolute;
    bottom: 0;
    padding-top: 10px;
  }

  .hot-jop-gs-logo {
    border: #0a6beb 1px solid;
    float: left;
  }

  .hot-jop-gs-right {
    float: left;
    display: inline-block;
    padding-left: 10px;
  }

  .hot-jop-gs-name {
    font-size: 15px;
    color: #4b4c4f;
    margin-bottom: 10px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    display: block;
  }

  .hot-jop-gs-xx {
    display: block;
    position: absolute;
  }

  .hot-jop-gs-xx-span {
    font-size: 12px;
    color: #8a8b91;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .hot-jop-title:hover, .hot-jop-gs-name:hover, hidden-div-model-li-a:hover, .hidden-div-model-li-a:hover {
    color: #2d8cf0;;
    cursor: pointer;
  }

  .hot-qy-top {
    position: relative;
    margin: 0 auto;
    width: 100%;
    padding: 12px;
  }

  .hot-qy-img {
    position: relative;
    min-width: 260px;
    width: 260px;
    height: 160px;
    min-height: 160px;
    margin: 0 auto;
    width: 100%;
  }

  .hot-qy-img:hover {
     transform: scale(1.06);
    -webkit-transform: scale(1.06);
    -o-transform: scale(1.06);
    -ms-transform: scale(1.06);
    -moz-transform: scale(1.06);
    -webkit-transition: All 1.2s ease-in-out;
    /*z-index: -10;*/
  }

  .hot-qy-center {
    min-width: 90px;
    min-height: 90px;
    width: 20%;
    height: 20%;
    border-radius: 50%;
    position: relative;
    z-index: 10;
    top: -50px;
    margin: 0 auto;
  }

  .hot-qy-center-img {
    border-radius: 50%;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    width: 90px;
    height: 90px;
    position: relative;
  }

  .hot-qy-bottom {
    position: relative;
    height: auto;
    margin: 0 auto;
    text-align: center;
    margin-top: -30px;
  }

  .hot-qy-bottom-title {
    font-size: 18px;
    color: #4f4f4f;
    font-weight: bold;
    display: block;
    margin: 0 auto;
    line-height: 45px;
  }

  .hot-qy-bottom-xx {
    position: relative;
    margin: 0 auto;
    line-height: 45px;
    max-width: 280px;
  }

  .hot-qy-bottom-span {
    font-size: 12px;
    color: #8a8b91;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
    margin: 0 auto;
  }

  .hot-qy-bottom-font {
    color: #333;
    font-size: 16px;
    word-break: break-word;
  }

  .hot-qy-bottom > a:hover {
    color: #53eb45;
  }

  .hot-qy-bottom-font:hover {
    color: #53eb45;
  }

  .work-w {
    margin: 0 auto;
    padding: 0 auto;
    height: 100%;
    width: 100%;
  }

  .work-w-right {
    display: inline-block;
    float: left;
    height: 100%;
    min-width: 150px;
    width: 40%;
    margin: 0 auto;
    position: relative;
    vertical-align: middle;
    text-align: left;
  }

  .work-w-img {
    min-width: 150px;
    width: 100%;
    min-height: 120px;
    height: 100%;
  }

  .work-w-img:hover {
    -webkit-transition: All 0.4s ease-in-out;
     transform: scale(1.08);
    -webkit-transform: scale(1.08);
    -o-transform: scale(1.08);
    -ms-transform: scale(1.08);
    -moz-transform: scale(1.08);
  }

  .work-w-left {
    display: inline-block;
    float: left;
    /*min-width: 380px;*/
    height: 70%;
    position: absolute;
    width: 55%;
    margin-left: 15px;
  }

  .work-w-left-title {
    font-size: 18px;
    color: #38383b;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin-bottom: 35px;
    text-align: left;
  }

  .work-w-left-title:hover {
    color: #53eb45;
  }


  .work-w-left-time {
    font-size: 17px;
    color: #00c192;
    margin-bottom: 15px;
    text-align: left;
  }

  .work-w-left-address {
    font-size: 15px;
    color: #919191;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: left;
  }

  .foot-center-tab {
    display: inline-block;
    float: left;
    width: auto;
    height: auto;
  }

  .foot-center-tab-child {
    width: 260px;
    margin-bottom: 20px;
  }

  .foot-center-tab-fw {
    width: 340px;
    height: 100%;
    position: relative;
    display: inline-block;
    float: right;
  }

  .foot-center-tab-fw-li {
    height: 35px;
  }

  .foot-center-tab-fw-li-span {
    float: left;
    max-width: 270px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 200px;
    color: black;
  }

  .foot-center-tab-fw-li-span-time {
    font-size: 16px;
    color: #ababab;
    float: right;
    font-family: 宋体;
  }
</style>


