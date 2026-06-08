
const audio = document.getElementById("song");
const progress = document.getElementById("progress");
const playBtn = document.querySelector(".play-pause-btn");
const nextBtn = document.querySelector(".forward");
const prevBtn = document.querySelector(".backward");
const album = document.querySelector(".album");
const cover = document.getElementById("album-cover");
const songTitle = document.getElementById("song-title");
const artistName = document.getElementById("artist-name");

// PLAYLIST
const songs = [
  {
    title: "Nossa Música ❤️",
    artist: "Turma do Pagode - A Gente Tem Tudo a Ver",
    source: "../../audio/capa1.mp3",
    cover: "../../images/capa1.jpg"
  },

  {
    title: "Nosso Começo 💫",
    artist: "Revelação - Deixa Acontecer ",
    source: "../../audio/capa2.mp3",
    cover: "../../images/capa2.jpg"
  },

  {
    title: "Amor em Construção 💞",
    artist: "Revelação - A Paixão Me Pegou",
    source: "../../audio/capa3.mp3",
    cover: "../../images/capa3.jpg"
  },

  {
    title: "Você e Eu 🌹",
    artist: "Revelação - Coração Radiante",
    source: "../../audio/capa4.mp3",
    cover: "../../images/capa4.jpg"
  },

  {
    title: "Tudo em você 🌙",
    artist: "Jennifer Lopez - All I Have",
    source: "../../audio/capa5.mp3",
    cover: "../../images/capa5.jpg"
  },

  {
    title: "Eu cuido de você ✨",
    artist: "Maroon 5 - She Will Be Loved",
    source: "../../audio/capa6.mp3",
    cover: "../../images/capa6.jpg"
  },

  {
    title: "Penso em você 💭",
    artist: "Mario Winans - I Don't Wanna Know",
    source: "../../audio/capa7.mp3",
    cover: "../../images/capa7.jpg"
  },

   {
    title: "Você é diferente 💞",
    artist: "50 Cent - Best Friend",
    source: "../../audio/capa8.mp3",
    cover: "../../images/capa8.jpg"
  },

   {
    title: "Eu escolho você 💑",
    artist: "Brian McKnight - Back At One",
    source: "../../audio/capa9.mp3",
    cover: "../../images/capa9.jpg"
  },

   {
    title: "Você é minha sorte 🍀",
    artist: "Matheus & Kauan - Que Sorte A Nossa",
    source: "../../audio/capa10.mp3",
    cover: "../../images/capa10.jpg"
  },

   {
    title: "Construindo nós 💫",
    artist: "Marcos & Belutt - Sonho De Todo Casal",
    source: "../../audio/capa11.mp3",
    cover: "../../images/capa11.jpg"
  },

   {
    title: "Só nós dois 🔥",
    artist: "Vem Cá - Pelé MilFlows",
    source: "../../audio/capa12.mp3",
    cover: "../../images/capa12.jpg"
  },

   {
    title: "Sem pressa com você 💛",
    artist: "Maneva - Seja Para Mim",
    source: "../../audio/capa13.mp3",
    cover: "../../images/capa13.jpg"
  },

   {
    title: "Memórias especiais 📸",
    artist: "Nickelback - Photograph",
    source: "../../audio/capa14.mp3",
    cover: "../../images/capa14.jpg"
  },

   {
    title: "Estarei aqui 🌍",
    artist: "The Calling - Wherever You Will Go",
    source: "../../audio/capa15.mp3",
    cover: "../../images/capa15.jpg"
  },
];

// MÚSICA ATUAL
let currentSong = 0;

// CARREGAR MÚSICA
function loadSong() {

  audio.src = songs[currentSong].source;

  cover.src = songs[currentSong].cover;

  songTitle.textContent = songs[currentSong].title;

  artistName.textContent = songs[currentSong].artist;

}

loadSong();

// PLAY
function playSong() {

  audio.play();

  album.classList.add("playing");

  playBtn.textContent = "❚❚";

}

// PAUSE
function pauseSong() {

  audio.pause();

  album.classList.remove("playing");

  playBtn.textContent = "▶";

}

// PLAY / PAUSE
playBtn.addEventListener("click", () => {

  if (audio.paused) {

    playSong();

  } else {

    pauseSong();

  }

});

// PRÓXIMA MÚSICA
nextBtn.addEventListener("click", () => {

  currentSong++;

  if (currentSong >= songs.length) {

    currentSong = 0;

  }

  loadSong();

  playSong();

});

// MÚSICA ANTERIOR
prevBtn.addEventListener("click", () => {

  currentSong--;

  if (currentSong < 0) {

    currentSong = songs.length - 1;

  }

  loadSong();

  playSong();

});

// QUANDO A MÚSICA ACABAR
audio.addEventListener("ended", () => {

  currentSong++;

  if (currentSong >= songs.length) {

    currentSong = 0;

  }

  loadSong();

  playSong();

});

// PROGRESSO
audio.addEventListener("loadedmetadata", () => {

  progress.max = audio.duration;

});

audio.addEventListener("timeupdate", () => {

  progress.value = audio.currentTime;

});

progress.addEventListener("input", () => {

  audio.currentTime = progress.value;

});
