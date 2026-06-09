const messages = [
  "❤️ Você é meu episódio favorito",
  "🍿 Nosso amor em reprodução",
  "🎬 Cena perfeita em andamento",
  "💞 Replay infinito de você",
  "✨ Spoiler: eu escolho você",
  "📺 História em alta definição",
  "🔥 Sem pular essa cena",
  "▶️ Play no nosso amor",
  "💘 Final feliz em construção",
  "🎞️ Melhor que qualquer série",
  "💓 Você virou minha rotina",
  "🔁 Reassistiria você sempre",
  "📖 Capítulo favorito da vida",
  "⭐ Sempre na minha lista",
  "💬 Só sentimento, sem legenda"
];

function createNetflixToast() {
  const container = document.getElementById("netflix-notify-container");

  const toast = document.createElement("div");
  toast.classList.add("netflix-toast");

  const msg = messages[Math.floor(Math.random() * messages.length)];
  toast.textContent = msg;

  container.appendChild(toast);

  setTimeout(() => {
    toast.classList.add("hide");
  }, 4000);

  setTimeout(() => {
    toast.remove();
  }, 5000);
}

// aparece a cada 6 segundos
setInterval(createNetflixToast, 6000);

// primeira mensagem ao carregar
setTimeout(createNetflixToast, 1500);