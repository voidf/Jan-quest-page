
	String.prototype.format = function()
	{  
		if (arguments.length == 0)  
			return this;  
		for (var s = this, i = 0; i < arguments.length; i++)  
			s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);  
		return s;  
	};  //���������ε�ռλ������
	//***********************************
	function fuc()
	{
		var te=document.getElementById("np");
		
		var i=parseInt(te.innerText);
		i++;
		if(i>30)
		{
			i%=30;
		}
		te.innerText=i;
		var au=document.getElementById("bgmc");
		au.src="{0}{1}{2}".format("bgm/",i,".mp3");
		au.play();
	}//�������Լ�д�Ĳ������и躯��
	//document.getElementById("bt").addEventListener('click',function{returnnum()},false);
	//***********************************
	//�ж��ֻ���������
	// var windowHeight = $(window).height(),
	// $body = $("body");
	// $body.css("height", windowHeight); 

	// $("body").on("touchstart", function (e) {
	// 	e.preventDefault();
	// 	startX = e.originalEvent.changedTouches[0].pageX,
	// 		startY = e.originalEvent.changedTouches[0].pageY;
	// });
	// $("body").on("touchmove", function (e) {
	// 	e.preventDefault();
	// 	moveEndX = e.originalEvent.changedTouches[0].pageX,
	// 		moveEndY = e.originalEvent.changedTouches[0].pageY,
	// 		X = moveEndX - startX,
	// 		Y = moveEndY - startY;

	// 	if (Math.abs(X) > Math.abs(Y) && X > 0) {
	// 		alert("left 2 right");
	// 	}
	// 	else if (Math.abs(X) > Math.abs(Y) && X < 0) {
	// 		alert("right 2 left");
	// 	}
	// 	else if (Math.abs(Y) > Math.abs(X) && Y > 0) {
	// 		alert("top 2 bottom");
	// 	}
	// 	else if (Math.abs(Y) > Math.abs(X) && Y < 0) {
	// 		alert("bottom 2 top");
	// 	}
	// 	else {
	// 		alert("just touch");
	// 	}
	// });
	document.addEventListener("DOMContentLoaded",function ()
	{
		var body = document.body;
		var html = document.documentElement;
		var itv,height = document.body.offsetHeight;
		var page = scrollTop() / height | 0;
		addEventListener("resize",onresize,false);
		onresize();

		//�������¼�
		
		document.body.addEventListener("onwheel" in document ? "wheel" : "mousewheel",function (e)
		{
			clearTimeout(itv);
			itv = setTimeout(function () {
				//�жϹ��ֹ��ķ���
				var delta = e.wheelDelta / 120 || -e.deltaY / 3;
				page -= delta;
				var max = (document.body.scrollHeight / height | 0) -1;
				if (page < 0){
					return page = 0;
				}
				if (page > max){
					return page = max;
				}
				move();
			},100);
			e.preventDefault();
		});
		//�����巢���仯ʱ���Ǳ�֤ÿ�ι�����һ��
		function  onresize()
		{
			height = body.offsetHeight;
			move();
		};
		
		function  move()
		{
			var value = height * page;
			var diff = scrollTop() - value;
			(function callee() {
				diff = diff / 1.2 | 0;
				scrollTop(value + diff);
				if (diff){
					itv = setTimeout(callee,16);
				}
			})();
		};

		function scrollTop(v)
		{
			if (v == null){
				return Math.max(body.scrollTop,html.scrollTop);
			}else{
				body.scrollTop = html.scrollTop = v;
			}
		}
	});
	