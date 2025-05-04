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

// to do list 

// function toggleToDo() {
//   var container = document.getElementById("todoContainer");
//   container.style.display = (container.style.display === "none") ? "block" : "none";
// }

// // Create close buttons
// function attachCloseButtons() {
//   var myNodelist = document.getElementsByTagName("LI");
//   for (var i = 0; i < myNodelist.length; i++) {
//     var span = document.createElement("SPAN");
//     var txt = document.createTextNode("\u00D7");
//     span.className = "close";
//     span.appendChild(txt);
//     myNodelist[i].appendChild(span);
//   }

//   var close = document.getElementsByClassName("close");
//   for (var i = 0; i < close.length; i++) {
//     close[i].onclick = function () {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }

// attachCloseButtons();

// // Toggle checked
// var list = document.querySelector('ul');
// list.addEventListener('click', function (ev) {
//   if (ev.target.tagName === 'LI') {
//     ev.target.classList.toggle('checked');
//   }
// }, false);

// // Add new element
// function newElement() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("myInput").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("myUL").appendChild(li);
//   }
//   document.getElementById("myInput").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   span.onclick = function () {
//     var div = this.parentElement;
//     div.style.display = "none";
//   }
// }
function toggleToDo() {
  var container = document.getElementById("todoContainer");
  container.style.display = (container.style.display === "none") ? "block" : "none";
}

// Create close buttons
function attachCloseButtons() {
  const items = document.getElementsByTagName("li");
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

attachCloseButtons();

// Toggle checked
const list = document.getElementById("myUL");
list.addEventListener('click', function (ev) {
  const li = ev.target.closest("li");
  if (li && list.contains(li)) {
    li.classList.toggle("checked");
  }
});

// Add new item
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

const minutes = document.getElementById("minutes");
console.log(minutes)
const seconds = document.getElementById("seconds");
console.log(seconds)
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

// I have found the code on ChatGPT and typed in so I could understand. It is found on ChatGPT as I coudn't find a start and stop timer with the libaries. 

function stopTimer() {
  clearInterval(countdown);
}

function showPopup() {
  document.getElementById("popupModal").style.display = "block";
}

document.getElementById("closeBtn").onclick = function () {
  document.getElementById("popupModal").style.display = "none";
};
