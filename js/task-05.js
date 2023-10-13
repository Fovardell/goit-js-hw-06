const textInput = document.querySelector('input[id="name-input"]');
const outputName = document.querySelector('span[id="name-output"]');

textInput.addEventListener("input", outputtingCurrentText);

function outputtingCurrentText(evt) {
	outputName.textContent = evt.currentTarget.value;
	if (!evt.currentTarget.value) {
		outputName.textContent = "Anonymous";
	};
}
