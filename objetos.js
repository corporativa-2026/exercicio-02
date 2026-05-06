// [] brace, {} curly brace
const jogo = {}
console.log(jogo);
jogo['nome'] = 'Mario Kart'
console.log(jogo);
console.log(jogo['nome'])

jogo.fabricante = 'Nintendo';
// jogo['fabricante'] = 'Nintendo';

jogo.avaliacao = 4;
console.log(jogo.avaliacao)
console.log(jogo.comentarios);
console.log('nome' in jogo)
console.log('comentarios' in jogo)
if ('nome' in jogo) {
    console.log('Nome:', jogo.nome)
}
for (const prop in jogo) {
    console.log(prop)
    console.log(jogo[prop])
}

delete jogo.avaliacao
console.log(jogo.avaliacao)






























