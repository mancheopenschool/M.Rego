<?php
// mise à dispo de $_SESSION
session_start();

// Mise à jour de la date du dernier login
try{
    $bdd = new PDO('mysql:host=localhost;dbname=tp-php;charset=utf8', 'root', 'mysql');
}
catch (Exception $e)
{
    die('Erreur : ' . $e->getMessage());
}
$req = $bdd->prepare('UPDATE user SET last_login = NOW() WHERE id = ?');
$req->execute(array($_SESSION['user_id']));
$req->closeCursor();

// destruction de la session, logout
session_destroy();

// Redirection vers la page de login
header('Location: ../index.php');
?>