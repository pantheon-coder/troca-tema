function imprimir() {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let num3 = document.getElementById('num3').value;
    let situacao;

    if (num1 > num2 && num1 > num3){
        situacao = `O 1º numero é maior!`
    } else if (num2 > num1 && num2 > num3){
        situacao = `O 2º numero é maior!`
    }
      else if (num3 > num1 && num3 > num2){
        situacao = `O 3° numero é maior`
    }
    else{
        situacao = `O ${num1} , ${num2} e ${num3} são iguais!`
    }

    let verificar = document.getElementById('verificar');
    verificar.innerHTML = `<p>${situacao}<p>`;

    console.log(verificar)
}