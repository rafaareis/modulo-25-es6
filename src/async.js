// function funcaoMuitoPesada() {
//     let execucoes = 0;

//     for(let i = 0; i < 1000000000; i++) {
//         execucoes ++;
//     }
//     return execucoes;
// }

// console.log("inicio");
// console.log(funcaoMuitoPesada());
// console.log("fim");

console.log("-----------------------");

const promiseComParametros = (login, senha) => {

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`Logado com o usuário: ${login}`)
        }, 3000)
    })
}

const funcaoMuitoPesadaPromise = new Promise((resolve, reject) => {

    promiseComParametros('rafa_alvarenga@msn.com', 123456).then(resultado => {
        console.log(resultado);
    })

    try {
        let execucoes = 0;

        for(let i = 0; i < 1000000000; i++) {
            execucoes ++;
        }
        resolve (execucoes);
    } catch(e) {
        reject('Xii... Deu ruim.')
    }

});

async function execucaoPrincipal() {
    console.log("inicio");

    try{
        const resultado = await funcaoMuitoPesadaPromise;
        console.log(resultado);
    } catch(e) {
        console.log(e);
    }

    console.log("fim");
}

// funcaoMuitoPesadaPromise.then(resultado => console.log(resultado)).catch(erro => console.log(erro));

execucaoPrincipal();
