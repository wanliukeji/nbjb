<template>
  <div class="model">
    <!--    <div class="model-top">-->
    <!--      <el-menu class="el-menu-demo" mode="horizontal" style="background: #f1f1f1;">-->
    <!--        <el-menu-item index="1">-->
    <!--          <a href="">-->
    <!--            <span class="model-a">首页</span>-->
    <!--          </a>-->
    <!--        </el-menu-item>-->
    <!--        <el-menu-item index="2">-->
    <!--          <a href="">-->
    <!--            <span class="model-a">-->
    <!--            职位-->
    <!--            </span>-->
    <!--          </a>-->
    <!--        </el-menu-item>-->
    <!--        <el-menu-item index="3">-->
    <!--          <a href="">-->
    <!--            <span class="model-a">-->
    <!--            公司-->
    <!--            </span>-->
    <!--          </a>-->
    <!--        </el-menu-item>-->
    <!--        <el-menu-item index="4">-->
    <!--          <a href="">-->
    <!--            <span class="model-a">-->
    <!--            简历-->
    <!--            </span>-->
    <!--          </a>-->
    <!--        </el-menu-item>-->
    <!--        <el-menu-item index="5">-->
    <!--          <a href="">-->
    <!--            <span class="model-a">-->
    <!--            求职-->
    <!--            </span>-->
    <!--          </a>-->
    <!--        </el-menu-item>-->
    <!--        <el-menu-item index="6">-->
    <!--          <a href="">-->
    <!--            <span class="model-a">-->
    <!--            招聘-->
    <!--            </span>-->
    <!--          </a>-->
    <!--        </el-menu-item>-->
    <!--        <el-menu-item index="7">-->
    <!--          <a href="">-->
    <!--            <span class="model-a">-->
    <!--            招聘会-->
    <!--            </span>-->
    <!--          </a>-->
    <!--        </el-menu-item>-->
    <!--        <el-menu-item index="8">-->
    <!--          <a href="">-->
    <!--            <span class="model-a">-->
    <!--            简历中心-->
    <!--            </span>-->
    <!--          </a>-->
    <!--        </el-menu-item>-->

    <!--      </el-menu>-->
    <!--    </div>-->
    <div class="model-head">
      <div class="nav-left">
        <ul class="nav-left-ul">
          <li class="nav-left-li" @mouseover="changeActive($event)" @mouseout="removeActive($event)">
            计算机/互联网/通信/电子
            <i class="right-arrow"></i>
          </li>
          <li class="nav-left-li" @mouseover="changeActive($event)" @mouseout="removeActive($event)">
            销售/客服/技术支持
            <i class="right-arrow"></i>
          </li>
          <li class="nav-left-li" @mouseover="changeActive($event)" @mouseout="removeActive($event)">
            会计/金融/银行/保险
            <i class="right-arrow"></i>
          </li>
          <li class="nav-left-li" @mouseover="changeActive($event)" @mouseout="removeActive($event)">
            生产/营运/采购/物流
            <i class="right-arrow"></i>
          </li>
          <li class="nav-left-li" @mouseover="changeActive($event)" @mouseout="removeActive($event)">
            生物/制药/医疗/护理
            <i class="right-arrow"></i>
          </li>
          <li class="nav-left-li" @mouseover="changeActive($event)" @mouseout="removeActive($event)">
            广告/市场/媒体/艺术
            <i class="right-arrow"></i>
          </li>
          <li class="nav-left-li" @mouseover="changeActive($event)" @mouseout="removeActive($event)">
            生活/服务业
            <i class="right-arrow"></i>
          </li>
          <li class="nav-left-li" v-model="info.val" @mouseover="changeActive($event)" @mouseout="removeActive($event)">
            人力/行政/管理
            <i class="right-arrow"></i>
          </li>
        </ul>
      </div>
      <div class="nav-center">
        <Carousel autoplay loop>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="/static/image/job.jpg" alt="" class="head-img">
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="/static/image/job.jpg" alt="" class="head-img">
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="/static/image/job.jpg" alt="" class="head-img">
            </div>
          </CarouselItem>
          <CarouselItem>
            <div class="demo-carousel">
              <img src="/static/image/job.jpg" alt="" class="head-img">
            </div>
          </CarouselItem>
        </Carousel>
      </div>
      <div class="nav-right">
        <Tabs style="float: left; position: relative; top: -20px;">
          <TabPane label="热点资讯"></TabPane>
        </Tabs>
      </div>

      <div class="hidden-div" ref="hide_div" @mouseover="changeActive($event)" @mouseout="removeActive($event)">
        <div class="hidden-div-center">
          <div class="hidden-div-model">
            <h4>
              <a href="" class="hidden-div-p">
                销售管理
              </a>
            </h4>
            <ul class="hidden-div-model-ul">
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
            </ul>
          </div>
          <div class="hidden-div-model">
            <h4>
              <a href="" class="hidden-div-p">
                销售管理
              </a>
            </h4>
            <ul class="hidden-div-model-ul">
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
            </ul>
          </div>
          <div class="hidden-div-model">
            <h4>
              <a href="" class="hidden-div-p">
                销售管理
              </a>
            </h4>
            <ul class="hidden-div-model-ul">
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
            </ul>
          </div>
          <div class="hidden-div-model">
            <h5>
              <a href="" class="hidden-div-p">销售管理</a>
            </h5>
            <ul class="hidden-div-model-ul">
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
            </ul>
          </div>
          <div class="hidden-div-model">
            <h5>
              <a href="" class="hidden-div-p">销售管理</a>
            </h5>
            <ul class="hidden-div-model-ul">
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
              <li class="hidden-div-model-li">
                <a href="" class="hidden-div-model-li-a">销售助理</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="nav-bottom">
      <ul class="nav-bottom-ul">
        <li class="nav-bottom-li">
          <a href="">
            <img src="/static/image/xiaobozhao.jpg" class="nav-bottom-li-img" alt="">
          </a>
        </li>
        <li class="nav-bottom-li">
          <a href="">
            <img src="/static/image/zhongguoyingdong.jpg" class="nav-bottom-li-img" alt="">
          </a>
        </li>
        <li class="nav-bottom-li">
          <img src="/static/image/guzhu.jpg" class="nav-bottom-li-img" alt="">
        </li>
        <li class="nav-bottom-li">
          <img src="/static/image/gb.jpg" class="nav-bottom-li-img" alt="">
        </li>
        <li class="nav-bottom-li">
          <img src="/static/image/hg.jpg" class="nav-bottom-li-img" alt="">
        </li>

      </ul>
    </div>

    <div class="model-div">
      <div class="model-div-title">
        <i class="row-left"></i>
        热门职位
        <i class="row-right"></i>
      </div>

      <div class="model-div-row">
        <ul class="model-div-row-ul">
          <li class="model-div-row-li-3"></li>
          <li class="model-div-row-li-3"></li>
          <li class="model-div-row-li-3"></li>
        </ul>
      </div>
    </div>

    <div class="model-div">
      <div class="model-div-title">
        <i class="row-left"></i>
        热门企业
        <i class="row-right"></i>
      </div>

      <div class="model-div-row">
        <ul class="model-div-row-ul">
          <li class="model-div-row-li-4"></li>
          <li class="model-div-row-li-4"></li>
          <li class="model-div-row-li-4"></li>
          <li class="model-div-row-li-4"></li>
        </ul>
      </div>
    </div>

    <div class="model-div">
      <div class="model-div-title">
        <i class="row-left"></i>
        招聘会
        <i class="row-right"></i>
      </div>

      <div class="model-div-row">
        <ul class="model-div-row-ul">
          <li class="model-div-row-li-2"></li>
          <li class="model-div-row-li-2"></li>
          <li class="model-div-row-li-2"></li>
          <li class="model-div-row-li-2"></li>
        </ul>
      </div>
    </div>

    <div class="model-foot">
      <div class="foot-left">

      </div>
      <div class="foot-center">
        <Tabs>
          <TabPane label="才市速递"></TabPane>
          <TabPane label="招聘现场"></TabPane>
          <TabPane label="培训进修"></TabPane>
          <TabPane label="薪酬福利"></TabPane>
          <TabPane label="社会保险"></TabPane>
        </Tabs>
      </div>
      <div class="foot-right">
        <Tabs style="float: left; position: relative; top: -20px;">
          <TabPane label="热点资讯"></TabPane>
        </Tabs>
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
                }
            }
        },
        created() {
        },
        methods: {
            changeActive(e) {
                let sub = e.currentTarget.firstElementChild;
                $(sub).css('display','none');
                this.$refs.hide_div.style.display = 'block';
            },
            removeActive(e) {
                let sub = e.currentTarget.firstElementChild;
                $(sub).css('display','block');
                this.$refs.hide_div.style.display = 'none';
            },
            showarrow() {

            }
        }
    }
