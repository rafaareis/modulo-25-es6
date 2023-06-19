let meuMap = new Map();
meuMap.set("nome", "Rafael");
meuMap.set("time", "Corinthians");

console.log(meuMap);

const nome = meuMap.get("nome");

console.log(nome);

console.log(meuMap.size);

console.log(meuMap.has("sobrenome"));

// meuMap.clear();

console.log(meuMap.size);

for(let chave of meuMap.keys()) {
    console.log(chave);
}

for(let valor of meuMap.values()) {
    console.log(valor);
}

for(let entrada of meuMap.entries()) {
    console.log(entrada);
}

for(let [chave, valor] of meuMap.entries()) {
    console.log(`${chave}: ${valor}`);
}

meuMap.delete("time");

console.log(meuMap);

const cpfs = new Set();

cpfs.add('37049417866');
cpfs.add('83780599872');

console.log(cpfs);
console.log(cpfs.keys());
console.log(cpfs.values());

cpfs.forEach((valor) => {
    console.log(valor);
})

const array = ['Rafael de Alvarenga', 'Courtney LaPlante', 'Rafael de Alvarenga', 'Roger Guedes']

const arrayComoSet = new Set([...array])

const arraySemItensDuplicados = [...arrayComoSet];

console.log(arrayComoSet);
console.log(arraySemItensDuplicados);