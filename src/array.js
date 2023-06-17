const redesSociais = ['Facebook', 'Instagram', 'Twiiter'];

for(let i=0; i < redesSociais.length; i++) {
    console.log(`Eu tenho perfil na rede social: ${redesSociais[i]}`)
}

redesSociais.forEach(function(nomeDaRedeSocial, index) {
    console.log(`#${index+1} Eu tenho perfil na rede social: ${nomeDaRedeSocial}`)
})

const nomesDeVocalistasObj = ['Courtney LaPlante', 'Tatiana Shmayluk', 'Elin Larson', 'Rebecca Lovell'];

const nomesDeVocalistas = nomesDeVocalistasObj.map(function(nome, index) {
    if(index === 2 || index === 3) {
        return {
            id: `#${index}`,
            nome: nome,
            estilo: 'Blues Rock'
        }


    } else if (index === 0 || index === 1) {
        return {
            id: `#${index}`,
            nome: nome,
            estilo: 'Metalcore'
        }

    }

})

console.log(nomesDeVocalistas);

const courtney = nomesDeVocalistas.find(function(item) {
    return item.nome === "Courtney LaPlante"
})

console.log(courtney);

const indiceDaCourtney = nomesDeVocalistas.findIndex(function(item) {
    return item.nome === "Courtney LaPlante"
})

console.log(indiceDaCourtney);

const metalcore = nomesDeVocalistas.every(function(nome) {
    return nome.estilo === "Metalcore"
})

console.log(metalcore);

const metalcoreSome = nomesDeVocalistas.some(function(nome) {
    return nome.estilo === "Metalcore"
})

console.log(metalcoreSome);

const metalcoreAndBluesSome = nomesDeVocalistas.some(function(nome) {
    return nome.estilo === "Metalcore" && nome.estilo === "Blues Rock"
})

console.log(metalcoreAndBluesSome);

const metalcoreFilter = nomesDeVocalistas.filter(function(nome) {
    return nome.estilo === "Metalcore"
})

console.log(metalcoreFilter);

const vocalistas = nomesDeVocalistas.reduce(function(acumulador, nome) {
    acumulador += `${nome.nome}, `;
    return acumulador;
},'');

console.log(vocalistas);

// --------------------------
console.log("------------------------");


const nums = [10, 20, 30, 10]

const soma = nums.reduce(function(acumulador, itemAtual) {
    acumulador += itemAtual;
    return acumulador;
}, 0)

console.log(soma);

let somaComFor = 0;

for(let i = 0; i < nums.length; i++) {
    somaComFor += nums[i];
};

console.log(somaComFor);