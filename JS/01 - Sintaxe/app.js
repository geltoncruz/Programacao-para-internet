/*
alert('Ola Mundo');
confirm('Deseja Sair do programa?');
*/

//Sintaxe

var Nome, idade, anoAtual, anoNascimento;

anoAtual = 2017;
idade = 32;
anoNascimento = anoAtual - idade;

console.log(anoNascimento);
document.write('<h1>'+idade+'</h1>');

document.getElementById("idade").value;
document.querySelector("#anoAtual").value;

var lista = [];
if(idade >= 32){
	console.log('Idade Maior que 32');
}else{
	console.log('idade Menor');
}

for(i=0; i < 32; i++){
	console.log(i);
}
while(i < 40){
	console.log(i);
	document.write(i+"\n");
	i++
}

 // Tipos de dados
 /*
Fracamente tipada
Nâo precisa informa o tipo de dado para variável.
Numericos -> real, float, double, exponential, 
texto -> Caracter, String
Object -> Objeto Notavel > Json
Lógico -> Boolean -> true false
*/	

//Operadores
/*
+ Adicao, 
- Subtração
* Multiplicação
/ divisão
% Mod
= atribuição

*/
// Função;
/*
var imc = function(x,y){

	var imc = x / (y*y);

	//alert('indice de mass corporea é: '+imc);

	if(imc <= 17){
		alert('Muito abaixo do peso');
	}else if(imc <= 49){
		alert('abaixo do peso');
	}



}


imc(75.80,1.84);
*/

//Variáveis de espoco
//espoco global

var meuNumero = 10;

var exibirNumero = function(n){

	alert(meuNumero);
	//num é escopo local
	var num  = n;
	//num = num + meuNumero
	alert("o numero informado foi " +num);
}

var outrafuncao = function(){
	var num = 100;
	alert(num);
}


//exibirNumero(5);
//
//outrafuncao()

//alert(num);

var titulo = document.getElementsByTagName('h1');
console.log(titulo);
titulo[0].addEventListener('mouseover',function(){
	alert('teste');
	document.bgColor = "#ffcc00";
})

var box = document.querySelector("#box");
var btnEsq = document.querySelector("#esq");
var btnDir = document.querySelector("#dir");
var moveDir = function(){
	box.style.left += "20px";
}
btnDir.addEventListener('click', moveDir);

btnDir.addEventListener('click', function(){
	box.style.left += "-20px";
});

/*
Valide um formulário que contenha os campos nome e idade.
Sua validação deverá ocorre ao clicar em enviar
para analisar se os campos são vazios e
se idade é maior que 15, 
Caso sim exiba uma caixa de alerta com o texto "Maior 15"
caso não informe o texto de alerta " Menor que 15"

*/







