var click = document.querySelector("#click");

var calcular = function(e){
	e.preventDefault();

	var n1 = document.querySelector("#txtnum1").value;
	var n2 = document.querySelector("#txtnum2").value;
	var op = document.querySelector("#op").value;
	n1 =  parseInt(n1);
	n2 =  parseInt(n2);
	
	//console.log(n1);

	switch(op){
		case  '+' :
		document.body.innerHTML += n1+n2;
		break;
		case  '-' :
		document.body.innerHTML += n1-n2;
		break;
		case  '*' :
		document.body.innerHTML += n1*n2;
		break;
		case  '/' :
		document.body.innerHTML += n1/n2;
		break;
		default:
		document.body.innerHTML += "operação invalida"
		break;
	}

	return false;

}

click.addEventListener('click',calcular);