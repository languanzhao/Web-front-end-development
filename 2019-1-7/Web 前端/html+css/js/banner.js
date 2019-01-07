 $(function(){
	var oPic=$('.banner ul li');
	var oTab=$('.banner ol li');
	var num = 0;

	var timer = setInterval(turn,2000);
//初始化
	function fnTab(){    
		oPic.css('display','none');
        oPic.eq(num).css('display','block');
        oTab.removeAttr('class');
        oTab.eq(num).attr('class','on');
        };
       fnTab();
       
//自动播放
        function turn(){
        	num++;
        	if(num > oPic.length-1){
        		num=0;
        	}
        	  fnTab();
        };
        
//局部按钮 
        oTab.mouseover(function(){
        	oTab.removeAttr('class');
        	$(this).attr('class','on');
        	var i=$(this).index();
        	oPic.css('display','none');
        	oPic.eq(i).css('display','block');
        	num=0;
        });
        
        //左按钮
         $('.banner .prev').click(function(){
        	
        	num--;
        	if(num<0){
        		num=oPic.length-1;
        	}
        	  fnTab();
        })
        //右按钮
        $('.banner .next').click(function(){
        	
        	num++;
        	if(num>oPic.length-1){
        		num=0;
        	}
        	  fnTab();
        })
       
       //移入banner时：
       $('.banner').mouseover(function(){
       	clearInterval(timer);
       })
          //离开banner时：
       $('.banner').mouseout(function(){
       	timer=setInterval(turn,2000);
       })
       
});
