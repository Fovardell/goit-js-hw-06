const list = document.querySelector("#ingredients");
const ingredients = [
	'Potatoes',
	'Mushrooms',
	'Garlic',
	'Tomatos',
	'Herbs',
	'Condiments',
];

const listEl = ingredients.map(ingredient => {
	const item = document.createElement("li");
	item.textContent = `${ingredient}`;
	item.classList.add('item');
	return item;
});
list.append(...listEl);