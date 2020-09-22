function openNav() {
	document.getElementById('mySidebar').style.width = '250px';
	document.body.classList.toggle('effect');
	document.getElementById('main').style.visibility = 'hidden';
}

function closeNav() {
	document.getElementById('mySidebar').style.width = '0';
	document.body.style.transition = '0.5s';
	document.body.classList.toggle('effect');
	document.getElementById('main').style.visibility = 'visible';
}
