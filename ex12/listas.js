let lista = [2,5,9,4] //array

let nomes = ['Jaderson', 'Lucas', 'Kauã', 'Hyure', 'Diego', 'Vitor'] //array

console.log(lista[3])
console.log(nomes[5])
console.log(`O tamnho da lista é ${nomes.length}`) //o metodo length retorna o tamanhoh da lista

for (let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}

/*nomes.forEach(function(nome){
    console.log(nome)
})*/

nomes.unshift('Julius') //adiciona um valor noo inicio da lista 
console.log(nomes)
nomes.push('Aloy') //Adiciona um valor no final da lista
console.log(nomes)
nomes.pop() //remove o ultimo elemento da lista
console.log(nomes)
nomes.shift() //remove o primeiro elemento da lista
console.log(nomes)
nomes.sort() //Classifica em ordem crescente
console.log(nomes)
nomes.reverse() //Classifica em ordem decrescente
console.log(nomes)

console.log(nomes.indexOf('Aloy'))

nomes.splice(0, 2, 'Wallas', 'Ricardo') //A partir da indice 0 vai remover um valor eacrescentar o Wallas e o Ricardo

console.log()

let cadastro = ['Jaderson', 35, 67, ['Francisco', 'Marlene']]
console.log(cadastro[3][1])

Input.value = ''