const textInput = document.querySelector('input[id="name-input"]');
const outputName = document.querySelector('span[id="name-output"]');

textInput.addEventListener("input", outputCurrentText);

function outputCurrentText(evt) {
	const inputText = evt.currentTarget.value.trim();
	outputName.textContent = inputText;
	if (!inputText) {
		outputName.textContent = "Anonymous";
	};
}
