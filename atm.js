
export function novoATM(numeroSerie, paramGavetas, capacidade) {
  const gavetasInterna = new Map;
  for (const valor of paramGavetas) {
    gavetasInterna.set(valor, 0);
  }
  const o = {
    get numeroSerie() {
      return numeroSerie;
    },
    get gavetas() {
      return paramGavetas;
    },
    get valor() {
      return 0;
    },
    cedulas(valor) {
      return gavetasInterna.get(valor);
    },
  };

  return o;
};

