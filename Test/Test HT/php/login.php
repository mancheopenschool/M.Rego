<?php
error_reporting(0);
	$dbhost = 'localhost'; //nom du serveur
	$dbuser = 'root'; // login
	$dbpass = 'root'; // password
	$conn = mysql_connect($dbhost, $dbuser, $dbpass); //connexion à la BDD
	if (!$conn)
	{
		//ERROR
		die('Could not connect: ' . mysql_error());
	}
	mysql_select_db('happiness'); // Choix de la table
	$login = $_GET['login'];
	$password = $_GET['password'];
	$sql = "SELECT login, password, public
	FROM user
	WHERE login = '" . $login ."'"; // Requête
	$query = mysql_query( $sql, $conn ); // exécution de la requête
	if (!$query )
	{
		//ERROR
		die ('Could not get data: ' . mysql_error());
	}
	// Pas d'erruer, on parcours
	$row = mysql_fetch_array($query, MYSQL_ASSOC);
	$tab = array();
	if ($row == false){
		$tab[0] = "KO";
		$tab[1] = "Ce login n'existe pas";
	}
	else {
		$user = $row;
		if ($user['password'] != $password){
			$tab[0] = "KO";
			$tab[1] = "Mot de passe incorrect";
		}
		else {
			$profil = ($user['public'] == 1) ? "public" : 'privé';
			$tab[0] = "OK";
			$tab[1] = "Vous êtes connecté. Votre profil est $profil";
		}
	}
	echo json_encode($tab);
	//fermer la connection
	// mysql_close($conn);
	?>