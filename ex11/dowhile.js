//let senha = ''
//do {
//    senha = prompt('Digite sua senha:')
//} while (senha != 12345)

//alert("Minha senhja é " + senha);

//alert('Minha senha é ${senha}')

let terminouAtividade = ''

do {
    terminouAtividade = prompt("Você terminou a atividade? (Digite 'Sim' ou 'Não')").toUpperCase()
} while (terminouAtividade !== 'SIM')

console.log('Ótimo! Você terminou a atividade.')