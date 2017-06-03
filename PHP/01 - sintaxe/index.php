
<?php

//phpinfo();

$nome = "Gelton";
//echo "Meu nome é ".$nome;

$n1 = 1;
$n2 = "1";

if($n1 !== $n2){

	echo "iguais";

}else{
	echo "diferentes";
}

$num = array(1,2,3,4,5,6);


foreach ($num as  $aluno) {
	echo $aluno;
}
/*
$lista = array('0' => 12, '1' => 15, '2' => "nove");
echo "<br>";
echo $lista[0];
echo "<br>";
echo $lista[1];
echo "<br>";
echo $lista[2];
echo "<br>";
$predio = array("morador" => array("pai" => "gelton", "filho"  => "Levi"));

var_dump($lista);
echo $predio["morador"]["filho"];
echo "<br>";
echo "<pre>";
var_dump($predio["morador"]["pai"]);
echo "</pre>"

*/

?>