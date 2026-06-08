const dataInicio = new Date("2026-01-24T22:00:00");

function atualizarContador() {

    const agora = new Date();

    const diferenca = agora - dataInicio;

    const totalSegundos = Math.floor(diferenca / 1000);

    const dias = Math.floor(totalSegundos / (60 * 60 * 24));

    const horas = agora.getHours();
    const minutos = agora.getMinutes();
    const segundos = agora.getSeconds();

    const meses =
        (agora.getFullYear() - dataInicio.getFullYear()) * 12 +
        (agora.getMonth() - dataInicio.getMonth());

    document.getElementById("meses").textContent = meses;
    document.getElementById("dias").textContent = dias;
    document.getElementById("horas").textContent = horas.toString().padStart(2, "0");
    document.getElementById("minutos").textContent = minutos.toString().padStart(2, "0");
    document.getElementById("segundos").textContent = segundos.toString().padStart(2, "0");
}

atualizarContador();
setInterval(atualizarContador, 1000);