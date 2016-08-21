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


function registre() {
  var listaDeOngs = new Array;

  if (localStorage.getItem('listados')){
    //criando novo objeto
    nome      = document.getElementById("sample1").value;
    telefone  = document.getElementById("sample2").value;
    email     = document.getElementById("sample3").value;
    cnpj      = document.getElementById("sample4").value;
    endereco  = document.getElementById("sample5").value;
    numero    = document.getElementById("sample6").value;
    cidade    = document.getElementById("sample7").value;
    cep       = document.getElementById("sample8").value;
    estado    = document.getElementById("sample9").value;
    var a = new ong(nome, telefone, email, cnpj, endereco, numero, cidade, cep, estado);
    a.alimento    = document.getElementById("switch-1").checked;
    a.roupas      = document.getElementById("switch-2").checked;
    a.racao       = document.getElementById("switch-3").checked;
    a.cama        = document.getElementById("switch-4").checked;
    a.brinquedos  = document.getElementById("switch-5").checked;
    a.higiene     = document.getElementById("switch-6").checked;
    a.limpeza     = document.getElementById("switch-7").checked;
    a.moveis      = document.getElementById("switch-8").checked;

    //recuperando antigo(s)

    var local = JSON.parse(localStorage.getItem('listados'));
    for (var i = 0; i < local.length; i++) {
      listaDeOngs.push(local[i]);
    }

    //colocando ambos na lista
    listaDeOngs.push(a);

    //adicionando lista no localStorage
    localStorage.setItem('listados', JSON.stringify(listaDeOngs));
  }
  else{
    //criando novo objeto
    nome      = document.getElementById("sample1").value;
    telefone  = document.getElementById("sample2").value;
    email     = document.getElementById("sample3").value;
    cnpj      = document.getElementById("sample4").value;
    endereco  = document.getElementById("sample5").value;
    numero    = document.getElementById("sample6").value;
    cidade    = document.getElementById("sample7").value;
    cep       = document.getElementById("sample8").value;
    estado    = document.getElementById("sample9").value;
    var a = new ong(nome, telefone, email, cnpj, endereco, numero, cidade, cep, estado);
    a.alimento    = document.getElementById("switch-1").checked;
    a.roupas      = document.getElementById("switch-2").checked;
    a.racao       = document.getElementById("switch-3").checked;
    a.cama        = document.getElementById("switch-4").checked;
    a.brinquedos  = document.getElementById("switch-5").checked;
    a.higiene     = document.getElementById("switch-6").checked;
    a.limpeza     = document.getElementById("switch-7").checked;
    a.moveis      = document.getElementById("switch-8").checked;

    //adiciona no array
    listaDeOngs.push(a);

    //adicionando lista no localStorage
    localStorage.setItem('listados', JSON.stringify(listaDeOngs));
  }
}

//console.log(listaDeOngs);
//localStorage.setItem('listados', JSON.stringify(listaDeOngs));
console.log(JSON.parse(localStorage.getItem('listados')));

//var local = JSON.parse(localStorage.getItem('listados'));

//JSON.stringify(localStorage.getItem('listaDeOngs'));
