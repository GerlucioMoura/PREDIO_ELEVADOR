Mestre Gerlúcio 🐐, **README passo a passo** 

🎯 Estrutura final do projeto
index.html → estrutura da página, controles e container do prédio

style.css → estilos visuais (prédio, portas, janelas, elevador, animações)

predio.js → lógica de criação dos andares e funcionamento do elevador

Com isso, você tem um guia claro de onde começar e como evoluir até ter o elevador funcionando com portas realistas e numeração dos apartamentos.

## 🎯 Estrutura final do projeto
- **index.html** → estrutura da página, controles e container do prédio 
01 Criar o arquivo index.html
Este é o ponto de partida do projeto, onde você define a estrutura básica da página.

Crie um arquivo chamado index.html

Adicione a estrutura HTML padrão (<!DOCTYPE html>, <html>, <head>, <body>)

Inclua o link para o CSS: <link rel="stylesheet" href="style.css">

Inclua o script JS no final do body: <script src="predio.js"></script>

Dentro do body, crie:

Um bloco de controles com botões para cada andar

Um bloco vazio <div id="predio"></div> onde o prédio será montado dinamicamente.


- **style.css** → estilos visuais (prédio, portas, janelas, elevador, animações)  
02 Criar o arquivo style.css
Aqui você define o visual do prédio, elevador, portas e janelas.

Crie um arquivo chamado style.css

Estilize o prédio (#predio) com altura e largura fixas

Estilize os andares (.andar) e o térreo (.terreo)

Defina o estilo das portas (.porta) com cor, borda e número em cinza claro

Configure o elevador (#elevador) com duas folhas (.porta-elevador.esquerda e .porta-elevador.direita)

Adicione animações para abrir/fechar as portas do elevador


- **predio.js** → lógica de criação dos andares e funcionamento do elevador 
 03 Criar o arquivo predio.js
Este arquivo controla toda a lógica do elevador e a criação dinâmica dos andares.

Crie um arquivo chamado predio.js

Funções principais:

criarTerreo(): adiciona o térreo com janelas

criarAndar(numero): adiciona cada andar com duas portas numeradas (101, 102, 201, 202...)

criarElevador(): cria o elevador com duas folhas internas

criarPavimentos(): monta todo o prédio (térreo + 6 andares)

chamarElevador(floor): movimenta o elevador até o andar escolhido

abrirPortaElevador(): anima a abertura lateral das portas do elevador
04 Testar o projeto
Agora você pode abrir o projeto no navegador e testar os botões.

Abra o arquivo index.html no navegador

Clique nos botões dos andares para chamar o elevador

Verifique se o display mostra o andar atual

Observe o movimento do elevador e a abertura lateral das portas

Ajuste CSS/JS conforme necessário para melhorar o realismo

Com isso, você tem um guia claro de onde começar e como evoluir até ter o elevador funcionando com portas realistas e numeração dos apartamentos.  
