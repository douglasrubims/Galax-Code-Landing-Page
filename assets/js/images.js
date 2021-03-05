async function getImage(id) {
    console.log('teste');
    let req = new Request('https://api.github.com/users/' + id);
    req.headers.append('Accept', 'application/vnd.github.v3+json');

    let obj = await fetch(req);

    console.log({ obj });

    obj = await obj.json();

    console.log(obj);

    document.getElementById(id).src = obj.avatar_url;
}

async function setImages() {
    await getImage('douglasrubims');
    await getImage('AyresMonteiro');
}

window.onload = setImages;
