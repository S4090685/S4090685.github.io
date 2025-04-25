const video = document.getElementById("custom-video-player");
const timeDisplay = document.getElementById("timeDisplay")
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");

// playPauseBtn.addEventListener("click", togglePlayPause);
video.addEventListener("timeupdate", updateProgressBar);
function togglePlayPause() {
  if (video.paused || video.ended) {
    video.play();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/pause--v1.png";
    
  } else {
    video.pause();
    playPauseImg.src = "https://img.icons8.com/ios-glyphs/30/play--v1.png";
  }
}
function updateProgressBar() {
  const value = (video.currentTime / video.duration) * 100;
  progressBar.style.width = value + "%";
}
 // Add other functionalities here

// time display in minutes:seconds
function formatTime(time){
  const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
}
video.addEventListener("loadedmetadata", () => {
  timeDisplay.textContent = `0:00 / ${formatTime(video.duration)}`;
})
video.addEventListener("timeupdate", () => {
  timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
});


// rewind and forward
rewindBtn.addEventListener('click', () => {
  video.currentTime = Math.max(0, video.currentTime - 5);
});

forwardBtn.addEventListener('click', () => {
  video.currentTime = Math.min(video.duration, video.currentTime + 5);
});

console.log(video.currentTime);

// audio setting
const btn = document.getElementById("muteBtn");
btn.addEventListener("click", () => {
  audio.muted = !audio.muted;
});
// music

musicBtn.addEventListener("click", playPauseAudio);
var audio = document.getElementById("erokia-ambient"); 
function playPauseAudio() { 
  if(audio.paused || audio.end) {
    audio.play(); 
    playAudioImg,src="https://img.icons8.com/?size=100&id=89091&format=png&color=000000";
  } else {
    audio.pause(); 
    pauseAudioImg,src="https://img.icons8.com/?size=100&id=89091&format=png&color=000000";
  } 
}
// cant change the image when click play and pause





