var _select = {
  init: function (select) {
    var select = $(select), iptbox = select.parents('.ipt');
    if (!iptbox.length || iptbox.attr('init') == 'yes') {
      return
    }
    var $this = this, d = new Date(), name = select.attr('name') || select.attr('id'), id = 'select_' + name;
    if (!DUCEAPP[id] || iptbox.find('.tx').length < 1) {
      iptbox.prepend('<i class="duceapp_font fwd">&#xe905;</i><span class="tx">' + select.find('option:selected').text() + '</span>')
    }
    DUCEAPP[id] = {'html': '', 'tx': iptbox.find('.tx'), 'select': select};
    var callback = function () {
      var dl = $('.popselect dl');
      iptbox.find('select').each(function (i) {
        var index = $(this).find('option:selected').index();
        dl.eq(i).find('dd').eq(index).addClass('seled');
        if (index > 2) dl.eq(i).scrollTop(40 * (index - 2))
      });
      $('.popselect .d').scrollLeft(1000)
    };
    iptbox.attr('init', 'yes').on('click', function (e) {
      $this.html(id, iptbox);
      if (DUCEAPP[id]['select'].is(':disabled')) {
        return false
      }
      $this.show(id, callback);
      e.preventDefault()
    })
  }, show: function (id, callback) {
    if ($('.duceapp_body').hasClass('selectshow')) {
      $('.popselect').html(DUCEAPP[id]['html']);
      callback()
    } else {
      duceapp_popselect({evt: 'click', html: DUCEAPP[id]['html'], 'appear': callback})
    }
  }, html: function (id, iptbox) {
    var tit = iptbox.attr('title'), $this = this;
    DUCEAPP[id]['html'] = '';
    DUCEAPP[id]['tx'] = iptbox.find('.tx');
    if (tit) {
      DUCEAPP[id]['html'] = '<div class="dt ffl f15">' + (tit) + '</div>'
    }
    DUCEAPP[id]['html'] += '<div class="d cl"><div class="dl" style="width:100%">';
    var select = DUCEAPP[id]['select'];
    DUCEAPP[id]['html'] += '<dl k="' + select.attr('name') + '" style="width:100%">';
    select.find('option').each(function () {
      DUCEAPP[id]['html'] += '<dd onclick="_select.elem(this, \'' + id + '\', 0)"><span>' + $(this).text() + '</span></dd>'
    });
    DUCEAPP[id]['html'] += '</dl>';
    DUCEAPP[id]['html'] += '</div></div><div class="cancel" onclick="duceapp_popselect(\'hide\')">&#x53d6;&#x6d88;</div>'
  }, target: function (id, s) {
    DUCEAPP[id]['tx'].html(s)
  }, elem: function (obj, id) {


    console.dir('选中:' + $(obj).html());

    var index = $(obj).index();

    console.dir(index);

    var front = '';
    $(obj).addClass('seled').siblings('dd').removeClass('seled');
    var target = DUCEAPP[id]['select'].find('option').eq(index);
    var seled = target.is(':selected');
    if (!seled) {
      target.attr('selected', true);
      var v1 = target.attr('value');
      this.target(id, $(obj).html());
      this.chksel(id);
    }
    if (!seled) {
      var age = DUCEAPP[id]['select'].attr('age');
      var v = target.attr('value');
      if (age && $(age).length) {
        if (v > 0) {
          $(age).show()
        } else {
          $(age).hide()
        }
      }
      var func = DUCEAPP[id]['select'].attr('agefunc');
      if (func) {
        try {
          eval(func + '(\'' + v + '\');')
        } catch (e) {
        }
      }
    }
    duceapp_popselect()
  }, chksel: function (id) {
    var actoption = DUCEAPP[id]['select'].find('option:selected');
    if (actoption.attr('value') != '') {
      DUCEAPP[id]['tx'].addClass('selected')
    } else {
      DUCEAPP[id]['tx'].removeClass('selected')
    }
  }
};
var _checkbox = {
  init: function (selector, reload, type) {
    $(selector).each(function () {
      if ($(this).attr('init') == 'yes' && !reload) {
        return
      }
      var $input = $(this).attr('init', 'yes'), $this = this, actbox = $input.parent(), def = $input.is(':checked'),
        actcls = actbox.attr('actcls') ? 'checked ' + actbox.attr('actcls') : 'checked',
        showtype = type || actbox.attr('showtype'), slidetype = actbox.attr('type') == 'slideb' ? 'slideb' : 'slide',
        computable = actbox.attr('computable') || '',
        checkbox = showtype && !actbox.find('em.ckb').length ? '<em class="ckb f18 ffb vm2"></em>' : '',
        slider = showtype != 'input' ? '<em' + (actbox.attr('act') == 'self' ? ' act="box"' : '') + ' class="' + slidetype + '"><b>&nbsp</b></em>' : '';
      if (checkbox || slider) {
        $input.after(checkbox + slider)
      }
      actbox.is('label') && actbox.attr('act') != 'self' && actbox.on('click', function (e) {
        e = mygetnativeevent(e);
        if ($(e.target).is('label')) {
          e.preventDefault();
          return false
        }
      });
      if (!$input.is(':disabled')) {
        toggle_slider_init({
          'slider': showtype == 'input' ? null : actbox.find('.' + slidetype + ' b'),
          'input': $input,
          'vanish': function () {
            actbox.removeClass(actcls)
          },
          'appear': function () {
            actbox.addClass(actcls)
          }
        })
      } else {
        actbox.css('opacity', .5)
      }
      def && actbox.addClass(actcls).find('.' + slidetype).addClass(slidetype + '_c')
    })
  }
};
var _radio = {
  init: function (selector, reload) {
    $(selector).each(function () {
      if ($(this).attr('init') == 'yes' && !reload) {
        return
      }
      var $this = $(this).attr('init', 'yes'), name = $(this).attr('name'), actbox = $this.parent(),
        def = $this.is(':checked'), actcls = actbox.attr('actcls') ? 'checked ' + actbox.attr('actcls') : 'checked';
      actbox.find('em.rdo').length || $this.after('<em class="rdo f18 ffb vm2"></em>');
      if (!$this.is(':disabled')) {
        actbox.on('click', function (e) {
          if ($this.is(':disabled')) {
            return false
          }
          $('input[name="' + name + '"]').each(function () {
            $(this).parent().removeClass(actcls)
          });
          $(this).addClass(actcls).find('input[type="radio"]').attr('checked', true);
          return false
        })
      } else {
        actbox.css('opacity', .5)
      }
      def && actbox.addClass(actcls)
    })
  }
};
var _calendar = {
  format: false, init: function (selector) {
    selector = typeof selector == 'object' ? selector : $(selector);
    selector.each(function () {
      if (!$(this).prev('.tx').length) {
        $(this).before('<a href="javascript:;" class="tx calendar pd_n">' + ($(this).val() || $(this).attr('placeholder') || '') + '</a>');
        $(this).val() && $(this).prev('.tx').addClass('selected')
      }
    });
    if (!this.format) {
      this.format = true;
      $(document).on('click', 'a.calendar', function (e) {
        DUCEAPP['calendarinput'] = $(this).next('input');
        DUCEAPP['calendartype'] = DUCEAPP['calendarinput'].attr('caltype');
        duceapp_popselect({evt: 'click', html: _calendar.html(DUCEAPP['calendartype']), appear: _calendar.chksel});
        e.preventDefault()
      })
    }
  }, html: function (type) {
    switch (type) {
      case'date':
        break;
      case'time':
        break;
      case'ym':
        break;
      default:
        type = 'datetime'
    }
    var id = 'calendar_' + type;
    if (!DUCEAPP[id]) {
      var d = new Date(), p = 1;
      DUCEAPP[id] = '<div class="dt ffl f15">' + calendarform['head'] + (type == 'date' || type == 'time' || type == 'ym' ? '' : '<i class="duceapp_font back">&#xe973;</i>') + '</div>';
      DUCEAPP[id] += '<div class="d cl"><div class="dl" style="width:' + (type == 'datetime' ? 167 : 100) + '%">';
      var scale = {'datetime': 20, 'time': 50, 'ym': 50};
      for (var k in calendarform) {
        if (k != 'head') {
          if (type == 'ym' && !(k == 'year' || k == 'month')) {
            continue
          }
          if (type == 'date' && (k == 'hour' || k == 'minute')) {
            continue
          }
          if (type == 'time' && !(k == 'hour' || k == 'minute')) {
            continue
          }
          DUCEAPP[id] += '<dl class="z" id="calendar_' + k + '" style="width:' + (type == 'date' ? 33 + p : scale[type]) + '%">';
          switch (k) {
            case'year':
              for (var i = calendarform[k][2]; i >= calendarform[k][1]; i--) {
                DUCEAPP[id] += '<dd v="' + i + '" onclick="_calendar.elem(this,\'' + k + '\')"><span>' + i + calendarform[k][0] + '</span></dd>'
              }
              break;
            case'day':
              DUCEAPP[id] += this.day(d.getFullYear(), d.getMonth() + 1, calendarform[k][0]);
              break;
            case'hour':
            case'minute':
            case'month':
              for (var i = calendarform[k][1]; i <= calendarform[k][2]; i++) {
                var v = i < 10 ? '0' + i : i;
                DUCEAPP[id] += '<dd v="' + v + '" onclick="_calendar.elem(this,\'' + k + '\')"><span>' + v + calendarform[k][0] + '</span></dd>'
              }
              break
          }
          p = 0;
          DUCEAPP[id] += '</dl>'
        }
      }
      DUCEAPP[id] += '</div></div><div class="even"><div class="confirms bgt" onclick="_calendar.confirms()">' + DUCEAPP_LANG['confirms'] + '</div><div class="cancel" onclick="duceapp_popselect(\'hide\')">' + DUCEAPP_LANG['cancel'] + '</div></div>'
    }
    return DUCEAPP[id]
  }, day: function (y, m, s) {
    var html = '';
    for (var i = 1; i <= 28; i++) {
      var v = i < 10 ? '0' + i : i;
      html += '<dd v="' + v + '" onclick="_calendar.elem(this,\'day\')"><span>' + v + s + '</span></dd>'
    }
    if (m != '2') {
      html += '<dd v="29" onclick="_calendar.elem(this,\'day\')"><span>29' + s + '</span></dd>';
      html += '<dd v="30" onclick="_calendar.elem(this,\'day\')"><span>30' + s + '</span></dd>';
      switch (m) {
        case 1:
        case 3:
        case 5:
        case 7:
        case 8:
        case 10:
        case 12: {
          html += '<dd v="31" onclick="_calendar.elem(this,\'day\')"><span>31' + s + '</span></dd>'
        }
      }
    } else {
      if (y % 400 == 0 || (y % 4 == 0 && y % 100 != 0)) html += '<dd v="29" onclick="_calendar.elem(this,\'day\')"><span>29' + s + '</span></dd>'
    }
    return html
  }, chksel: function () {
    var yearcz = calendarform['year'][2] - calendarform['year'][1];
    var val = DUCEAPP['calendarinput'].val();
    if (val && val.match(/^\d{4}\-\d{1,2}\-\d{1,2}(\s+\d{1,2}:\d{1,2})?/)) {
      var s = val.split(' '), s1 = s[0].split('-'), s2 = s[1] ? s[1].split(':') : [0, 0];
      var d = new Date(parseInt(s1[0]), s1[1] - 1, parseInt(s1[2]), parseInt(s2[0]), parseInt(s2[1]))
    } else {
      var d = new Date()
    }
    var curr = {
      year: yearcz - (d.getFullYear() - calendarform['year'][1]),
      month: d.getMonth(),
      day: d.getDate() - 1,
      hour: d.getHours(),
      minute: d.getMinutes()
    };
    if (DUCEAPP['calendartype'] == 'time') {
      if (val && val.match(/(\d{1,2}:\d{1,2})/)) {
        var s1 = val.split(':');
        if (s1[0] >= 0 && s1[0] < 24) {
          curr['hour'] = parseInt(s1[0])
        }
        if (s1[1] >= 0 && s1[1] < 60) {
          curr['minute'] = parseInt(s1[1])
        }
      }
    }
    for (var k in calendarform) {
      if (k != 'head' && $('#calendar_' + k).length) {
        $('#calendar_' + k).stop().animate({'scrollTop': 40 * (curr[k] - 2)}, 200).find('dd').eq(curr[k]).addClass('seled')
      }
    }
  }, elem: function (obj, k) {
    var dl = $(obj).parent();
    $(obj).addClass('seled').siblings('dd').removeClass('seled');
    if (k == 'year' || k == 'month') {
      var y = $('#calendar_year').find('.seled').attr('v');
      var m = $('#calendar_month').find('.seled').attr('v');
      var d = $('#calendar_day').find('.seled').index();
      $('#calendar_day').html(this.day(y - 0, m - 0, calendarform['day'][0]));
      d = $('#calendar_day').find('dd').eq(d).length ? d : 0;
      $('#calendar_day').stop().animate({'scrollTop': 40 * (d - 2)}, 200).find('dd').eq(d).addClass('seled')
    }
    dl.stop().animate({'scrollTop': 40 * ($(obj).index() - 2)}, 200)
  }, confirms: function () {
    var datestr = '';
    $('.popselect').find('dd.seled').each(function (i) {
      if (DUCEAPP['calendartype'] == 'time') {
        datestr += i ? ':' : ''
      } else {
        datestr += i > 0 && i < 3 ? '-' : (i == 3 ? ' ' : (i == 4 ? ':' : ''))
      }
      datestr += $(this).attr('v')
    });
    DUCEAPP['calendarinput'].val(datestr);
    duceapp_popselect();
    this.addclear(DUCEAPP['calendarinput'])
  }, addclear: function (calendar) {
    this.init(calendar);
    $(calendar).each(function () {
      var $this = $(this), d = $this.val(), h = $this.attr('placeholder') || '', tx = $this.prev('.tx');
      if (d && !$this.next('.clear').length && $this.attr('caltype') != 'time') {
        $this.after($('<i class="duceapp_font clear abs">&#xe94e;</i>').on('click', function () {
          $this.val('');
          tx.removeClass('selected').text(h);
          $(this).remove()
        }))
      }
      tx.text(d || h);
      d && tx.addClass('selected')
    })
  }
};

