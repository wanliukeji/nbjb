$(function () {
  var j_flag = new Boolean(false);
  var m_flag = new Boolean(false);
  var flag_j = new Boolean(false);
  var flag_m = new Boolean(false);
  $('#exchange_num').bind('input porpertychange', function () {
    var _exchange_num = $('#exchange_num').val();
    var _jewel_score = $('#jewel_score').text();
    _jewel_score = Number(_jewel_score);
    console.log(toString.call(_exchange_num));
    _exchange_num = Number(_exchange_num);
    var need = Number(_exchange_num);

    need == NaN ? 0 : need;
    $('#need_num').val(need / 10);

    if ($('#need_num').val() == 'NaN') {
      $('#need_num').val(0)
    }

    j_flag = exec_change_num(_exchange_num, _jewel_score);
  }).focus(function () {
    $(this).val('');
  });

  $('#need_num').change(function () {
    var _need_num = $('#need_num').val();//prestige_score
    var _money_score = $('#_money_score').text();
    _money_score = Number(_money_score);
    _need_num = Number(_need_num);
    m_flag = exec_need_num(_need_num, _money_score);
  });


  $('#submit').click(function () {

    var _exchange_num = $('#exchange_num').val();
    var _jewel_score = $('#jewel_score').val();
    _jewel_score = Number(_jewel_score);
    _exchange_num = Number(_exchange_num);
    j_flag = exec_change_num(_exchange_num, _jewel_score);

    var _need_num = $('#need_num').val();//prestige_score
    var _money_score = $('#_money_score').val();
    _money_score = Number(_money_score);
    _need_num = Number(_need_num);
    m_flag = exec_need_num(_need_num, _money_score);

    var _jewel = $('#jewel option:selected').val();
    var _money = $('#money option:selected').val();
    if (is_NotEmpty(_jewel)) {
      flag_j = true;
    } else {
      alert('请选择兑换商品');
      return;
    }
    if (is_NotEmpty(_money)) {
      flag_j = true;
    } else {
      alert('请选择兑换商品');
      return;
    }

    if (j_flag && m_flag && flag_j && flag_j) {
      return true;
    }
  });

  var html1 = '<em style="color: red;font-size: 12px;">&nbsp;&nbsp;<b>*兑换数量不能大于每次最多兑换数量</b></em>';
  var html2 = '<em style="color: red;font-size: 12px; font-family: Tahoma "Microsoft YaHei", SimSun;">&nbsp;&nbsp;<b>兑换数量不能大于可兑换数量</b></em>';
  var text = '【财富】允许兑换1次，每次最多兑换200;【财富】允许兑换1次，每次最多兑换2000;';

  function exec_change_num(_exchange_num, _jewel_score) {
    //不得大于每次兑换的最大数量 且 不得大于 所拥有的甬钻数
    if (_exchange_num > 200) {
      $('#show_span').html(html1);
      return false;
    } else if (_exchange_num > _jewel_score) {
      $('#show_span').html(html2);
      return false;
    } else {
      $('#show_span').html(text);
      return true;
    }
  }

  function exec_need_num(_need_num, _money_score) {
    //不得大于每次兑换的最大数量 且 不得大于 所拥有的甬钻数
    if (_need_num > 200) {
      $('#show_span').html(html1);
      return false;
    } else if (_need_num > _money_score) {
      $('#show_span').html(html2);
      return false;
    } else {
      $('#show_span').html('');
      return true;
    }
  }

  function is_NotEmpty(value) {
    if (value != '' && value != null) {
      return true;
    }
    return false;
  }

});
