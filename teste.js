//questão numero 1  
for (let k = 0; k < 13; k++) {
    const soma = soma + k 
    console.log(soma)
}

//questão numero 2
function fibonacci(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const num = parseInt(prompt("Digite um número: "));
let i = 0;
let fib = fibonacci(i);
while (fib < num) {
  i++;
  fib = fibonacci(i);
}
if (fib === num) {
  console.log(`O número ${num} pertence à sequência de Fibonacci.`);
} else {
  console.log(`O número ${num} não pertence à sequência de Fibonacci.`);
}
//o usuário é solicitado a digitar um número e esse número é armazenado na variável "num"
//A variável i é inicializada como 0 e a variável fib é inicializada com o i-ésimo número da sequência de Fibonacci.
// A busca continua incrementando i e recalculando fib até que fib seja igual ou maior que num.

//questão numero 3
function calcularFaturamento(vetor) {
  // Calcula o menor valor de faturamento diário
  let menor = Math.min(...vetor);
  // Calcula o maior valor de faturamento diário
  let maior = Math.max(...vetor);
  // Calcula a média mensal de faturamento diário
  let media = vetor.reduce((acc, curr) => acc + curr, 0) / vetor.length;
  // Calcula o número de dias em que o faturamento diário foi superior à média mensal
  let diasAcimaMedia = vetor.filter((faturamento) => faturamento > media).length;
  // Retorna as informações calculadas
  return [menor, maior, diasAcimaMedia];
}

// Exemplo de uso
let faturamentoDiario = ["pegar os dados no dados.json"];
let [menor, maior, diasAcimaMedia] = calcularFaturamento(faturamentoDiario);
console.log(`Menor valor de faturamento diário: R$ ${menor}`);
console.log(`Maior valor de faturamento diário: R$ ${maior}`);
console.log(`Número de dias com faturamento diário acima da média mensal: ${diasAcimaMedia}`);


//questao numero 4
// Definindo o faturamento de cada estado
let faturamento = {
  'SP': 67836.43,
  'RJ': 36678.66,
  'MG': 29229.88,
  'ES': 27165.48,
  'Outros': 19849.53
};

// Calculando o valor total do faturamento mensal da distribuidora
let totalFaturamento = Object.values(faturamento).reduce((total, valor) => total + valor);

// Calculando o percentual de representação de cada estado
for (let estado in faturamento) {
  let percentual = (faturamento[estado] / totalFaturamento) * 100;
  console.log(`${estado} - ${percentual.toFixed(2)}%`);
}

//questao numero 5
function inverterString(str) {
  return str.split('').reverse().join('');
}

//invertendo uma string
let minhaString = 'exemplo';
let stringInvertida = inverterString(minhaString);
console.log(stringInvertida);