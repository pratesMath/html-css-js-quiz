const questions = [
  {
    question: "Qual é a saída do código abaixo?\n\nconsole.log(1 + '2' + '2');",
    answers: ["122", "32", "14"],
    correct: 0,
  },
  {
    question: "Qual é o resultado da expressão 5 == '5' em JavaScript?",
    answers: ["true", "false", "NaN"],
    correct: 0,
  },
  {
    question:
      "Qual método de array cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida?",
    answers: ["map()", "reduce()", "filter()"],
    correct: 2,
  },
  {
    question: "O que o método 'bind()' faz em JavaScript?",
    answers: [
      "Invoca uma função imediatamente",
      "Cria uma nova função que, quando chamada, tem sua palavra-chave 'this' definida com um valor fornecido",
      "Remove elementos duplicados de um array",
    ],
    correct: 1,
  },
  {
    question:
      "Qual é a saída do código abaixo?\n\nconsole.log(typeof typeof 1);",
    answers: ["number", "string", "undefined"],
    correct: 0,
  },
  {
    question: "O que o operador '===' faz em JavaScript?",
    answers: [
      "Compara o valor e o tipo",
      "Atribuição",
      "Compara somente o valor",
    ],
    correct: 0,
  },
  {
    question: "Qual é o resultado da expressão 1 + '1' - 1 em JavaScript?",
    answers: ["11", "10", "2"],
    correct: 1,
  },
  {
    question: "O que o método 'forEach()' faz em JavaScript?",
    answers: [
      "Itera sobre os elementos de um array e executa uma função de retorno de chamada para cada elemento",
      "Remove o último elemento de um array",
      "Inverte a ordem dos elementos em um array",
    ],
    correct: 0,
  },
  {
    question: "Qual é a saída do código abaixo?\n\nconsole.log(2 + 3 + '7');",
    answers: ["12", "37", "57"],
    correct: 1,
  },
  {
    question:
      "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
    answers: ["parseInt()", "parseFloat()", "Number()"],
    correct: 0,
  },
  {
    question: "Qual é a saída do código abaixo?\n\nconsole.log(1 + '2' + '2');",
    answers: ["122", "32", "14"],
    correct: 0,
  },
  {
    question: "Qual é o resultado da expressão 5 == '5' em JavaScript?",
    answers: ["true", "false", "NaN"],
    correct: 0,
  },
  {
    question:
      "Qual método de array cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida?",
    answers: ["map()", "reduce()", "filter()"],
    correct: 2,
  },
  {
    question: "O que o método 'bind()' faz em JavaScript?",
    answers: [
      "Invoca uma função imediatamente",
      "Cria uma nova função que, quando chamada, tem sua palavra-chave 'this' definida com um valor fornecido",
      "Remove elementos duplicados de um array",
    ],
    correct: 1,
  },
  {
    question:
      "Qual é a saída do código abaixo?\n\nconsole.log(typeof typeof 1);",
    answers: ["number", "string", "undefined"],
    correct: 1,
  },
  {
    question: "O que o operador '===' faz em JavaScript?",
    answers: [
      "Compara o valor e o tipo",
      "Atribuição",
      "Compara somente o valor",
    ],
    correct: 0,
  },
  {
    question: "Qual é o resultado da expressão 1 + '1' - 1 em JavaScript?",
    answers: ["11", "10", "2"],
    correct: 1,
  },
  {
    question: "O que o método 'forEach()' faz em JavaScript?",
    answers: [
      "Itera sobre os elementos de um array e executa uma função de retorno de chamada para cada elemento",
      "Remove o último elemento de um array",
      "Inverte a ordem dos elementos em um array",
    ],
    correct: 0,
  },
  {
    question: "Qual é a saída do código abaixo?\n\nconsole.log(2 + 3 + '7');",
    answers: ["12", "37", "57"],
    correct: 1,
  },
  {
    question:
      "Qual função é usada para converter uma string em um número inteiro em JavaScript?",
    answers: ["parseInt()", "parseFloat()", "Number()"],
    correct: 0,
  },

  {
    question:
      "Qual é o resultado da expressão (function() { return typeof arguments; })(); em JavaScript?",
    answers: ["'object'", "'array'", "'function'"],
    correct: 0,
  },
  {
    question: "O que é o 'hoisting' em JavaScript?",
    answers: [
      "Um mecanismo que eleva declarações de variáveis e funções para o topo de seus escopos antes da execução do código",
      "Um termo utilizado para descrever o processo de criação de um objeto",
      "Um padrão de design para garantir a modularidade do código",
    ],
    correct: 0,
  },
  {
    question:
      "Qual é a saída do código abaixo?\n\nconsole.log(0.1 + 0.2 === 0.3);",
    answers: ["true", "false", "undefined"],
    correct: 1,
  },
  {
    question: "O que é uma closure em JavaScript?",
    answers: [
      "Uma função que não tem acesso ao escopo lexical circundante",
      "Um objeto que encapsula uma função juntamente com o ambiente em que a função foi declarada",
      "Um método para criar instâncias de objetos a partir de uma classe",
    ],
    correct: 1,
  },
  {
    question: "O que é o conceito de 'event bubbling' em JavaScript?",
    answers: [
      "Um modelo de propagação de eventos onde o evento capturado é disparado primeiro e depois se propaga para os elementos pais",
      "Um método para evitar a propagação de eventos em um documento",
      "Um modelo de propagação de eventos onde o evento é disparado no elemento alvo e depois se propaga para os elementos pais",
    ],
    correct: 2,
  },
  {
    question:
      "Qual é a saída do código abaixo?\n\nconsole.log(typeof (function() { return typeof arguments; })());",
    answers: ["'object'", "'array'", "'function'"],
    correct: 2,
  },
  {
    question:
      "Qual é o método usado para definir propriedades virtuais em um objeto JavaScript?",
    answers: ["get", "set", "defineProperty"],
    correct: 2,
  },
  {
    question: "O que é o padrão de design 'Module' em JavaScript?",
    answers: [
      "Um padrão que visa separar a construção de um objeto complexo de sua representação",
      "Um padrão que permite que um objeto seja acessado por meio de uma única instância em todo o código",
      "Um padrão que encapsula métodos e propriedades relacionados em um único objeto",
    ],
    correct: 2,
  },
  {
    question: "Qual é a saída do código abaixo?\n\nconsole.log(+(+'5' - '2'));",
    answers: ["5", "3", "2"],
    correct: 1,
  },
  {
    question: "Qual é a diferença entre 'null' e 'undefined' em JavaScript?",
    answers: [
      "'null' indica a ausência de valor, enquanto 'undefined' indica que a variável foi declarada, mas ainda não foi inicializada",
      "'undefined' indica a ausência de valor, enquanto 'null' indica que a variável foi declarada, mas ainda não foi inicializada",
      "Ambos indicam a ausência de valor, mas 'null' é usado para variáveis ​​e 'undefined' é usado para propriedades de objetos",
    ],
    correct: 0,
  },
];
const quiz = document.querySelector("#quiz");
const template = document.querySelector("template");
const correctQuestions = new Set();
const totalQuestions = questions.length;
const showTotal = document.querySelector("#correct_questions span");
//showTotal.textContent = `${correctQuestions.size} de ${totalQuestions}`;

for (const item of questions) {
  const quizItem = template.content.cloneNode(true);
  quizItem.querySelector("h3").textContent = item.question;

  for (let answer of item.answers) {
    const dt = quizItem.querySelector("dl dt").cloneNode(true);
    dt.querySelector("span").textContent = answer;
    dt.querySelector("input").setAttribute(
      "name",
      `question-${questions.indexOf(item)}`
    );
    dt.querySelector("input").value = item.answers.indexOf(answer);
    dt.querySelector("input").onchange = (e) => {
      const isCorrect = e.target.value === item.correct.toString();

      correctQuestions.delete(item);
      if (isCorrect) {
        correctQuestions.add(item);
      }
      showTotal.textContent = `${correctQuestions.size} de ${totalQuestions}`;
    };

    quizItem.querySelector("dl").appendChild(dt);
  }
  quizItem.querySelector("dl dt").remove();

  quiz.appendChild(quizItem);
}
