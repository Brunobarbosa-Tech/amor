const catalogo = [
  {
    imagem: "../../images/foto-9.jpeg",
    titulo: "Primeira Viagem ✈️",
    descricao: "A primeira viagem inesquecível.",
  },

  {
    imagem: "../../images/foto-1.jpeg",
    titulo: "TEMPORADA 1 ❤️",
    descricao: "Toda grande história começa com um primeiro episódio",
  },

  {
    imagem: "../../images/foto-11.jpeg",
    titulo: "CAPÍTULO ESPECIAL 📖",
    descricao: "Aqueles momentos que merecem replay infinito",
  },

  {
    imagem: "../../gifs/amor.gif",
    titulo: "NOSSO TRAILER 🎬",
    descricao: "Uma prévia dos melhores momentos da nossa história.",
  },
];

function trocarTrailer(index) {
  const imagem = document.getElementById("heroImage");

  const titulo = document.getElementById("heroTitle");

  const descricao = document.getElementById("heroDescription");

  imagem.style.opacity = "0";

  setTimeout(() => {
    imagem.src = catalogo[index].imagem;

    titulo.textContent = catalogo[index].titulo;

    descricao.textContent = catalogo[index].descricao;

    imagem.style.opacity = "1";
  }, 300);
}
