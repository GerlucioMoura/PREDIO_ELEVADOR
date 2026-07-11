(function () {
  criarPavimentos();
  criarElevador();
})();

function criarTerreo() {
  const terreo = document.createElement('div');
  terreo.classList.add('terreo');

  const janelaEsquerda = document.createElement('div');
  janelaEsquerda.classList.add('janela', 'esquerda');

  const janelaDireita = document.createElement('div');
  janelaDireita.classList.add('janela', 'direita');

  terreo.appendChild(janelaEsquerda);
  terreo.appendChild(janelaDireita);

  document.getElementById('predio').appendChild(terreo);
}

function criarElevador() {
  const elevador = document.createElement('div');
  elevador.id = 'elevador';
  document.getElementById('predio').appendChild(elevador);
}

function criarAndar(numero) {
  const andar = document.createElement('div');
  andar.classList.add('andar');

  const porta = document.createElement('div');
  porta.classList.add('porta');
  andar.appendChild(porta);

  document.getElementById('predio').appendChild(andar);
}

function criarPavimentos() {
  criarTerreo();
  for (let i = 1; i <= 6; i++) {
    criarAndar(i);
  }
}

function criarAndar(numero) {
  const andar = document.createElement('div');
  andar.classList.add('andar');

  // Porta esquerda
  const portaEsquerda = document.createElement('div');
  portaEsquerda.classList.add('porta', 'esquerda');

  // Porta direita
  const portaDireita = document.createElement('div');
  portaDireita.classList.add('porta', 'direita');

  andar.appendChild(portaEsquerda);
  andar.appendChild(portaDireita);

  document.getElementById('predio').appendChild(andar);
}

function criarAndar(numero) {
  const andar = document.createElement('div');
  andar.classList.add('andar');

  // Porta esquerda → final 1
  const portaEsquerda = document.createElement('div');
  portaEsquerda.classList.add('porta', 'esquerda');
  portaEsquerda.innerText = `${numero}01`; // exemplo: 101, 201, 301...

  // Porta direita → final 2
  const portaDireita = document.createElement('div');
  portaDireita.classList.add('porta', 'direita');
  portaDireita.innerText = `${numero}02`; // exemplo: 102, 202, 302...

  andar.appendChild(portaEsquerda);
  andar.appendChild(portaDireita);

  document.getElementById('predio').appendChild(andar);
}

function chamarElevador(floor) {
  const elevador = document.getElementById('elevador');
  const totalAndares = 7; // térreo + 6
  const alturaPorAndar = 100 / totalAndares;

  const display = document.getElementById('display');

  // pega apenas o número do display, ignorando texto
  let textoDisplay = display.innerText.split(" ")[0];
  let andarAtual = isNaN(parseInt(textoDisplay)) ? 0 : parseInt(textoDisplay);

  const destino = floor;
  let passo = andarAtual < destino ? 1 : -1;
  let andar = andarAtual;

  display.className = 'mostrador';
  display.classList.add(passo > 0 ? 'subindo' : 'descendo');

  // intervalo para simular movimento lento
  const intervalo = setInterval(() => {
    andar += passo;
    display.innerText = `${andar} - movendo`;

    // atualiza posição do elevador
    elevador.style.bottom = `${andar * alturaPorAndar}%`;

    // chegou no destino
    if (andar === destino) {
      clearInterval(intervalo);

      // abrir portas ao chegar
      setTimeout(() => {
        const portas = document.querySelectorAll('.porta');
        portas.forEach(p => p.classList.remove('aberta'));

        // abre as duas portas do andar
        const portasDoAndar = document.querySelectorAll(`.andar:nth-child(${totalAndares - floor}) .porta`);
        portasDoAndar.forEach(p => p.classList.add('aberta'));

        setTimeout(() => portasDoAndar.forEach(p => p.classList.remove('aberta')), 2000);

        display.innerText = `${floor} - parado`;
        display.className = 'mostrador parado';
      }, 500);
    }
  }, 1500); // tempo entre cada andar (mais lento)
}