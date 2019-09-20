
// 页面滑动控制区域
//获取文档高度
function getDocumentTop() {
  var scrollTop = 0, bodyScrollTop = 0, documentScrollTop = 0;
  if (document.body) {
    bodyScrollTop = document.body.scrollTop;
  }
  if (document.documentElement) {
    documentScrollTop = document.documentElement.scrollTop;
  }
  scrollTop = (bodyScrollTop - documentScrollTop > 0) ? bodyScrollTop : documentScrollTop;
  return scrollTop;
}

//可视窗口高度
function getWindowHeight() {
  var windowHeight = 0;
  if (document.compatMode == "CSS1Compat") {
    windowHeight = document.documentElement.clientHeight;
  } else {
    windowHeight = document.body.clientHeight;
  }
  return windowHeight;
}

//滚动条高度
function getScrollHeight() {
  var scrollHeight = 0, bodyScrollHeight = 0, documentScrollHeight = 0;
  if (document.body) {
    bodyScrollHeight = document.body.scrollHeight;
  }
  if (document.documentElement) {
    documentScrollHeight = document.documentElement.scrollHeight;
  }
  scrollHeight = (bodyScrollHeight - documentScrollHeight > 0) ? bodyScrollHeight : documentScrollHeight;
  return scrollHeight;
}

var finished = true;

$(function () {
  var items = getItems(); //测试数据   可删除
  // var items = getInitData(); //后台请求数据 获取集合
  var pageSize = 5;  //初始化 当页显示总行数
  var totalPage = getItems().length; //请求数据总行数
  appendToHTML(items, pageSize);  //显示数据内容
  $(window).scroll(function () {  //页面滑动至底部更新数据
    if (finished && getScrollHeight() >= (getWindowHeight() + getDocumentTop()) && pageSize <= totalPage) {
      console.log('已滑至底部');
      finished = false;
      // 设置两秒请求后台
      setTimeout(function () {
        finished = true;
        pageSize += 5;  //每请求一次增加一页显示
        appendToHTML(items, pageSize); //更新数据
        return;
      }, 2000);
    }
    ;
  });

  //查询 数据 异步实时更新显示
  $('#searchsubmit').click(function () {
    // items = ajax_http();
    appendToHTML(items, 5);
  });

  //请求后台数据 仅用于积分记录查询 一下全部为字符串类型
  function ajax_http() {
    //请求路径及筛选值
    $.ajax({
      //url: "http://localhost:8080/static/data/demo.json"
      dataType: "json",
      async: true,
      type: "GET", //请求方式
      contentType: "application/json;charset=UTF-8",
      success: function (res) {
        console.log(JSON.stringify(res));
        var data_list = res.data;
        if (res.status == 200) {
          if (data_list != null && data_list != null && data_list != 'undefined') {
            initItems = data_list;
          }
        } else {
          console.dir(JSON.stringify(res));
        }
      },
      error: function (err) {
        console.log(err);
      }
    });
    return initItems;
  };

  //获取初始化总参数
  function getInitData() {
    return ajax_http();
  }

  //页面固定显示
  var li_html = '<li class = "bga bh_e f14"><a href = "#">' +
    '<div class = "cl"> <strong class = "status ffr" style = "float: left;">' + '</strong>' +
    ' <span class = "status"><em style = "color: #8b8b8b;" ></em></span></div><dl class = "cl" style="text-align: center; font-size: 14px; color: #a6a6a6;"><p>' +
    '暂无无更多交易记录' + '</p><dt></dt></dl><dl class = "cl mt6"><dd><span class = "status f13 ff9"></span>' + '</dd></dl></a></li>';


  var newHtml = '<li class="bga bh_e f14"><a href="#"><div class="cl"><span class="f13 ff9" style="white-space:nowarp">' +
    '<i class="duceapp_font f17 vm3"></i> 20190917</span><strong class="status"><em class="succ">已通过</em></strong></div>' +
    '<dl class="cl"><dt><cite style="color:"><i class="duceapp_font f15"></i> 积分 <span class="ff9">- 100</span></cite></dt>' +
    '<dd>￥0.10</dd></dl><dl class="cl mt6"><dt class="status f13 ff9" style="line-height:26px;"><i class="duceapp_font f15 vm3"></i> ' +
    '2019-08-05 16:40:27</dt></dl></a></li>';


  //数据内容加工显示
  function appendToHTML(items, count) {
    if (items.length > 0 && items.length > count) {
      append_for(items, count);
      $('#page-ul').append('<li class = "bga bh_e f14"><a href = "">' +
        '<div class = "cl"> <strong class = "status ffr" style = "float: left;"></strong>' +
        ' <span class = "status"><em style = "color: #8b8b8b;"></em></span></div><dl class = "cl" style="text-align: center; font-size: 14px; color: #a6a6a6;"><p>' +
        '往上滑动获取更多数据</p><dt></dt></dl><dl class = "cl mt6"><dd>' +
        '<span class = "status f13 ff9"></span>' +
        '</dd></dl></a></li>');
    } else if (count >= items.length) {
      append_for(items, count);
      $('#page-ul').append(li_html);
    } else {
      $('#page-ul').append(li_html);
    }

    function append_for(items, count) {
      $('#page-ul').html('');
      try {
        var statusHtml;
        for (var i = 0; i < count; i++) {
          var info = items[i];
          if (info.stauts == 1) {
            statusHtml = '<em class="succ">已通过</em>'
          } else {
            statusHtml = '<em class="status">未通过</em>'
          }

          $('#page-ul').append('<li class="bga bh_e f14"><a href="#"><div class="cl"><span class="f13 ff9" style="white-space:nowarp">' +
            '<i class="duceapp_font f17 vm3"></i> ' + info.top_name + '</span><strong class="status">' + statusHtml + '</strong></div>' +
            '<dl class="cl"><dt><cite ><i class="duceapp_font f15"></i> 开票金额 :<span class="ff9"> 100</span></cite></dt>' +
            '<dd>￥0.10</dd></dl><dl class="cl mt6"><dt class="status f13 ff9" style="line-height:26px;"><i class="duceapp_font f15 vm3"></i> ' +
            '2019-08-05 16:40:27</dt></dl></a></li>');
        }

      } catch (e) {
        e.message;
        console.log(e.message);
      }
    }
  }

  //测试数据 可删除
  function getItems() {
    var items = [];
    var no = 20190102;
    for (let i = 1; i <= 20; i++) {
      if (i % 2 == 0) {
        var param = {
          top_name: '税号:-' + (no + i),
          scope: '开票金额-' + (i * 100) + '',
          time: new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDay(),
          number: i * 10,
          stauts: 1,
          money: i * 0.1
        }
      } else {
        var param = {
          top_name: '税号:-' + (no + i),
          scope: '开票金额-' + (i * 10) + '',
          time: new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDay(),
          number: i * 10,
          stauts: 0,
          money: i * 0.1
        }
      }

      items.push(param);
    }
    return items;
  }

});
