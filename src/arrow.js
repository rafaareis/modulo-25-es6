const minhaFuncao = () => {
    return "Diga olá";
}

console.log(minhaFuncao());

const retornaUmCarro = () => {
    return {
        modelo: 'Ka',
        fabricante: 'Ford'
    }
}

console.log(retornaUmCarro());

const retornaUmCarro2 = () => ({
        modelo: 'Ka',
        fabricante: 'Ford'
})

console.log(retornaUmCarro2());