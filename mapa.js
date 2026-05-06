const materia = new Map;
console.log(materia);
//chave e valor
materia.set('nome', 'Prog Corpo.');
materia.set('ch', 100);
console.log(materia);
console.log(materia.get('nome'))

materia.set(10, [100, 1,4,5,]);
console.log(materia.get(10))

console.log(Array.from(materia.keys()))
for (const key of materia.keys()) {
    console.log(key)
}

materia.forEach((chave, valor) => {
    console.log(`${chave}:${valor}`)
})

materia.delete('nome');
console.log(materia);
materia.set('ch', materia.get('ch') + 1)
console.log(materia);













