(function() {
    //声明变量         需要放在顶部
    var index = 0
    var time
    //获取元素
    function Tab(info){
        this.main = document.querySelector(info.tabMain)
        this.li = document.querySelectorAll(info.tabTitle)
        this.div = document.querySelectorAll(info.tabCon)
        this.toClick()
    //判断是否为true，是则自动播放，否则去掉autoPlay这一属性
        if (info.autoPlay === true) {         //可忽略，默认值为true
            this.autoPlay()
            this.Stop()
            this.Start()
        }
    }
    //将含有相同的内容封装在 a() 里
    function a(that, i) {
        for (var j = 0; j < that.li.length; j++) {
            that.li[j].className = ''
            that.div[j].className = ''
        }
            that.li[i].className = 'on' 
            that.div[i].className = 'on'
    }
    //点击选择相对应的li
    Tab.prototype.toClick = function() {
        var that = this
        that.li.forEach(function(item, i) {
            item.onclick = function() {
                a(that, i)
                 index = i
                // for(var j = 0;j < that.li.length;j++){
                // 	that.li[j].className = ''
                // 	that.div[j].className = ''
                // }
                //  	that.li[i].className = 'on'            //item.className = 'on'
                //  	that.div[i].className = 'on'
            }
        })
    }
    //设置定时器
    Tab.prototype.autoPlay = function() {
        var that = this
        time = setInterval(function() {
            if (index >= that.li.length - 1) {
                index = 0
            } else {
                index++
            }
            a(that, index)
            // for(var j = 0;j < that.li.length;j++){
            // 		that.li[j].className = ''
            // 		that.div[j].className = ''
            // 	}
            // 	 	that.li[index].className = 'on'
            // 	 	that.div[index].className = 'on'
        }, 1000)
    }
    //当移入时停止计时器
    Tab.prototype.Stop = function() {
        var that = this
        this.main.onmouseenter = function() {
            clearInterval(time)
        }
    }
    //当移出时重启计时器
    Tab.prototype.Start = function() {
        var that = this
        that.main.onmouseleave = function() {
            time = setInterval(function() {
                if (index >= that.li.length - 1) {
                    index = 0
                } else {
                    index++
                }
                a(that, index)
                // for(var j = 0;j < that.li.length;j++){
                // 		that.li[j].className = ''
                // 		that.div[j].className = ''
                // 	}
                // 	 	that.li[index].className = 'on'
                // 	 	that.div[index].className = 'on'

            }, 1000)
        }
    }
    
    window.Tab = Tab
    //将以下部分放进 html
    //   var tab = new Tab({
	//  	tabMain:'.tab',
	//  	tabTitle:'.hd li',
	//  	tabCon:'.bd div',
	//  	autoPlay:true
	//  })

})()