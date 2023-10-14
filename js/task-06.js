const validation = document.querySelector('input[id="validation-input"]');
const validationLength = Number(validation.attributes['data-length'].nodeValue);

validation.addEventListener("blur", validateData);

function validateData(evt) {
	if (evt.currentTarget.value.trim().length === validationLength) {
		validation.classList.remove('invalid');
		validation.classList.add("valid");
		return;
	}
	validation.classList.add("invalid");
}