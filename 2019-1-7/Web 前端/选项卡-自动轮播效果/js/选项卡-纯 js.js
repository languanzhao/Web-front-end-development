var main = document.querySelector(".tab")
	var title = main.querySelectorAll(".hd ul li")
	var con = main.querySelectorAll(".bd div")
	var left = main.querySelector(".prev")
	var right = main.querySelector(".next")
    var index = 0
    var time 
    
    //点击切换标题
    for(var i = 0;i <= title.length - 1 ;i++){
    	title[i].onclick = function(){
    		for (var j = 0; j <= title.length - 1; j++) {
    			title[j].className = ''
    			con[j].className = ''
    			title[j].index = j
    		}
    			this.className = 'on'
    			con[this.index].className = 'on'
    			index = this.index
    	}
    }

    //设置定时器自动播放
    function autoPlay(){
    time = setInterval(function(){
    	index >= title.length - 1 ? index = 0 : index++
    	samePart()
    },1000)	
    }
    autoPlay()

    //移入停止计时器
    main.onmouseover = function(){
    	clearInterval(time)
    }

    //移出重启计时器
    main.onmouseleave = function(){
    	autoPlay()
    }

    //左按钮
    left.onclick = function(){
    	index <= 0 ? index = title.length - 1 : index--
    	samePart()
    }

    //右按钮
    right.onclick = function(){
    	index >= title.length - 1 ? index = 0 : index++
    	samePart()
    }

    //封装相同部分代码
    function samePart(){
    	for (var j = 0; j <= title.length - 1; j++) {
    			title[j].className = ''
    			con[j].className = ''

    		}
    			title[index].className = 'on'
    			con[index].className = 'on'
    }
    samePart()