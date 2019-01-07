var main = $(".tab")
	var li = $(".hd ul li")
	var con = $(".bd div")
	var left = $(".prev")
	var right = $(".next")
	var index = 0
	var time
	
	//点击切换按钮
	 li.each(function(i,item){
	 	$(item).click(function(){
	 		li.eq(i).addClass("on").siblings().removeClass("on") //$(this).addClass("on").siblings().removeClass("on")
	 		con.eq(i).addClass("on").siblings().removeClass("on")
	 		index = i
	 	})
	 })

	 //设置定时器
	function autoPlay(){
	 time = setInterval(function(){
	 	index >= li.length - 1 ? index = 0 : index++
	 	samePart()
	 },1000)	
	}
	autoPlay()

	//移入停止计时器
	//移出重启定时器
	main.hover(function(){
		clearInterval(time)
	},function(){
		autoPlay()
	})

	//左按钮
	left.click(function(){
		index <= 0 ? index = li.length - 1 : index--
		samePart()
	})

	//右按钮
	right.click(function(){
		index >= li.length - 1 ? index = 0 : index++
		samePart()
	})

	//封装相同部分代码
	function samePart(){
		li.eq(index).addClass("on").siblings().removeClass("on")
		con.eq(index).addClass("on").siblings().removeClass("on")
	}
	samePart()