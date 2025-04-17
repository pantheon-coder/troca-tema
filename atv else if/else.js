function imprimir() {
    let name = prompt ('Nome do aluno!');
    let num1 = Number.parseInt (prompt(`Primeira nota do(a) ${name}`));
    let num2 = Number.parseInt (prompt(`Segunda nota do(a) ${name}`));
    let media = (num1 + num2) /2;

    let resultado = document.getElementById(`resultado`);
     if (media >= 7) {
        situacao = `O aluno ${name} foi aprovado!`
     } else if (media <= 6 || media == 5 ) {
        situacao = `O aluno ${name} esta de recupreção...`
     }if (media <= 4) {
        situacao = `O aluno ${name} está REPROVADO`
     }

let presultado = document.getElementById(`resultado`);
presultado.innerHTML = `<p>Aluno(a): <strong> ${name} </strong><p>`;
presultado.innerHTML += `Notas <strong> ${num1} e ${num2} </strong>`;
presultado.innerHTML += `<p>Nota final: <strong> ${media} </strong><p>`;
presultado.innerHTML += `<p>${situacao}<p>`;

console.log(resultado)
}