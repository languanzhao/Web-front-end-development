(function(){
		$(".submit").click(function(event){
				event.preventDefault()

				var account = $(".account").val()
				var password = $(".password").val()
				
var reg=/^[0-9]{4}$/;   /*定义验证表达式*/
if(!reg.test(account)){
alert("请输入四位数字")
}
var reg=/^[0-9]{4}$/;   /*定义验证表达式*/
if(!reg.test(password)){
alert("请输入四位数字")
}
				var code = $(".code").val()
				var data = {
					"account":account,
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
				$.ajax({
					"url":"http://api.imecho.cn/dodiapi/login.php",
					xhrFields:{
						withCredentials:true
					},
					crossDomain:true,
					type:"POST",
					data:data,
					success:function(res){
						var result = JSON.parse(res)
						if(result.code === "100"){
						console.log(res);
							alert("登录成功！")
							window.location.href = "./index.html"
						}else{
							alert("账号或密码错误！")
						}
					},
					error:function(){
						alert("请检查代码！")
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