

const buttonDecrement = document.querySelector('[data-action="decrement"]');
const buttonIncrement = document.querySelector('[data-action="increment"]');
const valueEl = document.querySelector('#value');

// console.log(buttonDecrement);
// console.log(buttonIncrement);
// console.log(valueEl);

let counterValue = 0;

buttonDecrement.addEventListener('click', onClickButtonDecrement);

function onClickButtonDecrement() {
    // console.log('Кнопка ЗМеншення');
    counterValue -= 1;
    valueEl.textContent = counterValue;

}


buttonIncrement.addEventListener("click", onClickButtonIncrement);

function onClickButtonIncrement() {
    // console.log("Кнопка ЗБільшення");
    counterValue += 1;
    valueEl.textContent = counterValue;
}