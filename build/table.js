this["JST"] = this["JST"] || {};

this["JST"]["src/table"] = function anonymous(locals) {
jade.debug = [{ lineno: 1, filename: "src/table.jade" }];
try {
var buf = [];
var locals_ = (locals || {}),rows = locals_.rows,getPrettyTime = locals_.getPrettyTime;jade.debug.unshift({ lineno: 1, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 2, filename: jade.debug[0].filename });
buf.push("<table class=\"statTable\">");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 4, filename: jade.debug[0].filename });
buf.push("<thead>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
buf.push("<tr>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
buf.push("<th>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 5, filename: jade.debug[0].filename });
buf.push("Site");
jade.debug.shift();
jade.debug.shift();
buf.push("</th>");
jade.debug.shift();
jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
buf.push("<th>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 6, filename: jade.debug[0].filename });
buf.push("Time");
jade.debug.shift();
jade.debug.shift();
buf.push("</th>");
jade.debug.shift();
jade.debug.unshift({ lineno: 7, filename: jade.debug[0].filename });
buf.push("<th>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 7, filename: jade.debug[0].filename });
buf.push("Clicks");
jade.debug.shift();
jade.debug.shift();
buf.push("</th>");
jade.debug.shift();
jade.debug.shift();
buf.push("</tr>");
jade.debug.shift();
jade.debug.shift();
buf.push("</thead>");
jade.debug.shift();
jade.debug.unshift({ lineno: 9, filename: jade.debug[0].filename });
buf.push("<tbody>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 9, filename: jade.debug[0].filename });
// iterate rows
;(function(){
  var $$obj = rows;
  if ('number' == typeof $$obj.length) {

    for (var $index = 0, $$l = $$obj.length; $index < $$l; $index++) {
      var row = $$obj[$index];

jade.debug.unshift({ lineno: 9, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 11, filename: jade.debug[0].filename });
buf.push("<tr>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 11, filename: jade.debug[0].filename });
buf.push("<td>" + (jade.escape(null == (jade.interp = row.hostName) ? "" : jade.interp)));
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</td>");
jade.debug.shift();
jade.debug.unshift({ lineno: 12, filename: jade.debug[0].filename });
buf.push("<td>" + (jade.escape(null == (jade.interp = getPrettyTime(row.lastTime)) ? "" : jade.interp)));
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</td>");
jade.debug.shift();
jade.debug.unshift({ lineno: 13, filename: jade.debug[0].filename });
buf.push("<td>" + (jade.escape(null == (jade.interp = row.clicks) ? "" : jade.interp)));
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</td>");
jade.debug.shift();
jade.debug.shift();
buf.push("</tr>");
jade.debug.shift();
jade.debug.shift();
    }

  } else {
    var $$l = 0;
    for (var $index in $$obj) {
      $$l++;      var row = $$obj[$index];

jade.debug.unshift({ lineno: 9, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 11, filename: jade.debug[0].filename });
buf.push("<tr>");
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.unshift({ lineno: 11, filename: jade.debug[0].filename });
buf.push("<td>" + (jade.escape(null == (jade.interp = row.hostName) ? "" : jade.interp)));
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</td>");
jade.debug.shift();
jade.debug.unshift({ lineno: 12, filename: jade.debug[0].filename });
buf.push("<td>" + (jade.escape(null == (jade.interp = getPrettyTime(row.lastTime)) ? "" : jade.interp)));
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</td>");
jade.debug.shift();
jade.debug.unshift({ lineno: 13, filename: jade.debug[0].filename });
buf.push("<td>" + (jade.escape(null == (jade.interp = row.clicks) ? "" : jade.interp)));
jade.debug.unshift({ lineno: undefined, filename: jade.debug[0].filename });
jade.debug.shift();
buf.push("</td>");
jade.debug.shift();
jade.debug.shift();
buf.push("</tr>");
jade.debug.shift();
jade.debug.shift();
    }

  }
}).call(this);

jade.debug.shift();
jade.debug.shift();
buf.push("</tbody>");
jade.debug.shift();
jade.debug.shift();
buf.push("</table>");
jade.debug.shift();
jade.debug.shift();;return buf.join("");
} catch (err) {
  jade.rethrow(err, jade.debug[0].filename, jade.debug[0].lineno);
}
};