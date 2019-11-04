var videos = document.getElementById("contentTable").children[0].children; // lugar donde van a ser añadidos los videos
var videosInLS = JSON.parse(window.localStorage.getItem("videos"));
theVideo = document.querySelector("#play-video");
let source = document.getElementById('videosource');

// carga primer video
source.src = "multimedia/video/"+videosInLS[0]+".mp4";
theVideo.load();
