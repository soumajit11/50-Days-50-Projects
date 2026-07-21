const container = document.querySelector(".container");
const picsumURL = "https://picsum.photos/";
const rows = 2;

for (let i = 0; i < rows * 3; i++) {
	const img = document.createElement("img");
	const size = getRandomSize();
	img.src = `${picsumURL}${size}?random=${Math.random()}`;
	container.appendChild(img);
}

function getRandomSize() {
	const size = getRandomNr();
	return `${size}/${size}`;
}

function getRandomNr() {
	return Math.floor(Math.random() * 10) + 300;
}
