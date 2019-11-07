// var videos = document.getElementById("contentTable").children[0].children; // lugar donde van a ser añadidos los videos
var videos = JSON.parse(window.localStorage.getItem("videos"));
theVideo = document.querySelector("#play-video");
let source = document.getElementById('videosource');
let video_number = 0;
let first = true;

theVideo.removeEventListener("ended", changeVideo);
theVideo.addEventListener("ended", nextVideoOfLS);

// carga primer video
if (videos && videos.length > 0) {
    source.src = "multimedia/video/"+videos[video_number]+".mp4";
    theVideo.load();
} else {
    theVideo.classList.add("hidden");
}


function nextVideoOfLS() {
    video_number++;
    if (video_number < videos.length) {
        source.src = "multimedia/video/"+videos[video_number]+".mp4";
        theVideo.load();
        if (!first) theVideo.play();
        first = false;
    } else if (video_number >= videos.length) {
        video_number = videos.length-1;
    }
}
function previousVideo() {
    if (video_number > 0) {
        video_number -= 2;
        nextVideoOfLS();
    } 
}