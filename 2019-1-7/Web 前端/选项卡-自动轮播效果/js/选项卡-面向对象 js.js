(function(){
        var index = 0
        var time
        function Tab(props){
            this.main = document.querySelector(props.Main)
            this.btn = document.querySelectorAll(props.btn)
            this.con = document.querySelectorAll(props.con)
            this.left = document.querySelector(props.prevBtn)
            this.right = document.querySelector(props.nextBtn)
            this.toClick()
            if(props.autoPlay === true){
            this.autoPlay(props.defaultTime)
            this.toToggle(props.defaultTime)    
            }
            this.leftBtn()
            this.rightBtn()
        }

    //点击切换按钮
    Tab.prototype.toClick = function(){
        var that = this
        that.btn.forEach(function(item,i){
            item.onclick = function(){
                for (var j = 0; j < that.btn.length; j++) {
                    that.btn[j].className = ""
                    that.con[j].className = ""
                }
                    that.btn[i].className = "on"
                    that.con[i].className = "on"
                    index = i
            }
        })
    }

    //设置定时器
    Tab.prototype.autoPlay = function(defaultTime = 1000){
        var that = this
        time = setInterval(function(){
            index >= that.btn.length - 1 ? index = 0 : index++
            for (var j = 0; j < that.btn.length; j++) {
                    that.btn[j].className = ""
                    that.con[j].className = ""
                }
                    that.btn[index].className = "on"
                    that.con[index].className = "on"
        },defaultTime)
    }

    //移入暂停，移出重启
    Tab.prototype.toToggle = function(defaultTime = 1000){
        var that = this
        that.main.onmouseover = function(){
            clearInterval(time)
        }
        that.main.onmouseleave = function(){
            that.autoPlay(defaultTime)
        }
    }

    //左按钮
    Tab.prototype.leftBtn = function(){
        var that = this
        that.left.onclick = function(){
            index <= 0 ? index = that.btn.length - 1 : index--
            for (var j = 0; j < that.btn.length; j++) {
                    that.btn[j].className = ""
                    that.con[j].className = ""
                }
                    that.btn[index].className = "on"
                    that.con[index].className = "on"
        }
    }

    //右按钮
    Tab.prototype.rightBtn = function(){
        var that = this
        that.right.onclick = function(){
            index >= that.btn.length - 1 ? index = 0 : index ++
             for (var j = 0; j < that.btn.length; j++) {
                    that.btn[j].className = ""
                    that.con[j].className = ""
                }
                    that.btn[index].className = "on"
                    that.con[index].className = "on"
        }
    }

    window.Tab = Tab

    })()