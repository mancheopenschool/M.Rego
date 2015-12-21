<?php             // si OK, on démarre la session
session_start(); ?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>TP</title>
    <link rel="stylesheet" href="css/custom.css">
</head>
<body>
<form action="index.php" method="POST">
    <!-- le <p> contient les messages. On affiche les retours ici -->
    <p id="message">
        <?php
        // si l'utilisateur a cliqué sur submit, $_POST est créé.
        // $_POST["submit"] existe donc il n'est pas NULL
        // On peut faire nos verif
        if (isset($_POST["submit"])){
            // Si l'utilisateur n'a pas rentré de login OU de password
            if ($_POST["login"] == "" || $_POST["password"] == ""){
                // Affichage erreur
                echo "Les champs ne doivent pas être vides";
            }
            else {
                // Sinon, on verifie si le login existe et si le password est OK
                // Comme on veut afficher les eventuelles erreurs ici, dans le <p>
                // on affiche le résultat renvoyé par la fonction verify_login
                // On lui passe en paramètre le login et password entrés par l'utilisateur
                echo verify_login($_POST["login"], $_POST["password"]);
            }
        }
        ?>
    </p>
    <!-- Formulaire login/pass -->
    <label for="login">Login:
        <input type="text" id="login" name="login"/>
    </label>
    <label for="password">Password:
        <input type="password" id="password" name="password"/>
    </label>
    <input type="submit" id="submit" name="submit" value="Connexion"/>
</form>
</body>
</html>
<?php
/**
 * function verify_login
 * Vérifie si le login existe et si le password correspond
 *
 * @param $login le login entré par l'utilisateur
 * @param $password le password entré par l'utilisateur
 *
 * @return string, message d'erreur eventuel
 */
function verify_login($login, $password){

    // @TODO utiliser un require_once et global $bdd pour ne pas répéter
    // plusieurs fois le code de connexion à la BDD

    // Connexion BDD
    try{
        $bdd = new PDO('mysql:host=localhost;dbname=tp-php;charset=utf8', 'root', 'mysql');
    }
    catch (Exception $e)
    {
        die('Erreur : ' . $e->getMessage());
    }
    // Création de la requête, on veut l'id, le login, et le password
    // on cherche la ligne avec login = le login demandé par l'utilisateur (ici, $login)
    // Requêtes préparées, voir doc PDO
    $req = $bdd->prepare('SELECT id, login, password FROM user WHERE login = ?');
    $req->execute(array($login));

    // On compte le nombre d'entrées retournées. Si 0, alors le login n'existe pas
    if ($req->rowCount() < 1){
        $req->closeCursor();
        // Le message sera affiché par le "echo" ligne 29
        return ("Le login n'existe pas");
    }
    else {
        // Si une ligne, le login existe, on vérifie si password OK
        $user = $req->fetch();
        if ($user['password'] != $password){
            $req->closeCursor();
            return ("Mot de passe incorrect");
        }
        else {
            // et on crée une variable user_id contenant l'id de l'utilisateur en BDD
            // Cette variable est stockée dans $_SESSION, et suit l'utilisateur sur les pages
            $_SESSION['user_id'] = $user['id'];
            // Mise à jour de la date du dernier login
            $req = $bdd->prepare('UPDATE user SET last_login = NOW() WHERE id = ?');
            $req->execute(array($_SESSION['user_id']));
            $req->closeCursor();
            // On envoie l'utilisateur vers son profil
            header("Location:php/profil.php");
        }
    }
}
?>