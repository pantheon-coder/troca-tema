function imprimir() {
let num1 = Number.parseInt (document.getElementById ('inputNumero1').value);

let resultado = document.getElementById('resultado');

resultado.innerHTML = `O valor é <strong> ${num1} </strong>`;
}