</script>


<style scoped>

  .display_block {
    display: block;
  }

  .model {
    height: auto;
    width: 80%;
    min-width: 1200px;
    background: #f4f6f9;
  }

  .model-a {
    padding: 0 13px;
    font-size: 18px;
    font: 18px "Microsoft Yahei", "Hiragino Sans GB", "STHeiti", "\5B8B\4F53", sans-serif, tahoma, arial;
    color: black;
  }

  .model-top {
    width: auto;
    height: auto;
    min-width: 1200px;
    border: none;
  }

  .model-head {
    margin-top: 8px;
    width: 80%;
    height: 460px;
    min-width: 1200px;
  }

  .head-img {
    width: 685px;
    height: 440px;
  }

  .nav-left, .nav-center, nav-right {
    /*border: #151515 1px dashed;*/
    height: 100%;
  }

  .nav-left {
    position: relative;
    width: 270px;
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
    -moz-box-shadow: 0px 5px #cfcfcf;
    box-shadow: 0px 5px #cfcfcf;
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

  .nav-center {
    height: 440px;
    overflow: hidden;
    position: relative;
    width: 680px;
    display: inline-block;
    margin: 0 auto;
    margin-left: 0;
    float: left;
    -moz-box-shadow: 0px 5px #cfcfcf;
    box-shadow: 0px 5px #cfcfcf;
  }

  .nav-bottom {
    height: auto;
    width: 100%;
    min-height: 100px;
    margin: 0 auto;
  }

  .hidden-div {
    width: 680px;
    height: 440px;
    border: #1c8ce9 0.5px solid;
    position: absolute;
    z-index: 10;
    left: 270px;
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
    margin-bottom: 10px;
    /*border: 1px black solid;*/
    /*white-space: nowrap;*/
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
  }

  .hidden-div-model-li-a {
    font-size: 12px;
    color: #6b6b6b;
  }

  .hidden-div-model-li-a:hover {
    color: #0a6beb;;
  }

  .demo-carousel {
    width: 100%;
    height: 440px;
  }

  .nav-right {
    width: 250px;
    padding: 20px;
    height: 440px;
    position: relative;
    display: inline-block;
    background: #FFFFFF;
    -webkit-border-top-right-radius: 8px;
    -moz-border-top-right-radius: 8px;
    border-top-right-radius: 8px;
    -webkit-border-bottom-right-radius: 8px;
    -moz-border-bottom-right-radius: 8px;
    border-bottom-right-radius: 8px;
    float: left;
    -moz-box-shadow: 5px 5px #cfcfcf;
    box-shadow: 5px 5px #cfcfcf;
  }

  .nav-left-ul {
    display: inline-block;
    width: 100%;
    position: relative;
  }

  .nav-left-li {
    color: #fff;
    font-size: 16px;
    line-height: 38px;
    text-align: left;
    height: 44px;
    line-height: 44px;
    padding: 0 20px 0 30px;
  }

  .nav-left-li:hover {
    background: #257af0;
    cursor: pointer;
  }

  .nav-bottom-ul {
    position: absolute;
    width: 100%;
    min-width: 1200px;
  }

  .nav-bottom-li {
    width: auto;
    height: auto;
    display: inline-block;
    float: left;
  }

  .nav-bottom-li-img {
    width: 240px;
    height: 98px;
  }

  .model-div {
    width: 100%;
    height: auto;
    /*min-height: 350px;*/
    /*border: black 1px solid;*/
    position: relative;
    top: 20px;
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
    padding-left: 15px;
    padding-bottom: 15px;
    min-width: 1200px;
  }

  .model-div-row-ul {
    width: auto;
    height: auto;
  }

  .model-div-row-li-2 {
    background-color: #fff;
    display: inline-block;
    padding: 25px 20px;
    width: 566px;
    height: 170px;
    margin-right: 15px;
    margin-bottom: 15px;
    position: relative;
    -webkit-transition: ease-in-out .3s;
    -moz-transition: ease-in-out .3s;
    transition: ease-in-out .3s;
  }

  .model-div-row-li-3 {
    background-color: #fff;
    display: inline-block;
    padding: 25px 20px;
    width: 370px;
    height: 220px;
    margin-right: 15px;
    margin-bottom: 15px;
    position: relative;
    -webkit-transition: ease-in-out .3s;
    -moz-transition: ease-in-out .3s;
    transition: ease-in-out .3s;
  }

  .model-div-row-li-4 {
    display: inline-block;
    margin: 0 15px 15px 0;
    width: 273px;
    height: 390px;
    background-color: #fff;
    -webkit-transition: ease-in-out .3s;
    -moz-transition: ease-in-out .3s;
    transition: ease-in-out .3s;
  }

  .model-div-row-li-3:hover, .model-div-row-li-4:hover, .model-div-row-li-2:hover {
    -moz-box-shadow: 3px 3px 3px 3px #cfcfcf;
    box-shadow: 3px 3px 3px 3px #cfcfcf;
    cursor: pointer;
  }

  .model-foot {
    width: 80%;
    height: 460px;
    min-width: 1200px;
  }

  .foot-left {
    position: relative;
    width: 270px;
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
    right: 0;
    float: left;
    -moz-box-shadow: 0px 5px #cfcfcf;
    box-shadow: 0px 5px #cfcfcf;
    margin-left: 5px;
    margin-right: -15px;
  }

  .foot-center {
    height: 440px;
    overflow: hidden;
    margin-bottom: 10px;
    position: relative;
    width: 680px;
    display: inline-block;
    margin: 0 auto;
    margin-left: 0;
    background: #FFFFFF;
    -moz-box-shadow: 0px 5px #cfcfcf;
    box-shadow: 0px 5px #cfcfcf;
    padding-left: 40px;
    padding-right: 40px;
  }

  .foot-right {
    width: 250px;
    padding: 20px;
    height: 440px;
    position: relative;
    top: 0;
    display: inline-block;
    background: #FFFFFF;
    -webkit-border-top-right-radius: 8px;
    -moz-border-top-right-radius: 8px;
    border-top-right-radius: 8px;
    -webkit-border-bottom-right-radius: 8px;
    -moz-border-bottom-right-radius: 8px;
    border-bottom-right-radius: 8px;
    -moz-box-shadow: 5px 5px 5px #cfcfcf;
    box-shadow: 5px 5px 5px #cfcfcf;
    margin-left: -5px;
  }

</style>
