const fontSizeControl = document.querySelector('input[id="font-size-control"]');
const text = document.querySelector('span[id="text"]');

fontSizeControl.addEventListener('input', changeSize);

function changeSize(evt) {
	text.style.fontSize = `${evt.currentTarget.valueAsNumber}px`;
}