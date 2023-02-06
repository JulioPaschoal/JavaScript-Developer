/* Faça  um programa para calcular o valor gatos de uma viagem.

Voçê terá 5 variáveis. sendo elas:
1 - Preço do etanol;
2 - Preço da gasolina;
3 - Tipo de cmbustivel que stá no carro;
4 - Gasto médio de combustivel do carro por km;
5 - Distância em km da viagem;

Imprima no console o valor que será gasto de combustivel para realizar esta viagem */
const precoEtanol = 5.79;
const precoGasolina = 6.66;
const KmPorLitros = 12;
const DistanciaKm = 100;
const tipoCombustivel = 'Gasolina';

const listroConsumidos = DistanciaKm / KmPorLitros;

if (tipoCombustivel === 'Etanol') {
  const vlorGasto = listroConsumidos * precoEtanol
  console.log("Valor gasto em reais foi R$:" + vlorGasto.toFixed(2));
} else {
  const vlorGasto = listroConsumidos * precoGasolina
  console.log("Valor gasto em reais foi R$:" + vlorGasto.toFixed(2));
}

