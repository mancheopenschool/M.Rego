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
	// Si on reçoit profil = 'public', on met le booléen a 1 (true)
	// sinon à 0 (false)
	// rappel: type booléen dans la BDD
	$profil = $_POST['profil'] == 'public' ? 1 : 0;
	//on update le profil de l'utilisateur ayant l'id 1
	$sql = "UPDATE user SET public = " . $profil. " WHERE id=1"; // Requête
	$query = mysql_query( $sql, $conn ); // exécution de la requête
	$tab = array(); // on crée un tableau pour stocker le statut (KO / OK) et le message
	if (!$query )
	{
		//ERROR
		$tab[0] = "KO";
		$tab[1] = "Votre profil n'a pas pu être modifié";
	}
	else {
		$tab[0] = "OK";
		$tab[1] = "Votre profil est maintenant ".$_POST['profil'];
	}
	echo json_encode($tab);
	//fermer la connection
	mysql_close($conn);
	?>