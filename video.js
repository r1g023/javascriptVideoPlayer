const videoPlayer = document.getElementById("video-player"); //container
const video = videoPlayer.querySelector(".video"); //video element
const videoSource = videoPlayer.querySelector(".videoSource");
const playButton = videoPlayer.querySelector(".play-button");
const body = document.getElementsByTagName("body")[0];

//volume
const volume = videoPlayer.querySelector(".volume");

//load page / video
window.addEventListener("load", (e) => {
  video.src =
    "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4";
  video.load();
});

//play and Pause Button
playButton.addEventListener("click", (e) => {
  if (video.paused) {
    video.play();
    e.target.textContent = "⏸️";
  } else {
    video.pause();
    e.target.textContent = "▶️";
  }
});

//volume
volume.addEventListener("mousemove", (e) => {
  video.volume = e.target.value;
});
