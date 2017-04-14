 
 jQuery(".picMarquee-left").slide({mainCell:".bd ul",autoPlay:true,effect:"leftMarquee",vis:5,interTime:50,opp:true,trigger:"click", prevCell:".next",nextCell:".prev"});

 
 $(document).ready(function () {
	$(".xsbh_1 li a").first().attr("class", "xsbh_2");
	$(".xq").first().removeClass("displayno");

	$(".xsbh_1 li a").hover(function () {
		var newsNo = $(".xsbh_1 li a").index(this);
		$(".xsbh_1 li a").attr("class", "xsbh_3");
		$(this).attr("class", "xsbh_2");
		$(".xq").eq(newsNo).removeClass("displayno").siblings("div").addClass("displayno");
	}, function () {
	});

});

 $(document).ready(function () {
	$("..xsbh2_1 li a").first().attr("class", "xsbh_4");
	$(".xq2").first().removeClass("displayno");

	$("..xsbh2_1 li a").hover(function () {
		var newsNo = $("..xsbh2_1 li a").index(this);
		$("..xsbh2_1 li a").attr("class", "xsbh_5");
		$(this).attr("class", "xsbh_4");
		$(".xq2").eq(newsNo).removeClass("displayno").siblings("div").addClass("displayno");
	}, function () {
	});

});