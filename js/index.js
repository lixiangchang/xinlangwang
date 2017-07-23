$(function(){
	function clickShow(ele1,ele2){
		ele1.children("div").addClass("active").parent("li").siblings().children("div").removeClass("active")
		ele2.addClass("show").siblings().removeClass("show")
	}
	function clickShow1(ele1,ele2){
		ele1.addClass("active").siblings().removeClass("active")
		ele2.addClass("show").siblings().removeClass("show")
	}
	
	$(".list1").hover(function(){
		$(this).children(".showList").show()
	},function(){
		$(".showList").hide()
	})
	$(".tab_title>li").hover(function(){
		var ind=$(this).index();
		clickShow($(".tab_title>li").eq(ind),$(".smList>ul").eq(ind))
	})
	
	$(".day>a").hover(function(){
		var ind=$(this).index();
		clickShow1($(".day>a").eq(ind),$(".sina_video .tabs div").eq(ind))
	})
	
	$(".car .comTitle_tabs li").hover(function(){
		var ind=$(this).index();
		clickShow1($(".car .comTitle_tabs li").eq(ind),$(".car .tabs div").eq(ind))
	})
	$(".news li").hover(function(){
		var ind=$(this).index();
		clickShow1($(".news .comTitle_tabs li").eq(ind),$(".news .tabs div").eq(ind))
	})
	$(".conduct li").hover(function(){
		var ind=$(this).index();
		clickShow1($(".conduct .comTitle_tabs li").eq(ind),$(".conduct .tabs div").eq(ind))
	})
	$(".love .comTitle_tabs>li").hover(function(){
		var ind=$(this).index();
		clickShow1($(".love .comTitle_tabs>li").eq(ind),$(".love>.tabs>div").eq(ind))
	})
	$(".book .comTitle_tabs>li").hover(function(){
		var ind=$(this).index();
		clickShow1($(".book .comTitle_tabs>li").eq(ind),$(".book>.tabs>div").eq(ind))
	})
	$(".explore .comTitle_tabs>li").hover(function(){
		var ind=$(this).index();
		clickShow1($(".explore .comTitle_tabs>li").eq(ind),$(".explore>.tabs>div.tabs_item").eq(ind))
	})
	$(".phone .comTitle_tabs>li").hover(function(){
		var ind=$(this).index();
		clickShow1($(".phone .comTitle_tabs>li").eq(ind),$(".phone>.tabs>div.tabs_item").eq(ind))
	})
	$(".explore>.youxi>span").hover(function(){
		var ind=$(this).index();
		clickShow1($(".explore .youxi>span").eq(ind),$(".explore>.youxi_tabs>div").eq(ind+1))
	})
	$(".phone .youxi>span").hover(function(){
		var ind=$(this).index();
		clickShow1($(".phone .youxi>span").eq(ind),$(".phone .youxi_tabs>div").eq(ind+1))
	})
	$(".video>ul>li").hover(function(){
		var ind=$(this).index();
		console.log(ind)
		$(".video>ul>li").eq(ind).addClass("active").siblings().removeClass("active")
	})
//	$(".love .photo_prev").click(function(){
//		
//		$(".love .tabs .tabs_item").animate({"margin-left":-$(".love .tabs .tabs_item").width()+"px"})
//	})
	var flag=false;
	$(".blogs").click(function(){
		flag=!flag;
		if(flag){
			$(".blogs>.order_search_show").show()
		}else{
			$(".blogs>.order_search_show").hide()
		}
	})
	var flag1=false;
	$(".book>.comTitle>.order_search").click(function(){
		flag1=!flag1;
		if(flag1){
			$(".book>.comTitle .order_search_show").show()
		}else{
			$(".book>.comTitle .order_search_show").hide()
		}
	})
	
	
	$("#quanxuan").click(function(){
		$(".listNav input").prop("checked",$("#quanxuan").prop("checked"))
	})
	$("#buxuan").click(function(){
		$(".listNav input").prop("checked",false)
	})
	$("#fanxuan").click(function(){
		var xuan=$(".listNav input").prop("checked");
		for(var i=0;i<$(".listNav input").length;i++){
			$(".listNav input").eq(i).prop("checked",!$(".listNav input").eq(i).prop("checked"));
		}
	})
	
	
	
	
	
	var n=0;
	$(".drop>.prev").click(function(){
		n--;
		if(n<1)n=0;
		$(".drop>span>i").eq(n).addClass("active").siblings().removeClass("active");
		dropShow(n);
	})
	$(".drop>.next").click(function(){
		n++;
		if(n>$(".drop>span>i").length-1)n=$(".drop>span>i").length-1;
		$(".drop>span>i").eq(n).addClass("active").siblings().removeClass("active");
		dropShow(n);
	})
	function dropShow(n){
		$(".c_list_scroll ul").eq(n).removeClass("hide").siblings().addClass("hide")
	}
})
