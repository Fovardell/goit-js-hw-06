const categoriesItems = document.querySelectorAll('li.item');
console.log(`number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(el => console.log(`Category: ${el.firstElementChild.textContent} \n Elements: ${el.lastElementChild.children.length}`));
