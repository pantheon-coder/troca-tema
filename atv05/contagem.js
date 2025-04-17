function imprimir() {
    const inicio = parseInt(document.getElementById("inicio").value);
    const fim = parseInt(document.getElementById("fim").value);
    const passo = parseInt(document.getElementById("passo").value);
    const resultado = document.getElementById("resultado");

    for (let cont = inicio; cont < fim; cont += passo) {

        resultado.innerHTML += (`${cont} ➡️`) //🏁
    }
    resultado.innerHTML += (`${cont}🏁`)
}