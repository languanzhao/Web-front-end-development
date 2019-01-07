(function(){
	$(".submit").click(function(event){
		event.preventDefault()       //阻止事件的默认效果
		
		var text = $(".text").val()
		var password = $(".password").val()
		var data = {
			"account":text,
			"password":password
		}
		$.ajax({
			url:"http://api.imecho.cn/dodiapi/reg.php",
			xhrFields:{                 // xhrFields crossDomain解决跨域问题
				withCredentials:true 
			},
			crossDomain:true,
			type:"POST",
			data:data,
			success:function(res){
				console.log(res)
			}
		})
	})	
})()