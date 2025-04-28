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
const mutebtn = document.getElementById("muteBtn");
const muteIcon = document.getElementById("muteIcon");
const music = document.getElementById("background-music");


mutebtn.addEventListener("click", () => {
  backgroundMusic.muted = !backgroundMusic.muted;

if (backgroundMusic.paused || backgroundMusic.ended) {
  backgroundMusic.play();
  muteIcon.src = "https://img.icons8.com/?size=100&id=9982&format=png&color=000000"; // pause icon
} else {
  backgroundMusic.pause();
  muteIcon.src = "https://img.icons8.com/?size=100&id=9414&format=png&color=000000"; // play icon
}
});



// music

// musicBtn.addEventListener("click", playPauseAudio);
// var audio = document.getElementById("erokia-ambient"); 
// function playPauseAudio() { 
//   if(audio.paused || audio.end) {
//     audio.play(); 
//     playAudioImg.src="https://icons8.com/icon/TVjBOR7PC2Cw/music";
//   } else {
//     audio.pause(); 
//     pauseAudioImgsrc="https://icons8.com/icon/rKfisLUOlNti/music";
//   } 
// } 
//this code at the top is the original code for switching icons when play/pause the music, however it didn't work, after checkinng 
// spellings and punctuations, so I have asked ChatGPT agian. And this time I have copied what it gave me and I compared with my original code.
//as shown, it may be the issue with the 'consts' which I didn't add for the original code. Both codes are siilar. 
//and also when inserting the new code, I still had problem with changing its icon. I fixed it by trying inserting different format of the source to the image. 

const musicBtn = document.getElementById("musicBtn");
const musicIcon = document.getElementById("musicIcon");
const backgroundMusic = document.getElementById("background-music");

musicBtn.addEventListener("click", function() {
  if (backgroundMusic.paused || backgroundMusic.ended) {
    backgroundMusic.currentTime = 0; // Reset to start
    backgroundMusic.play();
    musicIcon.src = "https://img.icons8.com/?size=100&id=rKfisLUOlNti&format=png&color=000000"; // pause icon
  } else {
    backgroundMusic.pause();
    musicIcon.src = "https://img.icons8.com/?size=100&id=TVjBOR7PC2Cw&format=png&color=000000"; // play icon
  }
});
// cant change the image when click play and pause

// Pop up Info
const clickText = document.getElementById('clickText');
const popUpInfo = document.getElementById('popUpInformation');

clickText.addEventListener('click', function(event) {
  if(popUpInfo.style.display === 'none') {
    popUpInfo.style.display = 'block';
    
  } else {
    popUpInfo.style.display = 'none';
  }
  
});

const closePopUp = document.getElementById('closePopUp');

closePopUp.addEventListener('click', () => {
  popUpInfo.style.display = 'none';
});



