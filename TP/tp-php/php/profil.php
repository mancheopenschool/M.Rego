<?php
// Besoin de $_SESSION, pour récupérer user_id (cf login.php)
session_start();
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>TP</title>
    <link rel="stylesheet" href="../css/custom.css">
    <link rel="stylesheet" href="../css/jquery-ui.min.css">
</head>
<body>
<div class="profil">
    <?php
    // Si l'utilisateur a cliqué sur mettre à jour son profil et validé le form
    if (isset($_POST['submit'])){
        // On update le profil avec les champs remplis
        update_profile($_POST);
    }
    // Si l'utilisateur ne se logge pas (login.php) et a direct sur profil.php
    // user_id n'existe pas, donc affichage du profil interdit
    if (!isset($_SESSION['user_id'])){
        echo "Vous n'êtes pas connecté !";
        ?>
        <div class="logout">
            <a href="../php/logout.php">Retour à la page de login</a>
        </div>
        <?php
    }
    else {
    // Sinon, on récupère son identifiant en BDD, et on récupère toutes ses infos
    // On stocke dans $user
    $user = fetch_user($_SESSION['user_id']);

    ?>
    <header>
        <div class="avatar">
            <img src="../images/<?php echo $user['avatar']; ?>" />
        </div>
        <div class="welcome">
            Bienvenue <?php echo htmlspecialchars($user['login']); ?> !
            <!-- @TODO mieux formater la date: "Le dd/mm/yyyy à hh:mm:ss" -->
            <span>Dernière connexion le <?php echo date( 'd-m-y H:i:s', strtotime($user['last_login']));?></span>
            Team <span><?php echo $user['groupe']; ?></span>
        </div>
        <div class="logout">
            <a href="logout.php">Se déconnecter </a>
        </div>
        <span class="stretch"></span>
    </header>
    <div class="content">
        <p>Mon profil</p>
        <p>Prénom: </p>
        <?php
        // Si on a récupéré un firstname en BDD, on l'affiche
        if ($user['firstname'] == ""){
            // Sinon message par défaut
            echo "<p>Pas de prénom spécifié</p>";
        }
        else {
            echo "<p>".$user['firstname']."</p>";
        }
        ?>
        <p>Nom:</p>
        <?php
        if ($user['lastname'] == ""){
            echo "<p>Pas de nom spécifié</p>";
        }
        else {
            echo "<p>".$user['lastname']."</p>";
        }
        ?>
        <button id="modify">Mettre à jour</button>
    </div>


    <aside>
        <p>Growth in Code</p>
        <?php $val = $user['GC'] * 10; ?>
        <div class="progressBar" id="gc" data-value="<?php echo $val; ?>"><div></div></div>

        <p>Happiness in Code</p>
        <?php $val = $user['HC'] * 10; ?>
        <div class="progressBar" id="hc" data-value="<?php echo $val; ?>"><div></div></div>

        <p>Happiness in Life</p>
        <?php $val = $user['HL'] * 10; ?>
        <div class="progressBar" id="hl" data-value="<?php echo $val; ?>"><div></div></div>
    </aside>


    <!-- Le formulaire de MAJ de profil -->
    <div id="popup">
        <form action="profil.php" method="POST" enctype="multipart/form-data">
            <label for="firstname">Prénom:
                <!-- On met la valeur de firstname en value par défaut -->
                <!-- si firstname est vide ou null, le champ sera donc vide par défaut -->
                <input type="text" id="firstname" name="firstname" value="<?php echo htmlspecialchars($user['firstname']); ?>"/>
            </label>
            <label for="lastname">Nom:
                <input type="text" id="lastname" name="lastname" value="<?php echo htmlspecialchars($user['lastname']); ?>"/>
            </label>
            <label for="password">Mot de passe:
                <input type="password" id="password" name="password" value="<?php echo htmlspecialchars($user['password']); ?>"/>
            </label>
            <label for="avatar">Avatar:
                <input type="file" name="avatar" id="avatar"/>
            </label>
            <input type="submit" id="submit" name="submit" value="Mettre à jour"/>
        </form>
    </div>
</div>
<?php
}//end else

/**
 * function fetch_user
 *
 * Récupère toutes les informations en BDD d'un utilisateur selon son id
 * @param $id, l'identifiant du user
 * @return array, les informations de l'utilisateur contenues en BDD
 */
function fetch_user($id){
    // Connexion BDD

    try{
        $bdd = new PDO('mysql:host=localhost;dbname=tp-php;charset=utf8', 'root', 'mysql');
    }
    catch (Exception $e)
    {
        die('Erreur : ' . $e->getMessage());
    }
    // Création de la requête
    $req = $bdd->prepare('SELECT * FROM `user` INNER JOIN team ON `user`.id_team = team.id WHERE `user`.id = ?');
    $req->execute(array($id));
    $user = $req->fetch();
    $req->closeCursor();
    return($user);
}

/**
 * function update_profile
 *
 * Met à jour les informations en BDD d'un utilisateur selon son id
 * @param $user, tableau contenant les informations rentrées dans le formulaire de MAJ
 */
function update_profile($user){
    try{
        $bdd = new PDO('mysql:host=localhost;dbname=tp-php;charset=utf8', 'root', 'mysql');
    }
    catch (Exception $e)
    {
        die('Erreur : ' . $e->getMessage());
    }

    // @TODO: sécuriser les paramètres (htmlspecialchars)
    // @TODO: ne pas mette à jour `avatar` en BDD si le user n'a pas uploadé de fichier
    // Sinon avatar actuel supprimé

    // on supprime les anciens avatars du user pour éviter les doublons
    foreach (glob("../images/".$_SESSION['user_id'].".*") as $filename) {
        unlink($filename);
    }
    // On récupère l'extension du fichier uploadé (jpg, png...)
    $extension = strtolower(substr(strrchr($_FILES['avatar']['name'], '.'), 1));
    // On récupère l'ID du user, et on ajoute l'extension
    $avatar = $_SESSION['user_id'].".".$extension;
    // On déplace le fichier temporaire dans "/images"
    $resultat = move_uploaded_file($_FILES['avatar']['tmp_name'], "../images/".$avatar);
    // On met à jour le BDD avec les infos rentrées par l'utilisateur
    // Sur le formulaire de MAJ
    $req = $bdd->prepare('UPDATE `user` SET firstname = ?, lastname = ?, password = ?, avatar = ? WHERE id = ?');
    $req->execute(array($user['firstname'], $user['lastname'], $user['password'], $avatar, $_SESSION['user_id']));
}
?>
<script src="../js/jquery-2.1.4.min.js"></script>
<script src="../js/jquery-ui.min.js"></script>
<script src="../js/custom.js"></script>
</body>

</html>