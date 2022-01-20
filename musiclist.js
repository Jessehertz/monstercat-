let allMusic = [
  {
    name: "Reckless",
    artist: "Wizkid",
    src: "track-1",
  },
  {
    name: "Ginger",
    artist: "Wizkid",
    src: "track-2",
  },
  {
    name: "Longtime",
    artist: "Wizkid",
    src: "track-3",
  },
  {
    name: "Mighty Wine",
    artist: "Wizkid",
    src: "track-4",
  },
  {
    name: "Blessed",
    artist: "Wizkid",
    src: "track-5",
  },
  {
    name: "Smile",
    artist: "Wizkid",
    src: "track-6",
  },
  {
    name: "Piece Of Me",
    artist: "Wizkid",
    src: "track-7",
  },
  {
    name: "No Stress",
    artist: "Wizkid",
    src: "track-8",
  },
  {
    name: "Tru Love",
    artist: "Wizkid",
    src: "track-9",
  },
  {
    name: "Sweet One",
    artist: "Wizkid",
    src: "track-10",
  },
  {
    name: "Essence",
    artist: "Wizkid",
    src: "track-11",
  },
  {
    name: "Gyrate",
    artist: "Wizkid",
    src: "track-12",
  },
  {
    name: "Grace",
    artist: "Wizkid",
    src: "track-13",
  },
  {
    name: "Essence (remix)",
    artist: "Wizkid",
    src: "track-14",
  },
];

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
