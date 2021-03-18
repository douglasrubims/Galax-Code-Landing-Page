async function getImage(id) {
	const req = new Request('https://api.github.com/users/' + id);
	req.headers.append('Accept', 'application/vnd.github.v3+json');
	const fetchedReq = await fetch(req);
	const { avatar_url, html_url } = await fetchedReq.json();
	const avatarElement = document.getElementById(id);
	avatarElement.href = html_url;
	avatarElement.style.background = `url('${ avatar_url }')`;
	avatarElement.style.backgroundSize = "100% 100%";
}

async function setImages() {
	await getImage('douglasrubims');
	await getImage('AyresMonteiro');
}

window.onload = setImages;