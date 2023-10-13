const validation = document.querySelector('input[id="validation-input"]');
const validationLength = Number(validation.attributes['data-length'].nodeValue);

validation.addEventListener("blur", validatingData);

function validatingData(evt) {
	if (evt.currentTarget.value.length >= validationLength) {
		validation.classList.remove('invalid');
		validation.classList.add("valid");
		return;
	}
	validation.classList.add("invalid");
}