function somar(a, b) {
    return a + b;
}

console.log(somar(10, 20));

function somar2() {
    console.log(arguments);
}

console.log(somar2(10, 20));

function somar3() {
    let soma = 0;

    for(let i = 0; i < arguments.length; i++) {
        soma += arguments[i];
    }

    return soma;
}

console.log(somar3(10, 20));

function somarComRest(... numeros) {
    const soma = numeros.reduce((total, numeroAtual) => {
        total += numeroAtual;
        return total;
    }, 0)
    return soma;
}

console.log(somarComRest(10, 20));

const bandasDeRockEUA = ['Red Hot Chili Peppers', 'Queens of The Stone Age', 'Larkin Poe'];
const bandasDeRockEUR = ['Royal Blood', 'Blind Guardian', 'Jinjer'];

const bandasDeRockConcat = bandasDeRockEUA.concat(bandasDeRockEUR);
console.log(bandasDeRockConcat);

const bandasDeRockSpread = [...bandasDeRockEUA, ...bandasDeRockEUR];
console.log(bandasDeRockSpread);

const [item1, ...outros] = bandasDeRockSpread;

console.log(item1);
console.log(outros);

const cidade1 = {
    nome: 'São Bernardo do Campo',
    estado: 'SP',
    ddd: 11,
    regiao: 'ABC Paulista'
}

const cidade2 = {
    ...cidade1,
    nome: 'São José dos Campos',
    ddd: 12,
    regiao:'Vale do Paraíba'
}

console.log(cidade1);
console.log(cidade2);

const { ddd: dddCidade1 } = cidade1;
const { ddd: dddCidade2 } = cidade2;

console.log(dddCidade1);
console.log(dddCidade2);
