async function getImage(id) {
    console.log('teste');
    let req = new Request('https://api.github.com/users/' + id);
    req.headers.append('Accept', 'application/vnd.github.v3+json');

    let obj = await fetch(req);

    obj = await obj.json();

    let domElement = document.getElementById(id);
    console.log(domElement);

    domElement.style.background = "url('" + obj.avatar_url + "')";
    domElement.style.backgroundSize = "100% 100%";
}

async function setImages() {
    await getImage('douglasrubims');
    await getImage('AyresMonteiro');
}

window.onload = setImages;
