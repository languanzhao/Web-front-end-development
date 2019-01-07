(function($){
	//设置默认值
	var a = {
		"Main":".tab",
		"btn":".hd li",
		"con":".bd div",
		"leftBtn":".prev",
		"rightBtn":".next",
		"autoPlay":true,
		"delayTime":1000
	}
	$.fn.extend({
		"main":function(b){

			var x = $.extend(a,b)
			//调用选择器直接使用Main,btn,con等；不用 $(x.Main),$(x.btn),$(x.con)
			var main = $(x.Main)
			var btn = $(x.btn)
			var con = $(x.con)               //调用选择器
			var leftBtn = $(x.leftBtn)
			var rightBtn = $(x.rightBtn)
			var index = 0
			var time

			//点击切换按钮
			btn.each(function(i,item){
				$(item).click(function(){
					$(item).addClass("on").siblings().removeClass("on")
					con.eq(i).addClass("on").siblings().removeClass("on")
					index = i                 //需要添加   当显示第三个时点击第二个会跳到第一个
				})
			})
			
			//设置定时器自动播放
			function autoPlay(){
			time = setInterval(function(){
				index >= btn.length - 1 ? index = 0 : index++
				btn.eq(index).addClass("on").siblings().removeClass("on")
				con.eq(index).addClass("on").siblings().removeClass("on")
			},x.delayTime)	
			}

			//判断是否自动播放
			if(x.autoPlay === true){                      //delayTime 调用属性的值
				autoPlay()
			}
			
			//移入暂停，移出重启
			main.hover(function() {
				clearInterval(time)
			}, function() {
				if(x.autoPlay === true){                 //autoPlay 调用属性属性的值
				  autoPlay()
			}
			})
			
			//左按钮
			leftBtn.click(function(){
				index <= 0 ? index = btn.length - 1 : index--
				btn.eq(index).addClass("on").siblings().removeClass("on")
				con.eq(index).addClass("on").siblings().removeClass("on")
			})
			
			//右按钮
			rightBtn.click(function(){
				index >= btn.length - 1 ? index = 0 : index++
				btn.eq(index).addClass("on").siblings().removeClass("on")
				con.eq(index).addClass("on").siblings().removeClass("on")
			})
		}
	})
})(jQuery)