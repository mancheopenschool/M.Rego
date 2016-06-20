jQuery(document).ready(function($) {
	// On stocke les éléments souvent utilisés
	// pour ne pas à reparcourir le DOM à chaque fois
	// qu'on les utilise
	var statutElement = $('#statut');
	var profilElement = $('#profil');
	var loginElement = $('#login');
	var passwordElement = $('#password');

	//Action au clic sur le bouton submit
	$('#submit').click(function(event) {
		//On vérifie si l'un ou l'autre des champs est vide
		if (loginElement.val() == '' || passwordElement.val() == '') {
			alert("renseigner les champs");
		}
		// Si les 2 sont remplis, on peut lancer la requête AJAX
		else {
			$.ajax({
				url: 'php/login.php', //L'url du fichier PHP
				dataType: 'json', //Le type de donnée que l'on reçoit
				method: 'GET', //La méthode d'envoi
				//Les paramètres envoyés
				data: 'login='+loginElement.val()+'&password='+passwordElement.val(),
				// Si laa requête a réussi
				success: function(data){
					// On affiche le message reçu dans le p#statut
					statutElement.html(data[1]);
					// On teste si "OK" ou "KO" pour afficher la bonne couleur
					changeClass(statutElement, data[0]);
            },
            // la requête a échoué
            error: function(error){
            	alert(error.statusText);
            	console.log(error);
            }
        });
		}
	});

	$("input[name=profil]").click(function(event) {
		var profil = $("input[name='profil']:checked").val();
		$.ajax({
			url: 'php/profil.php' ,
			dataType: 'json',
			method: 'POST',
			data: 'profil='+profil,
			success: function(data){
				profilElement.html(data[1]);
				changeClass(profilElement, data[0]);
			},
			error: function(error){
				alert(error.statusText);
				console.log(error);
			}
		});
	});

	// Fonction pour changer la classe CSS en fonction de "KO" ou "OK"
	// Recu par PHP
	// element: l'élément sur lequel on applique la classe
	// type: "OK" ou "KO"
	function changeClass(element, type){
		// on retire les classes existantes sur l'élément
		element.removeClass();
		if (type == 'KO'){
			// si "KO", on ajoute la classe error (texte en rouge)
			element.addClass('error');
		}
		else {
			// si "OK", on ajoute la classe success (texte en vert)
			element.addClass('success');
		}
	}
});