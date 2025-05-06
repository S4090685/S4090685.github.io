const video = document.getElementById("custom-video-player");
const timeDisplay = document.getElementById("timeDisplay")
const playPauseBtn = document.querySelector("#play-pause-btn");
const playPauseImg = document.querySelector("#play-pause-img");
const progressBar = document.querySelector("#progress-bar-fill");
video.removeAttribute("controls");

// welcoming message
window.onload = function() {
  document.getElementById('welcomeInfo').style.display = 'flex';
}

// Close the popup when button is clicked
document.getElementById('okBtn').onclick = function() {
  document.getElementById('welcomeInfo').style.display = 'none';
}
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
console.log(mutebtn);
const muteIcon = document.getElementById("muteIcon");
const music = document.getElementById("background-music");
console.log(music);
mutebtn.addEventListener("click", () => {
  // music.muted = !music.muted;
 console.log(music.muted);
  if (music.muted) {
    music.muted = false;
    muteIcon.src = "https://img.icons8.com/?size=100&id=9982&format=png&color=000000"; // muted icon
  } else {
    music.muted = true;
    muteIcon.src = "https://img.icons8.com/?size=100&id=9414&format=png&color=000000"; // unmuted icon
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
    backgroundMusic.currentTime = 0; 
    backgroundMusic.play();
    musicIcon.src = "https://img.icons8.com/?size=100&id=rKfisLUOlNti&format=png&color=000000"; // pause icon
  } else {
    backgroundMusic.pause();
    musicIcon.src = "https://img.icons8.com/?size=100&id=TVjBOR7PC2Cw&format=png&color=000000"; // play icon
  }
});

// Pop up Info
clickText.addEventListener('click', function(event) {
  if(popUpInfo.style.display === 'none') {
    popUpInfo.style.display = 'block';
    
  } else {
    popUpInfo.style.display = 'none';
  }
  
});

const closePopUp = document.getElementById('closePopUp');
console.log(closePopUp)

closePopUp.addEventListener('click', () => {
  popUpInfo.style.display = 'none';
});

// to do list this codes are discovered from w3schools. I have also look through other codes of "to do lists", and I think this one is the most convinient one. 
// it can cross out completed tasks and add/delete lists. 
function toggleToDo() {
  var container = document.getElementById("todoContainer");
  container.style.display = (container.style.display === "none") ? "block" : "none";
}

// close buttons for the lists 
function attachCloseButtons() {
  const items = document.getElementsByTagName("myUL");
  // there was an issue here as the "myUL" was supposed to be li, however all the li appeared with close button and was abke to be deleted
  // I took some time sorting this out because there was some troubleshoot I guess, and I had to switch between CSS, JS, and HTML to
  // make the code work on the right spot. 

  for (let i = 0; i < items.length; i++) {
    if (!items[i].querySelector(".close")) {
      const span = document.createElement("SPAN");
      const txt = document.createTextNode("\u00D7");
      span.className = "close";
      span.appendChild(txt);
      items[i].appendChild(span);

      span.onclick = function () {
        this.parentElement.style.display = "none";
      }
    }
  }
}

// check
attachCloseButtons();
const list = document.getElementById("myUL");
list.addEventListener('click', function (ev) {
  const li = ev.target.closest("li");
  if (li && list.contains(li)) {
    li.classList.toggle("checked");
  }
});

// Add button for lists
function newElement() {
  const input = document.getElementById("myInput").value;
  if (input === '') {
    alert("You must write something!");
    return;
  }

  const li = document.createElement("li");
  li.appendChild(document.createTextNode(input));

  const span = document.createElement("SPAN");
  const txt = document.createTextNode("\u00D7");
  span.className = "close";
  span.appendChild(txt);
  li.appendChild(span);

  span.onclick = function () {
    this.parentElement.style.display = "none";
  }

  document.getElementById("myUL").appendChild(li);
  document.getElementById("myInput").value = "";

  li.classList.remove("checked"); // ensure it's not pre-checked
}

// timer section
// it was hard to find a ideal countdown timer from trusted libaries, so for this timer I have asked ChatGPT to adjust some of the features that I wanted
// the code was originally from a libary, and I asked for additional features, such as the start and stop buttons and adding the alert once time is up as a pop up tab. I was also thinking of adding a clock, however as we're already browsing a website
// I thought that is unneccessary because user can just look at the computer, a countdown timer is more conform. 
// I couldn't type a fully functional javascript without searching through existing code from libaries and asking people. When its urgent(no time to ask and couldn't find idea code) I would type out what I think the code should be like, and I will ask ChatGPT
// to correct my code, and after that I will type the code out while comparing it with my own code so I can learn from it. But ChatGPT's code is not always correct, so searching through trustful libaries is neccessary.
const minutes = document.getElementById("minutes");
console.log(minutes);
const seconds = document.getElementById("seconds");
console.log(seconds);

let countdown;

function startTimer() {
  clearInterval(countdown);
  let minutes = parseInt(document.getElementById("minutes").value) || 0;
  let seconds = parseInt(document.getElementById("seconds").value) || 0;
  let totalSeconds = minutes * 60 + seconds;

  countdown = setInterval(() => {
    let min = Math.floor(totalSeconds / 60);
    let sec = totalSeconds % 60;
    document.getElementById("timer").textContent =
      `${String(min).padStart(2, '0')}:${String(sec).padStart(2, '0')}`;

    if (totalSeconds <= 0) {
      clearInterval(countdown);
      showPopup();
    }

    totalSeconds--;
  }, 1000);
}


function stopTimer() {
  clearInterval(countdown);
}

function showPopup() {
  document.getElementById("popupModal").style.display = "block";
}

document.getElementById("closeBtn").onclick = function () {
  document.getElementById("popupModal").style.display = "none";
};
