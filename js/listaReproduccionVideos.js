var videos = document.getElementById("contentTable").children[0].children; // lugar donde van a ser añadidos los videos
var videosInLS = JSON.parse(window.localStorage.getItem("videos"));


for (const video of videos) {
    console.log(video);
}