function toggle_slider_init(s) {
  if (typeof s['judge'] != 'function' && !s['input']) {
    return
  }
  if (!s['slider']) {
    var ctrl = s['input'].parent(), slider = null
  } else {
    var slider = $(s['slider']), slidebox = slider.parent(), from = slidebox.css('color'), to = slider.css('color'),
      left = slidebox.width() - slider.width() - 1, type = slidebox.hasClass('slideb') ? 2 : 1;
    var ctrl = slidebox.attr('act') == 'box' ? slidebox.parent() : slidebox
  }
  $(ctrl).on('click', function (e) {
    e.preventDefault();
    if (s['input']) {
      if (s['input'].is(':disabled')) {
        return false
      }
    }
    var judge = s['input'] ? s['input'].is(':checked') : s['judge'].call(this);
    if (judge) {
      if (slider) {
        if (type == 1) {
          slider.animate({'left': 1}, 200);
          slidebox.animate({'backgroundColor': from}, 200)
        } else {
          slider.animate({'left': 1, 'backgroundColor': from}, 200)
        }
      }
      s['input'] && s['input'].attr('checked', false);
      typeof s['vanish'] == 'function' && s['vanish'].call(this)
    } else {
      if (slider) {
        if (type == 1) {
          slider.animate({'left': left}, 200);
          slidebox.animate({'backgroundColor': to}, 200)
        } else {
          slider.animate({'left': left, 'backgroundColor': to}, 200)
        }
      }
      s['input'] && s['input'].attr('checked', true);
      typeof s['appear'] == 'function' && s['appear'].call(this)
    }
  })
}

