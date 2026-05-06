const paramGavetas = [20, 50, 100];
const gavetas = new Map;
for (const valor of paramGavetas) {
  gavetas.set(valor, 0);
}
console.log(gavetas);
gavetas.set(20, 5);
console.log(gavetas);
gavetas.set(20, gavetas.get(20) + 5);
console.log(gavetas);


