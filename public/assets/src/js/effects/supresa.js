// const btnSurpresa = document.getElementById("surpresa-btn");

// btnSurpresa.addEventListener("click", () => {
//   const mensagens = [
//     "❤️ Você é minha pessoa favorita.",
//     "💌 Obrigado por estar comigo.",
//     "🌹 Cada momento ao seu lado vale a pena.",
//     "✨ Você tornou meus dias mais felizes.",
//     "🎵 Agora aperte o play e lembre de nós.",
//   ];

//   mensagens.forEach((mensagem, index) => {
//     setTimeout(() => {
//       const aviso = document.createElement("div");

//       aviso.classList.add("netflix-toast");

//       aviso.textContent = mensagem;

//       document.getElementById("netflix-notify-container").appendChild(aviso);
//     }, index * 2500);
//   });
// });

const btnSurpresa = document.getElementById("surpresa-btn");

const frases = [
  "❤️ Te Adoro ❤️",
  "💌 Meu Amor",
  "🌹 Minha Pessoa Favorita",
  "💕 Meu Coração é Seu",
  "✨ Meu Lugar Seguro",
  "🥰 Minha Felicidade",
  "💘 Você é Tudo",
  "❤️ Sempre Nós",
  "🌷 Minha Princesa",
  "💞 Meu Futuro"
];

if (btnSurpresa) {

  btnSurpresa.addEventListener("click", () => {

    const overlay = document.createElement("div");

    overlay.classList.add("cinema-overlay");

    document.body.appendChild(overlay);

    // TÍTULO APARECE PRIMEIRO
    setTimeout(() => {

      criarTitulo();

    }, 500);

    // MENSAGENS DEPOIS
    setTimeout(() => {

      for (let i = 0; i < 40; i++) {

        setTimeout(() => {

          criarMensagem();
          criarCoracao();

        }, i * 120);

      }

    }, 1000);

    // REMOVE OVERLAY
    setTimeout(() => {

      overlay.remove();

    }, 6000);

    if (navigator.vibrate) {

      navigator.vibrate([200, 100, 200]);

    }

  });

}

function criarTitulo() {

  const antigo =
    document.querySelector(".netflix-surpresa");

  if (antigo) return;

  const titulo = document.createElement("div");

  titulo.classList.add("netflix-surpresa");

  titulo.innerHTML = `
      <span>NETFLIX ORIGINAL</span>
      <h1>❤️ BRUNO & STEFANI ❤️</h1>
  `;

  document.body.appendChild(titulo);

  setTimeout(() => {

    titulo.remove();

  }, 5000);

}

function criarMensagem() {

  const mensagem = document.createElement("div");

  mensagem.classList.add("love-message");

  mensagem.textContent =
    frases[Math.floor(Math.random() * frases.length)];

  mensagem.style.left =
    Math.random() * window.innerWidth + "px";

  mensagem.style.top =
    Math.random() * window.innerHeight + "px";

  document.body.appendChild(mensagem);

  setTimeout(() => {

    mensagem.remove();

  }, 4000);

}

function criarCoracao() {

    const heart = document.createElement("div");

    heart.classList.add("heart-particle");

    const emojis = [
        "❤️",
        "💑",
        "💕",
        "💖",
        "💘",
        "🌹"
    ];

    heart.innerHTML =
        emojis[Math.floor(Math.random() * emojis.length)];

    heart.style.left =
        Math.random() * window.innerWidth + "px";

    heart.style.top =
        Math.random() * window.innerHeight + "px";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}