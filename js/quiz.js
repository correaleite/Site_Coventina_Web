const quizData = [
    {
      pergunta: "Qual é o principal objetivo da Coventina?",
      opcoes: ["Construir foguetes espaciais", "Coletar gelo na Lua", "Minerar ouro em Marte", "Criar satélites artificiais"],
      resposta: "Coletar gelo na Lua"
    },
    {
      pergunta: "Por que a extração de recursos espaciais é importante?",
      opcoes: ["Porque a Lua possui oceanos", "Porque valem muito dinheiro", "Porque os recursos da Terra podem acabar ou ficar caros", "Porque o espaço possui oxigênio infinito"],
      resposta: "Porque os recursos da Terra podem acabar ou ficar caros"
    },
    {
      pergunta: "Onde a Coventina irá operar?",
      opcoes: ["Na superfície de Marte", "No centro da Terra", "Próximo aos extremos lunares", "Dentro de asteroides"],
      resposta: "Próximo aos extremos lunares"
    },
    {
      pergunta: "Qual elemento encontrado no gelo pode ajudar na criação de água?",
      opcoes: ["Carbono", "Hidrogênio", "Ferro", "Ouro"],
      resposta: "Hidrogênio"
    },
    {
      pergunta: "Qual foi o robô da NASA citado no texto?",
      opcoes: ["PRIME-1", "Voyager-1", "Apollo-X", "Curiosity"],
      resposta: "PRIME-1"
    },
    {
      pergunta: "Por que a Coventina possui pernas articuladas?",
      opcoes: ["Para nadar em gelo lunar", "Para economizar bateria", "Para voar na Lua", "Para facilitar movimentos em terrenos irregulares"],
      resposta: "Para facilitar movimentos em terrenos irregulares"
    },
    {
      pergunta: "Qual componente ajuda a Coventina a se prender ao solo lunar?",
      opcoes: ["Cabos de aço", "Rodas magnéticas", "Garras", "Hélices"],
      resposta: "Garras"
    },
    {
      pergunta: "Qual é a função do painel solar da Coventina?",
      opcoes: ["Recarregar as baterias", "Escavar o solo lunar", "Produzir oxigênio", "Resfriar o robô"],
      resposta: "Recarregar as baterias"
    },
    {
      pergunta: "Qual material ajuda na proteção contra radiação e temperaturas extremas?",
      opcoes: ["Titânio e Aerogel", "Alumínio doméstico", "Carbono e Platina", "Madeira reforçada"],
      resposta: "Titânio e Aerogel"
    },
    {
      pergunta: "Como a Coventina poderá ajudar futuras missões espaciais?",
      opcoes: ["Eliminando foguetes", "Criando novos planetas", "Construindo cidades terrestres", "Servindo como ponto de abastecimento espacial"],
      resposta: "Servindo como ponto de abastecimento espacial"
    },
    
  ];
  
  const perguntaElemento = document.getElementById("pergunta");
  const opcoesElemento = document.getElementById("opcoes"); 

  let perguntaAtual = 0;
  let pontuacao = 0;
  
  function mostrarPergunta() {
    const pergunta = quizData[perguntaAtual];
    perguntaElemento.innerText = pergunta.pergunta;


  
    opcoesElemento.innerHTML = "";
    pergunta.opcoes.forEach(opcao => {
      const botao = document.createElement("button");
      botao.innerText = opcao;
      opcoesElemento.appendChild(botao);
      botao.addEventListener("click", selecionarResposta);
    });
  }
  
  function selecionarResposta(e) {
    const botaoSelecionado = e.target;
    const resposta = quizData[perguntaAtual].resposta;
  
    if (botaoSelecionado.innerText === resposta) {
      pontuacao++;
    }
  
    perguntaAtual++;
  
    if (perguntaAtual < quizData.length) {
      mostrarPergunta();
    } else {
      mostrarResultado();
    }
  }
  
  function mostrarResultado() {
    quiz.innerHTML = `
      <h1>Quiz Completado!</h1>
      <p class="texto-resultado">Sua Pontuação: ${pontuacao}/${quizData.length}</p>
    `;
  }

mostrarPergunta();
