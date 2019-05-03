//第一次放歌随机放,chrome不可用
window.onload=function(){
	musicInit=document.getElementById("bgmc");

	newFunction();
}


function newFunction() {
	initList = ['1.mp3', '10.mp3', '11.mp3', '12.mp3', '13.mp3', '14.mp3', '15.mp3', '16.mp3', '17.mp3', '18.mp3', '19.mp3', '2.mp3', '20.mp3', '21.mp3', '22.mp3', '23.mp3', '24.mp3', '25.mp3', '26.mp3', '27.mp3', '28.mp3', '29.mp3', '3.mp3', '30.mp3', '31.mp3', '32.mp3', '33.mp3', '34.mp3', '35.mp3', '36.mp3', '37.mp3', '38.mp3', '39.mp3', '4.mp3', '40.mp3', '5.mp3', '6.mp3', '7.mp3', '8.mp3', '9.mp3'];
	// var fileOBJ=new ActiveXObject("Scripting.FileSystemObject");
	// var fileENU=new Enumerator(fileOBJ.GetFolder("bgm/").files);
	// for(;!fileENU.atEnd();fileENU.moveNext()){
	// 	console.log(fileENU.item())
	// }
	var numnum = parseInt(Math.random() * (initList.length));
	var textInit = document.getElementById("np");
	console.log(textInit);
	musicInit.src = "bgm/";
	musicInit.src += initList[numnum];
	musicInit.play();
	textInit.innerText = numnum;
}

//以后每次歌曲结束都随机放新的
function fuc()
	{
		var songList=['1.mp3', '10.mp3', '11.mp3', '12.mp3', '13.mp3', '14.mp3', '15.mp3', '16.mp3','17.mp3', '18.mp3', '19.mp3', '2.mp3', '20.mp3', '21.mp3', '22.mp3', '23.mp3', '24.mp3', '25.mp3', '26.mp3', '27.mp3', '28.mp3', '29.mp3', '3.mp3', '30.mp3', '31.mp3', '32.mp3', '33.mp3', '34.mp3', '35.mp3', '36.mp3', '37.mp3', '38.mp3', '39.mp3', '4.mp3', '40.mp3', '5.mp3', '6.mp3', '7.mp3', '8.mp3', '9.mp3'];
		
		
		var te=document.getElementById("np");
		var nowPlaying=parseInt(te.innerText);
		var numnum=parseInt(Math.random()*(songList.length));
		while(numnum==nowPlaying)
		{
			numnum=parseInt(Math.random()*(songList.length));
		}
		/* if(i>songList.length)
		{
			i%=30;
		} */
		te.innerText=numnum;
		var au=document.getElementById("bgmc");
		au.src="{0}{1}".format("bgm/",songList[numnum]);
		au.play();
	}