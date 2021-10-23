const videoPlayer = document.getElementById("video-player"); //container
const video = videoPlayer.querySelector(".video"); //video element
const videoSource = videoPlayer.querySelector(".videoSource");
const playButton = videoPlayer.querySelector(".play-button");
const volume = videoPlayer.querySelector(".volume");
const currentTimeElement = videoPlayer.querySelector(".current");
const durationTimeElement = videoPlayer.querySelector(".duration");

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

//volume
volume.addEventListener("mousemove", (e) => {
  video.volume = e.target.value;
});

//curent time and duration
const currentTime = () => {
  let currentMinutes = Math.floor(video.currentTime / 60);
  let currentSeconds = Math.floor(video.currentTime - currentMinutes * 60);
  let durationMinutes = Math.floor(video.duration / 60);
  let durationSeconds = Math.floor(video.duration - durationMinutes * 60);

  currentTimeElement.innerHTML = `${currentMinutes}:${
    currentSeconds < 10 ? "0" + currentSeconds : currentSeconds
  }`;
  durationTimeElement.innerHTML = `${durationMinutes}:${
    durationSeconds < 10 ? "0" + durationSeconds : durationSeconds
  }`;
};

video.addEventListener("timeupdate", currentTime);
