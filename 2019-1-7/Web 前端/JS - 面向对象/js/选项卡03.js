(function(){
	var time
	var count = 0
	
	function Tab(info){
		this.main = document.querySelector(info.tabMain)    //整体
		this.li = document.querySelectorAll(info.tabTitle)  //标题
		this.div = document.querySelectorAll(info.tabCon)   //内容
		this.toClick()
		
		if(info.autoPlay){
			this.toPlay(info.delayTime)
			this.toToggle(info)
		}
	}
	
	function show(that,i){
		for(j=0;j<=that.li.length-1;j++){
			that.li[j].className = ""
			that.div[j].className = ""
		}
		that.li[i].className = "on"
		that.div[i].className = "on"
	}
	
	
	Tab.prototype.toClick = function(){
		var that = this
		that.li.forEach(function(item,i){
			item.onclick = function(){
				show(that,i)
				count = i        //需要添加   当显示第三个时点击第二个会跳到第一个
			}
		})
	}
	
	Tab.prototype.toPlay = function(delayTime = 1000){
		var that = this
		time = setInterval(function(){
			if(count >= that.li.length-1){
				count = 0
			}else{
				count++
			}
			show(that,count)
		},delayTime)
	}
	
	Tab.prototype.toToggle = function(info){
		var that = this
		that.main.onmouseover = function(){
			clearInterval(time)
		}
		that.main.onmouseout = function(){
			that.toPlay(info.delayTime)
		}
	}
	
	
	window.Tab = Tab
})()
