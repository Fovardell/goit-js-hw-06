const boxes = document.querySelector('div[id="boxes"]');
const controls = document.querySelector('div[id="controls"]');
const create = document.querySelector('button[data-create]');
const destroy = document.querySelector('button[data-destroy]');

create.addEventListener('click', () => {
	createBoxes(Number(controls.firstElementChild.value));
});

destroy.addEventListener('click', () => {
	destroyBoxes();
	controls.firstElementChild.value = '';
});

function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215)
		.toString(16)
		.padStart(6, 0)}`;
}
function createBoxes(amount) {
	for (let i = 1, k = 30; i <= amount; i += 1, k += 10) {
		const createDiv = document.createElement('div');
		boxes.append(createDiv);
		boxes.lastChild.style.width = `${k}px`;
		boxes.lastChild.style.height = `${k}px`;
		boxes.lastChild.style.backgroundColor = getRandomHexColor();
	}
}
function destroyBoxes() { boxes.innerHTML = ""; }

