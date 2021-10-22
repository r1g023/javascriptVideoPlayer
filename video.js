const videoPlayer = document.getElementById("video-player");
const video = videoPlayer.querySelector(".video");
const playButton = videoPlayer.querySelector(".play-button");

//volume
const volume = videoPlayer.querySelector(".volume");

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
