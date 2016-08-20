//var app = angular.module('myApp', ['ui.router', 'ngAnimate', 'ui.bootstrap', 'ngRoute', 'toaster']);


var ong = class {
  constructor(nome, telefone, email, cnpj,endereco, numero, cidade, cep, estado, bio) {
    this.nome     = nome;
    this.telefone = telefone;
    this.email    = email;
    this.cnpj     = cnpj;
    this.endereco = endereco;
    this.numero   = numero;
    this.cidade   = cidade;
    this.cep      = cep;
    this.estado   = estado;
    this.bio      = bio;
  }
};

var listaDeOngs = [];

var a = new ong("Matheus", "12345678", "email@email.com", "cnpj","rua bairro", "123", "pelotas", "cep", "RS", "Um texto de descricao");
listaDeOngs.push(a);
var b = new ong("Vini", "12345678", "email@email.com", "cnpj","rua bairro", "123", "pelotas", "cep", "RS", "Um texto de descricao");
listaDeOngs.push(b);
console.log(listaDeOngs[0].nome);
console.log(listaDeOngs[1].nome);
