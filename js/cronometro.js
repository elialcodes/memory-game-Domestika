function iniciaCronometro() {
  var segundos = niveles[nivelActual].segundosMax;
  var minutos = niveles[nivelActual].minutosMax;
  var segundosTexto;
  var minutosTexto;

  function actualizaCronometro() {
    segundos--;

    if (segundos < 0) {
      segundos = 59;
      minutos--;
    }

    if (minutos < 0) {
      segundos = 0;
      minutos = 0;
      clearInterval(cronometro);
      timeOver();
    }

    segundosTexto = segundos;
    minutosTexto = minutos;

    if (segundos < 10) {
      segundosTexto = '0' + segundos;
    }

    if (minutos < 10) {
      minutosTexto = '0' + minutos;
    }

    document.querySelector('#minutos').innerText = minutosTexto;
    document.querySelector('#segundos').innerText = segundosTexto;
  }

  cronometro = setInterval(actualizaCronometro, 1000);
}
