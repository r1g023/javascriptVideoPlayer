const videoPlayer = document.getElementById("video-player"); //container
const video = videoPlayer.querySelector(".video"); //video element
const videoSource = videoPlayer.querySelector(".videoSource");
const playButton = videoPlayer.querySelector(".play-button");
//volume bar
const setVolume = videoPlayer.querySelector(".volume");
//video duration
const currentTimeElement = videoPlayer.querySelector(".current");
const durationTimeElement = videoPlayer.querySelector(".duration");
//progress bar options
const progress = videoPlayer.querySelector(".video-progress");
const progressBar = videoPlayer.querySelector(".video-progress-filled");
//mute buttons
const mute = videoPlayer.querySelector(".mute");
//full screen
const fullscreen = videoPlayer.querySelector(".fullscreen");
//get height
const heightOutput = document.querySelector(".height");
const widthOutput = document.querySelector(".width");
//get if media is playing or paused
const output = document.querySelector(".output");

//load page / video
window.addEventListener("load", (e) => {
  video.src =
    "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4";
});

//play and Pause Button
playButton.addEventListener("click", (e) => {
  if (video.paused) {
    video.play();
    e.target.innerHTML = "&#9616;&#9616";
  } else {
    video.pause();
    e.target.innerHTML = "▶";
  }
});

//volume slider setVolume
setVolume.addEventListener("mousemove", (e) => {
  video.volume = e.target.value;
});

//curent time and duration
const currentTime = () => {
  //current timer on length of video
  let currentMinutes = Math.floor(video.currentTime / 60);
  let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
  //total length of video
  let durationMinutes = Math.floor(video.duration / 60);
  let durationSeconds = Math.floor(video.duration - durationMinutes * 60);

  currentTimeElement.innerHTML = `${currentMinutes}:${
    currentSeconds < 10 ? "0" + currentSeconds : currentSeconds
  }`;
  durationTimeElement.innerHTML = `${durationMinutes}:${
    durationSeconds < 10 ? "0" + durationSeconds : durationSeconds
  }`;
};

//update time as video is plaing or paused
video.addEventListener("timeupdate", currentTime);

//proress bar for video
video.addEventListener("timeupdate", () => {
  // create percentage as timer runs
  const percentage = (video.currentTime / video.duration) * 100;
  progressBar.style.width = `${percentage}%`;
});

//change progress bar on click
progress.addEventListener("click", (e) => {
  const progressTime = (e.offsetX / progress.offsetWidth) * video.duration;
  video.currentTime = progressTime;
});

//mute button and toggle
mute.addEventListener("click", (e) => {
  video.muted = !video.muted;
  mute.classList.toggle("muted");
});

//fullscreen
fullscreen.addEventListener("click", () => {
  video.requestFullscreen();
});

//video resize function
function videoSize() {
  heightOutput.innerHTML = video.height;
  widthOutput.innerHTML = video.width;
}
//resize video
window.addEventListener("resize", videoSize);

//auto play function set to false
window.addEventListener("load", () => {
  let confirmAction = confirm("Are you sure want to autoplay this video?");
  if (confirmAction) {
    alert("Action successfully executed");
    video.autoplay = true;
    video.play();
  } else {
    alert("Action canceled");
    video.autoplay = false;
    video.pause();
  }
});

video.addEventListener("playing", () => {
  output.innerHTML = "Playing";
});

video.addEventListener("pause", () => {
  output.innerHTML = "Paused";
});

video.addEventListener("seeking", () => {
  output.innerHTML = "Seeking event triggered";
});

video.addEventListener("volumechange", () => {
  output.innerHTML = "Volume change event triggered";
});

video.addEventListener("ended", () => {
  output.innerHTML = "Video ended";
});
