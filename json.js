function atualizar(){
    lista.innerHTML = "";
    for(let carro of carros){
        let p = document.createElement("p");
        p.innerHTML = carro;
        lista.appendChild(p);
    }
}

if(!localStorage.carros){
    localStorage.carros = JSON.stringify([]);
}

let input = document.querySelector("#carro");
let botaoCadastrar = document.querySelector("#cadastrar");
let botaoLimpar = document.querySelector("#limpar");
let lista = document.querySelector("#cadastrados");
let carros = JSON.parse(localStorage.carros);

atualizar();

botaoCadastrar.onclick = function(){
    carros[carros.length] = input.value;
    localStorage.carros = JSON.stringify(carros);
    atualizar();
}

botaoLimpar.onclick = function(){
    localStorage.carros = JSON.stringify([]);
    carros = [];
    atualizar();
}