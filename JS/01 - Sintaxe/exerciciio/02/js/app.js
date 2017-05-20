var nome = document.querySelector("#nome");
var idade = document.querySelector("#idade");
var btn = document.querySelector("#btn");
var resp = document.querySelector("#resp");

var validar = function(e){
	e.preventDefault();

if((nome.value != "") && (idade.value != "")){
		//alert(nome+" "+ idade);
		if(idade.value >= 15){
			resp.innerHTML = "Maior que 15"
		}else{
			resp.innerHTML = "MENOR que 15"
		}
	}else{
		alert("Campos vazios");
	}

	return false;

}


btn.addEventListener("click",validar);








