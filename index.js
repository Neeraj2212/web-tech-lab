function openNav() {
	document.getElementById('mySidebar').style.width = '250px';
	document.getElementById('main').style.marginLeft = '250px';
	document.querySelector('body').style.left = '250px';
}

function closeNav() {
	document.getElementById('mySidebar').style.width = '0';
	document.getElementById('main').style.marginLeft = '0';
	document.querySelector('body').style.right = '250px';
}