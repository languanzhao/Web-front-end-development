(function(){
		var index = 0 
		var time 
		function Tab(props){
			this.main = $(props.Main)
			this.btn = $(props.btn)
			this.con = $(props.con)
			this.left = $(props.left)
			this.right = $(props.right)
			this.toClick()
			if(props.autoPlay === true){
			this.autoPlay(props.delayTime)
			this.toToggle(props.delayTime)	
			}
			this.leftBtn()
			this.rightBtn()
		}
	//点击切换按钮
	Tab.prototype.toClick = function(){
		var that = this
		that.btn.each(function(i,item){
			$(item).click(function(){
				$(item).addClass("on").siblings().removeClass("on")
				// that.btn.eq(i).addClass("on").siblings().removeClass("on")
				that.con.eq(i).addClass("on").siblings().removeClass("on")
				index = i
			})
		})
	}
	//设置定时器
	Tab.prototype.autoPlay = function(delayTime = 1000){
		var that = this
		time = setInterval(function(){
			a(that)
		},delayTime)
	}
	//移入暂停，移出重启
	Tab.prototype.toToggle = function(delayTime = 1000){
		var that = this
		that.main.hover(function(){
			clearInterval(time)
		},function(){
			that.autoPlay(delayTime)
		})
	}
	//左按钮
	Tab.prototype.leftBtn = function(){
		var that = this
		that.left.click(function(){
			index <= 0 ? index = that.btn.length - 1 : index --
			that.btn.eq(index).addClass("on").siblings().removeClass("on")
			that.con.eq(index).addClass("on").siblings().removeClass("on")
		})
	}
	//右按钮
	Tab.prototype.rightBtn = function(){
		var that = this
		that.right.click(function(){
			a(that)
		})
	}
	function a(that){
			index >= that.btn.length - 1 ? index = 0 : index++
			that.btn.eq(index).addClass("on").siblings().removeClass("on")
			that.con.eq(index).addClass("on").siblings().removeClass("on")
	}
	
 	window.Tab = Tab

})()