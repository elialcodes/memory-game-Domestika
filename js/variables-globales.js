var modoRelax = false;

var movimientos = 0;

var cronometro;

var grupoTarjetas = [
  ['🦄', '🍦'],
  ['🌈', '👽'],
  ['👾', '🤖', '👹', '👺'],
  ['🤡', '💩', '🎃', '🙀'],
  ['☠️', '👾', '😽', '😼'],
];

var nivelActual = 0;

var niveles = [
  {
    tarjetas: grupoTarjetas[0],
    movimientosMax: 3,
    segundosMax: 10,
    minutosMax: 0,
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1]),
    movimientosMax: 10,
    segundosMax: 30,
    minutosMax: 0,
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2]),
    movimientosMax: 20,
    segundosMax: 30,
    minutosMax: 1,
  },
  {
    tarjetas: grupoTarjetas[0].concat(grupoTarjetas[1], grupoTarjetas[2], grupoTarjetas[3]),
    movimientosMax: 35,
    segundosMax: 0,
    minutosMax: 3,
  },
  {
    tarjetas: grupoTarjetas[0].concat(
      grupoTarjetas[1],
      grupoTarjetas[2],
      grupoTarjetas[3],
      grupoTarjetas[4]
    ),
    movimientosMax: 50,
    segundosMax: 30,
    minutosMax: 4,
  },
];
