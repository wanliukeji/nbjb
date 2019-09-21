var $ = jQuery.noConflict(false);

$(function () {
  var getDateUrl = '';
  var html = '<i style="color: red;">*</i> 此行为必填项';
  var style = 'style="font: 12px/1.5 Tahoma, \'Microsoft Yahei\', \'Simsun\';\n' +
    '    clear: both;\n' +
    '    color: red;" ';
  var success = '<svg style="margin-top: 10px;" t="1567221340551" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2070" width="14" height="14"><path d="M511 69C267.4 69 69.9 266.5 69.9 510.1c0 243.6 197.5 441.1 441.1 441.1 243.6 0 441.1-197.5 441.1-441.1C952.2 266.5 754.7 69 511 69z m282 292.7L463.4 691.3l-18.6 18.6c-19.6 19.6-51.4 19.6-71 0l-18.6-18.6-126.8-126.8c-16.3-16.3-14.8-43.9 4.6-58.1 15.4-11.2 36.9-8.7 50.3 4.8l125.9 125.9 330.3-330.3c16.3-16.3 43.9-14.8 58.1 4.6 11.4 15.4 8.8 36.9-4.6 50.3z" p-id="2071" fill="#1afa29"></path></svg>';
  var error = '<svg t="1567221892863" style=" margin-right: 3px; position: absolute; margin-top: 2px;" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2845" width="14" height="14"><path d="M664.96 630.4a32 32 0 0 1-22.4 54.72 32 32 0 0 1-22.72-9.28L506.56 562.56 393.6 675.84a32 32 0 0 1-22.72 9.28 32 32 0 0 1-22.72-9.28 32 32 0 0 1 0-45.44l113.28-112.96-113.28-113.28a32 32 0 0 1 0-45.12 32 32 0 0 1 45.44 0L506.56 472l113.28-112.96a32 32 0 1 1 45.12 45.12L552 517.44zM512 64a448 448 0 1 0 448 448A448 448 0 0 0 512 64z" p-id="2846" fill="#d81e06"></path></svg>';
  var flag = false;
  var flag_g = false;
  var flag_a = false;
  var flag_b = false;
  var flag_c = false;
  var flag_d = false;
  var flag_e = false;
  var flag_f = false;
  var company_name_reg = /^[^\u0000-\u00FF]+[\.]?$/;
  var invoice_code_reg = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{4,23}$/;
  var regNumber = /\d+/;
  var regStringAbc = /^[a-zA-Z\u4e00-\u9fa5]+$/;
  var regNumStrAbc = /^[/\\x{4e00}/-\/\\x{9fa5}A-Za-z0-9]+$u/;

  var myMap = new Map();


  var items = getList(); //测试数据 可删除

  $('#company_name').focus(function () {
    ajax_http();
  });

  $('#company_name').blur(function () {
    //SUCCESS
    if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
      CY_SUCCESS_CSS();
    } else {
      CY_ERROR_CSS;
    }
  });

  $('#company_name').change(function () {
    //SUCCESS
    if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
      CY_SUCCESS_CSS();
    } else {
      CY_ERROR_CSS;
    }
  });

  $('#invoice_code').blur(function () {
    //SUCCESS
    if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
      CY_SUCCESS_CSS();
    } else {
      CY_ERROR_CSS;
    }
  });

  $('#bank_code').blur(function () {
    //SUCCESS
    if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
      CY_SUCCESS_CSS();
    } else {
      CY_ERROR_CSS;
    }
  });

  $('#bank').blur(function () {
    //SUCCESS
    if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
      CY_SUCCESS_CSS();
    } else {
      CY_ERROR_CSS;
    }
  });

  $('#company_address').blur(function () {
    //SUCCESS
    if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
      CY_SUCCESS_CSS();
    } else {
      CY_ERROR_CSS;
    }
  });

  $('#contact_name').blur(function () {
    //SUCCESS
    if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
      CY_SUCCESS_CSS();
    } else {
      CY_ERROR_CSS;
    }
  });

  $('#amount').blur(function () {
    //SUCCESS
    if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
      CY_SUCCESS_CSS();
    } else {
      CY_ERROR_CSS;
    }
  });

  function appendToHtml(res, $dom) {
    $dom = $('#hide-select');
    $dom.html('');
    // items = res;
    for (let i = 0; i < items.length; i++) {
      var obj = items[i];
      var html = '<li value="' + obj.company_name + '" ' + '' +
        ' class="hide-li-selected"' +
        '" style="cursor: pointer;\n' +
        '    padding-left: 10px;"' +
        '   height: 20px;>' + obj.company_name + '</li>'
      $dom.append(html);
      myMap.set(obj.company_name, obj);
    }
  }

  function showChilden($parent) {
    var $dom = $parent.next().show();
    $('.hide-li-selected').click(function () {
      var $son = $(this);
      var f = $son.text();
      $parent.val(f);
      //SUCCESS
      if (!reg_test(company_name_reg, f)) {
        $('#company_name_font').html('<em ' + style + ' >公司名只能由汉字组成和中文符号组成</em>');
      } else {
        $('#company_name_font').html(success);
        flag_a = true;
        if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
          CY_SUCCESS_CSS();
        }
      }
      ;
      $dom.hide();
    });
  }

  function selectHover() {
    $(".hide-li-selected").hover(
      function () {
        $(this).css({'background': '#f6f6f6'});
      },
      function () {
        $(this).css({'background': '#FFFFFF'});
      }
    );
  }

  function selected($parent, myMap) {
    $('.hide-li-selected').click(function () {
      var $son = $(this);
      var f = $son.text();
      $parent.val(f);
      var obj = myMap.get(f)
      $('[name="invoice_code"]').val(obj.invoice_code);
      $('[name="bank"]').val(obj.bank);
      $('[name="bank_code"]').val(obj.bank_code);
      $('[name="contact_name"]').val(obj.contact_name);
      $('[name="company_address"]').val(obj.company_address);
      $('[name="amount"]').val(obj.amount);
      $('.hide-select').hide();

      //正则判断
      if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
        CY_SUCCESS_CSS();
      }

    });
  }

  $(document).bind('click', function (event) {
    event.stopPropagation();
    var tar = event.target;
    if ($(tar).closest('#company_name').length == 0) {
      $('#hide-select').hide();
    } else {
      $('#hide-select').show();
    }
  });

  //提交
  $('#cy_form').submit(function () {
    if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
      return true;
    }
    return false;
  });


  function exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc) {
    var bool_b, bool_d, bool_e, bool_f, bool_g = false;
    var bool_a = false;
    var bool_c = false;
    var company_name = $('#company_name').val();
    var invoice_code = $('#invoice_code').val();
    var bank_code = $('#bank_code').val();
    var bank = $('#bank').val();
    var contact_name = $('#contact_name').val();
    var company_address = $('#company_address').val();
    var amount = $('#amount').val();

    //SUCCESS
    if (!is_Empty(company_name)) {
      if (!reg_test(company_name_reg, company_name)) {
        jQuery('#company_name_font').html('<em ' + style + ' >公司名只能由汉字组成和中文符号组成</em>');
        CY_ERROR_CSS();
      } else {
        jQuery('#company_name_font').html(success);
        bool_a = true;
      }
      ;
    }
    ;

    //SUCCESS
    if (!is_Empty(invoice_code)) {
      if (!reg_test(invoice_code_reg, invoice_code)) {
        $('#invoice_code_font').html('<em ' + style + ' >税号只能由字母和数字组成</em>');
        CY_ERROR_CSS();
      } else {
        $('#invoice_code_font').html(success);
        bool_b = true;
      }
      ;
    }
    ;

    //SUCCESS
    if (!is_Empty(bank_code)) {
      if (!reg_test(invoice_code_reg, bank_code)) {
        $('#bank_code_font').html('<em ' + style + ' >开户行账号只能由字母和数字组成</em>');
        CY_ERROR_CSS();
      } else {
        $('#bank_code_font').html(success);
        bool_c = true;
      }
      ;
    } else {
      $('#bank_code_font').html('');
    }
    ;

    // SUCCESS
    if (!is_Empty(bank)) {
      if (reg_test(regNumStrAbc, bank)) {
        $('#bank_font').html('<em ' + style + ' >开户行由汉字、字母、数字组成</em>');
        CY_ERROR_CSS();
      } else {
        $('#bank_font').html(success);
        bool_d = true;
      }
      ;
    } else {
      $('#bank_font').html('');
    }
    ;

    //SUCCESS
    if (!is_Empty(contact_name)) {
      if (!reg_test(regStringAbc, contact_name)) {
        $('#contact_name_font').html('<em ' + style + ' >联系人姓名由汉字、字母组成</em>');
        CY_ERROR_CSS();
      } else {
        $('#contact_name_font').html(success);
        bool_e = true;
      }
      ;
    } else {
      $('#contact_name_font').html('');
    }
    ;

    //SUCCESS
    if (!is_Empty(company_address)) {
      if (reg_test(regNumStrAbc, company_address)) {
        $('#company_address_font').html('<em ' + style + ' >公司地址由汉字、字母、数字组成</em>');
        CY_ERROR_CSS();
      } else {
        $('#company_address_font').html(success);
        bool_f = true;
      }
      ;
    } else {
      $('#contact_name_font').html('');
    }
    ;

    var count = Number(amount);//输入金额
    var duceapp_all_amount = 0;//充值总金额
    if (count > duceapp_all_amount) {
      $('#amount_font').html('<em ' + style + ' >开票金额必须小于等于充值总金额 &nbsp; 当前充值总金额 = ' + duceapp_all_amount + ' </em>');
      CY_ERROR_CSS();
    } else {
      $('#amount_font').html(success);
      bool_g = true;
    }
    ;
    // console.log('bool_a:' + bool_a + '\nbool_b:' + bool_b + '\nbool_c:' + bool_c
    //   + '\nbool_d:' + bool_d + '\nbool_e:' + bool_e + '\nbool_f:' + bool_f + '\nbool_g:' + bool_g);

    if (bool_a && bool_b && bool_c && bool_d && bool_e && bool_f && bool_g) {
      return true;
    } else {
      return false;
    }
  }

  function reg_test(reg, text) {
    if (reg.test(text)) {
      return true;
    }
    return false;
  }

  function is_Empty(val) {
    if (val == '' || val == null) {
      return true;
    }
    return false;
  }

  function getList() {
    return [
      {
        "company_name": "科技",
        "invoice_code": "XD2019001122",
        "bank": "宁波银行",
        "bank_code": "NBBK",
        "contact_name": "陈育",
        "company_address": "宁波市北仑区博地影视",
        "amount": "100.1"
      },
      {
        "company_name": "科技",
        "invoice_code": "XD2019001123",
        "bank": "温州银行",
        "bank_code": "WZBK001",
        "contact_name": "陈忆",
        "company_address": "宁波市北仑区银泰",
        "amount": "0"
      }
    ];
  }

  function CY_SUCCESS_CSS() {
    $('#cy_success').css({'background': '#3FDD6C'});
    $('#cy_success').attr('disabled', false);
  }

  function CY_ERROR_CSS() {
    $('#cy_success').css({'background': '#666666'});
    $('#cy_success').attr('disabled', true);
  }

  //实时监听用户输入值
  //输入框值实时更改后停顿0.5秒触发
  $("#company_name").bind('input porpertychange', function (e) {
    var lastTime = e.timeStamp;
    // console.log('已过: 0.5秒');
    if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
      CY_SUCCESS_CSS();
      setTimeout(function () {
        if (lastTime - e.timeStamp == 0) {
          // alert("0.5秒内没有修改了，可以发送请求了");
          ajax_http();
        }
      }, 500);
    } else {
      CY_ERROR_CSS();
    }
  });

  //键盘敲击停顿0.5秒触发
  $('#company_name').keyup(function (e) {
    var lastTime = e.timeStamp;
    // console.log('已过: 0.5秒');
    if (exec(company_name_reg, invoice_code_reg, regNumber, regStringAbc, regNumStrAbc)) {
      CY_SUCCESS_CSS();
      setTimeout(function () {
        if (lastTime - e.timeStamp == 0) {
          // alert("0.5秒内没再输入，可以发送请求了");
          ajax_http();
        }
      }, 500);
    } else {
      CY_ERROR_CSS();
    }
  });

  function ajax_http() {
    var company_name = $('#company_name').val();
    var $parent = $('#company_name');
    var $dom = $parent.next();
    $dom.html('');
    $.ajax({
      url: getDateUrl,  //请求路径
      dataType: "json",
      async: true,
      // data: {"company_name": company_name },
      type: "POST", //请求方式
      contentType: "application/json;charset=UTF-8",
      success: function (res) {
        appendToHtml(res, $dom);
        showChilden($parent);
        selectHover();
        selected($parent, myMap);
      },
      error: function (err) {
        //异常函数内调用函数 测试使用 可删除
        appendToHtml(err, $dom);
        showChilden($parent);
        selectHover();
        selected($parent, myMap);
        console.log(err);
      }
    });
  }
})
;
