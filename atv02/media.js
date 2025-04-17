function imprimir() {
    let name = prompt ('Nome do aluno!');
    let num1 = Number.parseInt (prompt(`Primeira nota do(a) ${name}`));
    let num2 = Number.parseInt (prompt(`Segunda nota do(a) ${name}`));
    let media = (num1 + num2) /2;

    let resultado = media >= 7 ? 'foi Aprovado!!' : 
                    media >= 5 ? 'esta de Recuperação.' : 'esta Reprovado...';

    let presultado = document.getElementById(`resultado`);
    presultado.innerHTML = `<p>Aluno(a): <strong> ${name} </strong><p>`;
    presultado.innerHTML += `Notas <strong> ${num1} e ${num2} </strong>`;
    presultado.innerHTML += `<p>Nota final: <strong> ${media} </strong><p>`;
    presultado.innerHTML += `<p>O aluno ${name} <strong> ${resultado} </strong><p>`;

console.log(resultado)
}