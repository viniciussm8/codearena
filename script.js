//var app = angular.module('myApp', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'ngRoute', 'toaster']);


var ong = class {
  constructor(nome, telefone, email, cnpj,endereco, numero, cidade, cep, estado) {
    this.nome     = nome;
    this.telefone = telefone;
    this.email    = email;
    this.cnpj     = cnpj;
    this.endereco = endereco;
    this.numero   = numero;
    this.cidade   = cidade;
    this.cep      = cep;
    this.estado   = estado;
    this.alimento = false;
    this.roupas   = false;
    this.racao    = false;
    this.cama     = false;
    this.brinquedos = false;
    this.higiene  = false;
    this.limpeza  = false;
    this.moveis   = false;

  }
}


var listaDeOngs = new Array;

function registre() {
  nome = document.getElementById("sample1").value;
  var a = new ong(nome, "", "", "", "", "", "", "", "");
  a.alimento = document.getElementById("switch-1").checked;
  listaDeOngs.push(a);
  console.log(listaDeOngs.length);
  localStorage.setItem('listaDeOngs', JSON.stringify(listaDeOngs));
}

console.log( JSON.stringify(localStorage.getItem('listaDeOngs'))[0]);
console.log( JSON.stringify(localStorage.getItem('listaDeOngs'))[1]);
