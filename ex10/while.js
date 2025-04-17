let cont = 10;

while (cont >=0) {
    console.log(`Cont vale: ${cont}`)
    cont--
}

//usar for : se ja sabe quanto quer repetir

// usar while : se nao sabe qunto quer algo, quando espera que algo mude

let senha = Number.parseInt(prompt('Digite sua senha:'))

//let x = 5; //numero inteiro
//let y = '5'; //string

//while ( x === y)

while (senha !== 1234){
    alert(`senha Incorreta!`)
    senha = Number.parseInt(prompt('Digite sua senha:'))
}

alert(`Acesso autorizado.`)