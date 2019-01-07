(function(){             
		var index = 0
		var time
		function Tab(info){
			this.main = document.querySelector(info.tabMain)
			this.li = document.querySelectorAll(info.tabTitle)
			this.div = document.querySelectorAll(info.tabCon)
			this.toClick()
			if(info.autoPlay === true){      //判断是否自动播放
				this.autoPlay(info.delayTime)                 //设置播放时间
				this.StopStart(info.delayTime)                //设置播放时间
			}
		}

		function a(that,i){
			for(var j = 0;j < that.li.length;j++){
						that.li[j].className = ''
						that.div[j].className = ''
					}
					 	that.li[i].className = 'on'            //item.className = 'on'
					 	that.div[i].className = 'on'
		}
		
		Tab.prototype.toClick = function(){
			var that = this
			that.li.forEach(function(item,i){
				item.onclick = function(){
					a(that,i)
					index = i
				}
		})
		}
		
		Tab.prototype.autoPlay = function(delayTime = 1000){   //设置默认播放时间
			var that = this
			time = setInterval(function(){
				if(index >= that.li.length-1){
					index = 0
				}else{
					index++
				}
				a(that,index)
				
			},delayTime)                                         //设置播放时间
		}
		
	Tab.prototype.StopStart = function(delayTime = 1000){       //设置默认播放时间
			var that = this
			this.main.onmouseenter = function(){
			clearInterval(time)
			
			that.main.onmouseleave = function(){
			time = setInterval(function(){
				if(index >= that.li.length-1){
					index = 0
				}else{
					index++
				}
				a(that,index)

			},delayTime)                                          //设置播放时间
			
		}
		}
	}

		window.Tab = Tab
})()