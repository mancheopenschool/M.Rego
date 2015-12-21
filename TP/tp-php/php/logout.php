<?php
// mise à dispo de $_SESSION
session_start();

// destruction de la session, logout
session_destroy();
// Redirection vers la page de login
header('Location: ../index.php');
?>