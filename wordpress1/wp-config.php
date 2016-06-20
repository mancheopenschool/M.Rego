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
define('DB_NAME', 'wordpress1');

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
define('AUTH_KEY',         'v+f wjfU9Db$k0&(h^Ngmld:C.*khWoQ] |8#}lX++o~p4V8WlY*Dg@Jm5iDqKLb');
define('SECURE_AUTH_KEY',  '_w89PqV?(%oL)}DUmAPg-pXC^+:<?oP dE#*o0)Ub]xA._7+hiCL>-3~f<-<oOZz');
define('LOGGED_IN_KEY',    '4*TC77n2@RBDlS9(N8i-`|qcB4`v8Qcd-&}6yk}%S4O65o.3YCxh[7fE/tbTKHb@');
define('NONCE_KEY',        '`<MUECkr-2D6o;3?5h%pzizEd}S]/Ry=);o@.d3r}Tl(C:*HXPvm,G/-QI-JLQ97');
define('AUTH_SALT',        'D %jz-Fb3,hbZPr`9?/`KS={%c6Oqz~)^Lj+3+(z%Z8519R;]FJ6y$-;0.zsJ mD');
define('SECURE_AUTH_SALT', '|pt%04/um+Q1&);toM;9o=SXH30IIlmV7X*wS@-s2p*!AhfZ;:`%Hi4p<u1z0G X');
define('LOGGED_IN_SALT',   'FL)0.7)?&K^7U7KN_b<F5(N{c|>Q&c+%3&pWn(-/W8=s[U~6@G/VdH%q^/xp-`y@');
define('NONCE_SALT',       '[nseV]8-{aMd)>c>Pp.+yQ^c#y;+_~n,e|uyX[(Bq?Kd54h?Ag$rM-9%+S-~kT{|');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique. 
 * N'utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés!
 */
$table_prefix  = 'wp1_';

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
