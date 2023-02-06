/* Faça  um programa para calcular o valor gatos de uma viagem.

Voçê terá 3 variáveis. sendo elas:
1 - Preço do com bustivel;
2 - Gato médio de combustivel do carro por km;
3 - Distância em KM da viagem;

Imprima no console o valor que será gasto de combustivel para realizar esta viagem */

const precoCombustivel = 5.79;
const KmPorLitros = 12;
const DistanciaKm = 1583;

const listroConsumidos = DistanciaKm / KmPorLitros;
const vlorGasto = listroConsumidos *precoCombustivel

console.log("Valor gasto em reais foi R$:" + vlorGasto.toFixed(2));