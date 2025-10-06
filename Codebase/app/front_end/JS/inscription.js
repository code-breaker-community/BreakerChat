
// - messages via alert()
//  et stockage dans localStorage (démonstration)
// c'est juste une simulation, l'equipe back-end doit faire le back-end réel en rapport cette perspective

document.addEventListener('DOMContentLoaded', function () {
	var form = document.querySelector('.formulaire');
	if (!form) return;

	form.addEventListener('submit', function (e) {
		e.preventDefault();

		var inputs = form.querySelectorAll('input');
		// ordre attendu dans le HTML : pseudo, email, password, confirm, checkbox
		var pseudo = inputs[0] ? inputs[0].value.trim() : '';
		var email = inputs[1] ? inputs[1].value.trim() : '';
		var password = inputs[2] ? inputs[2].value : '';
		var confirm = inputs[3] ? inputs[3].value : '';
		var conditions = document.getElementById('conditions') ? document.getElementById('conditions').checked : false;

		if (!pseudo || pseudo.length < 3) { alert('Pseudo requis (au moins 3 caractères).'); return; }
		if (!email || email.indexOf('@') === -1) { alert('Email invalide.'); return; }
		if (!password || password.length < 6) { alert('Mot de passe requis (au moins 6 caractères).'); return; }
		if (password !== confirm) { alert('Les mots de passe ne correspondent pas.'); return; }
		if (!conditions) { alert('Vous devez accepter les conditions.'); return; }

		// sauvegarde simple dans localStorage
		var users = [];
		try { users = JSON.parse(localStorage.getItem('users') || '[]'); } catch (err) { users = []; }
		for (var i = 0; i < users.length; i++) {
			if (users[i].email === email) { alert('Un compte existe déjà avec cet email.'); return; }
		}

		users.push({ id: Date.now(), pseudo: pseudo, email: email, password: password });
		localStorage.setItem('users', JSON.stringify(users));

		// message de succes simple
		alert('Inscription réussie !');
		form.reset();
	});
});

