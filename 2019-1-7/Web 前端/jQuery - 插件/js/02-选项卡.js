(function($){

	//默认值
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
      	//调用选择器直接使用Main,btn,con等；不用 $(x.Main),$(x.btn),$(x.con)
      	var x = $.extend(a,b)
      	var Main = $(x.Main)
      	var btn = $(x.btn)                //调用选择器
      	var con = $(x.con)				  //调用选择器
      	var leftBtn = $(x.leftBtn)
      	var rightBtn = $(x.rightBtn)
      	var index = 0
      	var time

      	//点击切换按钮
        btn.each(function(i,item){
          	$(item).click(function(){
          		
          		btn.eq(i).addClass("on").siblings().removeClass("on")
          		con.eq(i).addClass("on").siblings().removeClass("on")
          	    index = i         //需要添加   当显示第三个时点击第二个会跳到第一个
          	})
          })

        //自动播放
        function autoPlay(){            
      		time = setInterval(function(){
        	 (index >= btn.length - 1) ? index = 0 : index++
        	btn.eq(index).addClass("on").siblings().removeClass("on")
          	con.eq(index).addClass("on").siblings().removeClass("on")
        },x.delayTime)                     //delayTime 调用属性的值
     }

        //判断是否为true； true播放  false不播放
     if(x.autoPlay === true){             			//autoPlay 调用属性属性的值
     	 		autoPlay()
     		}

     	//移入停止定时器，移出重启定时器
     	function StarStop(){
     		Main.hover(function(){
     			clearInterval(time)
     		}, function() {
     			if(x.autoPlay === true){             //autoPlay 调用属性属性的值
     	 		autoPlay()
     		}
     		});

     	}
     	StarStop()

     	//左按钮
     	function leftMove(){
     		leftBtn.click(function(){
     		if(index <= 0){
     			index = btn.length -1
     		}else{
     			index--
     		}
     		btn.eq(index).addClass("on").siblings().removeClass("on")
        con.eq(index).addClass("on").siblings().removeClass("on")
     			
     		})
     	}
     	leftMove()

     	//右按钮
     	function rightMove(){
     		rightBtn.click(function(){
     		if(index >= btn.length - 1){
     			index = 0
     		}else{
     			index++
     		}
     		btn.eq(index).addClass("on").siblings().removeClass("on")
        con.eq(index).addClass("on").siblings().removeClass("on")
     			
     		})
     	}
     	rightMove()
   } 
})

	})(jQuery)