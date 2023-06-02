// var myvideo = document.getElementById("video");
// function playpause(){
// 	if(myvideo.paused){
// 		myvideo.play();
// 		document.getElementById("playbtn").style.backgroundImage = "url('images/pausebtn.png')";
// 	}else{
// 		myvideo.pause();
// 		document.getElementById("playbtn").style.backgroundImage = "url('images/playbtn.png')";
// 	}
// }


const videos = document.querySelectorAll('video');

	for (const video of videos) {
	    video.addEventListener('click', function playpause(){
	        if(video.paused){
	            video.play();
	        }else{
	            video.pause();
	           	}
	        });
	}