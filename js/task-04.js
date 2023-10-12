const value = document.querySelector("#value");
const decrement = document.querySelector('button[data-action="decrement"]');
const increment = document.querySelector('button[data-action="increment"]');
let counterValue = 0;
increment.addEventListener("click", incrementValue);
function incrementValue(evt) {
	counterValue += 1;
	value.textContent = counterValue;
}
decrement.addEventListener("click", decrementValue);
function decrementValue(evt) {
	counterValue -= 1;
	value.textContent = counterValue;
}