function duceapp_optinit() {
  if ($('.ipt select').length > 0) {
    $('.ipt select').each(function () {
      _select.init(this)
    })
  }
  if ($('input.rdo').length > 0) {
    _radio.init('input.rdo')
  }
  if ($('input.ckb').length > 0) {
    _checkbox.init('input.ckb')
  }
  if ($('.ipt .pawd').length > 0) {
    $('.ipt .pawd').each(function () {
      var i = $(document.createElement('i')), $this = $(this);
      var _clone = $(this).clone().attr({
        'name': $(this).attr('name') + '_clone',
        'type': 'text',
        'autocomplete': 'off'
      }).hide();
      $(this).before(_clone.bind('input propertychange', function () {
        $this.val(_clone.val())
      })).after(i.addClass('duceapp_font pwds').html('&#xe93b;').on('click', function () {
        if ($(this).attr('chked') != '1') {
          _clone.val($this.val()).show();
          $(this).html('&#xe93c;').attr('chked', 1);
          if ($this.is(':focus')) {
            _clone.focus()
          }
        } else {
          _clone.hide();
          $(this).html('&#xe93b;').attr('chked', 0);
          if (_clone.is(':focus')) {
            $this.focus()
          }
        }
      }))
    })
  }
  if ($('input.calendar').length > 0) {
    _calendar.addclear('.calendar')
  }
}

