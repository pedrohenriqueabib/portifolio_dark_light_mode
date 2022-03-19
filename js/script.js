let modo = document.querySelector(".modo");
let botao = document.querySelector('#botao');
let bd = document.body;
let relogio = document.querySelector('.relogio');

botao.addEventListener('click', ()=>{
    if( botao.innerHTML == 'DARK MODE'){
        botao.innerHTML = 'LIGHT MODE';
        botao.style.color = 'black';
        botao.style.background = 'white';
        bd.style.background = 'black';
        modo.innerHTML = 'DARK MODE ON';
        modo.style.color = 'white';
    }else{
        botao.innerHTML = 'DARK MODE';
        botao.style.color = 'white';
        botao.style.background = 'black';
        bd.style.background = 'white';
        modo.innerHTML = 'LIGHT MODE ON';
        modo.style.color = 'black';
    }
    
        relogio.classList.toggle('dark');
});

let time = [];

setInterval( ()=>{
    let tempo = new Date();
    tempo +='';
    tempo = tempo.split(' ');
    relogio.innerHTML = tempo[4];
}, 1000);
