 var fight = function (atk, arm){
    'use strict';
    if(atk > arm) {
        return 'first';
    } else {
        return 'second';
    }
};
/*
exercio 2

//lop da batalha atributos devem ser aleatorio
//(totaldamage += Math.ceil(Math.random()*6);
jogador1 Array(força1, armadura1, resistencia1, life1=5 * resistencia)
jogador2 Array(força, armadura, resistencia, life=5 * resistencia)

var fight = function (forca1, armadura1, resistencia1,life1,forca, armadura, resistencia,life){
while(life1<0 && life<0)
{
  life1= life1 -(forca*(random(1,6) - armadura1*(random(1,6));
  if(lefi1>0){
  life= life -(forca1*(random(1,6) - armadura*(random(1,6));
  }
}
if(life1>0) {return (vencedor é jogador 1)}
else    {return (vencedor jogador 2)}
}

exercicio 3*/

var person = function(nome){
    var atributos = {Name: nome, forca: 0, armadura: 0, resistencia: 0, life: 0} 
    valor = 10;
    atributos.forca = Math.ceil(Math.random() * 5);
    valor -= atributos.forca;
    atributos.armadura = Math.ceil(Math.random() * 5);
    valor -= atributos.armadura;
    
    if(valor < 5){
    atributos.resistencia = valor;
    }
    else{
    atributos.resistencia = Math.ceil(Math.random() * 5);
    }
    
    atributos.life = atributos.resistencia * 5;
    if(valor = 0 ){
        atributos.life = 1;
    }
    return atributos.life;
};

//exercicio 4 (2 personagens)

//var person2 = function(nome){
//    var atributos2 = {Name2: nome, forca2: 0, armadura2: 0, resistencia2: 0, life2: 0} 
//    valor = 10;
//    atributos2.forca2 = Math.ceil(Math.random() * 5);
//    valor -= atributos2.forca2;
//    atributos2.armadura2 = Math.ceil(Math.random() * 5);
//    valor -= atributos2.armadura2;
//    
//    if(valor < 5){
//    atributos2.resistencia2 = valor;
//    }
//    else{
//    atributos2.resistencia2 = Math.ceil(Math.random() * 5);
//    }
//    
//    atributos2.life2 = atributos2.resistencia2 * 5;
//    if(valor = 0 ){
//        atributos2.life2 = 1;
//    }
//    return atributos2;
//};


var batalha = function(person, person2){

    while(person2.life < 0 && person.life < 0){
    life2 = life2 - (forca * (random(1,6)) - armadura2 * (random(1,6)));
        if(life2>0)
            life = life - (forca2 * (random(1,6)) - armadura * (random(1,6)));
    }
if(life2>0)
    {return person.Name;}
else
    {return person2.Name;}
}


var character = document.querySelector('div'),
    nome = character.querySelector('#nome');

    nome.innerHTML = batalha();

batalha(person('Kaio'), person('Léo'));