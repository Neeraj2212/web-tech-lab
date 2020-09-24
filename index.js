function openNav() {
	document.getElementById('mySidebar').style.width = '250px';
	document.body.classList.toggle('effect');
	var lang = document.querySelectorAll('.language');

	document.getElementById('main').style.visibility = 'hidden';
	for (let index = 0; index < lang.length; index++) {
		lang[index].classList.add('make-block');
	}
}

function closeNav() {
	document.getElementById('mySidebar').style.width = '0';
	document.body.style.transition = '0.5s';

	document.body.classList.toggle('effect');
	document.getElementById('main').style.visibility = 'visible';
	var lang = document.querySelectorAll('.language');
	for (let index = 0; index < lang.length; index++) {
		lang[index].classList.remove('make-block');
	}
}
