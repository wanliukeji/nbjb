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
  init(); //初始化查询下拉框选项值
  var items = getItems(); //测试数据   可删除
  // var items = getInitData(); //后台请求数据 获取集合
  var pageSize = 5;  //初始化 当页显示总行数
  var totalPage = getItems().length; //请求数据总行数
  appendToHTML(items, pageSize);  //显示数据内容
  $(window).scroll(function () {  //页面滑动至底部更新数据
    if (finished && getScrollHeight() >= (getWindowHeight() + getDocumentTop()) && pageSize <= totalPage) {
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
    var initItems = [];
    var integral = $('#integral').val();
    var starttime = $('#startTime').val();
    var endtime = $('#endTime').val();
    var expenses = $('#expenses').val();
    var operation = $('#operation').val();

    //请求路径及筛选值
    $.ajax({
      //url: "http://localhost:8080/static/data/demo.json?integral="+integral + "&starttime="+starttime +
      // "&endtime="+endtime+"&expenses="+expenses+"&operation="+operation,
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

  //初始化下拉动态选项值
  function init() {
    var $integral = $('#integral');
    var Integrals = getIntegrals();
    var $expenses = $('#expenses');
    var Expenses = getExpenses();
    var $operation = $('#operation');
    var Operations = getOperations();
    joinToSelect(Integrals, $integral);
    joinToSelect(Expenses, $expenses);
    joinToSelect(Operations, $operation);
  };

  //获取积分下拉集合
  function getIntegrals() {
    var Integrals = [
      {name: '不限', value: '0'},
      {name: '威望', value: '1'},
      {name: '财富', value: '1'},
      {name: '甬钻', value: '1'}
    ];

    $.ajax({
      //url: "http://localhost:8080/static/data/demo.json",  //请求路径
      dataType: "json",
      async: true,
      // data: {"company_name": company_name },
      type: "POST", //请求方式
      contentType: "application/json;charset=UTF-8",
      success: function (res) {
        var data_list = res.data;
        if (res.status == 200) {
          if (data_list != null && data_list != null && data_list != 'undefined') {
            Integrals = data_list;
          }
        } else {

        }
      },
      error: function (err) {
        console.log(err);
      }
    });
    return Integrals;
  };

  //获取收支下拉集合
  function getExpenses() {
    var expenses = [
      {name: '不限', value: '0'},
      {name: '支出', value: '1'},
      {name: '支入', value: '2'}
    ];

    $.ajax({
      //url: "http://localhost:8080/static/data/demo.json",  //请求路径
      dataType: "json",
      async: true,
      // data: {"company_name": company_name },
      type: "POST", //请求方式
      contentType: "application/json;charset=UTF-8",
      success: function (res) {
        var data_list = res.data;
        if (res.status == 200) {
          if (data_list != null && data_list != null && data_list != 'undefined') {
            expenses = data_list;
          }
        } else {

        }
      },
      error: function (err) {
        console.log(err);
      }
    });
    return expenses;
  };

  //获取操作下拉集合
  function getOperations() {
    var operations = [
      {name: '请选择操作类型', value: '0'},
      {name: '任务奖励', value: '1'},
      {name: '悬赏主题', value: '2'},
      {name: '最佳答案', value: '3'}
    ];

    $.ajax({
      //url: "http://localhost:8080/static/data/demo.json",  //请求路径
      type: "POST", //请求方式
      // data: {"company_name": company_name },
      dataType: "json",
      async: true,
      contentType: "application/json;charset=UTF-8",
      success: function (res) {
        var data_list = res.data;
        if (res.status == 200) {
          if (data_list != null && data_list != null && data_list != 'undefined') {
            operations = data_list;
          }
        } else {

        }
      },
      error: function (err) {
        console.log(err);
      }
    });
    return operations;
  };

  function joinToSelect(item, dom) {
    try {
      for (var i = 0; i < item.length; i++) {
        var info = item[i];
        dom.append('<option value="' + info.value + '">' + info.name + '</option>');
      }
    } catch (e) {
      console.log(e);
    }
  }

  //获取初始化总参数
  function getInitData() {
    return ajax_http();
  }

  //页面固定显示
  var li_html = '<li class = "bga bh_e f14"><a href = "#">' +
    '<div class = "cl"> <strong class = "status ffr" style = "float: left;">' + '</strong>' +
    ' <span class = "status"><em style = "color: #8b8b8b;" ></em></span></div><dl class = "cl" style="text-align: center; font-size: 14px; color: #a6a6a6;"><p>' +
    '暂无无更多交易记录' + '</p><dt></dt></dl><dl class = "cl mt6"><dd><span class = "status f13 ff9"></span>' + '</dd></dl></a></li>';

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
        for (var i = 0; i < count; i++) {
          var info = items[i];
          $('#page-ul').append('<li class = "bga bh_e f14"><a href = "">' +
            '<div class = "cl"> <strong class = "status ffr" style = "float: left;">' + info.top_name + '</strong>' +
            ' <span class = "status"><em style = "color: #8b8b8b;" >甬钻 - ' + info.number + ' </em></span></div><dl class = "cl"><p>' + info.remark + '</p><dt></dt></dl><dl class = "cl mt6"><dd>' +
            '<span class = "status f13 ff9">' + info.time + '</span>' +
            '</dd></dl></a></li>');
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
    for (let i = 1; i <= 20; i++) {
      var param = {
        top_name: '测试-' + i,
        remark: '购买了' + i + '个道具',
        time: new Date().getFullYear() + '-' + new Date().getMonth() + '-' + new Date().getDay(),
        number: i * 10
      }
      items.push(param);
    }
    return items;
  }

});
