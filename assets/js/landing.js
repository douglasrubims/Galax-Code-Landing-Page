document.getElementById('btn-menu').addEventListener('click', e => {
    document.getElementById('navbar-main').classList.toggle('over'); 
    document.getElementById('nav-menu').classList.toggle('show');
 });

function showItem(obj) {
    document.getElementById(obj.id + '-content').classList.toggle('show');
}

