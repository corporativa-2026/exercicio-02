import { novoATM } from './atm.js';

// criando um novo ATM com número de série 2344499,
// gavetas para cédulas de 10, 20, 50 e 100 reais,
// cada com capacidade máxima de 500 cédulas
const atm = novoATM(2344499, [10, 20, 50, 100], 500);

console.log(atm.numeroSerie); // 2344499

// não deve permitir alteração do número de série, comente a linha abaixo para evitar o erro
atm.numeroSerie = 34883444;

// mesmo número de série, pois a alteração não é permitida
console.log(atm.numeroSerie); // 2344499

// o ATM não tem dinheiro no início
console.log(atm.valor); // 0

// o ATM não tem cédulas de nenhum valor
console.log(atm.cedulas(10)); // 0
console.log(atm.cedulas(20)); // 0
console.log(atm.cedulas(50)); // 0
console.log(atm.cedulas(100)); // 0
console.log(atm.cedulas(200)); // undefined, pois não existe gaveta para cédulas de 200 reais

// o ATM tem gavetas de 10, 20, 50 e 100 reais, mas não tem gavetas de outros valores
console.log(atm.gavetas.length); // 4
console.log(atm.gavetas); // [ 10, 20, 50, 100 ]

// não deve ser possível alterar as gavetas, comente a linha abaixo para evitar o erro
atm.gavetas = [5, 10, 20, 50, 100];

// as gavetas continuam as mesmas
console.log(atm.gavetas); // [ 10, 20, 50, 100 ]

// abastecendo com 33 cédulas de 100
atm.abastecerCedulas(33, 100);

// verificando a quantidade de cédulas de 100, espera-se 33 cédulas
console.log(atm.cedulas(100)); // 33

// espera-se nenhuma cédula de qualquer outro valor
console.log(atm.cedulas(10)); // 0
console.log(atm.cedulas(20)); // 0
console.log(atm.cedulas(50)); // 0

// cédulas de valor não existente devem retornar undefined
console.log(atm.cedulas(5)); // undefined

// abastecimento de cédulas não existentes são rejeitados explicitamente
try {
  atm.abastecerCedulas(8, 3); // 8 cédulas de R$ 3,00
} catch (erro) { // use throw new Error('mensagem de erro') para lançar um erro personalizado
  console.log(erro); // Não existem cédulas de 3 reais
}

// consultando o valor
console.log(atm.valor); // 33 * 100 = 3300 reais

// retirada rejeitada por não haver cédulas de valor solicitado (R$ 50,00)
atm.retirarValor(350); // não há cédulas de R$ 50,00, apenas não efetua, sem erros
// a operação retorna um array de cédulas retiradas,
// mas como não há cédulas de 50 reais, o array é vazio
console.log(atm.retirarValor(350)); // []

console.log(atm.cedulas(100)); // 33
console.log(atm.valor); // 3300

// retirada válida
const retirada1 = atm.retirarValor(300); // 3 cédulas de 100
console.log(atm.cedulas(100)); // 30
console.log(retirada1); // [ 100, 100, 100 ]
console.log(atm.valor); // 3000

// retirada rejeitada por não haver cédulas suficientes para atender o valor solicitado
const retirada2 = atm.retirarValor(3100); // não há cédulas suficientes
console.log(atm.cedulas(100)); // 30
console.log(retirada2); // []
console.log(atm.valor); // 3000

// retirada válida
// vai esvaziar o ATM, retirando as 30 cédulas de 100 reais restantes
const retirada3 = atm.retirarValor(3000);
console.log(atm.cedulas(100)); // 0
console.log(retirada3); // 30 x 100 = [ 100, ... 28x100 ..., 100 ]
console.log(retirada3.length); // 30
console.log(atm.valor); // 0

// abastecimento de R$ 50,00 e R$ 10,00
atm.abastecerCedulas(10, 10); // 10 cédulas de R$ 10,00
atm.abastecerCedulas(10, 50); // 10 cédulas de R$ 50,00
console.log(atm.cedulas(10)); // 10
console.log(atm.cedulas(50)); // 10
console.log(atm.valor); // 600 = 10 * 10 + 10 * 50

// retirada prioriza cédulas de maior valor
const retirada4 = atm.retirarValor(100); // retira 2 cédulas de R$ 50,00 em vez de 10 x R$ 10,00
console.log(atm.cedulas(10)); // 10
console.log(atm.cedulas(50)); // 8
console.log(retirada4); // [ 50, 50 ]
console.log(atm.valor); // 500 = 10 * 10 + 8 * 50

// retirada combinada
const retirada5 = atm.retirarValor(90); // 1 cédula de R$ 50,00 e 4 cédulas de R$ 10,00
console.log(atm.cedulas(10)); // 6
console.log(atm.cedulas(50)); // 7
console.log(retirada5); // [ 50, 10, 10, 10, 10 ]
console.log(atm.valor); //  410 = 6 * 10 + 7 * 50

// consulta sem parâmetros retorna um objeto com a quantidade de cédulas de cada valor
console.log(atm.cedulas()); // { '10': 6, '50': 7 }

// ---------------------------------------------------
// escrever um atm.test.js para incluir os casos de teste acima
// e incluir casos de teste com retiradas
// que combinam 3 e 4 cédulas diferentes


const atm2 = novoATM(2, [10, 20]);
const atm3 = novoATM(3, [100]);

console.log(atm2.numeroSerie); // 2
console.log(atm3.numeroSerie); // 3

atm2.abastecerCedulas(5, 10); // 5 cédulas de R$ 10,00
atm2.abastecerCedulas(3, 20); // 3 cédulas de R$ 20,00

atm3.abastecerCedulas(2, 100); // 2 cédulas de R$ 100,00

console.log(atm2.valor); // 5 * 10 + 3 * 20 = 110
console.log(atm3.valor); // 2 * 100 = 200

atm2.retirarValor(70); // 1 cédula de R$ 20,00 e 5 cédulas de R$ 10,00
console.log(atm2.cedulas(10)); // 0
console.log(atm2.cedulas(20)); // 2
console.log(atm2.valor); // 40 = 2 * 20

atm3.retirarValor(150); // não há cédulas suficientes para atender o valor solicitado
console.log(atm3.cedulas(100)); // 2
console.log(atm3.valor); // 200
