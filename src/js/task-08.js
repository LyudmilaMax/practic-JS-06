// const form = document.querySelector(".login-form");

// form.addEventListener("submit", onButtonSubmit);

// function onButtonSubmit(event) {
//   event.preventDefault();

//   console.log(event.target.elements);
//   const formData = {};

//   for (const element of event.target.elements) {
//     const nameAttribut = element.getAttribute("name");

//     if (nameAttribut) {
//       formData[nameAttribut] = element.value;

//       if (!element.value) {
//         alert("Заповніть поля");
//         return;
//       }
//     }
//   }

//   event.target.reset();
//   console.log(formData);
// }

//=========Варіант через FormData===============

const form = document.querySelector(".login-form");

form.addEventListener("submit", onButtonSubmit);

function onButtonSubmit(event) {
  event.preventDefault();

  let formData = new FormData(event.target);

  const formDataObj = {};

    let findEmpty = false;

  formData.forEach((value, name) => {
    formDataObj[name] = value;
        if (!value) {
          findEmpty = true;
        }
  });

//   let findEmpty = false;
  // for (const item of Object.values(formDataObj)) {
  //     if (!item)
  //     {
  //         findEmpty = true;
  //         break;
  //      }
  // }
  
    

//   if (Object.values(formDataObj).filter((t) => !t).length != 0) {
//     alert("Пусто");
//     return;
//   }

    // if (Object.keys(formDataObj).map((t) => formDataObj[t]).filter((t) => !t).length != 0) {
    //       alert("Пусто");
    //       return;
    // }
    
    if (findEmpty)
    {
            alert("Пусто");
            return;
    }
        event.target.reset();
  //   console.log(formData);
  console.log(formDataObj);
}
