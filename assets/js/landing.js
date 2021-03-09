document.getElementById('btn-menu').addEventListener('click', e => {
	document.getElementById('navbar-main').classList.toggle('over');
	document.getElementById('navbar-menu').classList.toggle('show');
});

const showItem = ({ id }) => document.getElementById(id + '-content').classList.toggle('show');