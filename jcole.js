
//track 5

var audio = new Audio('track.mp3');
var playPauseBTN = document.getElementById('track7');
var playPauseBTNN = document.getElementById('playpau');
var count = 0;

function playPause() {
    if (count == 0) {
        count = 1;
        audio.play();
        playPauseBTN.classList.remove('fa', 'fa-play');
        playPauseBTN.classList.add('fa', 'fa-pause');
        playPauseBTNN.classList.remove('fa', 'fa-play');
        playPauseBTNN.classList.add('fa', 'fa-pause');

    } else {
        count = 0;
        audio.pause();
        playPauseBTN.classList.remove('fa', 'fa-pause');
        playPauseBTN.classList.add('fa', 'fa-play');
        playPauseBTNN.classList.remove('fa', 'fa-pause');
        playPauseBTNN.classList.add('fa', 'fa-play');
    }
}





