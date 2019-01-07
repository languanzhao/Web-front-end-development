
//方法一

(function(){
	$(".submit").click(function(event){
		event.preventDefault()
		var text = $(".text").val()
		var password = $(".password").val()
		var code = $(".code").val()  //验证码值
		var data = {
			"account":text,
			"password":password
		}
		
		
		//验证码验证
		$.ajax({
			url:"http://api.imecho.cn/dodiapi/vcode.php",
			xhrFields:{
				withCredentials:true
			},
			crossDomain:true,
			type:"GET",
			data:{
				code:code
			},
			success:function(res){
				var result = JSON.parse(res)
				
				if(result.code === "100"){
					//验证账号和密码
					

					$.ajax({
						url:"http://api.imecho.cn/dodiapi/login.php",
						type:"POST",
						data:data,
						success:function(res){
							var result = JSON.parse(res)
							if(result.code === "100"){
								alert("登陆成功")
								window.location.href = "./index.html"
							}else{
								alert("账号或者密码错误")
							}
						},
						error:function(){
							alert("请检查代码")
						}
					})



					
				}else{
					alert("验证码错误")
					window.location.reload()
				}
			}
		})
	})
})()

//方法二

// (function(){
// 	$(".submit").click(function(event){
// 		event.preventDefault()
// 		var text = $(".text").val()
// 		var password = $(".password").val()
// 		var code = $(".code").val()  //验证码值
// 		var data = {
// 			"account":text,
// 			"password":password
// 		}
// 		
// 		//判断账号和密码
// 		function getPassSuccess(){
// 			$.ajax({
// 				url:"http://api.imecho.cn/dodiapi/login.php",
// 				type:"POST",
// 				data:data,
// 				success:function(res){
// 					var result = JSON.parse(res)
// 					if(result.code === "100"){
// 						alert("登陆成功")
// 						window.location.href = "./index.html"
// 					}else{
// 						alert("账号或者密码错误")
// 					}
// 				},
// 				error:function(){
// 					alert("请检查代码")
// 				}
// 			})
// 		}
// 		
// 		//验证码验证
// 		function getCodeSuccess(){
// 			$.ajax({
// 				url:"http://api.imecho.cn/dodiapi/vcode.php",
// 				xhrFields:{
// 					withCredentials:true
// 				},
// 				crossDomain:true,
// 				type:"GET",
// 				data:{
// 					code:code
// 				},
// 				success:function(res){
// 					var result = JSON.parse(res)
// 					if(result.code === "100"){
// 						//验证账号和密码
// 						getPassSuccess()
// 					}else{
// 						alert("验证码错误")
// 						window.location.reload()
// 					}
// 				}
// 			})
// 		}
// 		getCodeSuccess()
// 	})
// })()

//方法三

// (function(){
// 	$(".submit").click(function(event){
// 		event.preventDefault()
// 		var text = $(".text").val()
// 		var password = $(".password").val()
// 		var code = $(".code").val()  //验证码值
// 		var data = {
// 			"account":text,
// 			"password":password
// 		}
		
// 		//判断账号和密码
// 		function getPassSuccess(result){
// 			if(result.code === "100"){
// 				$.ajax({
// 					url:"http://api.imecho.cn/dodiapi/login.php",
// 					type:"POST",
// 					data:data,
// 					success:function(res){
// 						var result = JSON.parse(res)
// 						if(result.code === "100"){
// 							alert("登陆成功")
// 							window.location.href = "./index.html"
// 						}else{
// 							alert("账号或者密码错误")
// 						}
// 					},
// 					error:function(){
// 						alert("请检查代码")
// 					}
// 				})
// 			}else{
// 				alert("验证码错误")
// 				window.location.reload()
// 			}
// 		}
		
// 		//验证码验证
// 		function getCodeSuccess(){
// 			$.ajax({
// 				url:"http://api.imecho.cn/dodiapi/vcode.php",
// 				xhrFields:{
// 					withCredentials:true
// 				},
// 				crossDomain:true,
// 				type:"GET",
// 				data:{
// 					code:code
// 				},
// 				success:function(res){
// 					var result = JSON.parse(res)
// 					getPassSuccess(result)
// 				}
// 			})
// 		}
// 		getCodeSuccess()
// 	})
// })()


// getPassSuccess   callback回调函数
