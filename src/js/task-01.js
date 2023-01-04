const categories = document.querySelector("#categories");
const listCategories = categories.querySelectorAll(".item");

let countCategory = listCategories.length;

console.log("Number of categories: " + countCategory);


listCategories.forEach((item) => {

const titleCategories = item.querySelector("h2").textContent;
const elemCategories = item.querySelectorAll("li").length;
      

  console.log("");
  console.log("Category: " + titleCategories);
  console.log("Elements: " + elemCategories);

});

