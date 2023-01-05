const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// const gallery = document.querySelector('.gallery');

// const imagesElement = images.map(image => {
//   const imagesItem = document.createElement('li');
//   const img = document.createElement('img');
//   img.url = image.url;
//   img.alt = image.alt;

//   imagesItem.appendChild(img);

//   return imagesItem;

// })

// gallery.append(...imagesElement)
// console.log(...imagesElement);

//======варіант через функцію ==============================================

// const gallery = document.querySelector(".gallery");

// const makeGalleryImages = (images) => {
//   return images.map((image) => {
//     const imagesItem = document.createElement("li");
//     const img = document.createElement("img");
//     img.src = image.url;
//     img.alt = image.alt;
//     img.width = 240;
//     img.height = 160;

//     imagesItem.appendChild(img);

//     return imagesItem;
//   });
// };

// const imageElement = makeGalleryImages(images);
// gallery.append(...imageElement);

// console.log(gallery);

//===== додавання через шаблонні рядки та insertAdjacentHTML==================
// const gallery = document.querySelector(".gallery");

// const imagesElement = images.map(({ url, alt }) => `<li><img src="${url}" alt="${alt}" width="250" height ="160"></li>`
//   )
//   .join("");

// gallery.insertAdjacentHTML("beforeend", imagesElement);

// console.log(imagesElement);

//===============================================================================

const gallery = document.querySelector(".gallery");

const makeGalleryImagesMarkup = image => {
  const { url, alt } = image;
  return `<li><img src="${url}" alt="${alt}" width="250" height ="160"></li>`;

}

const makeGalleryImages = images.map(makeGalleryImagesMarkup).join('');

gallery.insertAdjacentHTML("beforeend", makeGalleryImages);
console.log(makeGalleryImages);