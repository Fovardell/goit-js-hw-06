const list = document.querySelector('#categories');
const number = [...list.children].length;
console.log(`number of categories: ${number}`);

list.querySelectorAll('.item')
	.forEach(el => console.log(`Category: ${el.querySelector("h2").textContent} \n Elements: ${[...el.querySelector('ul').children].length}`))

