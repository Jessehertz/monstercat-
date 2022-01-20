const musicName = document.querySelector(".musicname");
const musicnamefooter = document.querySelector(".musicname_footer");
const mainAudio = document.querySelector("#main-audio");
const playBody = document.getElementById("play");
const prevBtn = document.querySelectorAll("#prev");
const nextBtn = document.querySelectorAll("#next");
var playPauseBtn = document.getElementById("headerplay");
var playPauseBtnBody = document.getElementById("bodyplay");
var playPauseBtnFooter = document.getElementById("footerplay");
const footer = document.getElementById("footer");

let musicIndex = 1;
isMusicPaused = true;
function loadMusic(indexNumb) {
  musicName.innerText = `${allMusic[indexNumb - 1].name} - ${
    allMusic[indexNumb - 1].artist
  }`;
  musicnamefooter.innerText = `${allMusic[indexNumb - 1].name} - ${
    allMusic[indexNumb - 1].artist
  }`;
  mainAudio.src = `${allMusic[indexNumb - 1].src}.mp3`;
}

function playMusic() {
  mainAudio.play();
  isMusicPaused = true;
  footer.classList.add("bt-media");
  playPauseBtn.classList.remove("fa", "fa-play");
  playPauseBtn.classList.add("fa", "fa-pause");
  playPauseBtnBody.classList.remove("fa", "fa-play");
  playPauseBtnBody.classList.add("fa", "fa-pause");
  playPauseBtnFooter.classList.remove("fa", "fa-play");
  playPauseBtnFooter.classList.add("fa", "fa-pause");
  playBody.innerHTML = `PAUSE<i id="bodyplay" class="fa fa-pause" aria-hidden="true"></i>`;
}
function pauseMusic() {
  isMusicPaused = false;
  mainAudio.pause();
  playBody.innerHTML = `PLAY<i id="bodyplay" class="fa fa-play" aria-hidden="true"></i>`;
  playPauseBtn.classList.remove("fa", "fa-pause");
  playPauseBtn.classList.add("fa", "fa-play");
  playPauseBtnBody.classList.remove("fa", "fa-pause");
  playPauseBtnBody.classList.add("fa", "fa-play");
  playPauseBtnFooter.classList.remove("fa", "fa-pause");
  playPauseBtnFooter.classList.add("fa", "fa-play");
}
function prevMusic() {
  musicIndex--;
  musicIndex < 1 ? (musicIndex = allMusic.length) : (musicIndex = musicIndex);
  loadMusic(musicIndex);
  playMusic();
}
function nextMusic() {
  musicIndex++; //
  musicIndex > allMusic.length ? (musicIndex = 1) : (musicIndex = musicIndex);
  loadMusic(musicIndex);
  playMusic();
}

let range = document.querySelector("#range");
let duration = 0;
let currentTime = 0;

function newe() {
  loadMusic(musicIndex);
  !isMusicPaused ? playMusic() : pauseMusic();
  range.addEventListener("change", function () {
    duration = mainAudio.duration;
    range.max = duration;
    mainAudio.currentTime = range.value;
  });
  mainAudio.addEventListener("timeupdate", function () {
    range.value = mainAudio.currentTime;
  });
  mainAudio.addEventListener("ended", function () {
    nextMusic();
    range.value = 0;
  });
}

for (let i = 0; i < prevBtn.length; i++) {
  prevBtn[i].addEventListener("click", () => {
    prevMusic();
  });
}
for (let i = 0; i < nextBtn.length; i++) {
  nextBtn[i].addEventListener("click", () => {
    nextMusic();
  });
}

let repeatBtn = document.querySelector("#repeat-plist");
let repeatBtnFooter = document.querySelector("#repeat-btn");

