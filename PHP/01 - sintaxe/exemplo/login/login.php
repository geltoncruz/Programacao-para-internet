<html>
<head>
	<title>Login</title>
	    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>Biblioteca Digital</title>

    <!-- Bootstrap -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
</head>
<body>
<form action="login.php" method="post" name="logar">

	<section class="container">
	<div class="page-header">
	  <h1>Exemplo Logar <small>termo de acesso</small></h1>
	</div>
<?php
	$user 	= "gelton";
	$pw 	= "1234";

if($user == $_POST['login'] && $_POST['senha'] == $pw){
?>
<div class="alert alert-success" role="alert">
  <a href="#" class="alert-link">Autenticado com sucesso!</a>
</div>
<?php
}else{
?>
<div class="alert alert-danger" role="alert">
  <a href="#" class="alert-link">Acesso negado!</a>
</div>
<?php
}
	
?>
<body>
</html>