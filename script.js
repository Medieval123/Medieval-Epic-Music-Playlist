const epicMix = [
  "The Wrong Direction",
  "Unstoppable",
  "Coat of many colors",
  "Holes",
  "Set Fire to the Rain",
  "Guantanamera",
  "Wavin Flag",
  "Jolene",
  "On top of the World",
  "Waka Waka",
  "Time of our Lives",
  "Despacito"
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

