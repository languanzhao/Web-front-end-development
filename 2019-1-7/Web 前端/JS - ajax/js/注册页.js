(function(){
		$(".submit").click(function(event){
				event.preventDefault()       //阻止事件的默认效果

				var account = $(".account").val()
				var password = $(".password").val()
				var data = {
					"account":account,
					"password":password
				}
				$.ajax({
					"url":"http://api.imecho.cn/dodiapi/reg.php",
					xhrFields:{
						withCredentials:true
					},
					crossDomain:true,
					type:"POST",
					data:data,
					success:function(res){
						console.log(res);
					}
				})
		})
	})()