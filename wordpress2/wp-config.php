<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Le script de création wp-config.php utilise ce fichier lors de l'installation.
 * Vous n'avez pas à utiliser l'interface web, vous pouvez directement
 * renommer ce fichier en "wp-config.php" et remplir les variables à la main.
 * 
 * Ce fichier contient les configurations suivantes :
 * 
 * * réglages MySQL ;
 * * clefs secrètes ;
 * * préfixe de tables de la base de données ;
 * * ABSPATH.
 * 
 * @link https://codex.wordpress.org/Editing_wp-config.php 
 * 
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'wordpress2');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'Mysql');

/** Adresse de l'hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8mb4');

/** Type de collation de la base de données. 
  * N'y touchez que si vous savez ce que vous faites. 
  */
define('DB_COLLATE', '');

define('FS_METHOD', 'direct');

/**#@+
 * Clefs uniques d'authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant 
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n'importe quel moment, afin d'invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'Fd#-Lc*ukP.:gZW>eUK->: 66B-e|./<2:IH[<iiw]vE9PV^_w1:v|Sa}naxI^W4');
define('SECURE_AUTH_KEY',  '[i!)>>E]]hEE*[,YB=m6lvP%|]Q~[pR/+$PrWHWGJdr$v#-&mBh#u%_+)IX9%91Q');
define('LOGGED_IN_KEY',    'j3`AJyysG+{Z~_ch&>*4}[%@<&?/V]n]:M<d S$R55WS:BaJx!)?UI*,=(!_mv*:');
define('NONCE_KEY',        'Rh}GB|B./GW1?3Q-%/D*qF7 1ee^Sm%WT;K+B%VrhL_(Do6:_tDM!Yv]KXTTFzPk');
define('AUTH_SALT',        '~6}7q1.H~Kj^Xw_7FT@]QTcW6Mh+!j37#=+l)`!@nJ5/rL4$/d(*x)&-ds:ylLT8');
define('SECURE_AUTH_SALT', '*.-H,6qe&k63kkE}oXo^e5K95+tdp|qCHQ,tHum;b(<`gi]FX@6H+J?as:+(BDve');
define('LOGGED_IN_SALT',   'iqe}9||2nk)<Y3Q:+K<:>WcqvY@=*wOV<tE;/XtUK81_OyRAJ^J:yc|_%tl&k-X<');
define('NONCE_SALT',       'v#I8X2k3wHZ,;ig7+.6Yt-8>Jljo4 %YoD;p-|,}-x>wRb#JU?yi|iw~YXx-@6OQ');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique. 
 * N'utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés!
 */
$table_prefix  = 'wp2_';

/** 
 * Pour les développeurs : le mode déboguage de WordPress.
 * 
 * En passant la valeur suivante à "true", vous activez l'affichage des
 * notifications d'erreurs pendant votre essais.
 * Il est fortemment recommandé que les développeurs d'extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de 
 * développement.
 * 
 * Pour obtenir plus d'information sur les constantes 
 * qui peuvent être utilisée pour le déboguage, consultez le Codex.
 * 
 * @link https://codex.wordpress.org/Debugging_in_WordPress 
 */ 
define('WP_DEBUG', false); 

/* C'est tout, ne touchez pas à ce qui suit ! Bon blogging ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');
