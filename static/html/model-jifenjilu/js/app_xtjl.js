
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
  var totalPage = getItems().length; //总分页数
  appendToHTML(getItems(), 5);
  var pageSize = 5;
  $(document).scroll(function () {
    if (finished && getScrollHeight() >= (getWindowHeight() + getDocumentTop()) && pageSize <= totalPage) {
      finished = false;
      // ajax_function()
      setTimeout(function () {
        finished = true;
        pageSize += 5;
        appendToHTML(getItems(), pageSize);
        return;
        console.log('到底啦!');
      }, 2000);
    }
    ;
  });

  var li_html = '<li class="bga bh_e f14"><a><div class="cl"><span class="status" style="float: left; color: #373cff;">' +
    '</span><strong class="status"><em class="succ"></em></strong></div>' +
    '<dl class = "cl"><P style="font-size: 14px; color: #a6a6a6; text-align: center;">已无更多交易数据</P><dt></dt></dl><dl class="cl mt6">' +
    '<dt class="f13 ff9" style="line-height:26px; float: right;' + ' border: 1px black solid;"></dt></dl></a></li>';

  function appendToHTML(items, count) {
    if (items.length > 0 && items.length > count) {
      append_for(items, count);
      $('#page-ul').append('<li class="bga bh_e f14"><a><div class="cl"><span class="status" style="float: left; color: #373cff;">' +
        '</span><strong class="status"><em class="succ"></em></strong></div>' +
        '<dl class = "cl"><P style="font-size: 14px; color: #a6a6a6; text-align: center;">往上滑动获取更多数据</P><dt></dt></dl><dl class="cl mt6">' +
        '<dt class="f13 ff9" style="line-height:26px; float: right;' + ' border: 1px black solid;"></dt></dl></a></li>');

    } else if (count >= items.length) {
      append_for(items, count);
      $('#page-ul').append(li_html);
    } else {
      $('#page-ul').append(li_html);
    }

    function append_for(items, count) {
      $('#page-ul').html('');
      try {
        for (var i = 0; i < count; i++) {
          var info = items[i];
          $('#page-ul').append('<li class="bga bh_e f14"><a><div class="cl"><span class="status" style="float: left; color: #373cff;">' + info.top_name +
            '</span><strong class="status"><em class="succ">每天登录</em></strong></div><dl class="cl"><dt style="word-break: break-word; width: 70%;">' +
            '<span style="margin-right: 10px; color: #999;">总次数：' + info.total + '</span> <span style="margin-right: 10px; color: #999;">周期次数：' + info.z_num + '</span>' +
            '<span style="margin-right: 10px; color: #e9d679;"><br>威望：' + info.w_num + '</span> <span style="margin-right: 10px; color: #995621;">' +
            '财富：' + info.m_num + '</span></dt> <dd><cite><i class="duceapp_font f15"></i> 甬钻 <span class="ff9"> × ' + info.y_num + '</span></cite></dd>' +
            '</dl><dl class="cl mt6"><dt class="f13 ff9" style="line-height:26px; float: right;">' + info.time + '</dt></dl></a></li>');
        }

      } catch (e) {
        e.message;
        console.log(e.message);
      }
    }
  }

  function getItems() {
    var items = [];
    for (let i = 1; i <= 20; i++) {
      var param = {
        top_name: '测试-' + i,
        total: i * 1001,
        z_num: i * 10,
        w_num: i * 31,
        m_num: i * 21,
        y_num: i * 101,
        time: new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDay(),
      }
      items.push(param);
    }
    return items;
  }
});
