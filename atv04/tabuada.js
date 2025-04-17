function imprimir() {
    const num = parseInt(document.getElementById("num").value);
    const resultado = document.getElementById("resultado");
    let tabuada = `Tabuada do <strong>${num}</strong>:`;

    for (let n = 1; n <= 10; n++) {
        tabuada += `<p>${num} x ${n} = ${num * n}</p>`
    }

    resultado.innerHTML = tabuada;

}