document.addEventListener("DOMContentLoaded", function () {
	var body = document.body;
	var html = document.documentElement;
	var itv,
		height = document.body.offsetHeight;
	var page = scrollTop() / height | 0;
	addEventListener("resize", onresize, false);
	onresize();

	//鼠标滚轮事件
	document.body.addEventListener("onwheel" in document ? "wheel" : "mousewheel", function (e) {
		clearTimeout(itv);
		itv = setTimeout(function () {
			//判断滚轮滚的方向
			var delta = e.wheelDelta / 120 || -e.deltaY / 3;
			page -= delta;
			var max = (document.body.scrollHeight / height | 0) - 1;
			if (page < 0) {
				return page = 0;
			}
			if (page > max) {
				return page = max;
			}
			move();
		}, 100);
		e.preventDefault();
	});
	//当窗体发生变化时还是保证每次滚动滚一屏
	function onresize() {
		height = body.offsetHeight;
		move();
	};

	function move() {
		var value = height * page;
		var diff = scrollTop() - value;
		(function callee() {
			diff = diff / 1.2 | 0;
			scrollTop(value + diff);
			if (diff) {
				itv = setTimeout(callee, 16);
			}
		})();
	};

	function scrollTop(v) {
		if (v == null) {
			return Math.max(body.scrollTop, html.scrollTop);
		} else {
			body.scrollTop = html.scrollTop = v;
		}
	}
});


var i = 0;
var l = 0;
var nowPage = -1;
var xd = [];
var xdd = [];
var yd = [];
var ydd = [];
var divList=[];
window.onload = function () {
	console.log(document.querySelectorAll("div"));
	console.log(document.querySelectorAll("div").length);
	l = document.querySelectorAll("div").length;
	divList = document.querySelectorAll("div");

	for (j = 0; j < l; j++) {
		console.log(divList[j].offsetTop);
		xd.push(divList[j].offsetLeft);
		xdd.push(divList[j].offsetLeft + divList[j].offsetWidth);
		yd.push(divList[j].offsetTop);
		ydd.push(divList[j].offsetTop + divList[j].offsetHeight);
	}
	console.log(yd);
}


document.onclick = function (event) {
	//var divObject = document.getElementById("changeablePage1");
	//console.log(divObject);
	var x = event.clientX + Math.max(document.documentElement.scrollLeft, document.body.scrollLeft);
	var y = event.clientY + Math.max(document.documentElement.scrollTop, document.body.scrollTop);
	for (j = 0; j < l; j++) {
		if (x >= xd[j] && x <= xdd[j] && y <= ydd[j] && y >= yd[j]) {

			if (j == nowPage) {
				i++;
			}
			else {
				nowPage = j;
				i = 1;
			}
		}
	}
	//console.log(x, y);
	//console.log("op"+`${i}`);
	//console.log(divList);
	//console.log("yd",yd[j])
	//console.log(divList);
	for (var lit of divList) {
		//console.log("litop",lit.offsetTop);
		if (lit.offsetTop == yd[nowPage]) {
			var pageObj=lit;
			console.log("I'm in!");
			var opobj = lit.querySelector("#op"+`${i}`);
		}
	}
	//console.log(pageObj.innerHTML.indexOf("<p>调整透明度</p>"));

	/*if(opobj.style.position){
		
		if(opobj.style.position=="absolute"){
			//opobj
		}
	}*/
		
	if(opobj){
		if(opobj.className){
			if(opobj.className=="floatBG"){
				opobj.style.left=String(0)+"px";
				opobj.style.top=String(yd[nowPage])+"px";
			}
			if(opobj.className=="absopa"){
				console.log(opobj.style);
				opobj.style.left=String(window.innerWidth*0.5-325)+"px";
				opobj.style.top=String(yd[nowPage]+window.innerHeight*0.5-325)+"px";
				console.log(opobj.style.left)
			}
		}
		//console.log(opobj.className)
		if(opobj.className){
			if(opobj.className=="floatBG"){
				var timer = setInterval(colorLiner, 10);
				var t = 100;
				function colorLiner() {
					if (t >= 20) {
						//var opobj = nowDiv.getElementById("op1");
						opobj.style.opacity = t / 100;
						t--;
					}
				}
			}
			else{
				var timer = setInterval(colorLiner, 10);
				var t = 0;
				function colorLiner() {
					if (t <= 100) {
						//var opobj = nowDiv.getElementById("op1");
						opobj.style.opacity = t / 100;
						t++;
					}
				}
			}
		}
		else{
			var timer = setInterval(colorLiner, 10);
			var t = 0;
			function colorLiner() {
				if (t <= 100) {
					//var opobj = nowDiv.getElementById("op1");
					opobj.style.opacity = t / 100;
					t++;
				}
			}
		}
	}
};
/* window.onload=function(){
	var timer=setInterval(colorLiner,20);
	var t=100;
	function colorLiner(){
		if (t>=0){
			var opobj = document.getElementById("op3");
			opobj.style.opacity = -t/100;
			t--;
		}
	}
} */