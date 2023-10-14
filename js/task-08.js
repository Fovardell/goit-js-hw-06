const form = document.querySelector(".login-form");

form.addEventListener('submit', submitData);

function submitData(evt) {
	const email = form.elements['email'].value;
	const password = form.elements['password'].value;
	const userData = { email, password };
	evt.preventDefault();

	if (!email || !password) {
		return alert("Будь ласка, заповність всі поля!");
	}

	console.log(userData);
	form.reset();
}