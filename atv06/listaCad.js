let listaAluno = []

function cadastrar() {
    let inputNomeAluno = document.getElementById("inputNomeAluno");
    listaAluno.push(inputNomeAluno.value)
    inputNomeAluno.value = ""
    inputNomeAluno.focus()
}
function imprimir() {
    let imprimir = document.getElementById('resultado')
    imprimir.innerHTML = ''
    for(let i=0; i < listaAluno.length; i++) {
        document.getElementById('resultado').innerHTML += `<p>Alunos ${listaAluno[i]}</p>`
    }

}
function limpar () {
    listaAlunos = []
    resultado.innerHTML = ''

}
