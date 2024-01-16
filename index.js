function atualizarRelogio() {
  const relogioElement = document.getElementById("relogio");
  const agora = new Date();
  const horas = agora.getHours().toString().padStart(2, "0");
  const minutos = agora.getMinutes().toString().padStart(2, "0");
  const segundos = agora.getSeconds().toString().padStart(2, "0");
  const horaAtual = `${horas}:${minutos}:${segundos}`;
  relogioElement.textContent = horaAtual;
}

// Atualize o relógio a cada segundo
setInterval(atualizarRelogio, 1000);

// Chame a função inicialmente para evitar um atraso de 1 segundo na exibição
atualizarRelogio();
