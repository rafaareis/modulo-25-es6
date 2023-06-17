"use strict";

var redesSociais = ['Facebook', 'Instagram', 'Twiiter'];
for (var i = 0; i < redesSociais.length; i++) {
  console.log("Eu tenho perfil na rede social: ".concat(redesSociais[i]));
}
redesSociais.forEach(function (nomeDaRedeSocial, index) {
  console.log("#".concat(index + 1, " Eu tenho perfil na rede social: ").concat(nomeDaRedeSocial));
});
var nomesDeVocalistasObj = ['Courtney LaPlante', 'Tatiana Shmayluk', 'Elin Larson', 'Rebecca Lovell'];
var nomesDeVocalistas = nomesDeVocalistasObj.map(function (nome, index) {
  if (index === 2 || index === 3) {
    return {
      id: "#".concat(index),
      nome: nome,
      estilo: 'Blues Rock'
    };
  } else if (index === 0 || index === 1) {
    return {
      id: "#".concat(index),
      nome: nome,
      estilo: 'Metalcore'
    };
  }
});
console.log(nomesDeVocalistas);
var courtney = nomesDeVocalistas.find(function (item) {
  return item.nome === "Courtney LaPlante";
});
console.log(courtney);
var indiceDaCourtney = nomesDeVocalistas.findIndex(function (item) {
  return item.nome === "Courtney LaPlante";
});
console.log(indiceDaCourtney);
var metalcore = nomesDeVocalistas.every(function (nome) {
  return nome.estilo === "Metalcore";
});
console.log(metalcore);
var metalcoreSome = nomesDeVocalistas.some(function (nome) {
  return nome.estilo === "Metalcore";
});
console.log(metalcoreSome);
var metalcoreAndBluesSome = nomesDeVocalistas.some(function (nome) {
  return nome.estilo === "Metalcore" && nome.estilo === "Blues Rock";
});
console.log(metalcoreAndBluesSome);
var metalcoreFilter = nomesDeVocalistas.filter(function (nome) {
  return nome.estilo === "Metalcore";
});
console.log(metalcoreFilter);
var vocalistas = nomesDeVocalistas.reduce(function (acumulador, nome) {
  acumulador += "".concat(nome.nome, ", ");
  return acumulador;
}, '');
console.log(vocalistas);

// --------------------------
console.log("------------------------");
var nums = [10, 20, 30, 10];
var soma = nums.reduce(function (acumulador, itemAtual) {
  acumulador += itemAtual;
  return acumulador;
}, 0);
console.log(soma);
var somaComFor = 0;
for (var _i = 0; _i < nums.length; _i++) {
  somaComFor += nums[_i];
}
;
console.log(somaComFor);