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
          <li class="nav-left-li" v-model="info.val" @mouseover="changeActive($event)" @mouseout="removeActive($event)">
            其他
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
        <Tabs style="float: left; position: relative; top: -20px; ">
          <TabPane label="热点资讯">
            <ul>
              <li class="nav-right-li">
                <img class="nav-right-li-img"
                     src="https://uploads.ihuoniao.cn/job/thumb/large/2018/10/12/15393062609845.jpg" alt=""/>
                <span class="nav-right-li-span">多地今年高考报名人数在减少北京连续多地今年高考报名人数在减少北京连续</span>
              </li>
              <li class="nav-right-li">
                <img class="nav-right-li-img"
                     src="https://uploads.ihuoniao.cn/job/thumb/large/2018/10/12/15393062609845.jpg" alt=""/>
                <span class="nav-right-li-span">多地今年高考报名人数在减少北京连续多地今年高考报名人数在减少北京连续</span>
              </li>
              <li class="nav-right-li">
                <img class="nav-right-li-img"
                     src="https://uploads.ihuoniao.cn/job/thumb/large/2018/10/12/15393062609845.jpg" alt=""/>
                <span class="nav-right-li-span">多地今年高考报名人数在减少北京连续多地今年高考报名人数在减少北京连续</span>
              </li>
              <li class="nav-right-li">
                <img class="nav-right-li-img"
                     src="https://uploads.ihuoniao.cn/job/thumb/large/2018/10/12/15393062609845.jpg" alt=""/>
                <span class="nav-right-li-span">多地今年高考报名人数在减少北京连续多地今年高考报名人数在减少北京连续</span>
              </li>
              <li class="nav-right-li">
                <img class="nav-right-li-img"
                     src="https://uploads.ihuoniao.cn/job/thumb/large/2018/10/12/15393062609845.jpg" alt=""/>
                <span class="nav-right-li-span">多地今年高考报名人数在减少北京连续多地今年高考报名人数在减少北京连续</span>
              </li>
              <li class="nav-right-li">
                <img class="nav-right-li-img"
                     src="https://uploads.ihuoniao.cn/job/thumb/large/2018/10/12/15393062609845.jpg" alt=""/>
                <span class="nav-right-li-span">多地今年高考报名人数在减少北京连续多地今年高考报名人数在减少北京连续</span>
              </li>
              <li class="nav-right-li">
                <img class="nav-right-li-img"
                     src="https://uploads.ihuoniao.cn/job/thumb/large/2018/10/12/15393062609845.jpg" alt=""/>
                <span class="nav-right-li-span">多地今年高考报名人数在减少北京连续多地今年高考报名人数在减少北京连续</span>
              </li>
            </ul>
          </TabPane>
        </Tabs>
      </div>

      <div class="hidden-div" ref="hide_div" @mouseover="showarrow($event)" @mouseout="hidearrow($event)">
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
          <li class="model-div-row-li-3">
            <div class="hot-jop" title="太极云软">
              <h3>
                <a href="" class="hot-jop-title">JAVA工程师</a>
                <span class="hot-jop-gz">8000-10000</span>
              </h3>
              <br>
              <div>
                <span class="hot-jop-yq">
                  <a class="hot-jop-yq-span">北仑</a>
                  <a class="hot-jop-yq-span">大专</a>
                  <a class="hot-jop-yq-span">2-3年</a>
                  <a class="hot-jop-yq-span">全职</a>
                </span>
                <span class="hot-jop-yq-time">[7-18]</span>
              </div>
              <div>
                <span class="hot-jop-yq-word">高级软件工程师</span>
              </div>
              <div class="hot-jop-gs">
                <div class="hot-jop-gs-logo">
                  <img src="https://uploads.ihuoniao.cn/job/card/large/2019/03/18/15529101108532.png" alt="" width="50"
                       height="50"/>
                </div>
                <div class="hot-jop-gs-right">
                  <p class="hot-jop-gs-name">
                    太极云软
                  </p>
                  <div class="hot-jop-gs-xx">
                    <span class="hot-jop-gs-xx-span">1-49人</span>
                    <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                      <path
                        d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                        p-id="1710" fill="#bfbfbf"></path>
                    </svg>
                    <span class="hot-jop-gs-xx-span">国有企业</span>
                    <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                      <path
                        d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                        p-id="1710" fill="#bfbfbf"></path>
                    </svg>
                    <span class="hot-jop-gs-xx-span">计算机/通信/互联网/通信</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="model-div-row-li-3">
            <div class="hot-jop" title="太极云软">
              <h3>
                <a href="" class="hot-jop-title">JAVA工程师</a>
                <span class="hot-jop-gz">8000-10000</span>
              </h3>
              <br>
              <div>
                <span class="hot-jop-yq">
                  <a class="hot-jop-yq-span">北仑</a>
                  <a class="hot-jop-yq-span">大专</a>
                  <a class="hot-jop-yq-span">2-3年</a>
                  <a class="hot-jop-yq-span">全职</a>
                </span>
                <span class="hot-jop-yq-time">[7-18]</span>
              </div>
              <div>
                <span class="hot-jop-yq-word">高级软件工程师</span>
              </div>
              <div class="hot-jop-gs">
                <div class="hot-jop-gs-logo">
                  <img src="https://uploads.ihuoniao.cn/job/card/large/2019/03/18/15529101108532.png" alt="" width="50"
                       height="50"/>
                </div>
                <div class="hot-jop-gs-right">
                  <p class="hot-jop-gs-name">
                    太极云软
                  </p>
                  <div class="hot-jop-gs-xx">
                    <span class="hot-jop-gs-xx-span">1-49人</span>
                    <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                      <path
                        d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                        p-id="1710" fill="#bfbfbf"></path>
                    </svg>
                    <span class="hot-jop-gs-xx-span">国有企业</span>
                    <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                      <path
                        d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                        p-id="1710" fill="#bfbfbf"></path>
                    </svg>
                    <span class="hot-jop-gs-xx-span">计算机/通信/互联网/通信</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="model-div-row-li-3">
            <div class="hot-jop" title="太极云软">
              <h3>
                <a href="" class="hot-jop-title">JAVA工程师</a>
                <span class="hot-jop-gz">8000-10000</span>
              </h3>
              <br>
              <div>
                <span class="hot-jop-yq">
                  <a class="hot-jop-yq-span">北仑</a>
                  <a class="hot-jop-yq-span">大专</a>
                  <a class="hot-jop-yq-span">2-3年</a>
                  <a class="hot-jop-yq-span">全职</a>
                </span>
                <span class="hot-jop-yq-time">[7-18]</span>
              </div>
              <div>
                <span class="hot-jop-yq-word">高级软件工程师</span>
              </div>
              <div class="hot-jop-gs">
                <div class="hot-jop-gs-logo">
                  <img src="https://uploads.ihuoniao.cn/job/card/large/2019/03/18/15529101108532.png" alt="" width="50"
                       height="50"/>
                </div>
                <div class="hot-jop-gs-right">
                  <p class="hot-jop-gs-name">
                    太极云软
                  </p>
                  <div class="hot-jop-gs-xx">
                    <span class="hot-jop-gs-xx-span">1-49人</span>
                    <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                      <path
                        d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                        p-id="1710" fill="#bfbfbf"></path>
                    </svg>
                    <span class="hot-jop-gs-xx-span">国有企业</span>
                    <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                      <path
                        d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                        p-id="1710" fill="#bfbfbf"></path>
                    </svg>
                    <span class="hot-jop-gs-xx-span">计算机/通信/互联网/通信</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="model-div-row-li-3">
            <div class="hot-jop" title="太极云软">
              <h3>
                <a href="" class="hot-jop-title">JAVA工程师</a>
                <span class="hot-jop-gz">8000-10000</span>
              </h3>
              <br>
              <div>
                <span class="hot-jop-yq">
                  <a class="hot-jop-yq-span">北仑</a>
                  <a class="hot-jop-yq-span">大专</a>
                  <a class="hot-jop-yq-span">2-3年</a>
                  <a class="hot-jop-yq-span">全职</a>
                </span>
                <span class="hot-jop-yq-time">[7-18]</span>
              </div>
              <div>
                <span class="hot-jop-yq-word">高级软件工程师</span>
              </div>
              <div class="hot-jop-gs">
                <div class="hot-jop-gs-logo">
                  <img src="https://uploads.ihuoniao.cn/job/card/large/2019/03/18/15529101108532.png" alt="" width="50"
                       height="50"/>
                </div>
                <div class="hot-jop-gs-right">
                  <p class="hot-jop-gs-name">
                    太极云软
                  </p>
                  <div class="hot-jop-gs-xx">
                    <span class="hot-jop-gs-xx-span">1-49人</span>
                    <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                      <path
                        d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                        p-id="1710" fill="#bfbfbf"></path>
                    </svg>
                    <span class="hot-jop-gs-xx-span">国有企业</span>
                    <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                      <path
                        d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                        p-id="1710" fill="#bfbfbf"></path>
                    </svg>
                    <span class="hot-jop-gs-xx-span">计算机/通信/互联网/通信</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="model-div-row-li-3">
            <div class="hot-jop" title="太极云软">
              <h3>
                <a href="" class="hot-jop-title">JAVA工程师</a>
                <span class="hot-jop-gz">8000-10000</span>
              </h3>
              <br>
              <div>
                <span class="hot-jop-yq">
                  <a class="hot-jop-yq-span">北仑</a>
                  <a class="hot-jop-yq-span">大专</a>
                  <a class="hot-jop-yq-span">2-3年</a>
                  <a class="hot-jop-yq-span">全职</a>
                </span>
                <span class="hot-jop-yq-time">[7-18]</span>
              </div>
              <div>
                <span class="hot-jop-yq-word">高级软件工程师</span>
              </div>
              <div class="hot-jop-gs">
                <div class="hot-jop-gs-logo">
                  <img src="https://uploads.ihuoniao.cn/job/card/large/2019/03/18/15529101108532.png" alt="" width="50"
                       height="50"/>
                </div>
                <div class="hot-jop-gs-right">
                  <p class="hot-jop-gs-name">
                    太极云软
                  </p>
                  <div class="hot-jop-gs-xx">
                    <span class="hot-jop-gs-xx-span">1-49人</span>
                    <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                      <path
                        d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                        p-id="1710" fill="#bfbfbf"></path>
                    </svg>
                    <span class="hot-jop-gs-xx-span">国有企业</span>
                    <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                      <path
                        d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                        p-id="1710" fill="#bfbfbf"></path>
                    </svg>
                    <span class="hot-jop-gs-xx-span">计算机/通信/互联网/通信</span>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li class="model-div-row-li-3">
            <div class="hot-jop" title="太极云软">
              <h3>
                <a href="" class="hot-jop-title">JAVA工程师</a>
                <span class="hot-jop-gz">8000-10000</span>
              </h3>
              <br>
              <div>
                <span class="hot-jop-yq">
                  <a class="hot-jop-yq-span">北仑</a>
                  <a class="hot-jop-yq-span">大专</a>
                  <a class="hot-jop-yq-span">2-3年</a>
                  <a class="hot-jop-yq-span">全职</a>
                </span>
                <span class="hot-jop-yq-time">[7-18]</span>
              </div>
              <div>
                <span class="hot-jop-yq-word">高级软件工程师</span>
              </div>
              <div class="hot-jop-gs">
                <div class="hot-jop-gs-logo">
                  <img src="/static/image/timg%20(3).jpg" alt="" width="50"
                       height="50"/>
                </div>
                <div class="hot-jop-gs-right">
                  <p class="hot-jop-gs-name">
                    太极云软
                  </p>
                  <div class="hot-jop-gs-xx">
                    <span class="hot-jop-gs-xx-span">1-49人</span>
                    <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                      <path
                        d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                        p-id="1710" fill="#bfbfbf"></path>
                    </svg>
                    <span class="hot-jop-gs-xx-span">国有企业</span>
                    <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                      <path
                        d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                        p-id="1710" fill="#bfbfbf"></path>
                    </svg>
                    <span class="hot-jop-gs-xx-span">计算机/通信/互联网/通信</span>
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
      </div>
      <div class="model-div-row">
        <ul class="model-div-row-ul">
          <li class="model-div-row-li-4">
            <div class="hot-qy-top">
              <img src="/static/image/yangjiaxi_chenwu-007.jpg" class="hot-qy-img">
            </div>
            <div class="hot-qy-center">
              <img src="/static/image/timg%20(3).jpg" class="hot-qy-center-img">
            </div>

            <div class="hot-qy-bottom">
              <a align="center" class="hot-qy-bottom-title">
                KK科技顶顶顶
              </a>

              <div class="hot-qy-bottom-xx">
                <span class="hot-qy-bottom-span">1-49人</span>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#bfbfbf"></path>
                </svg>
                <span class="hot-qy-bottom-span">国有企业</span>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#bfbfbf"></path>
                </svg>
                <span class="hot-qy-bottom-span">计算机/通信/互联网/通信</span>
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
          <li class="model-div-row-li-4">
            <div class="hot-qy-top">
              <img src="/static/image/yangjiaxi_chenwu-007.jpg" class="hot-qy-img">
            </div>
            <div class="hot-qy-center">
              <img src="/static/image/timg%20(3).jpg" class="hot-qy-center-img">
            </div>

            <div class="hot-qy-bottom">
              <a align="center" class="hot-qy-bottom-title">
                KK科技顶顶顶
              </a>

              <div class="hot-qy-bottom-xx">
                <span class="hot-qy-bottom-span">1-49人</span>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#bfbfbf"></path>
                </svg>
                <span class="hot-qy-bottom-span">国有企业</span>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#bfbfbf"></path>
                </svg>
                <span class="hot-qy-bottom-span">计算机/通信/互联网/通信</span>
              </div>
              <div>
                <a style="color: #333; font-size: 16px; word-break: break-word;">在招职位</a>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="20" height="20">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#444"></path>
                </svg>
                <a style="color: #333; font-size: 16px; word-break: break-word;">企业相册</a>
              </div>
            </div>
          </li>
          <li class="model-div-row-li-4">
            <div class="hot-qy-top">
              <img src="/static/image/yangjiaxi_chenwu-007.jpg" class="hot-qy-img">
            </div>
            <div class="hot-qy-center">
              <img src="/static/image/timg%20(3).jpg" class="hot-qy-center-img">
            </div>

            <div class="hot-qy-bottom">
              <a align="center" class="hot-qy-bottom-title">
                KK科技顶顶顶
              </a>

              <div class="hot-qy-bottom-xx">
                <span class="hot-qy-bottom-span">1-49人</span>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#bfbfbf"></path>
                </svg>
                <span class="hot-qy-bottom-span">国有企业</span>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#bfbfbf"></path>
                </svg>
                <span class="hot-qy-bottom-span">计算机/通信/互联网/通信</span>
              </div>
              <div>
                <a style="color: #333; font-size: 16px; word-break: break-word;">在招职位</a>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="20" height="20">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#444"></path>
                </svg>
                <a style="color: #333; font-size: 16px; word-break: break-word;">企业相册</a>
              </div>
            </div>
          </li>
          <li class="model-div-row-li-4">
            <div class="hot-qy-top">
              <img src="/static/image/yangjiaxi_chenwu-007.jpg" class="hot-qy-img">
            </div>
            <div class="hot-qy-center">
              <img src="/static/image/timg%20(3).jpg" class="hot-qy-center-img">
            </div>

            <div class="hot-qy-bottom">
              <a align="center" class="hot-qy-bottom-title">
                KK科技顶顶顶
              </a>

              <div class="hot-qy-bottom-xx">
                <span class="hot-qy-bottom-span">1-49人</span>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#bfbfbf"></path>
                </svg>
                <span class="hot-qy-bottom-span">国有企业</span>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#bfbfbf"></path>
                </svg>
                <span class="hot-qy-bottom-span">计算机/通信/互联网/通信</span>
              </div>
              <div>
                <a style="color: #333; font-size: 16px; word-break: break-word;">在招职位</a>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="20" height="20">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#444"></path>
                </svg>
                <a style="color: #333; font-size: 16px; word-break: break-word;">企业相册</a>
              </div>
            </div>
          </li>
          <li class="model-div-row-li-4">
            <div class="hot-qy-top">
              <img src="/static/image/yangjiaxi_chenwu-007.jpg" class="hot-qy-img">
            </div>
            <div class="hot-qy-center">
              <img src="/static/image/timg%20(3).jpg" class="hot-qy-center-img">
            </div>

            <div class="hot-qy-bottom">
              <a align="center" class="hot-qy-bottom-title">
                KK科技顶顶顶
              </a>

              <div class="hot-qy-bottom-xx">
                <span class="hot-qy-bottom-span">1-49人</span>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#bfbfbf"></path>
                </svg>
                <span class="hot-qy-bottom-span">国有企业</span>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#bfbfbf"></path>
                </svg>
                <span class="hot-qy-bottom-span">计算机/通信/互联网/通信</span>
              </div>
              <div>
                <a style="color: #333; font-size: 16px; word-break: break-word;">在招职位</a>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="20" height="20">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#444"></path>
                </svg>
                <a style="color: #333; font-size: 16px; word-break: break-word;">企业相册</a>
              </div>
            </div>
          </li>
          <li class="model-div-row-li-4">
            <div class="hot-qy-top">
              <img src="/static/image/yangjiaxi_chenwu-007.jpg" class="hot-qy-img">
            </div>
            <div class="hot-qy-center">
              <img src="/static/image/timg%20(3).jpg" class="hot-qy-center-img">
            </div>

            <div class="hot-qy-bottom">
              <a align="center" class="hot-qy-bottom-title">
                KK科技顶顶顶
              </a>

              <div class="hot-qy-bottom-xx">
                <span class="hot-qy-bottom-span">1-49人</span>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#bfbfbf"></path>
                </svg>
                <span class="hot-qy-bottom-span">国有企业</span>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#bfbfbf"></path>
                </svg>
                <span class="hot-qy-bottom-span">计算机/通信/互联网/通信</span>
              </div>
              <div>
                <a style="color: #333; font-size: 16px; word-break: break-word;">在招职位</a>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="20" height="20">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#444"></path>
                </svg>
                <a style="color: #333; font-size: 16px; word-break: break-word;">企业相册</a>
              </div>
            </div>
          </li>
          <li class="model-div-row-li-4">
            <div class="hot-qy-top">
              <img src="/static/image/yangjiaxi_chenwu-007.jpg" class="hot-qy-img">
            </div>
            <div class="hot-qy-center">
              <img src="/static/image/timg%20(3).jpg" class="hot-qy-center-img">
            </div>

            <div class="hot-qy-bottom">
              <a align="center" class="hot-qy-bottom-title">
                KK科技顶顶顶
              </a>

              <div class="hot-qy-bottom-xx">
                <span class="hot-qy-bottom-span">1-49人</span>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#bfbfbf"></path>
                </svg>
                <span class="hot-qy-bottom-span">国有企业</span>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#bfbfbf"></path>
                </svg>
                <span class="hot-qy-bottom-span">计算机/通信/互联网/通信</span>
              </div>
              <div>
                <a style="color: #333; font-size: 16px; word-break: break-word;">在招职位</a>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="20" height="20">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#444"></path>
                </svg>
                <a style="color: #333; font-size: 16px; word-break: break-word;">企业相册</a>
              </div>
            </div>
          </li>
          <li class="model-div-row-li-4">
            <div class="hot-qy-top">
              <img src="/static/image/yangjiaxi_chenwu-007.jpg" class="hot-qy-img">
            </div>
            <div class="hot-qy-center">
              <img src="/static/image/timg%20(3).jpg" class="hot-qy-center-img">
            </div>

            <div class="hot-qy-bottom">
              <a align="center" class="hot-qy-bottom-title">
                KK科技顶顶顶
              </a>

              <div class="hot-qy-bottom-xx">
                <span class="hot-qy-bottom-span">1-49人</span>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#bfbfbf"></path>
                </svg>
                <span class="hot-qy-bottom-span">国有企业</span>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="16" height="16">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#bfbfbf"></path>
                </svg>
                <span class="hot-qy-bottom-span">计算机/通信/互联网/通信</span>
              </div>
              <div>
                <a style="color: #333; font-size: 16px; word-break: break-word;">在招职位</a>
                <svg t="1566953991459" class="icon" viewBox="0 0 1024 1024" version="1.1"
                     xmlns="http://www.w3.org/2000/svg" p-id="1709" width="20" height="20">
                  <path
                    d="M526.82030809 845.34844281c0 6.87480176-5.01638394 12.44768375-11.20346871 12.44768375l-7.23367953 0c-6.18787498 0-11.20425895-5.57288197-11.20425896-12.44768375L497.17890092 178.65076694c0-6.87401151 5.01638394-12.44768375 11.20425892-12.44768374l7.23367954 0c6.18708475 0 11.20346873 5.57367222 11.20346871 12.44768374L526.82030809 845.34844281z"
                    p-id="1710" fill="#444"></path>
                </svg>
                <a style="color: #333; font-size: 16px; word-break: break-word;">企业相册</a>
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
      </div>

      <div class="model-div-row">
        <ul class="model-div-row-ul">
          <li class="model-div-row-li-2">
            <div class="work-w">
              <div class="work-w-right">
                <img src="/static/image/timg%20(3).jpg" alt="" class="work-w-img">
              </div>
              <div class="work-w-left">
                <a href="">
                  <h4 class="work-w-left-title">
                    9月25日山东历城人才市大型就业援助综合类招聘会
                  </h4>
                </a>
                <p class="work-w-left-time">2018-01-11 08:00-13:00</p>
                <p class="work-w-left-address">江苏 苏州 高井头1号</p>
              </div>
            </div>
          </li>
          <li class="model-div-row-li-2">
            <div class="work-w">
              <div class="work-w-right">
                <img src="/static/image/timg%20(3).jpg" alt="" class="work-w-img">
              </div>
              <div class="work-w-left">
                <a href="">
                  <h4 class="work-w-left-title">
                    9月25日山东历城人才市大型就业援助综合类招聘会</h4>
                </a>
                <p class="work-w-left-time">2018-01-11 08:00-13:00</p>
                <p class="work-w-left-address">江苏 苏州 高井头1号</p>
              </div>
            </div>
          </li>
          <li class="model-div-row-li-2">
            <div class="work-w">
              <div class="work-w-right">
                <img src="/static/image/timg%20(3).jpg" alt="" class="work-w-img">
              </div>
              <div class="work-w-left">
                <a href="">
                  <h4 class="work-w-left-title">
                    9月25日山东历城人才市大型就业援助综合类招聘会</h4>
                </a>
                <p class="work-w-left-time">2018-01-11 08:00-13:00</p>
                <p class="work-w-left-address">江苏 苏州 高井头1号</p>
              </div>
            </div>
          </li>
          <li class="model-div-row-li-2">
            <div class="work-w">
              <div class="work-w-right">
                <img src="/static/image/timg%20(3).jpg" alt="" class="work-w-img">
              </div>
              <div class="work-w-left">
                <a href="">
                  <h4 class="work-w-left-title">
                    9月25日山东历城人才市大型就业援助综合类招聘会</h4>
                </a>
                <p class="work-w-left-time">2018-01-11 08:00-13:00</p>
                <p class="work-w-left-address">江苏 苏州 高井头1号</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

    <br>

    <div class="model-foot">
      <div class="foot-left">
        <Button shape="circle" style="position: relative; top: 370px;">查看更多</Button>
      </div>
      <div class="foot-center">
        <Tabs>
          <TabPane label="才市速递">
            <div style="display: inline-block; float: left; width: auto; height: auto;">
              <div class="block" style="width: 260px; margin-bottom: 20px;">
                <span class="demonstration"></span>
                <el-carousel trigger="click" height="150px">
                  <el-carousel-item><img src="/static/image/yangjiaxi_chenwu-007.jpg" alt="" width="190" height="150">
                  </el-carousel-item>
                  <el-carousel-item><img src="/static/image/yangjiaxi_chenwu-007.jpg" alt="" width="190" height="150">
                  </el-carousel-item>
                  <el-carousel-item><img src="/static/image/yangjiaxi_chenwu-007.jpg" alt="" width="190" height="150">
                  </el-carousel-item>
                </el-carousel>
              </div>
              <div class="block" style="width: 260px; margin-bottom: 20px;">
                <span class="demonstration"></span>
                <el-carousel trigger="click" height="150px">
                  <el-carousel-item><img src="/static/image/yangjiaxi_chenwu-007.jpg" alt="" width="190" height="150">
                  </el-carousel-item>
                  <el-carousel-item><img src="/static/image/yangjiaxi_chenwu-007.jpg" alt="" width="190" height="150">
                  </el-carousel-item>
                  <el-carousel-item><img src="/static/image/yangjiaxi_chenwu-007.jpg" alt="" width="190" height="150">
                  </el-carousel-item>
                </el-carousel>
              </div>
            </div>

            <div
              style="width: 340px; height: 100%; position: relative; display: inline-block; float: right;">
              <ul>
                <li style="height: 35px;">
                  <a href="">
                    <span
                      style="float: left;  max-width: 270px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 200px;">山东威海市：为人才服务到每个细节</span>
                  </a>
                  <span style="font-size: 16px; color: #ababab; float: right; font-family: 宋体;">2016-09-19</span>
                </li>
                <li style="height: 35px;">
                  <a href="">
                    <span
                      style="float: left;  max-width: 270px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 200px;">山东威海市：为人才服务到每个细节</span>
                  </a>
                  <span style="font-size: 16px; color: #ababab; float: right; font-family: 宋体;">2016-09-19</span>
                </li>
                <li style="height: 35px;">
                  <a href="">
                    <span
                      style="float: left;  max-width: 270px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap; width: 200px;">山东威海市：为人才服务到每个细节</span>
                  </a>
                  <span style="font-size: 16px; color: #ababab; float: right; font-family: 宋体;">2016-09-19</span>
                </li>
              </ul>
            </div>

          </TabPane>
          <TabPane label="招聘现场"></TabPane>
          <TabPane label="培训进修"></TabPane>
          <TabPane label="薪酬福利"></TabPane>
          <TabPane label="社会保险"></TabPane>
        </Tabs>
      </div>
      <div class="foot-right">
        <Tabs style="float: left; position: relative; top: -20px;">
            <TabPane label="热点资讯">
              <ul>
                <li class="nav-right-li">
                  <img class="nav-right-li-img"
                       src="https://uploads.ihuoniao.cn/job/thumb/large/2018/10/12/15393062609845.jpg" alt=""/>
                  <span class="nav-right-li-span">多地今年高考报名人数在减少北京连续多地今年高考报名人数在减少北京连续</span>
                </li>
                <li class="nav-right-li">
                  <img class="nav-right-li-img"
                       src="https://uploads.ihuoniao.cn/job/thumb/large/2018/10/12/15393062609845.jpg" alt=""/>
                  <span class="nav-right-li-span">多地今年高考报名人数在减少北京连续多地今年高考报名人数在减少北京连续</span>
                </li>
                <li class="nav-right-li">
                  <img class="nav-right-li-img"
                       src="https://uploads.ihuoniao.cn/job/thumb/large/2018/10/12/15393062609845.jpg" alt=""/>
                  <span class="nav-right-li-span">多地今年高考报名人数在减少北京连续多地今年高考报名人数在减少北京连续</span>
                </li>
                <li class="nav-right-li">
                  <img class="nav-right-li-img"
                       src="https://uploads.ihuoniao.cn/job/thumb/large/2018/10/12/15393062609845.jpg" alt=""/>
                  <span class="nav-right-li-span">多地今年高考报名人数在减少北京连续多地今年高考报名人数在减少北京连续</span>
                </li>
                <li class="nav-right-li">
                  <img class="nav-right-li-img"
                       src="https://uploads.ihuoniao.cn/job/thumb/large/2018/10/12/15393062609845.jpg" alt=""/>
                  <span class="nav-right-li-span">多地今年高考报名人数在减少北京连续多地今年高考报名人数在减少北京连续</span>
                </li>
                <li class="nav-right-li">
                  <img class="nav-right-li-img"
                       src="https://uploads.ihuoniao.cn/job/thumb/large/2018/10/12/15393062609845.jpg" alt=""/>
                  <span class="nav-right-li-span">多地今年高考报名人数在减少北京连续多地今年高考报名人数在减少北京连续</span>
                </li>
                <li class="nav-right-li">
                  <img class="nav-right-li-img"
                       src="https://uploads.ihuoniao.cn/job/thumb/large/2018/10/12/15393062609845.jpg" alt=""/>
                  <span class="nav-right-li-span">多地今年高考报名人数在减少北京连续多地今年高考报名人数在减少北京连续</span>
                </li>
              </ul>
            </TabPane>
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
                let parent = e.currentTarget;
                let sub = e.currentTarget.firstElementChild;
                $(parent).css('background-color', '#0a6beb');
                $(sub).css('display', 'none');
                this.$refs.hide_div.style.display = 'block';
            },
            removeActive(e) {
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
    /*background: #f4f6f9;*/
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
    margin-bottom: 20px;
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

  /*.hidden-div-model-li-a:hover {*/
  /*  color: #0a6beb;;*/
  /*}*/

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
    overflow-y: scroll;
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
    font-size: 12px;
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
    min-width: 1200px;
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
    width: 590px;
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
    width: 386px;
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
    /*float: left;*/
    margin: 0 15px 15px 0;
    width: 285px;
    min-width: 285px;
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
    background: url('/static/image/yangjiaxi_chenwu-007.jpg') no-repeat center center;
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
    overflow-y: scroll;
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

  .hot-jop-title:hover, .hot-jop-gs-name:hover {
    color: #53eb45;
  }

  .hot-qy-top {
    position: absolute;
    margin: 0 auto;
    width: auto;
    padding: 12px;
  }

  .hot-qy-img {
    width: 260px;
    height: 160px;
  }

  .hot-qy-img:hover {
    -webkit-transition: All 0.4s ease-in-out;
     transform: scale(1.08);
    -webkit-transform: scale(1.08);
    -o-transform: scale(1.08);
    -ms-transform: scale(1.08);
    -moz-transform: scale(1.08);

    z-index: -10;
  }

  .hot-qy-center {
    height: 90px;
    width: 90px;
    border-radius: 50%;
    position: relative;
    z-index: 10;
    top: 125px;
    left: 100px;
    border: #FFFFFF 2px solid;
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
    top: 158px;
    height: auto;
    margin: 0 auto;
    text-align: center;
  }

  .hot-qy-bottom-title {
    font-size: 18px;
    color: #4f4f4f;
    font-weight: bold;
    display: block;
    margin: 0 auto;
    line-height: 40px;
  }

  .hot-qy-bottom-xx {
    line-height: 40px;
    max-width: 280px;
  }

  .hot-qy-bottom-span {
    font-size: 12px;
    color: #8a8b91;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
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
    height: 100%;
    width: 100%;
  }

  .work-w-right {
    display: inline-block;
    float: left;
    height: 100%;
    width: 150px;
    margin: 0 auto;
    position: relative;
    vertical-align: middle;
    padding-top: 20px;
    text-align: left;
  }

  .work-w-img {
    width: 112px;
    height: 75px;
  }

  .work-w-left {
    display: inline-block;
    float: right;
    width: 380px;
    height: 100%;
    position: relative;
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

</style>
