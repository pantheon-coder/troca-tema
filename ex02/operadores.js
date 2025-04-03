/*

Evento é tudo que pode acontecer com um elemento (div, botoes,...)
ex:
- mouseenter (qundo o mouse sobrepoe o elemento)
- mousemove
- mousedown
- click
-mouseout

*/

function clicar () {
    let area =document. getElementById ("area");
    area.innerHTML = "Você clicou!";
    area.style.background = "red";
}

function entrar () {
    let area =document. getElementById ("area");
    area.innerHTML = "Entrar";

}

function sair () {
    let area =document. getElementById ("area");
    area.innerHTML = "Saiu!";
    area.style.background = "none";
}