$(document).ready(function () {
  duceapp_optinit()
});
(function (jQuery, undefined) {
  var stepHooks = "backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color outlineColor".split(" "),
    rplusequals = /^([\-+])=\s*(\d+\.?\d*)/, stringParsers = [{
      re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
      parse: function (execResult) {
        return [execResult[1], execResult[2], execResult[3], execResult[4]]
      }
    }, {
      re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
      parse: function (execResult) {
        return [2.55 * execResult[1], 2.55 * execResult[2], 2.55 * execResult[3], execResult[4]]
      }
    }, {
      re: /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/, parse: function (execResult) {
        return [parseInt(execResult[1], 16), parseInt(execResult[2], 16), parseInt(execResult[3], 16)]
      }
    }, {
      re: /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/, parse: function (execResult) {
        return [parseInt(execResult[1] + execResult[1], 16), parseInt(execResult[2] + execResult[2], 16), parseInt(execResult[3] + execResult[3], 16)]
      }
    }, {
      re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d+(?:\.\d+)?)\s*)?\)/,
      space: "hsla",
      parse: function (execResult) {
        return [execResult[1], execResult[2] / 100, execResult[3] / 100, execResult[4]]
      }
    }], color = jQuery.Color = function (color, green, blue, alpha) {
      return new jQuery.Color.fn.parse(color, green, blue, alpha)
    }, spaces = {
      rgba: {
        cache: "_rgba",
        props: {
          red: {idx: 0, type: "byte", empty: true},
          green: {idx: 1, type: "byte", empty: true},
          blue: {idx: 2, type: "byte", empty: true},
          alpha: {idx: 3, type: "percent", def: 1}
        }
      },
      hsla: {
        cache: "_hsla",
        props: {
          hue: {idx: 0, type: "degrees", empty: true},
          saturation: {idx: 1, type: "percent", empty: true},
          lightness: {idx: 2, type: "percent", empty: true}
        }
      }
    }, propTypes = {
      "byte": {floor: true, min: 0, max: 255},
      "percent": {min: 0, max: 1},
      "degrees": {mod: 360, floor: true}
    }, rgbaspace = spaces.rgba.props, support = color.support = {}, colors, each = jQuery.each;
  spaces.hsla.props.alpha = rgbaspace.alpha;

  function clamp(value, prop, alwaysAllowEmpty) {
    var type = propTypes[prop.type] || {}, allowEmpty = prop.empty || alwaysAllowEmpty;
    if (allowEmpty && value == null) {
      return null
    }
    if (prop.def && value == null) {
      return prop.def
    }
    if (type.floor) {
      value = ~~value
    } else {
      value = parseFloat(value)
    }
    if (value == null || isNaN(value)) {
      return prop.def
    }
    if (type.mod) {
      value = value % type.mod;
      return value < 0 ? type.mod + value : value
    }
    return type.min > value ? type.min : type.max < value ? type.max : value
  }

  function stringParse(string) {
    var inst = color(), rgba = inst._rgba = [];
    string = string.toLowerCase();
    each(stringParsers, function (i, parser) {
      var match = parser.re.exec(string), values = match && parser.parse(match), parsed,
        spaceName = parser.space || "rgba", cache = spaces[spaceName].cache;
      if (values) {
        parsed = inst[spaceName](values);
        inst[cache] = parsed[cache];
        rgba = inst._rgba = parsed._rgba;
        return false
      }
    });
    if (rgba.length !== 0) {
      if (Math.max.apply(Math, rgba) === 0) {
        jQuery.extend(rgba, colors.transparent)
      }
      return inst
    }
    if (string = colors[string]) {
      return string
    }
  }

  color.fn = color.prototype = {
    constructor: color, parse: function (red, green, blue, alpha) {
      if (red === undefined) {
        this._rgba = [null, null, null, null];
        return this
      }
      if (red instanceof jQuery || red.nodeType) {
        red = red instanceof jQuery ? red.css(green) : jQuery(red).css(green);
        green = undefined
      }
      var inst = this, type = jQuery.type(red), rgba = this._rgba = [], source;
      if (green !== undefined) {
        red = [red, green, blue, alpha];
        type = "array"
      }
      if (type === "string") {
        return this.parse(stringParse(red) || colors._default)
      }
      if (type === "array") {
        each(rgbaspace, function (key, prop) {
          rgba[prop.idx] = clamp(red[prop.idx], prop)
        });
        return this
      }
      if (type === "object") {
        if (red instanceof color) {
          each(spaces, function (spaceName, space) {
            if (red[space.cache]) {
              inst[space.cache] = red[space.cache].slice()
            }
          })
        } else {
          each(spaces, function (spaceName, space) {
            each(space.props, function (key, prop) {
              var cache = space.cache;
              if (!inst[cache] && space.to) {
                if (red[key] == null || key === "alpha") {
                  return
                }
                inst[cache] = space.to(inst._rgba)
              }
              inst[cache][prop.idx] = clamp(red[key], prop, true)
            })
          })
        }
        return this
      }
    }, is: function (compare) {
      var is = color(compare), same = true, myself = this;
      each(spaces, function (_, space) {
        var isCache = is[space.cache], localCache;
        if (isCache) {
          localCache = myself[space.cache] || space.to && space.to(myself._rgba) || [];
          each(space.props, function (_, prop) {
            if (isCache[prop.idx] != null) {
              same = (isCache[prop.idx] === localCache[prop.idx]);
              return same
            }
          })
        }
        return same
      });
      return same
    }, _space: function () {
      var used = [], inst = this;
      each(spaces, function (spaceName, space) {
        if (inst[space.cache]) {
          used.push(spaceName)
        }
      });
      return used.pop()
    }, transition: function (other, distance) {
      var end = color(other), spaceName = end._space(), space = spaces[spaceName],
        start = this[space.cache] || space.to(this._rgba), result = start.slice();
      end = end[space.cache];
      each(space.props, function (key, prop) {
        var index = prop.idx, startValue = start[index], endValue = end[index], type = propTypes[prop.type] || {};
        if (endValue === null) {
          return
        }
        if (startValue === null) {
          result[index] = endValue
        } else {
          if (type.mod) {
            if (endValue - startValue > type.mod / 2) {
              startValue += type.mod
            } else if (startValue - endValue > type.mod / 2) {
              startValue -= type.mod
            }
          }
          result[prop.idx] = clamp((endValue - startValue) * distance + startValue, prop)
        }
      });
      return this[spaceName](result)
    }, blend: function (opaque) {
      if (this._rgba[3] === 1) {
        return this
      }
      var rgb = this._rgba.slice(), a = rgb.pop(), blend = color(opaque)._rgba;
      return color(jQuery.map(rgb, function (v, i) {
        return (1 - a) * blend[i] + a * v
      }))
    }, toRgbaString: function () {
      var prefix = "rgba(", rgba = jQuery.map(this._rgba, function (v, i) {
        return v == null ? (i > 2 ? 1 : 0) : v
      });
      if (rgba[3] === 1) {
        rgba.pop();
        prefix = "rgb("
      }
      return prefix + rgba.join(",") + ")"
    }, toHslaString: function () {
      var prefix = "hsla(", hsla = jQuery.map(this.hsla(), function (v, i) {
        if (v == null) {
          v = i > 2 ? 1 : 0
        }
        if (i && i < 3) {
          v = Math.round(v * 100) + "%"
        }
        return v
      });
      if (hsla[3] === 1) {
        hsla.pop();
        prefix = "hsl("
      }
      return prefix + hsla.join(",") + ")"
    }, toHexString: function (includeAlpha) {
      var rgba = this._rgba.slice(), alpha = rgba.pop();
      if (includeAlpha) {
        rgba.push(~~(alpha * 255))
      }
      return "#" + jQuery.map(rgba, function (v, i) {
        v = (v || 0).toString(16);
        return v.length === 1 ? "0" + v : v
      }).join("")
    }, toString: function () {
      return this._rgba[3] === 0 ? "transparent" : this.toRgbaString()
    }
  };
  color.fn.parse.prototype = color.fn;

  function hue2rgb(p, q, h) {
    h = (h + 1) % 1;
    if (h * 6 < 1) {
      return p + (q - p) * 6 * h
    }
    if (h * 2 < 1) {
      return q
    }
    if (h * 3 < 2) {
      return p + (q - p) * ((2 / 3) - h) * 6
    }
    return p
  }

  spaces.hsla.to = function (rgba) {
    if (rgba[0] == null || rgba[1] == null || rgba[2] == null) {
      return [null, null, null, rgba[3]]
    }
    var r = rgba[0] / 255, g = rgba[1] / 255, b = rgba[2] / 255, a = rgba[3], max = Math.max(r, g, b),
      min = Math.min(r, g, b), diff = max - min, add = max + min, l = add * 0.5, h, s;
    if (min === max) {
      h = 0
    } else if (r === max) {
      h = (60 * (g - b) / diff) + 360
    } else if (g === max) {
      h = (60 * (b - r) / diff) + 120
    } else {
      h = (60 * (r - g) / diff) + 240
    }
    if (l === 0 || l === 1) {
      s = l
    } else if (l <= 0.5) {
      s = diff / add
    } else {
      s = diff / (2 - add)
    }
    return [Math.round(h) % 360, s, l, a == null ? 1 : a]
  };
  spaces.hsla.from = function (hsla) {
    if (hsla[0] == null || hsla[1] == null || hsla[2] == null) {
      return [null, null, null, hsla[3]]
    }
    var h = hsla[0] / 360, s = hsla[1], l = hsla[2], a = hsla[3], q = l <= 0.5 ? l * (1 + s) : l + s - l * s,
      p = 2 * l - q, r, g, b;
    return [Math.round(hue2rgb(p, q, h + (1 / 3)) * 255), Math.round(hue2rgb(p, q, h) * 255), Math.round(hue2rgb(p, q, h - (1 / 3)) * 255), a]
  };
  each(spaces, function (spaceName, space) {
    var props = space.props, cache = space.cache, to = space.to, from = space.from;
    color.fn[spaceName] = function (value) {
      if (to && !this[cache]) {
        this[cache] = to(this._rgba)
      }
      if (value === undefined) {
        return this[cache].slice()
      }
      var type = jQuery.type(value), arr = (type === "array" || type === "object") ? value : arguments,
        local = this[cache].slice(), ret;
      each(props, function (key, prop) {
        var val = arr[type === "object" ? key : prop.idx];
        if (val == null) {
          val = local[prop.idx]
        }
        local[prop.idx] = clamp(val, prop)
      });
      if (from) {
        ret = color(from(local));
        ret[cache] = local;
        return ret
      } else {
        return color(local)
      }
    };
    each(props, function (key, prop) {
      if (color.fn[key]) {
        return
      }
      color.fn[key] = function (value) {
        var vtype = jQuery.type(value), fn = (key === 'alpha' ? (this._hsla ? 'hsla' : 'rgba') : spaceName),
          local = this[fn](), cur = local[prop.idx], match;
        if (vtype === "undefined") {
          return cur
        }
        if (vtype === "function") {
          value = value.call(this, cur);
          vtype = jQuery.type(value)
        }
        if (value == null && prop.empty) {
          return this
        }
        if (vtype === "string") {
          match = rplusequals.exec(value);
          if (match) {
            value = cur + parseFloat(match[2]) * (match[1] === "+" ? 1 : -1)
          }
        }
        local[prop.idx] = value;
        return this[fn](local)
      }
    })
  });
  each(stepHooks, function (i, hook) {
    jQuery.cssHooks[hook] = {
      set: function (elem, value) {
        var parsed, backgroundColor, curElem;
        if (jQuery.type(value) !== 'string' || (parsed = stringParse(value))) {
          value = color(parsed || value);
          if (!support.rgba && value._rgba[3] !== 1) {
            curElem = hook === "backgroundColor" ? elem.parentNode : elem;
            do {
              backgroundColor = jQuery.curCSS(curElem, "backgroundColor")
            } while ((backgroundColor === "" || backgroundColor === "transparent") && (curElem = curElem.parentNode) && curElem.style);
            value = value.blend(backgroundColor && backgroundColor !== "transparent" ? backgroundColor : "_default")
          }
          value = value.toRgbaString()
        }
        elem.style[hook] = value
      }
    };
    jQuery.fx.step[hook] = function (fx) {
      if (!fx.colorInit) {
        fx.start = color(fx.elem, hook);
        fx.end = color(fx.end);
        fx.colorInit = true
      }
      jQuery.cssHooks[hook].set(fx.elem, fx.start.transition(fx.end, fx.pos))
    }
  });
  jQuery(function () {
    var div = document.createElement("div"), div_style = div.style;
    div_style.cssText = "background-color:rgba(1,1,1,.5)";
    support.rgba = div_style.backgroundColor.indexOf("rgba") > -1
  });
  colors = jQuery.Color.names = {
    aqua: "#00ffff",
    azure: "#f0ffff",
    beige: "#f5f5dc",
    black: "#000000",
    blue: "#0000ff",
    brown: "#a52a2a",
    cyan: "#00ffff",
    darkblue: "#00008b",
    darkcyan: "#008b8b",
    darkgrey: "#a9a9a9",
    darkgreen: "#006400",
    darkkhaki: "#bdb76b",
    darkmagenta: "#8b008b",
    darkolivegreen: "#556b2f",
    darkorange: "#ff8c00",
    darkorchid: "#9932cc",
    darkred: "#8b0000",
    darksalmon: "#e9967a",
    darkviolet: "#9400d3",
    fuchsia: "#ff00ff",
    gold: "#ffd700",
    green: "#008000",
    indigo: "#4b0082",
    khaki: "#f0e68c",
    lightblue: "#add8e6",
    lightcyan: "#e0ffff",
    lightgreen: "#90ee90",
    lightgrey: "#d3d3d3",
    lightpink: "#ffb6c1",
    lightyellow: "#ffffe0",
    lime: "#00ff00",
    magenta: "#ff00ff",
    maroon: "#800000",
    navy: "#000080",
    olive: "#808000",
    orange: "#ffa500",
    pink: "#ffc0cb",
    purple: "#800080",
    violet: "#800080",
    red: "#ff0000",
    silver: "#c0c0c0",
    white: "#ffffff",
    yellow: "#ffff00",
    transparent: [null, null, null, 0],
    _default: "#ffffff"
  }
})(jQuery);
