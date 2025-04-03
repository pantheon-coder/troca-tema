function imprimir () {
let num1 = Number.parseInt (document.getElementById ('inputNumero1').value);
let num2 = Number.parseInt (document.getElementById ('inputNumero2').value);

let soma = num1 + num2;
let resultado = document.getElementById(`resultadoSoma`);
resultado.innerHTML = `O valor é <strong> ${soma} </strong>`;
}
function imprimirSub () {
    let num1 = Number.parseInt (document.getElementById ('inputNumeroSub1').value);
    let num2 = Number.parseInt (document.getElementById ('inputNumeroSub2').value);
    
    let subtrair = num1 - num2;
    let resultado = document.getElementById(`resultadoSubtrair`);
    resultado.innerHTML = `O valor é <strong> ${subtrair} </strong>`;
    }
    