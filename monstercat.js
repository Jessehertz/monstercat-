
//track 5
var playP = document.getElementById('play');
var playPauseBTN = document.getElementById('track5');
var playPauseBTNN = document.getElementById('playpau');
var playPauseBT = document.getElementById('playpauu');
var playPauseB = document.getElementById('playIcon');
var text = document.getElementById('ong')
const ter = document.getElementById("footer")
playPauseBTN.addEventListener('click', function () {
    ter.classList.add('bt-media');
})

music_name = "track 5.mp3"
let next_btn = document.querySelector("#next");
let prev_btn = document.querySelector("#prev");
let range = document.querySelector("#range");
let isPlaying = false;
let duration = 0;
let currentTime = 0;

let Song = new Audio();
window.onload = playsong

function playsong() {
    Song.src = music_name;

    playPauseBTN.addEventListener('click', function () {
        if (!isPlaying) {
            Song.play()
            isPlaying = true;
            duration = Song.duration;
            range.max = duration;
            text.innerText = "Drake - Worst Behaviour"
            playPauseBTN.classList.remove('fa', 'fa-play');
            playPauseBTN.classList.add('fa', 'fa-pause');
            playPauseBTNN.classList.remove('fa', 'fa-play');
            playPauseBTNN.classList.add('fa', 'fa-pause');
            playPauseBT.classList.remove('fa', 'fa-play');
            playPauseBT.classList.add('fa', 'fa-pause');
            playPauseB.classList.remove('fa', 'fa-play');
            playPauseB.classList.add('fa', 'fa-pause');
        }
        else {
            Song.pause();
            isPlaying = false;
            playPauseBTN.classList.remove('fa', 'fa-pause');
            playPauseBTN.classList.add('fa', 'fa-play');
            playPauseBTNN.classList.remove('fa', 'fa-pause');
            playPauseBTNN.classList.add('fa', 'fa-play');
            playPauseBT.classList.remove('fa', 'fa-pause');
            playPauseBT.classList.add('fa', 'fa-play');
            playPauseB.classList.remove('fa', 'fa-pause');
            playPauseB.classList.add('fa', 'fa-play');
        }

        range.addEventListener('change', function () {
            Song.currentTime = range.value;
        })
        Song.addEventListener('timeupdate', function () {
            range.value = Song.currentTime;
        })
        Song.addEventListener('ended', function () {
            Song.currentTime = 0;
            Song.pause();
            isPlaying = false;
            text.innerText = ""
            range.value = 0;
            playPauseBTN.classList.remove('fa', 'fa-pause');
            playPauseBTN.classList.add('fa', 'fa-play');
            playPauseBTNN.classList.remove('fa', 'fa-pause');
            playPauseBTNN.classList.add('fa', 'fa-play');
            playPauseBT.classList.remove('fa', 'fa-pause');
            playPauseBT.classList.add('fa', 'fa-play');
            playPauseB.classList.remove('fa', 'fa-pause');
            playPauseB.classList.add('fa', 'fa-play');
        })
    })
}