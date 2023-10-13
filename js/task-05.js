const textInput = document.querySelector('input[id="name-input"]');
const outputName = document.querySelector('span[id="name-output"]');

textInput.addEventListener("input", outputCurrentText);

function outputCurrentText(evt) {
	outputName.textContent = evt.currentTarget.value.trim();
	if (!evt.currentTarget.value) {
		outputName.textContent = "Anonymous";
	};
}
