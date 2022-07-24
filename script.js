const epicMix = [
  "The Wrong Direction",
  "Unstoppable - Sia",
  "Coat of many colors",
  "Holes - Passenger",
  "Set Fire to the Rain - Adele",
  "Guantanamera",
  "Wavin Flag",
  "Jolene",
  "On top of the World",
  "Waka Waka - Shakira",
  "Time of our Lives",
  "Despacito - Luis Fonsi"
];



const mixList = document.querySelector(".mix");
const button = document.querySelector(".show-list");
const total = document.querySelector(".total");

button.addEventListener("click", function () {
  mixInfo(epicMix);
  mixList.classList.remove("hide");
  button.classList.add("hide");
});

total.innerText = `${epicMix.length} great songs!`;

const mixInfo = function (mix) {
  mix.forEach(function (song, index) {
    let li = document.createElement("li");
    li.classList.add("song");
    li.innerHTML = `<span class="song-number">**${index + 1}</span> ${song}`;
    mixList.append(li);
  });
};

