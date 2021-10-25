const videoPlayer = document.getElementById("video-player"); //container
const video = videoPlayer.querySelector(".video"); //video element
const videoSource = videoPlayer.querySelector(".videoSource");
const playButton = videoPlayer.querySelector(".play-button");
const setVolume = videoPlayer.querySelector(".volume");
//video duration
const currentTimeElement = videoPlayer.querySelector(".current");
const durationTimeElement = videoPlayer.querySelector(".duration");
//progress bar options
const progress = videoPlayer.querySelector(".video-progress");
const progressBar = videoPlayer.querySelector(".video-progress-filled");

//load page / video
window.addEventListener("load", (e) => {
  video.src =
    "https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4";
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
