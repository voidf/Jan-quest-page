function clicktest()
{
	musicInit=document.getElementById("bgmc");
	initList=["1.mp3","10.mp3","100.mp3","101.mp3","102.mp3","103.mp3","104.mp3","105.mp3","106.mp3","107.mp3","108.mp3","109.mp3","11.mp3","110.mp3","111.mp3","112.mp3","113.mp3","114.mp3","115.mp3","116.mp3","117.mp3","118.mp3","119.mp3","12.mp3","120.mp3","121.mp3","122.mp3","123.mp3","124.mp3","125.mp3","126.mp3","127.mp3","128.mp3","129.mp3","13.mp3","130.mp3","131.mp3","132.mp3","133.mp3","134.mp3","135.mp3","136.mp3","137.mp3","138.mp3","139.mp3","14.mp3","140.mp3","141.mp3","142.mp3","143.mp3","144.mp3","145.mp3","146.mp3","147.mp3","148.mp3","149.mp3","15.mp3","150.mp3","151.mp3","152.mp3","153.mp3","154.mp3","155.mp3","156.mp3","157.mp3","158.mp3","159.mp3","16.mp3","160.mp3","161.mp3","162.mp3","163.mp3","164.mp3","165.mp3","166.mp3","167.mp3","168.mp3","169.mp3","17.mp3","170.mp3","171.mp3","172.mp3","173.mp3","174.mp3","175.mp3","176.mp3","177.mp3","178.mp3","179.mp3","18.mp3","180.mp3","181.mp3","182.mp3","183.mp3","184.mp3","185.mp3","186.mp3","187.mp3","188.mp3","189.mp3","19.mp3","190.mp3","191.mp3","192.mp3","193.mp3","194.mp3","195.mp3","196.mp3","197.mp3","198.mp3","199.mp3","2.mp3","20.mp3","200.mp3","201.mp3","202.mp3","203.mp3","204.mp3","205.mp3","206.mp3","207.mp3","21.mp3","22.mp3","23.mp3","24.mp3","25.mp3","26.mp3","27.mp3","28.mp3","29.mp3","3.mp3","30.mp3","31.mp3","32.mp3","33.mp3","34.mp3","35.mp3","36.mp3","37.mp3","38.mp3","39.mp3","4.mp3","40.mp3","41.mp3","42.mp3","43.mp3","44.mp3","45.mp3","46.mp3","47.mp3","48.mp3","49.mp3","5.mp3","50.mp3","51.mp3","52.mp3","53.mp3","54.mp3","55.mp3","56.mp3","57.mp3","58.mp3","59.mp3","6.mp3","60.mp3","61.mp3","62.mp3","63.mp3","64.mp3","65.mp3","66.mp3","67.mp3","68.mp3","69.mp3","7.mp3","70.mp3","71.mp3","72.mp3","73.mp3","74.mp3","75.mp3","76.mp3","77.mp3","78.mp3","79.mp3","8.mp3","80.mp3","81.mp3","82.mp3","83.mp3","84.mp3","85.mp3","86.mp3","87.mp3","88.mp3","89.mp3","9.mp3","90.mp3","91.mp3","92.mp3","93.mp3","94.mp3","95.mp3","96.mp3","97.mp3","98.mp3","99.mp3"];
	var numnum=parseInt(Math.random()*(initList.length));
	var textInit=document.getElementById("np");
	musicInit.src="bgm/";
	musicInit.src+=initList[numnum];
	musicInit.play();
	textInit.innerText=numnum;
}
function stopbgm(){
	mplayer=document.getElementById("bgmc");
	mplayer.pause();
	console.log(200);
}
/* document.addEventListener('DOMContentLoaded', function() {
	var fileControl = document.querySelector('#file_input');
	var filesDiv = document.querySelector('#files');
	
	fileControl.addEventListener('change', function(event) {
		var files = event.target.files;
		//console.log(event)
		var fileList = [];
		for (var i = 0, len = files.length; i < len; i++) {
			fileList.push(files[i].name);
		}
		console.log(fileList);
		//filesDiv.innerHTML = fileList.join('\n');
		filesDiv.innerHTML = fileList.join();
		//debugger;
	});
});
 选择文件导入并读取列表*/