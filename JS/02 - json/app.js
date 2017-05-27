
var txtTitulo = document.getElementById("txtTitulo");
var txtAutor = document.getElementById("txtAutor");

var acervo = [];
var btnCadastrar = document.getElementById("btnCadastrar");
var lista = document.getElementById("lista");

var exibirValor = function(e){
	e.preventDefault();
	
	var livro = {
		titulo : txtTitulo.value,
		autor : txtAutor.value
	}
	acervo.push(livro);
	addlista();
	//addTr();
	
}
btnCadastrar.addEventListener("click",exibirValor);

var addlista = function(){
	var node = document.createElement("LI");                 // Create a <li> node
	var textnode = document.createTextNode(txtTitulo.value+" - "+txtAutor.value);         // Create a text node
	node.appendChild(textnode);                              // Append the text to <li>
	lista.appendChild(node);    
}
/*
var addTr = function(){
	var tr = document.createElement("TR");
	var td1 = document.createElement("TD");
	var td2 = document.createElement("TD");
	var titulo = document.createTextNode(txtTitulo.value);
	var autor = document.createTextNode(txtAutor.value);
	td1.appendChild(titulo);
	td2.appendChild(autor);
	tr.appendChild(td1);
	tr.appendChild(td2);
	lista.appendChild(tr);
}
*/