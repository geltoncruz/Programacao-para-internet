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
		<h1>Logar</h1>
		<div class="input-group">
		  <span class="input-group-addon" id="basic-addon1"><span class="glyphicon glyphicon-user"></span></span>
		  <input type="text" class="form-control" placeholder="Username" aria-describedby="basic-addon1" name="login">
		</div>
		<div class="input-group">
		  <span class="input-group-addon" id="basic-addon1">***</span>
		  <input type="text" class="form-control" placeholder="Senha" aria-describedby="basic-addon1" name="senha">
		</div>
		<button type="submit" class="btn btn-primary pull-right">Logar</button>
	</section>
</form>	
</body>
</html>