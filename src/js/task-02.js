const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const categoryIngredients = document.querySelector("#ingredients");

const ingredientsElem = [];

for (const ingredient of ingredients) {
  const itemIngredients = document.createElement("li");
  itemIngredients.textContent = ingredient;
  itemIngredients.classList.add('item');

  ingredientsElem.push(itemIngredients);


}

categoryIngredients.append(...ingredientsElem);
console.log(categoryIngredients);