repeatBtn.addEventListener("click", () => {
  let getText = repeatBtn.classList.contains("fa", "fa-repeat"); //getting this tag innerText
  switch (getText) {
    case true:
      console.log("shuffle");
      repeatBtn.classList.remove("fa", "fa-repeat");
      repeatBtn.classList.add("fa", "fa-random");
      repeatBtnFooter.classList.remove("fa", "fa-repeat");
      repeatBtnFooter.classList.add("fa", "fa-random");
      repeatBtn.setAttribute("title", "shuffle");
      break;
    case false:
      console.log("repeat");
      repeatBtn.classList.remove("fa-random");
      repeatBtn.classList.add("fa", "fa-repeat");
      repeatBtnFooter.classList.remove("fa-random");
      repeatBtnFooter.classList.add("fa", "fa-repeat");
      repeatBtn.setAttribute("title", "repeat");
      break;
  }
});
repeatBtnFooter.addEventListener("click", () => {
  let getText = repeatBtnFooter.classList.contains("fa", "fa-repeat"); //getting this tag innerText
  switch (getText) {
    case true:
      console.log("shuffle");
      repeatBtn.classList.remove("fa", "fa-repeat");
      repeatBtn.classList.add("fa", "fa-random");
      repeatBtnFooter.classList.remove("fa", "fa-repeat");
      repeatBtnFooter.classList.add("fa", "fa-random");
      repeatBtn.setAttribute("title", "shuffle");
      break;
    case false:
      console.log("repeat");
      repeatBtn.classList.remove("fa-random");
      repeatBtn.classList.add("fa", "fa-repeat");
      repeatBtnFooter.classList.remove("fa-random");
      repeatBtnFooter.classList.add("fa", "fa-repeat");
      repeatBtn.setAttribute("title", "repeat");
      break;
  }
});

//code for what to do after song ended
mainAudio.addEventListener("ended", () => {
  // we'll do according to the icon means if user has set icon to
  // loop song then we'll repeat the current song and will do accordingly
  let getText = repeatBtn.classList.contains("fa", "fa-repeat"); //getting this tag innerText
  switch (getText) {
    case true:
      nextMusic(); //calling nextMusic function
    case false:
      let randIndex = Math.floor(Math.random() * allMusic.length + 1); //genereting random index/numb with max range of array length
      do {
        randIndex = Math.floor(Math.random() * allMusic.length + 1);
      } while (musicIndex == randIndex); //this loop run until the next random number won't be the same of current musicIndex
      musicIndex = randIndex; //passing randomIndex to musicIndex
      loadMusic(musicIndex);
      playMusic();
      break;
  }
});

// Volume
volumeslider = document.getElementById("volumeslider");
volumecontrol = document.getElementById("volslider");
volumeslider.addEventListener("mousemove", setvolume);
volumesliderfooter = document.getElementById("volumesliderfooter");
volumecontrolfooter = document.getElementById("volsliderfooter");
volumesliderfooter.addEventListener("mousemove", setvolume);

function setvolume() {
  mainAudio.volume = volumeslider.value / 100;
}
volumecontrol.addEventListener("click", () => {
  volumeslider.classList.toggle("hello");
  volumesliderfooter.classList.toggle("hello");
});
volumecontrolfooter.addEventListener("click", () => {
  volumeslider.classList.toggle("hello");
  volumesliderfooter.classList.toggle("hello");
});

function singleplay(number) {
  loadMusic(number);
  mainAudio.play();
  isMusicPaused = true;
  footer.classList.add("bt-media");
  playPauseBtn.classList.remove("fa", "fa-play");
  playPauseBtn.classList.add("fa", "fa-pause");
  playPauseBtnBody.classList.remove("fa", "fa-play");
  playPauseBtnBody.classList.add("fa", "fa-pause");
  playPauseBtnFooter.classList.remove("fa", "fa-play");
  playPauseBtnFooter.classList.add("fa", "fa-pause");
  playBody.innerHTML = `PAUSE<i id="bodyplay" class="fa fa-pause" aria-hidden="true"></i>`;
}
