var idade = 19
var doença = 'não'
var peso = '80'
var tatuagem = 'não'
var remedio = 'não'

if (idade < 18) {
    console.log('Voce nao pode doar sangue! NÃO TEM IDAE MINIMA')
} else if( doença=='Sim') {
    console.log('Voce nao pode doar sangue! ESTA DOENTE.')
} else if(peso < 50) {
    console.log('Voce nao pode soar sangue! esta abaixo do peso')
} else if(tatuagem == 'Sim') {
    console.log('Voce nao pode doar sangue! FEZ TATUAGEM RECENTE')
} else if(remedio == 'Sim') {
    console.log('Voce nao pode doar sangue! ESTA TOMANDO REMEDIO')
} else {
    console.log('Voce pode doar sangue!')
}