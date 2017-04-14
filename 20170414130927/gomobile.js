
//alert("aa0");

var pp = location.href;
var zhaveu ;
zhaveu = 0 ;
if (pp.indexOf("u=yes")>=0){
  //alert("aa1");
  zhaveu = 1 ;
  expires = new Date();
  expires.setTime(expires.getTime() + 86400000);
  //alert("aa2");
	document.cookie = "ugo=" + escape("yes") + "; expires=" + expires.toGMTString() + "; path=/";
  //alert("writecookie");
}
//alert(pp);

function getcookie(zname) {
	var cookie_start = document.cookie.indexOf(zname);
	var cookie_end = document.cookie.indexOf(";", cookie_start);
	return cookie_start == -1 ? '' : unescape(document.cookie.substring(cookie_start + zname.length + 1, (cookie_end > cookie_start ? cookie_end : document.cookie.length)));
}

//alert("bb0");
var udo ;
udo = getcookie("ugo");
//alert(udo);


//手机浏览跳转到微站 uaredirect("微站");
function uaredirect(f) { 
  if( (udo=="") && (zhaveu==0) ){
      try { var b = false; if (arguments[1]) { var e = window.location.host; var a = window.location.href; if (isSubdomain(arguments[1], e) == 1) { f = f + "/#m/" + a; b = true } else { if (isSubdomain(arguments[1], e) == 2) { f = f + "/#m/" + a; b = true } else { f = a; b = false } } } else { b = true } if (b) { var c = window.location.hash; if (!c.match("fromapp")) { if ((navigator.userAgent.match(/(iPhone|iPod|Android|ios)/i))) { location.replace(f) } } } } catch (d) { } } function isSubdomain(c, d) { this.getdomain = function (f) { var e = f.indexOf("://"); if (e > 0) { var h = f.substr(e + 3) } else { var h = f } var g = /^www\./; if (g.test(h)) { h = h.substr(4) } return h }; if (c == d) { return 1 } else { var c = this.getdomain(c); var b = this.getdomain(d); if (c == b) { return 1 } else { c = c.replace(".", "\\."); var a = new RegExp("\\." + c + "$"); if (b.match(a)) { return 2 } else { return 0 } } } 
    }
}
