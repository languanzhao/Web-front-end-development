var vm = new Vue({
	el:".tab",
	data:{
		list:["标题壹","标题贰","标题叁"],			 //这是一个内容的书写格式
		main:[{
			"con":"北海风光",                       //注意添加两个内容书写格式，一个数组，三个对象
			"src":"img/1.jpg"			
			 },
			 {
				 "con":"天空靓景",
				 "src":"img/2.jpg"
			 },
			 {
				 "con":"群鸥聚飞",
				 "src":"img/3.jpg"
			 }],
		index:0,
		time:null
		},
	created:function(){
		this.autoPlay()
	},
	methods:{
		toClick:function(i){
			this.index = i
		},
		leftBtn:function(){
			this.index <= 0 ? this.index = this.list.length - 1 : this.index--
		},
		rightBtn:function(){
			this.index >= this.list.length - 1 ? this.index = 0 : this.index++
		},
		enter:function(){
			clearInterval(this.time)
		},
		leave:function(){
			var that = this
			that.time = setInterval(function(){
				that.index >= that.list.length - 1 ? that.index = 0 : that.index++
			},1000)
		},
		autoPlay:function(){
			var that = this
			this.time = setInterval(function(){
				that.index >= that.list.length - 1 ? that.index = 0 : that.index++
			},1000)
		}
	}
})